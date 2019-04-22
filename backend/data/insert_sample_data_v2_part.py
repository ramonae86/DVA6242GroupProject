import csv
import pymysql
import warnings


conn = pymysql.connect(host='localhost', user='root', password='Fqjl0308')
conn.cursor().execute('USE cs6242')
conn.cursor().execute('SET innodb_lock_wait_timeout = 10000')
conn.cursor().execute('DROP TABLE IF EXISTS Apt')
conn.cursor().execute('''CREATE TABLE Apt (
                           AptID INTEGER NOT NULL AUTO_INCREMENT,
                           Name varchar(200) NOT NULL,
                           Contact varchar(20),
                           Address varchar(150),
                           Size varchar(20),
                           Rent varchar(20),
                           Pet varchar(200),
                           Gym varchar(200),
                           Kitchen varchar(200),
                           Amenities varchar(200),
                           Features varchar(200),
                           LivingSpace varchar(200),
                           Lease varchar(100),
                           Services varchar(200),
                           PropertyInfo varchar(200),
                           IndoorInfo varchar(200),
                           OutdoorInfo varchar(200),
                           Images varchar(1000),
                           Description varchar(100),
                           Latitude varchar(10),
                           Longitude varchar(10),
                           PRIMARY KEY(AptID)
                         )''')

# conn.cursor().execute('''CREATE TABLE Apt (
#                            Name varchar(200) NOT NULL,
#                            Address varchar(150),
#                            Rent varchar(20),
#                            Images varchar(1000),
#                            PRIMARY KEY (Name)
#                          )''')

conn.commit()

# Option Name,Contact,Address,Size,Rent,Monthly Fees,One Time Fees,Pet Policy,Distance,Duration,Parking,
# Gym,Kitchen,Amenities,Features,Living Space,Lease Info,Services,Property Info,Indoor Info,Outdoor Info,Images,Description
with open("cleanapt_new.csv", encoding="utf8", errors='ignore') as f:
#f = open("data/cleanapt_new.csv", encoding="utf8", errors='ignore')
    reader = csv.reader(f)
    next(reader)
    num_rows_read = 0
    for info in reader:
        Name = info[0]
        Contact = info[1]
        Address = info[2]
        Size = info[3]
        Rent = info[4]
        PetPolicy = info[7]        
        Gym = info[11]
        Kitchen = info[12]
        Amenities = info[13]
        Features = info[14]
        Space = info[15]
        LeaseInfo = info[16]
        Services = info[17]
        PropertyInfo = info[18]
        IndoorInfo = info[19]
        OutdoorInfo = info[20]
        Images = info[21]
        Description = info[22]        
        lat, lng = getLatLng(Address)
        num_rows_read += 1
        print ("reading %dth row for Apt" % (num_rows_read))
        conn.cursor().execute('''INSERT IGNORE INTO Apt (Name,Contact,Address,Size,Rent,Pet,Gym,Kitchen,Amenities,Features,
            LivingSpace,Lease,Services,PropertyInfo,IndoorInfo,OutdoorInfo,Images,Description,Latitude,Longitude)
                                 VALUES (%s, %s, %s, %s, %s, %s,%s, %s, %s,%s, %s, %s,%s, %s, %s, %s, %s, %s, %s, %s)''', (Name,Contact,Address,Size,Rent,PetPolicy,Gym,Kitchen,Amenities,Features,Space,LeaseInfo,Services,PropertyInfo,IndoorInfo,OutdoorInfo,Images,Description,lat,lng))


conn.commit()
conn.close()
