import json
import os
import re
import requests

def handle_search_request(base_request_handler, request, conn):
    print("request : " + request)
    post_data = json.loads(request)

    cur = conn.cursor()
    search_word = post_data['search_word']
    file = open(os.getcwd() + "/data.js", 'w+')

    if not search_word.isdigit():
        query = '''
                   SELECT Zipcode
                   FROM   School
                   WHERE  NAME LIKE "%{}%" limit 1   
                '''.format(search_word)
        cur.execute(query)
        rows = cur.fetchall()
        if rows and len(rows):
            zipcode = rows[0][0]   
    else:
        zipcode = search_word
    if not zipcode:
        return

    zipcode_line = 'var zipcode = "' + zipcode + '"'
    file.write(zipcode_line + "\n")
    query = '''SELECT Name, Address, Images, Latitude, Longitude
                   FROM Apt
                   WHERE Address LIKE "%{}%"
                   LIMIT 10;
                '''.format(zipcode)
    cur.execute(query)

    apt_names = []
    apt_addresses = []
    image_urls = []
    lats = []
    lngs = []
    rows = cur.fetchall()
    for row in rows:
        #apt_name = re.search(r'\[(.*?)\]', row[0]).group(1)
        apt_name = row[0]
        apt_names.append('"' + apt_name  + '"')
        #apt_address = re.search(r'\[(.*?)\]', row[1]).group(1)
        apt_address = row[1]
        apt_addresses.append('"' + apt_address + '"')
        # image_match = re.search(r'\‘(.*?)\’', row[2])
        image_url = row[2]
        image_urls.append(image_url)
        lats.append(row[3])
        lngs.append(row[4])


    query = '''
        SELECT Name,
               Latitude,
               Longitude,
               Score
        FROM   School
        WHERE  Zipcode = "{}";
            '''.format(zipcode)

    cur.execute(query)
    rows = cur.fetchall()
    schools = []
    for row in rows:
        name = row[0].replace('"', '')
        latitude = row[1].strip(' \t')
        longitude = row[2].strip(' \t')
        score = '-1' if not row[3] or row[3] == 'NULL' else row[3]
        school_info = '{name:"%s",lat:%s,lng:%s,score:%s}' % (name, latitude, longitude, score)
        schools.append(school_info)

    scores = []
    for i in range(len(apt_addresses)):
        address = apt_addresses[i]
        lat = lats[i]
        lng = lngs[i]
        score = []

        query = '''SELECT Count(*) 
                    FROM   subway 
                    WHERE  Abs(Cast(latitude AS DECIMAL(6, 4)) - {}) < 0.01 
                           AND Abs(Cast(longitude AS DECIMAL(6, 4)) - ({})) < 0.01;
                '''.format(lat, lng)
        cur.execute(query)
        rows = cur.fetchall()
        station_count = rows[0][0] 
        traffic_score = min(int(station_count), 50) / 50.0

        query= '''SELECT Avg(Score) 
                    FROM  School 
                    WHERE  Abs(Cast(latitude AS DECIMAL(6, 4)) - {}) < 0.01 
                           AND Abs(Cast(longitude AS DECIMAL(6, 4)) - ({})) < 0.01
                           AND NULLIF(Score, ' ') IS NOT NULL;
                '''.format(lat, lng)
        cur.execute(query)
        rows = cur.fetchall()
        edu_score = rows[0][0]

        query = '''SELECT count(*) 
                    FROM  Tree
                    WHERE  Abs(Cast(latitude AS DECIMAL(6, 4)) - {}) < 0.01 
                           AND Abs(Cast(longitude AS DECIMAL(6, 4)) - ({})) < 0.01;
                '''.format(lat, lng)
        cur.execute(query)
        rows = cur.fetchall()
        tree_count = rows[0][0]
        env_score = min(int(tree_count), 5000) / 5000.0

        ## min lat  40.4988   max lat 40.9127  
        ## min lat -74.2551   max lng -73.7006
        # total crime count 1016157
        query = '''SELECT count(*) 
                    FROM  NYCrime
                    WHERE  Abs(Cast(latitude AS DECIMAL(6, 4)) - {}) < 0.01 
                           AND Abs(Cast(longitude AS DECIMAL(6, 4)) - ({})) < 0.01;
                '''.format(lat, lng)
        cur.execute(query)
        rows = cur.fetchall()
        crime_count = rows[0][0]
        safety_score = 1 - min(int(crime_count), 100000) / 100000.0

        score.append(traffic_score)
        score.append(edu_score)
        score.append(env_score)
        score.append(safety_score)
        print(score)
        scores.append(score)

    print(scores)

    apt_names_line = 'var apt_names = [' + ",".join(apt_names) + ']'
    apt_addresses_line = 'var apt_addresses = [' + ",".join(apt_addresses) + ']'
    apt_images_line = 'var apt_images = [' + ",".join(image_urls) + ']'
    apt_scores_line = 'var apt_scores = ' + str(scores)
    file.write(apt_names_line + "\n\n")
    file.write(apt_addresses_line + "\n\n")
    file.write(apt_images_line + "\n\n")
    file.write(apt_scores_line + "\n\n")
    print("Apt names, addrsses, urls written to file.")
    school_infos = 'var school_infos = [' + ",".join(schools) + ']'
    file.write(school_infos + "\n\n)
    print("School info written to file.")


    file.close()

    response = {}
    response['status'] = 'success'

    base_request_handler.send_response(200)
    base_request_handler.send_header('Content-type', 'application/json')
    base_request_handler.end_headers()
    base_request_handler.wfile.write(bytes(json.dumps(response), "UTF-8"))


def getLatLng(address):
    geocode_url = "https://maps.googleapis.com/maps/api/geocode/json?address={}&key=AIzaSyAwrdvLk2XruYEsLwqpYwiqnaKbSwhHiiM".format(address)
    results = requests.get(geocode_url)
    results = results.json()
    lat = results['results'][0].get('geometry').get('location').get('lat')
    lng = results['results'][0].get('geometry').get('location').get('lng')
    return (str(lat), str(lng))