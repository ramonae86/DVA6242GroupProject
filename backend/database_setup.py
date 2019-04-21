#!/usr/bin/python

import pymysql

conn = pymysql.connect(host='localhost', user='root', password='ramon555')

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

conn.cursor().execute('''CREATE TABLE Apt (
                           Name varchar(200) NOT NULL,
                           Address varchar(500) NOT NULL,
                           Images varchar(500) NULL,
                           PRIMARY KEY (Name)
                         )''')
conn.commit()

conn.close()
