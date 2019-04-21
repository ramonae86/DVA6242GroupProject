import csv
import pymysql
import warnings


conn = pymysql.connect(host='localhost', user='root', password='1459')
conn.cursor().execute('USE cs6242')
conn.cursor().execute('SET innodb_lock_wait_timeout = 10000')


###process cleanschool.csv
with open("cleanhigh.csv", encoding="utf8", errors='ignore') as f:
    reader = csv.reader(f)
    next(reader) # skip header
    num_rows_read = 0
    for info in reader:
        Name = info[0]
        Type = info[1]
        Address = info[2]
        Zipcode = info[3]
        Latitude = info[4]
        Longitude = info[5]
        Score = info[6]
        

        num_rows_read += 1
        print ("reading %dth row for School" % (num_rows_read))
        #insert data into table: School
        conn.cursor().execute('''INSERT IGNORE INTO School (Name, Type, Address, Zipcode, Latitude, Longitude, Score)
                                 VALUES (%s, %s, %s, %s, %s, %s, %s)''',
                                 (Name, Type, Address, Zipcode, Latitude, Longitude, Score))
    conn.commit()

with open("cleanmiddle.csv", encoding="utf8", errors='ignore') as f:
    reader = csv.reader(f)
    next(reader) # skip header
    num_rows_read = 0
    for info in reader:
        Name = info[0]
        Type = info[1]
        Address = info[2]
        Zipcode = info[3]
        Latitude = info[4]
        Longitude = info[5]
        Score = info[6]
        

        num_rows_read += 1
        print ("reading %dth row for School" % (num_rows_read))
        #insert data into table: School
        conn.cursor().execute('''INSERT IGNORE INTO School (Name, Type, Address, Zipcode, Latitude, Longitude, Score)
                                 VALUES (%s, %s, %s, %s, %s, %s, %s)''',
                                 (Name, Type, Address, Zipcode, Latitude, Longitude, Score))
        conn.commit()

with open("cleanprek.csv", encoding="utf8", errors='ignore') as f:
    reader = csv.reader(f)
    next(reader) # skip header
    num_rows_read = 0
    for info in reader:
        Name = info[0]
        Type = info[1]
        Address = info[2]
        Zipcode = info[3]
        Latitude = info[4]
        Longitude = info[5]
        
        

        num_rows_read += 1
        print ("reading %dth row for School" % (num_rows_read))
        #insert data into table: School
        conn.cursor().execute('''INSERT IGNORE INTO School (Name, Type, Address, Zipcode, Latitude, Longitude)
                                 VALUES (%s, %s, %s, %s, %s, %s)''',
                                 (Name, Type, Address, Zipcode, Latitude, Longitude))

    conn.commit()

###process cleanbus.csv
with open("cleanbus.csv", encoding="utf8", errors='ignore') as f:
    reader = csv.reader(f)
    next(reader) # skip header
    num_rows_read = 0
    for info in reader:
        Id = info[0]
        Name = info[1]
        Latitude = info[2]
        Longitude = info[3]

        num_rows_read += 1
        print ("reading %dth row for Bus" % (num_rows_read))
        #insert data into table: Bus
        conn.cursor().execute('''INSERT IGNORE INTO Bus (Id, Name, Latitude, Longitude)
                                 VALUES (%s, %s, %s, %s)''',
                                 (Id, Name, Latitude, Longitude))

    conn.commit()


###process cleansubway.csv
with open("cleansubway.csv", encoding="utf8", errors='ignore') as f:
    reader = csv.reader(f)
    next(reader) # skip header
    num_rows_read = 0
    for info in reader:
        Id = info[0]
        Latitude = info[1]
        Longitude = info[2]
        Stop_weight = info[3]

        num_rows_read += 1
        print ("reading %dth row for Subway" % (num_rows_read))
        #insert data into table: Subway
        conn.cursor().execute('''INSERT IGNORE INTO Subway (Id, Latitude, Longitude, Stop_weight)
                                 VALUES (%s, %s, %s, %s)''',
                                 (Id, Latitude, Longitude, Stop_weight))
    conn.commit()


