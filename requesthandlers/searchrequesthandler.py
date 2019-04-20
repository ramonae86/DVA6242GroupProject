import json
import os
import re

def handle_search_request(base_request_handler, request, conn):
    print("request : " + request)
    post_data = json.loads(request)

    cur = conn.cursor()
    search_word = post_data['search_word']
    file = open(os.getcwd() + "/data.js", 'w+')

    if search_word.isdigit():
        zipcode_line = 'var zipcode = "' + search_word + '"'
        file.write(zipcode_line + "\n")
        query = '''SELECT Name, Address
                       FROM Apt
                       WHERE Address LIKE "%{}%";
                    '''.format(search_word)
        cur.execute(query)

        apt_names = []
        apt_addresses = []
        rows = cur.fetchall()
        for row in rows:
            apt_name = re.search(r'\[(.*?)\]', row[0]).group(1)
            apt_names.append('"' + apt_name  + '"')
            apt_address = re.search(r'\[(.*?)\]', row[1]).group(1)
            apt_addresses.append('"' + apt_address + '"')

        apt_names_line = 'var apt_names = [' + ",".join(apt_names) + ']'
        apt_addresses_line = 'var apt_addresses = [' + ",".join(apt_addresses) + ']'
        file.write(apt_names_line + "\n")
        file.write(apt_addresses_line + "\n")
        print("Response written to file.")
    else:
        ## TODO search by school name
        pass

    file.close()

    response = {}
    response['status'] = 'success'

    base_request_handler.send_response(200)
    base_request_handler.send_header('Content-type', 'application/json')
    base_request_handler.end_headers()
    base_request_handler.wfile.write(bytes(json.dumps(response), "UTF-8"))
