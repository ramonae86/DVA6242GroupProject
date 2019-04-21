var zipcode = "10010"
var apt_names = ["126 E 24th St Unit 2b","212 5th Ave Unit 5A","237 E 22nd St Unit 1G","260 Park Ave S Unit 2G","280 Park Ave South","311 E 25th St Unit 1F","346 3rd Ave Unit 18c","346 3rd Ave Unit 4f","401 E 22nd St Unit 3J","Peter Cooper Village","Waterside Plaza"]
var apt_addresses = ["126 E 24th St, New York, NY 10010","212 5th Ave, New York, NY 10010","237 E 22nd St, New York, NY 10010","260 Park Ave S, New York, NY 10010","280 Park Ave S, New York, NY 10010","311 E 25th St, New York, NY 10010","346 3rd Ave, New York, NY 10010","346 3rd Ave, New York, NY 10010","401 E 22nd St, Neapt_rk, NY 10010","360 1st Ave, New York, NY 10010","25 Waterside Plz, New York, NY 10010"]
var school_infos = [{name:"__47__ The American Sign Language and English Secondary School",lat:40.73837,lng:-73.9813,score:0.55 },{name:"Baruch College Campus High School",lat:40.74189,lng:-73.9857,score:1.00 },{name:"Imagine Early Learning Center at Vets Kids",lat:40.73647,lng:-73.977732,score:-1},{name:"Manhattan Village Academy",lat:40.74196,lng:-73.992,score:0.98 },{name:"P.S. 347_47 The American Sign Language and English Lower School",lat:40.738548,lng:-73.982455,score:-1},{name:"School of the Future",lat:40.738952,lng:-73.985479,score:-1},{name:"School of the Future High School",lat:40.73912,lng:-73.9853,score:0.97 },{name:"Simon Baruch Middle School (J.H.S. 104)",lat:40.736094,lng:-73.980663,score:-1},{name:"The 47 American Sign Language & English Lower School",lat:40.738548,lng:-73.982455,score:-1}]


//add rent price
var apt_rent = ["1000", "798", "2000", "850"]

//add apartment size
var apt_size = ["900", "1000", "750", "400"]

//add contact info
var apt_contact = ['902-384-3933', '204-394-3456']

//add pet allawance
var apt_pet = ['yes', 'no', 'yes']

//add description
var apt_description = ['good apartment', 'worse']

//add gym info
var apt_gym = ['good facility', 'no' ]

//add kitchen info
var apt_kitchen = ['dishwasher yes', 'oven no']

//add amenities
var apt_amenities = ['lalala', 'good']

//add features
var apt_feature = ['good', 'bad']

//add lease info
var apt_lease = ['12 months', 'terminate anytime']

//add services
var apt_services = ['lalala', 'good']

//add property info
var apt_property = ['abcd', 'edfg']

//add indoor info
var apt_indoor = ['abcd', 'edfg']

//add outdoor info
var apt_outdoor = ['abcd', 'edfg']

//generate a matrix (2-D array) for apt_images, each apartment needs more than one images
var apt_images = [["https://images1.apartments.com/i2/Vw1zSnKwMBdXxDBUnZBSWmVMx86PJxCOaLkIfgO9CeA/111/126-e-24th-st-unit-2b-new-york-ny-primary-photo.jpg","https://images1.apartments.com/i2/YhH5S--6M2Sbu5KoZh6P79n1dWVcOYlodc5hkIeFLfE/111/212-5th-ave-unit-5a-new-york-ny-primary-photo.jpg","https://images1.apartments.com/i2/XE5Q6ievLNZaBRbO7Ul4-2ypdaAhZgZSGlfQ25BDyHs/111/237-e-22nd-st-unit-1g-new-york-ny-primary-photo.jpg","https://images1.apartments.com/i2/euHdJrkvT4PPjIMUsHgDgor07y1R-Y4q1vvxigbX4t4/111/260-park-ave-s-unit-2g-new-york-ny-primary-photo.jpg","","https://images1.apartments.com/i2/jpfwi7Ng_kL9vKfT9Xe3LuRaYA5MUtmoCuWDaL9vprs/111/311-e-25th-st-unit-1f-new-york-ny-primary-photo.jpg","https://images1.apartments.com/i2/407hKhAOTneQhiS5B2R_xBRGV0dgr5quU33w-uPiCrY/111/346-3rd-ave-unit-18c-new-york-ny-primary-photo.jpg","https://images1.apartments.com/i2/lCdzm_2OcSsxX_8QpBnpochdP58xrGMbjRR5VWPgiAA/111/346-3rd-ave-unit-4f-new-york-ny-primary-photo.jpg","https://images1.apartments.com/i2/v3b_2NAM5iRVBHqdTZ6HI_pVqBdCrFuwlD0FJKzIDq8/111/401-e-22nd-st-unit-3j-new-york-ny-primary-photo.jpg","",""],[""],[""],[""],[""],[""],[""],[""],[""],[""],[""]]

//score(2-D array)  gives details about each attributes
var score = [[0.78, 0.64, 0.52, 0.76], [0.45, 0.5, 0.34, 0.97 ]]