###process cleantree.csv
with open("cleantree.csv", encoding="utf8", errors='ignore') as f:
    reader = csv.reader(f)
    next(reader) # skip header
    num_rows_read = 0
    for info in reader:
        Num = info[0]
        Zipcode = info[1]
        City = info[2]
        Cbnum = info[3]
        Boroname = info[4]
        Nta_name = info[5]
        Boro_ct = info[6]
        Latitude = info[7]
        Longitude = info[8]


        num_rows_read += 1
        print ("reading %dth row for tree" % (num_rows_read))
        #insert data into table: tree
        conn.cursor().execute('''INSERT IGNORE INTO Tree (Num, Zipcode, City, Cbnum, Boroname, Nta_name, Boro_ct, Latitude, Longitude)
                                 VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)''',
                                 (Num, Zipcode, City, Cbnum, Boroname, Nta_name, Boro_ct, Latitude, Longitude))
    conn.commit()


###process cleanrat.csv
with open("cleanrat.csv", encoding="utf8", errors='ignore') as f:
    reader = csv.reader(f)
    next(reader) # skip header
    num_rows_read = 0
    for info in reader:
        Num = info[0]
        Zipcode = info[1]
        City = info[2]
        Borough = info[3]
        Latitude = info[4]
        Longitude = info[5]


        num_rows_read += 1
        print ("reading %dth row for Rat" % (num_rows_read))
        #insert data into table: rat
        conn.cursor().execute('''INSERT IGNORE INTO Rat (Num, Zipcode, City, Borough, Latitude, Longitude)
                                 VALUES (%s, %s, %s, %s, %s, %s)''',
                                 (Num, Zipcode, City, Borough, Latitude, Longitude))
    conn.commit()

###process cleancrime.csv
with open("cleancrime.csv", encoding="utf8", errors='ignore') as f:
    reader = csv.reader(f)
    next(reader) # skip header
    num_rows_read = 0
    for info in reader:
        Num = info[0]
        Crime = info[1]
        Latitude = info[2]
        Longitude = info[3]

        num_rows_read += 1
        print ("reading %dth row for NYCrime" % (num_rows_read))
        #insert data into table: Crime
        conn.cursor().execute('''INSERT IGNORE INTO NYCrime (Num, Crime, Latitude, Longitude)
                                 VALUES (%s, %s, %s, %s)''',
                                 (Num, Crime, Latitude, Longitude))

    conn.commit()

    ###process cleanapt.csv
with open("cleanapt.csv", encoding="utf8", errors='ignore') as f:
    reader = csv.reader(f)
    next(reader) # skip header
    num_rows_read = 0
    for info in reader:
        Name = info[0]
        Contact = info[1]
        Address = info[2]
        Size = info[3]
        Rent = info[4]
        Pet = info[7]
        Gym = info[11]
        Kitchen = info[12]
        Amenities = info[13]
        Features = info[14]
        LivingSpace = info[15]
        Lease = info[16]
        Services = info[17]
        PropertyInfo = info[18]
        IndoorInfo = info[19]
        OutdoorInfo = info[20]
        Images = info[21]
        Description = info[22]


        num_rows_read += 1
        print ("reading %dth row for Apt" % (num_rows_read))
        #insert data into table: Apt
        conn.cursor().execute('''INSERT IGNORE INTO Apt (Name,Contact,Address,Size,Rent,Pet,Gym,Kitchen,Amenities,Features,LivingSpace,Lease,Services,PropertyInfo,IndoorInfo,OutdoorInfo,Images,Description)
                                 VALUES (%s, %s, %s)''',
                                 (Name, Address, Images))
# all datas
#Option Name,Contact,Address,Size,Rent,Monthly Fees,One Time Fees,Pet Policy,Distance,Duration,Parking,Gym,Kitchen,
#Amenities,Features,Living Space,Lease Info,Services,Property Info,Indoor Info,Outdoor Info,Images,Description

# Name varchar(200) NOT NULL,
#  Contact var(20),
#  Address varchar(150),
#  Size varchar(20),
#  Rent varchar(20),
#  Pet varchar(200),
#  Gym varchar(200),
#  Kitchen varchar(200),
#  Amenities varchar(200),
#  Features varchar(200),
#  LivingSpace varchar(200),
#  Lease varchar(100),
#  Services varchar(200),
#  PropertyInfo varchar(200),
#  IndoorInfo varchar(200),
#  OutdoorInfo varchar(200),
#  Images varchar(1000),
#  Description varchar(100),
#  PRIMARY KEY (Address)

    conn.commit()
conn.close()
