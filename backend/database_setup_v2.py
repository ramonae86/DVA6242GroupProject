#!/usr/bin/python

import pymysql

conn = pymysql.connect(host='localhost', user='root', password='Fqjl0308')

conn.cursor().execute('DROP DATABASE IF EXISTS cs6242')
conn.cursor().execute('CREATE DATABASE cs6242')
conn.cursor().execute('USE cs6242')
conn.cursor().execute('''CREATE TABLE School (
                           Name varchar(100) NOT NULL,
                           Type varchar(50) NOT NULL,
                           Address varchar(100) NULL,
                           Zipcode varchar(10) NULL,
                           Latitude varchar(50) Null,
                           Longitude varchar(50) Null,
                           Score varchar(10) Null,
                           PRIMARY KEY (Name)
                         )''')
conn.cursor().execute('''CREATE TABLE Bus (
                           Id varchar(50) NOT NULL,
                           Name varchar(100) NOT NULL,
                           Latitude varchar(50) Null,
                           Longitude varchar(50) Null,
                           PRIMARY KEY (id)
                         )''')
conn.cursor().execute('''CREATE TABLE Subway (
                           Id varchar(50) NOT NULL,
                           Latitude varchar(50) Null,
                           Longitude varchar(50) Null,
                           Stop_weight varchar(50) NOT NULL,
                           PRIMARY KEY (id)
                         )''')
conn.cursor().execute('''CREATE TABLE Rat (
                           Num varchar(50) NOT NULL,
                           Zipcode varchar(10) NULL,
                           City varchar(50) NOT NULL,
                           Borough varchar(50) NOT NULL,
                           Latitude varchar(50) Null,
                           Longitude varchar(50) Null,
                           PRIMARY KEY (Num)
                         )''')
conn.cursor().execute('''CREATE TABLE Tree (
                           Num varchar(50) NOT NULL,
                           Zipcode varchar(10) NULL,
                           City varchar(50) NOT NULL,
                           Cbnum varchar(100) NULL,
                           Boroname varchar(100) NOT NULL,
                           Nta_name varchar(100) NOT NULL,
                           Boro_ct varchar(100) NOT NULL,
                           Latitude varchar(50) Null,
                           Longitude varchar(50) Null,
                           PRIMARY KEY (Num)
                         )''')
conn.cursor().execute('''CREATE TABLE NYCrime (
                           Num varchar(50) NOT NULL,
                           Crime varchar(50) NOT NULL,
                           Latitude varchar(50) Null,
                           Longitude varchar(50) Null,
                           PRIMARY KEY (Num)
                         )''')
conn.commit()

# all datas
#Option Name,Contact,Address,Size,Rent,Monthly Fees,One Time Fees,Pet Policy,Distance,Duration,Parking,Gym,Kitchen,
#Amenities,Features,Living Space,Lease Info,Services,Property Info,Indoor Info,Outdoor Info,Images,Description
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
                           PRIMARY KEY (AptID)
                         )''')

# conn.cursor().execute('''CREATE TABLE Apt (
#                            Name varchar(200) NOT NULL,
#                            Address varchar(150),
#                            Rent varchar(20),
#                            Images varchar(1000),
#                            PRIMARY KEY (Name)
#                          )''')


# conn.cursor().execute('''CREATE TABLE Apt (
#                            Name varchar(200) NOT NULL,
#                            Address varchar(150),
#                            Rent varchar(20),
#                            Images varchar(1000),
#                            PRIMARY KEY (Name)
#                          )''')

conn.commit()

conn.close()
