#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Apr 20 19:09:36 2019

@author: Lily
"""

import csv
import re
from itertools import zip_longest # izip_longest in python2.x

original = []
with open("APTfromAptscom.csv") as f:
    for line in csv.reader(f, delimiter=","):
        original.append(line)

apt_keys = []

Name = []
Contact = []
Address = []
Size = []
Rent = []
MonthlyFees = []
OneTimeFees =[]
PetPolicy =[]
Distance = []
Duration = []
Parking = []
Gym = []
Kitchen = []
Amenities = []
Features =[]
LivingSpace =[]
LeaseInfo = []
Services = []
PropertyInfo = []
IndoorInfo = []
OutdoorInfo = []
Images = []
Description = []


for i in range(len(original[0])):
    apt_keys.append(original[0][i])    

for i in range(1,len(original)):
    n = original[i][0]
    if ('[' in n) == True:
        nm = re.sub(r'\(.*?\)', r'', n).strip('[').strip(']')
    else:
        nm = 'Apartment'
    Name.append(nm)
    Contact.append(original[i][1])
    Address.append(re.sub(r'\(.*?\)', r'', original[i][2]).strip('[').strip(']'))
    Size.append(original[i][3])
    Rent.append(original[i][4])
    MonthlyFees.append(original[i][5])
    OneTimeFees.append(original[i][6])
    PetPolicy.append(original[i][7])
    Distance.append(original[i][8])
    Duration.append(original[i][9])
    Parking.append(original[i][10])
    Gym.append(original[i][11])
    Kitchen.append(original[i][12])
    Amenities.append(original[i][13])
    Features.append(original[i][14])
    LivingSpace.append(original[i][15])
    LeaseInfo.append(original[i][16])
    Services.append(original[i][17])
    PropertyInfo.append(original[i][18])
    IndoorInfo.append(original[i][19])
    OutdoorInfo.append(original[i][20])
    img = original[i][21]
    if img:
        img1 = img.split('!')
        img2 = [x for x in img1 if x]
        img3 = []
        for j in range(len(img2)):
            img3.append(img2[j].split('(')[1].strip(' ').strip(')'))     
    else:
        img3 = []
 
    Images.append(img3)
    Description.append(original[i][22])


#for in range(len(images))
#s = re.sub(r'\[.*?\]', r'', s)
with open("cleaned_APTfromAptscom.csv",'w') as resultFile:
    wr = csv.writer(resultFile, dialect='excel')
    wr.writerow(apt_keys)
    for a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w in \
    zip_longest(Name,Contact,Address,Size,Rent,MonthlyFees,OneTimeFees,PetPolicy,Distance,Duration,\
        Parking,Gym,Kitchen,Amenities,Features,LivingSpace,LeaseInfo,Services,PropertyInfo,IndoorInfo,OutdoorInfo,Images,Description):
        wr.writerow([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w])

#    for a,b in zip_longest(Name,Contact):
#        wr.writerow([a,b])