var zipcode = "10016"
var apt_names = ["The Anthem","Windsor Court","Biltmore Plaza","Kips Bay Court","Murray Hill East - Luxury Furnished Apartment","160 Madison","150 E 39th St Unit 1502","314 E 35th St Unit 25","208 E 37th St Unit 4K","78 E 32nd St Unit 5h"]
var apt_addresses = ["222 E 34th St, New York, NY 10016","155 E 31st St, New York, NY 10016","155 E 29th St, New York, NY 10016","490 2nd Ave, New York, NY 10016","149 E 39th St, New York, NY 10016","160 Madison Ave, New York, NY 10016","150 E 39th St, New York, NY 10016","314 E 35th St, New York, NY 10016","208 E 37th St, New York, NY 10016","78 E 32nd St, New York, NY 10016"]
var apt_images = [[],[],[],[],[],[],['https://images1.apartments.com/i2/qgcuI2r9x0jjLCExosfmCEbOaAW-slKKI0n3zMREc6Q/111/150-e-39th-st-unit-1502-new-york-ny-primary-photo.jpg', 'https://images1.apartments.com/i2/Aao4PfrqV0KmcS_3aFd-0HrMg447GzBfIgsZu2i0oKQ/117/150-e-39th-st-unit-1502-new-york-ny-building-photo.jpg'],['https://images1.apartments.com/i2/bDKdF99fBFAWw22hc7vM9mpvEXtZ6Pid41WZb_nKgjA/111/314-e-35th-st-unit-25-new-york-ny-primary-photo.jpg', 'https://images1.apartments.com/i2/LZDgyqNZDNB0GCH1yN66W1D8BOc8y0dr_vmr3FiUOhY/117/314-e-35th-st-unit-25-new-york-ny-building-photo.jpg', 'https://images1.apartments.com/i2/HhbgA6GzFRs8O1_Ch0MOig8ta6xuUEg_vnGRdtm8Erk/117/314-e-35th-st-unit-25-new-york-ny-building-photo.jpg', 'https://images1.apartments.com/i2/7asZkOuLL26MercjuqoZ5EKE5tsBpGiCu0jX9lW7ZkU/117/314-e-35th-st-unit-25-new-york-ny-building-photo.jpg'],['https://images1.apartments.com/i2/ZLcYLg4Goyu4CcxqteDFdUB6LLmP-tkdUvs1mc_jGvY/111/208-e-37th-st-unit-4k-new-york-ny-primary-photo.jpg', 'https://images1.apartments.com/i2/hrN1vS2o5mjQIYqe5jQLEjRGk8XD9X09hLJQsM4Z4BA/117/208-e-37th-st-unit-4k-new-york-ny-building-photo.jpg', 'https://images1.apartments.com/i2/Cke44PLSgXfYCEyiUE3PdnRNoY1BJ9RJqNIy9CsRxm8/117/208-e-37th-st-unit-4k-new-york-ny-building-photo.jpg', 'https://images1.apartments.com/i2/QeKrSk3Ot2WWGSI0n3byA4albJwKw2E-i8llrn2Y-0A/117/208-e-37th-st-unit-4k-new-york-ny-building-photo.jpg', 'https://images1.apartments.com/i2/NVMpK47P04UQuUvYGypGjRtZy-4m3AREFzmxZbZygno/117/208-e-37th-st-unit-4k-new-york-ny-building-photo.jpg'],['https://images1.apartments.com/i2/F6Fb_B_qQ003VBWBXdiSqf9BlraejiU2aoY2X6O5IV0/111/78-e-32nd-st-unit-5h-new-york-ny-primary-photo.jpg', 'https://images1.apartments.com/i2/shTU4t7hjz5alP5zQ2H0F0kH0vUg8dP_hsO7gkqh0mY/117/78-e-32nd-st-unit-5h-new-york-ny-building-photo.jpg', 'https://images1.apartments.com/i2/2MK1ZfyM-2LaAqd4Mm9SbsIW0ycJ6fKaq8xpD6-zXzc/117/78-e-32nd-st-unit-5h-new-york-ny-building-photo.jpg', 'https://images1.apartments.com/i2/X_9aWykxjJHu55PAQcLjsAqZVfgi1ZrABMA8QRNwwFo/117/78-e-32nd-st-unit-5h-new-york-ny-building-photo.jpg', 'https://images1.apartments.com/i2/ipK8tpBuKahLgczN1dnZsAm4I5M035L-txGFDkjveyU/117/78-e-32nd-st-unit-5h-new-york-ny-building-photo.jpg']]
var apt_scores = [[1.0, 0.38499999999999995, 0.712, 0.86016], [1.0, 0.37375, 0.725, 0.77925], [1.0, 0.37375, 0.7492, 0.76935], [0.84, 0.4338888888888889, 0.745, 0.8614999999999999], [1.0, 0.66, 0.676, 0.82475], [1.0, 0.53, 0.562, 0.68328], [1.0, 0.61625, 0.676, 0.82107], [0.74, 0.26857142857142857, 0.6484, 0.89188], [1.0, 0.5388888888888889, 0.674, 0.84537], [1.0, 0.4390909090909091, 0.6374, 0.73422]]
var school_infos = [{name:"Bellevue-Educare Childcare Center",lat:40.739173,lng:-73.976862,score:-1},{name:"District 2 Pre-K Center at 425 East 35th Street",lat:40.74428,lng:-73.972591,score:-1},{name:"Manhattan Academy for Arts & Language",lat:40.74651,lng:-73.9811,score:0.54 },{name:"Murray Hill Academy",lat:40.74651,lng:-73.9811,score:-1},{name:"P.S. 116 Mary Lindley Murray",lat:40.744838,lng:-73.978116,score:-1},{name:"The River School",lat:40.74428,lng:-73.972591,score:-1},{name:"Unity Center for Urban Technologies",lat:40.74651,lng:-73.9811,score:0.79 }]

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

