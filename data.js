var zipcode = "10016"
var apt_names = ["The Anthem","Windsor Court","Biltmore Plaza","Kips Bay Court","Murray Hill East - Luxury Furnished Apartment","160 Madison","150 E 39th St Unit 1502","314 E 35th St Unit 25","208 E 37th St Unit 4K","78 E 32nd St Unit 5h"]

var apt_addresses = ["222 E 34th St, New York, NY 10016","155 E 31st St, New York, NY 10016", "155 E 29th St, New York, NY 10016", "490 2nd Ave, New York, NY 10016", "149 E 39th St, New York, NY 10016", "160 Madison Ave, New York, NY 10016", "150 E 39th St, New York, NY 10016", "314 E 35th St, New York, NY 10016", "208 E 37th St, New York, NY 10016", "78 E 32nd St, New York, NY 10016"]

var apt_property = ['Built in 2003/480 Units/24 Stories', 'Built in 1987/709 Units/31 Stories',"Built in 1980/279 Units/35 Stories", "Built in 1975/894 Units/28 Stories", "Built in 1964/116 Units/14 Stories", "Built in 2015/319 Units/45 Stories", 'N/A','N/A','N/A','N/A']

var apt_services = ['Package Service/Laundry Facilities/Doorman/Dry Cleaning Service/Maid Service/Meal Service', "Laundry Facilities/Property Manager on Site/Doorman/24 Hour Availability", "Laundry Facilities/Doorman", "Package Service/Laundry Facilities/Controlled Access/Maintenance on site/Doorman/Bilingual/Courtesy Patrol/On-Site Retail/Recycling/Renters Insurance Program/Online Services/Planned Social Activities", "Laundry Facilities/Concierge/24 Hour Availability", "Package Service/Community-Wide WiFi/Doorman/Concierge/24 Hour Availability/Recycling/Dry Cleaning Service/LEED Rating", "Laundry Facilities/Gated Entry", 'Laundry Facilities', 'Laundry Facilities', 'Gated Entry']

var apt_size = ["670 - 925 Sq Ft", "910 Sq Ft", "597 Sq Ft", "670 - 762 Sq Ft", '700 - 750 Sq Ft', '750 Sq Ft', '700 Sq Ft', '830 Sq Ft', "640 Sq Ft", '574 Sq Ft']

var apt_contact = ['844-393-1027', '844-548-2315', '844-268-4654', '844-896-9803', '917-994-0224', '844-389-0411', '844-594-0937', '754-301-6225', '855-974-5716', '844-954-6782']

var apt_kitchen = ['Dishwasher/Granite Countertops/Stainless Steel Appliances/Microwave/Refrigerator', 'Dishwasher/Microwave','Dishwasher/Microwave',"Dishwasher/Ice Maker/Microwave/Refrigerator",'Microwave',"Dishwasher/Ice Maker/Stainless Steel Appliances/Island Kitchen/Microwave/Refrigerator/Breakfast Nook",'N/A',"Dishwasher/Stainless Steel Appliances",'Dishwasher/Microwave', 'N/A']

var apt_amenities = ['10 Ceilings/Alcove/Built-In Sound System/Corner Unit/No-Fee', 'Bamboo Floors/Bike Storage/Full Full Marble Bathroom/Garage/Health Club With Pool/Lounge And Sundeck/Porcelain Tile in Bathroom/Private Outdoor Space/Private Park/Private Terrace/Valet On-Site','Bamboo Floors/Black Granite Countertops/Floors in Kitchen/Dishwasher/Doorman/Elevator/Full Marble Bathrooms/Garage/Laundry in Unit','2 Playgrounds/24 Hour Attended Lobby/Activity Court/Air Conditioner/Amazing views/Ample Closet Space/BIKE STORAGE/Cable Ready',"Exec Suites Have Hardwood Floors/Offsite Parking 2 Blocks Away/Pets May Be Allowed In Some Cases","Black out Shades in BR/Cr 1BR Window bathroom , Stall Shower/Floor to Ceiling Windows/Large Walk in closet/pass thru kitchen/Solar Shades",'Ceiling Fan/Dishwasher/Disposal/Efficient Appliances/Gym', 'Hardwood Floors/Microwave/Recycling/Renovated','Granite Countertops/Hardwood Floors/Health Club With Pool/Laundry In Building/Microwave','Plank Flooring/Renovated/Stainless Steel Appliance']

var apt_lease = ['N/A', '12 - 14 Month Leases', '13 - 14 Month Leases', 'N/A', 'N/A', '12 -24 Months', '12 Months', '12 Months', '12 Months', '12 Months']

var apt_pet = ['Cats Allowed, 2 Cats Limit', 'Pets Allowed,2 Pet Limit', 'Pets Allowed,2 Pet Limit', "Dogs Allowed, 50 lb Weight Limit, 2 Pet Limit", 'No Pets Allowed','Pets Negotiable', 'Dogs and Cats Allowed','Dogs and Cats Allowed','No Pets Allowed', 'N/A']

var apt_gym = ["Fitness Center *Sauna * Gameroom", "Fitness Center/Health Club Facility/Pool",,"Fitness Center/Fitness Programs/Playground/Basketball Court/Tennis Court","Fitness Center","Fitness Center/Health Club Facility/Cardio Machine/Free Weights/Bike Storage",'N/A','N/A','N/A','N/A']

var apt_images = [['https://images1.apartments.com/i2/h8jFKVlKaqHOy8RjKrOQEw5v83fhIydTBQX7IhhBPUA/111/the-anthem-new-york-ny-primary-photo.jpg', 'https://images1.apartments.com/i2/Zg6HAz5K31Bow2nfKQGjKrz6PbTK4FScqoG2tUvraE8/111/the-anthem-new-york-ny-building-photo.jpg', 'https://images1.apartments.com/i2/9B0uvnr4z1PADNSO-9R9O6Hl4oOuCm1h2b3U-Rsrd_0/111/the-anthem-new-york-ny-building-photo.jpg', 'https://images1.apartments.com/i2/w5489dGMyFE8M0DGHc3KQMDGxBVDXaKZXfdAKVB7d50/111/the-anthem-new-york-ny-building-photo.jpg', 'https://images1.apartments.com/i2/9b8W0wfukxbgTr029L3WkjyMSB0SWOubR2B_-uz8aH8/111/the-anthem-new-york-ny-building-photo.jpg', 'https://images1.apartments.com/i2/t3ZX-ad-Jrh_VwEaq4jDkOQI9l2xyb0Fm9XJ5gHXtdg/111/the-anthem-new-york-ny-building-photo.jpg', 'https://images1.apartments.com/i2/SHHAlLKMhZwyoS2XvcR1cOgiMY42k2beSCS4SFpqBRU/111/the-anthem-new-york-ny-building-photo.jpg', 'https://images1.apartments.com/i2/oToX1S7FfQ8R1shQRiNnC0nwkppFz4WcJWfNPPYiUz4/111/the-anthem-new-york-ny-building-photo.jpg', 'https://images1.apartments.com/i2/Q5kHcbi9Zln2h78fodXCouKwtg5rciDR7Q9KdZcS3xI/111/the-anthem-new-york-ny-building-photo.jpg', 'https://images1.apartments.com/i2/izraDNz8gQ2MnQSOYiLqV6Co9gR5HpSpq2Op0554TB8/111/the-anthem-new-york-ny-building-photo.jpg', 'https://images1.apartments.com/i2/OFFeuc2bQOwu8Oyh7D7C2xPqo0dUbvYMBe0Yyv-QTO8/111/the-anthem-new-york-ny-building-photo.jpg', 'https://images1.apartments.com/i2/BM7eExiY1dHLNU0iQgHkdSNDP61QA853-8k0apxO96c/111/the-anthem-new-york-ny-building-photo.jpg', 'https://images1.apartments.com/i2/jjGDvPJDuinslz5JCaps2Zf1eV9o1wzr7F44BlyQoUs/111/the-anthem-new-york-ny-building-photo.jpg'], ['https://images1.apartments.com/i2/xdI21IZTF6qs6E6SENQuNijpoTwnMqhieShhI2TwIac/111/windsor-court-new-york-ny-interior-photo.jpg', 'https://images1.apartments.com/i2/Vf4Zz-DleZIsvQuWs62Hfz6erxk2L2YU7Q9dL1Sbjog/111/windsor-court-new-york-ny-interior-photo.jpg', 'https://images1.apartments.com/i2/vv-VTlBjmCjQn-XUxlYPPfCqaFmWjN_uvT4Urbdphjw/111/windsor-court-new-york-ny-interior-photo.jpg', 'https://images1.apartments.com/i2/lqFElWjkRJkRcxQXvL0JM7RTh6XXaash2ChCRM72Bvg/111/windsor-court-new-york-ny-interior-photo.jpg', 'https://images1.apartments.com/i2/50wRd2P9cS8yr8PaKW_dFaGafsYhlI_HOhmWoxwhF3Q/111/windsor-court-new-york-ny-interior-photo.jpg', 'https://images1.apartments.com/i2/OwMphDjMhcQj1jh-lY8Kg7o867tKlE8be_Dsa46feoU/111/windsor-court-new-york-ny-interior-photo.jpg', 'https://images1.apartments.com/i2/A-8uCjDZcKzy_MR06jmJvWtY_r5i8-HcaCkom272QrQ/111/windsor-court-new-york-ny-interior-photo.jpg', 'https://images1.apartments.com/i2/NVSP4qbRRb7Pd-1wgR7DKgO9mTWn5opFwsSWjP66c58/111/windsor-court-new-york-ny-interior-photo.jpg', 'https://images1.apartments.com/i2/6DURaLLdqSL5qw_J_UDYYA66uAr_WklCfc7JL7nmpHs/111/windsor-court-new-york-ny-interior-photo.jpg'], ['https://images1.apartments.com/i2/cXAhus_wame8k3LaQUNRGCxVWsCRBQ87ldeAQI5Ej64/111/biltmore-plaza-new-york-ny-building-photo.jpg', 'https://images1.apartments.com/i2/htzIJ7Nc0Tj6sHOV5NE9lmEAqvElt2hBM7XZfiL1AUw/111/biltmore-plaza-new-york-ny-interior-photo.jpg', 'https://images1.apartments.com/i2/fePIIWN5lGUgAOf3Fh1HRcw_MEYXi3w6zDyA0M8x878/111/biltmore-plaza-new-york-ny-interior-photo.jpg', 'https://images1.apartments.com/i2/xZwbyBe-U7lqF5LTv-xxSjmvPrlfItla1Lq-lDtWa7c/111/biltmore-plaza-new-york-ny-building-photo.jpg', 'https://images1.apartments.com/i2/2DB9n0CILAMHLOWvTOyGoqPwXX0KT_5z30knmS_WacY/111/biltmore-plaza-new-york-ny-building-photo.jpg', 'https://images1.apartments.com/i2/vLpStSpKrcDMZGdN0eDBRT-AkqTIYSaDl_KsSHc33qo/111/biltmore-plaza-new-york-ny-building-photo.jpg', 'https://images1.apartments.com/i2/1-E_z5aHoYrGV_JOXTdaHih-reWV3qp4gDqHcU5PUKU/111/biltmore-plaza-new-york-ny-building-photo.jpg', 'https://images1.apartments.com/i2/E3_7_dKo5fRYoSEgl5NNhqq35RNgdlDVSiVknA4r1IA/111/biltmore-plaza-new-york-ny-building-photo.jpg', 'https://images1.apartments.com/i2/kRWe_aU2U-AJKIxcsTnH1qy6zFOozJ0TbPMvJ7GYH9U/111/biltmore-plaza-new-york-ny-building-photo.jpg', 'https://images1.apartments.com/i2/kCeRDd1khgYv0ESQ9LeuwY22A1IKKzW3ak5fQ7F4GUM/111/biltmore-plaza-new-york-ny-building-photo.jpg', 'https://images1.apartments.com/i2/lJJvlllHCcIOuMcarQkKlTLKoCy-f9KBYfe7XCVaqmE/111/kips-bay-court-new-york-ny-building-photo.jpg'], ['https://images1.apartments.com/i2/s_irfi6jQPcETk39AU2Mx-lTuNH8e946I-X1ARbWSIU/111/kips-bay-court-new-york-ny-building-photo.jpg', 'https://images1.apartments.com/i2/8LAj4eBP-QVxqp3V4cH0K4tiS-sIHYWFto93w4xTyPI/111/kips-bay-court-new-york-ny-building-photo.jpg', 'https://images1.apartments.com/i2/DZcIXi5nj_GRcztZ1Gu-QoDldQGSadcVog18cVNeUgE/111/kips-bay-court-new-york-ny-building-photo.jpg', 'https://images1.apartments.com/i2/DjmWHX_EeTAH8KMPK_4aheotWny0nvfjaWq-1nrpp18/111/kips-bay-court-new-york-ny-building-photo.jpg', 'https://images1.apartments.com/i2/n8F_NEQWySwbQh-egi4EldSGg-Wfvj2cRM25IMTrcKU/111/kips-bay-court-new-york-ny-building-photo.jpg', 'https://images1.apartments.com/i2/gT7sfWk9vH_SL8no1FGm0yOB1tf9rmVB1k69RlOkisM/111/kips-bay-court-new-york-ny-building-photo.jpg', 'https://images1.apartments.com/i2/jowV8p-fGtHNKMk08wRpVBZQyjBhwrRaHC3wjs63yO8/111/kips-bay-court-new-york-ny-building-photo.jpg', 'https://images1.apartments.com/i2/_J40E0VVOy078DfRZUHnw_EOFuXKYpalk1SJbSF19R4/111/kips-bay-court-new-york-ny-building-photo.jpg', 'https://images1.apartments.com/i2/py7qUsNdj5Tk2ePzGgzqGHnBWYmXTuTdAfkio2kfS80/111/kips-bay-court-new-york-ny-building-photo.jpg', ],['https://images1.apartments.com/i2/Am8REig7YPXXLXcnoqlelLa3FGRV5Z-Koy0TslTt95s/111/murray-hill-east---luxury-furnished-apartment-new-york-ny-primary-photo.jpg', 'https://images1.apartments.com/i2/iSjeHa2AvYrybLclkRKlTATjqo4i4NUE-ETEMrfUk1c/111/murray-hill-east---luxury-furnished-apartment-new-york-ny-building-photo.jpg', 'https://images1.apartments.com/i2/JXfIBi8O3ZUE5LqwOS43-KV9P_xn8oF6haTRdik9Uvw/111/murray-hill-east---luxury-furnished-apartment-new-york-ny-building-photo.jpg', 'https://images1.apartments.com/i2/16yAWbMTMlNnerqU0kxcfcHCvntJuKeSYocvkbPTgvI/111/murray-hill-east---luxury-furnished-apartment-new-york-ny-building-photo.jpg', 'https://images1.apartments.com/i2/Sg7Gg6Ej1DL8BeuOj8E-1uwdXkyz0nWG3mp471i4F9o/111/murray-hill-east---luxury-furnished-apartment-new-york-ny-building-photo.jpg', 'https://images1.apartments.com/i2/uHMIc7OEL-U4oK9Jn7RglbYo5zwYKK5U59XTPJXLOmY/111/murray-hill-east---luxury-furnished-apartment-new-york-ny-building-photo.jpg', 'https://images1.apartments.com/i2/i9WUYeF3Ughn_D0T-nChoQg8gjAdh9GIq_uax_UCcN8/111/murray-hill-east---luxury-furnished-apartment-new-york-ny-building-photo.jpg', 'https://images1.apartments.com/i2/l_R9_GRRfoDzGeROpXVL1Fq9iT57FK7tEsj2HBDPLTY/111/murray-hill-east---luxury-furnished-apartment-new-york-ny-building-photo.jpg'],['https://images1.apartments.com/i2/wOEoyW2BjdLo2UCWFO-RX61wDq7S96IyZ-UTXluhnew/111/159-madison-ave-unit-8j-new-york-ny-spacious-living-space.jpg', 'https://images1.apartments.com/i2/7qyBFs42hGgxCu7OQ-Zc6EljBkjKZVEqPxiiZtLE0U4/111/159-madison-ave-unit-8j-new-york-ny-modern-shower-bathroom.jpg', 'https://images1.apartments.com/i2/cf0_vUisp9NHYtE7Pz3QcCHZLO6acUtLz-0LMfDZEoo/111/159-madison-ave-unit-8j-new-york-ny-big-mirror-in-the-dining-area.jpg', 'https://images1.apartments.com/i2/IVBkNhSLvPBqQeGG2Yly0z2goJTaGtTk2y-kK41rHvo/111/159-madison-ave-unit-8j-new-york-ny-dining-room.jpg', 'https://images1.apartments.com/i2/P0SbTtiq-S1Le1MHhLUebeV5PeeRQT2NjaFl47ToLOY/111/159-madison-ave-unit-8j-new-york-ny-floor-plan.jpg'],['https://images1.apartments.com/i2/qgcuI2r9x0jjLCExosfmCEbOaAW-slKKI0n3zMREc6Q/111/150-e-39th-st-unit-1502-new-york-ny-primary-photo.jpg', 'https://images1.apartments.com/i2/Aao4PfrqV0KmcS_3aFd-0HrMg447GzBfIgsZu2i0oKQ/117/150-e-39th-st-unit-1502-new-york-ny-building-photo.jpg'],['https://images1.apartments.com/i2/bDKdF99fBFAWw22hc7vM9mpvEXtZ6Pid41WZb_nKgjA/111/314-e-35th-st-unit-25-new-york-ny-primary-photo.jpg', 'https://images1.apartments.com/i2/LZDgyqNZDNB0GCH1yN66W1D8BOc8y0dr_vmr3FiUOhY/117/314-e-35th-st-unit-25-new-york-ny-building-photo.jpg', 'https://images1.apartments.com/i2/HhbgA6GzFRs8O1_Ch0MOig8ta6xuUEg_vnGRdtm8Erk/117/314-e-35th-st-unit-25-new-york-ny-building-photo.jpg', 'https://images1.apartments.com/i2/7asZkOuLL26MercjuqoZ5EKE5tsBpGiCu0jX9lW7ZkU/117/314-e-35th-st-unit-25-new-york-ny-building-photo.jpg'],['https://images1.apartments.com/i2/ZLcYLg4Goyu4CcxqteDFdUB6LLmP-tkdUvs1mc_jGvY/111/208-e-37th-st-unit-4k-new-york-ny-primary-photo.jpg', 'https://images1.apartments.com/i2/hrN1vS2o5mjQIYqe5jQLEjRGk8XD9X09hLJQsM4Z4BA/117/208-e-37th-st-unit-4k-new-york-ny-building-photo.jpg', 'https://images1.apartments.com/i2/Cke44PLSgXfYCEyiUE3PdnRNoY1BJ9RJqNIy9CsRxm8/117/208-e-37th-st-unit-4k-new-york-ny-building-photo.jpg', 'https://images1.apartments.com/i2/QeKrSk3Ot2WWGSI0n3byA4albJwKw2E-i8llrn2Y-0A/117/208-e-37th-st-unit-4k-new-york-ny-building-photo.jpg', 'https://images1.apartments.com/i2/NVMpK47P04UQuUvYGypGjRtZy-4m3AREFzmxZbZygno/117/208-e-37th-st-unit-4k-new-york-ny-building-photo.jpg'],['https://images1.apartments.com/i2/F6Fb_B_qQ003VBWBXdiSqf9BlraejiU2aoY2X6O5IV0/111/78-e-32nd-st-unit-5h-new-york-ny-primary-photo.jpg', 'https://images1.apartments.com/i2/shTU4t7hjz5alP5zQ2H0F0kH0vUg8dP_hsO7gkqh0mY/117/78-e-32nd-st-unit-5h-new-york-ny-building-photo.jpg', 'https://images1.apartments.com/i2/2MK1ZfyM-2LaAqd4Mm9SbsIW0ycJ6fKaq8xpD6-zXzc/117/78-e-32nd-st-unit-5h-new-york-ny-building-photo.jpg', 'https://images1.apartments.com/i2/X_9aWykxjJHu55PAQcLjsAqZVfgi1ZrABMA8QRNwwFo/117/78-e-32nd-st-unit-5h-new-york-ny-building-photo.jpg', 'https://images1.apartments.com/i2/ipK8tpBuKahLgczN1dnZsAm4I5M035L-txGFDkjveyU/117/78-e-32nd-st-unit-5h-new-york-ny-building-photo.jpg']]

var apt_scores = [[1.0, 0.38, 0.71, 0.86], [1.0, 0.37, 0.73, 0.78], [1.0, 0.37, 0.75, 0.75], [0.84, 0.43, 0.75, 0.86], [1.0, 0.66, 0.68, 0.82], [1.0, 0.53, 0.56, 0.68], [1.0, 0.62, 0.68, 0.82], [0.74, 0.27, 0.65, 0.89], [1.0, 0.54, 0.674, 0.5], [1.0, 0.44, 0.64, 0.73]]

var school_infos = [{name:"Bellevue-Educare Childcare Center",lat:40.739173,lng:-73.976862,score:-1},{name:"District 2 Pre-K Center at 425 East 35th Street",lat:40.74428,lng:-73.972591,score:-1},{name:"Manhattan Academy for Arts & Language",lat:40.74651,lng:-73.9811,score:0.54 },{name:"Murray Hill Academy",lat:40.74651,lng:-73.9811,score:-1},{name:"P.S. 116 Mary Lindley Murray",lat:40.744838,lng:-73.978116,score:-1},{name:"The River School",lat:40.74428,lng:-73.972591,score:-1},{name:"Unity Center for Urban Technologies",lat:40.74651,lng:-73.9811,score:0.79 }]

var apt_price = ['Studio $3,050 -- 3,350 1 Bed $4,200 -- 4,225 2 Beds $5,200 -- 5,825', 'Studio $2,970 1 Bed $3,925', '1 Bed $3,780 -- 4,830', 'Studio $2,925 -- 3,365 1 Bed $3,770 -- 4,415 2 Beds $4,130 -- 5,230 3 Beds $6,110', 'Studio $3,900 -- 4,500 1 Bed $4,900 -- 6,000 2 Beds $10,000 -- 11,000','Studio $4,200 ', 'Studio $2,700', 'Studio $3,295', '1 Bed $3,595',  '1 Bed $3,875']

//add indoor info
var apt_indoor = ['* Elevator * Business Center * Lounge * Multi Use Room * Breakfast/Coffee Concierge * Conference Room', '* Elevator * Business Center', '* Elevator', '* Elevator * Clubhouse * Disposal Chutes', '* Business Center * Corporate Suites', '* Elevator * Business Center * Clubhouse * Lounge * Disposal Chutes * Tanning Salon', '', '', '* Elevator', '']

//add outdoor info
var apt_outdoor = ['', '', '* Sundeck', '* Gated * Sundeck * Courtyard * Picnic Area * Balcony * Barbecue/Grill', '', '* Rooftop Lounge * Sundeck * Courtyard * Balcony * Patio * Deck * Yard * Garden', '', '', '* Patio', '']

var apt_description = ['I recently moved from out of state and had to find a place rather quickly. I was properly greeted with a smile and a welcome. The people alone have made this place home to me. Thanks', "Update move out inspection consisted of pulling up the carped and inspecting it for stains..... mind you I have a toddler who frequently spilled & made messes. In all my years of renting this is the first time an inspection included lifting up carpet and implying it was a pet mess!!!! It's funny because how do I know they weren't there before? They never showed me the under carpet prior to moving in. There was a huge patch in the middle of the carpet that came up a couple weeks after we moved in so obviously it wasn't new carpet. My dogs were very well house and crate trained. Once again another beware for ALL RENTERS!!", "Nice spacious apartment....terrible managent", "I have lived all over the country and this is the ONLY complex where the manager cares what's going on. I've lived here 6 years now and don't ever plan on leaving! The maintenance staff has had a lot of issues, but the manager will make sure your problem is taken care of. I'm so glad she enforces the rules - I don't have to worry about riff-raff moving in and ruining our wonderful community.", "Very nice building with great amenities. Excellent staff. Have lived here for 7 years and have a nice 2 bedroom with a beautiful terrace. There's a crunch gym, an Anthem gym, a beautifully landscaped roof with lounge chairs and spectacular views. There's a rec room with a TV and pool table and there is complimentary breakfast served there 5 days a week.", "I moved to my apartment when I was pregnant with my daughter who is now 25 years old! This apartment has seen a lot of life's changes and challenges but signifies home for us. Facing west with large bay windows I've observed truly magnificent sunsets in Manhattan! Summer has a resort feel here on the east river. My apartment is somewhat oversized by NYC standards and remains below market rate and for that I am grateful!", "After living 5 years and paying almost half of my son loan to Waterside plaza for rent and a lot of challenges on that place . Almost 2 months passed and still we don't have our security deposit back. Very unorganized and they are not responding my phone.", "Windsor court is apartment living at its finest. The building and apartments are beautiful. I love my granite kitchen and bathroom. Laundry on every floor is great. The staff and doormen are friendly and helpful. Its in a great location in the heart of Murray Hill, just a few blocks from the 6 train.", "A HORRIBLE place to live. Save yourself a lot of money and time and look ELSEWHERE. - a former 1-yr resident of this horrendous and toxic place", "I live in a very luxurious apartment building on the east side of Manhattan. Settled right in the middle of all the hustle and bustle of young professionals, bars, restaurants, grocery stores, and more. A quick walk to the east river, it is a great place to live! My current apartment building has a Doorman, Elevator, Gym, Roof, Laundry, Dry Cleaning Service and many more amenities that you can't find anywhere else."];

var apt_coordinates = [{lat: 40.7449661, lng: -73.97704090000002},{lat: 40.7444089, lng: -73.98026219999997},{lat: 40.743009, lng: -73.98063839999998},{lat: 40.74050829999999, lng: -73.97837779999998},{lat: 40.7492552, lng: -73.97642769999999},{lat: 40.7470085, lng: -73.98393199999998},{lat: 40.7489783, lng: -73.9765332},{lat: 40.7448951, lng: -73.9745805},{lat: 40.7473915, lng: -73.97648199999998},{lat: 40.7457734, lng: -73.98265630000003}]

var apt_yelp = [
[
    {
        "id": "1LIptXhtDh58vAA-QPFL4w",
        "alias": "cask-bar-and-kitchen-new-york",
        "name": "Cask Bar & Kitchen",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/CshY4h5dQck2Giin-TZa6Q/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/cask-bar-and-kitchen-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1302,
        "categories": [
            {
                "alias": "bars",
                "title": "Bars"
            },
            {
                "alias": "newamerican",
                "title": "American (New)"
            },
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.745414,
            "longitude": -73.979004
        },
        "transactions": [
            "restaurant_reservation",
            "pickup",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "167 E 33rd St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "167 E 33rd St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12123004924",
        "display_phone": "(212) 300-4924",
        "distance": 181.34300064756872
    },
    {
        "id": "csVEpHy5KJoFvM1qp5XwLQ",
        "alias": "le-parisien-new-york",
        "name": "Le Parisien",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/o-2sMdEwm9ElaF9y7S_7bg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/le-parisien-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 903,
        "categories": [
            {
                "alias": "french",
                "title": "French"
            },
            {
                "alias": "salad",
                "title": "Salad"
            },
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7454079308793,
            "longitude": -73.9791478306885
        },
        "transactions": [
            "restaurant_reservation"
        ],
        "price": "$$",
        "location": {
            "address1": "163 East 33rd St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "163 East 33rd St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12128895489",
        "display_phone": "(212) 889-5489",
        "distance": 192.71642607826263
    },
    {
        "id": "xiwnLiNhSlEN4CDcurqsLQ",
        "alias": "2nd-ave-deli-new-york",
        "name": "2nd Ave Deli",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/u9pAnwZlqehOgc1FV572eA/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/2nd-ave-deli-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1123,
        "categories": [
            {
                "alias": "delis",
                "title": "Delis"
            },
            {
                "alias": "kosher",
                "title": "Kosher"
            },
            {
                "alias": "sandwiches",
                "title": "Sandwiches"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.74519,
            "longitude": -73.97918
        },
        "transactions": [
            "pickup",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "162 E 33rd St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "162 E 33rd St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12126899000",
        "display_phone": "(212) 689-9000",
        "distance": 189.0988113667068
    },
    {
        "id": "8HkB3JfIj7_g-MN5ujoRig",
        "alias": "grand-central-terminal-new-york",
        "name": "Grand Central Terminal",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/t9Pl11kD4bs9J3AJRJlHyQ/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/grand-central-terminal-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1329,
        "categories": [
            {
                "alias": "landmarks",
                "title": "Landmarks & Historical Buildings"
            },
            {
                "alias": "trainstations",
                "title": "Train Stations"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.752793,
            "longitude": -73.977165
        },
        "transactions": [],
        "location": {
            "address1": "89 E 42nd St",
            "address2": null,
            "address3": "",
            "city": "New York",
            "zip_code": "10017",
            "country": "US",
            "state": "NY",
            "display_address": [
                "89 E 42nd St",
                "New York, NY 10017"
            ]
        },
        "phone": "+12123402583",
        "display_phone": "(212) 340-2583",
        "distance": 876.3750891594408
    },
    {
        "id": "1u_vkRFPuT8Aeh7Zk3bKyw",
        "alias": "galata-mediterranean-cuisine-new-york",
        "name": "Galata Mediterranean Cuisine",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/0AKKyZh7wKMRshTIx7bIvg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/galata-mediterranean-cuisine-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 304,
        "categories": [
            {
                "alias": "turkish",
                "title": "Turkish"
            },
            {
                "alias": "mediterranean",
                "title": "Mediterranean"
            },
            {
                "alias": "halal",
                "title": "Halal"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.74531,
            "longitude": -73.97753
        },
        "transactions": [
            "pickup",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "212 E 34th St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "212 E 34th St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12126839206",
        "display_phone": "(212) 683-9206",
        "distance": 68.70916030050583
    },
    {
        "id": "lESxFswvOPUFUzj6HsTnqw",
        "alias": "sons-of-thunder-new-york-4",
        "name": "Sons of Thunder",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/UDUrMLOEw6auFfCMQt-EGg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/sons-of-thunder-new-york-4?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 713,
        "categories": [
            {
                "alias": "hotdog",
                "title": "Hot Dogs"
            },
            {
                "alias": "poke",
                "title": "Poke"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.74786,
            "longitude": -73.97589
        },
        "transactions": [
            "pickup",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "204 E 38th St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "204 E 38th St",
                "New York, NY 10016"
            ]
        },
        "phone": "+16468632212",
        "display_phone": "(646) 863-2212",
        "distance": 343.47119119044805
    },
    {
        "id": "7EaiwMVaNdQibSs0yYkE5Q",
        "alias": "sushi-yasuda-new-york",
        "name": "Sushi Yasuda",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/z6GvhobHxGaKtpfXBFd5Lg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/sushi-yasuda-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 2047,
        "categories": [
            {
                "alias": "japanese",
                "title": "Japanese"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.75113,
            "longitude": -73.97347
        },
        "transactions": [],
        "price": "$$$$",
        "location": {
            "address1": "204 E 43rd St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10017",
            "country": "US",
            "state": "NY",
            "display_address": [
                "204 E 43rd St",
                "New York, NY 10017"
            ]
        },
        "phone": "+12129721001",
        "display_phone": "(212) 972-1001",
        "distance": 748.7778326378777
    },
    {
        "id": "raqwXUBlnc0e8c7CYmxEJQ",
        "alias": "scarpetta-new-york",
        "name": "Scarpetta",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/MuSpWrm8AmcalPlKf9gBQg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/scarpetta-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1779,
        "categories": [
            {
                "alias": "italian",
                "title": "Italian"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.744509,
            "longitude": -73.9856
        },
        "transactions": [],
        "price": "$$$",
        "location": {
            "address1": "88 Madison Ave",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "88 Madison Ave",
                "New York, NY 10016"
            ]
        },
        "phone": "+12126910555",
        "display_phone": "(212) 691-0555",
        "distance": 729.6397448102556
    },
    {
        "id": "BZcG-xN3DCxlfhckBZYeuw",
        "alias": "pio-pio-7-new-york-5",
        "name": "Pio Pio 7",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/KAU9yCws4Kxqh39y_ZPidg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/pio-pio-7-new-york-5?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 782,
        "categories": [
            {
                "alias": "latin",
                "title": "Latin American"
            },
            {
                "alias": "peruvian",
                "title": "Peruvian"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.74525,
            "longitude": -73.97768
        },
        "transactions": [
            "pickup",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "210 E 34th St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "210 E 34th St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12124810034",
        "display_phone": "(212) 481-0034",
        "distance": 71.88048438909611
    },
    {
        "id": "oTkzgr7hzOAdlP99Auj3GQ",
        "alias": "momosan-ramen-and-sake-new-york-2",
        "name": "Momosan Ramen & Sake",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/Z6hFFtvLlEIf5SqwxckvmQ/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/momosan-ramen-and-sake-new-york-2?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1449,
        "categories": [
            {
                "alias": "ramen",
                "title": "Ramen"
            },
            {
                "alias": "tapasmallplates",
                "title": "Tapas/Small Plates"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.74993,
            "longitude": -73.97746
        },
        "transactions": [],
        "price": "$$",
        "location": {
            "address1": "342 Lexington Ave",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "342 Lexington Ave",
                "New York, NY 10016"
            ]
        },
        "phone": "+16462015529",
        "display_phone": "(646) 201-5529",
        "distance": 559.6965020835415
    },
    {
        "id": "J38XGzriEkMsDfCMt6et_g",
        "alias": "vezzo-new-york-2",
        "name": "Vezzo",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/zEbvF-vMabMmovicwAoCSA/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/vezzo-new-york-2?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1190,
        "categories": [
            {
                "alias": "pizza",
                "title": "Pizza"
            },
            {
                "alias": "pastashops",
                "title": "Pasta Shops"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7445,
            "longitude": -73.98139
        },
        "transactions": [
            "pickup",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "178 Lexington Ave",
            "address2": null,
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "178 Lexington Ave",
                "New York, NY 10016"
            ]
        },
        "phone": "+12128398300",
        "display_phone": "(212) 839-8300",
        "distance": 378.6926314870854
    },
    {
        "id": "7iY35991NhQ1AShJZCNZgA",
        "alias": "sakagura-new-york",
        "name": "Sakagura",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/f-Z182ojMUKsP9qamFfXRQ/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/sakagura-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1709,
        "categories": [
            {
                "alias": "japanese",
                "title": "Japanese"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7516467024541,
            "longitude": -73.9729489318165
        },
        "transactions": [],
        "price": "$$$",
        "location": {
            "address1": "211 E 43rd St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10017",
            "country": "US",
            "state": "NY",
            "display_address": [
                "211 E 43rd St",
                "New York, NY 10017"
            ]
        },
        "phone": "+12129537253",
        "display_phone": "(212) 953-7253",
        "distance": 821.2873088872536
    },
    {
        "id": "jNRT5vY1Hvp5WDTaHy4Mhw",
        "alias": "sarges-delicatessen-and-diner-new-york-2",
        "name": "Sarge's Delicatessen & Diner",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/NmwQpoVgSjqFH_SIZXjuqg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/sarges-delicatessen-and-diner-new-york-2?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 996,
        "categories": [
            {
                "alias": "delis",
                "title": "Delis"
            },
            {
                "alias": "sandwiches",
                "title": "Sandwiches"
            },
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7473279523583,
            "longitude": -73.9772017867971
        },
        "transactions": [
            "pickup",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "548 3rd Ave",
            "address2": null,
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "548 3rd Ave",
                "New York, NY 10016"
            ]
        },
        "phone": "+12126790442",
        "display_phone": "(212) 679-0442",
        "distance": 269.3132812465167
    },
    {
        "id": "IGZkGbwE36iE1yaDW5NNKA",
        "alias": "the-flying-cock-new-york-2",
        "name": "The Flying Cock",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/3YlRSHL1Lja7Ke0ptnxLIQ/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/the-flying-cock-new-york-2?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 430,
        "categories": [
            {
                "alias": "pubs",
                "title": "Pubs"
            },
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.745296,
            "longitude": -73.978073
        },
        "transactions": [
            "restaurant_reservation"
        ],
        "price": "$$",
        "location": {
            "address1": "497 3rd Ave",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "497 3rd Ave",
                "New York, NY 10016"
            ]
        },
        "phone": "+12126896900",
        "display_phone": "(212) 689-6900",
        "distance": 101.56950215829643
    },
    {
        "id": "qY1o1MhoRyN84RRhUJtvpQ",
        "alias": "her-name-is-han-new-york-3",
        "name": "Her Name Is Han",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/v-Q1v7y9q8FbDCzgwAa8Xw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/her-name-is-han-new-york-3?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1031,
        "categories": [
            {
                "alias": "korean",
                "title": "Korean"
            },
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            },
            {
                "alias": "cocktailbars",
                "title": "Cocktail Bars"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.74626,
            "longitude": -73.98473
        },
        "transactions": [
            "pickup",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "17 E 31st St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "17 E 31st St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12127799990",
        "display_phone": "(212) 779-9990",
        "distance": 673.6425524974287
    },
    {
        "id": "cxtg17yy1YFt8gHRckUQcw",
        "alias": "num-pang-kitchen-new-york-2",
        "name": "Num Pang Kitchen",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/V9Y92UBe7WkgIEJwhTzrCw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/num-pang-kitchen-new-york-2?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1104,
        "categories": [
            {
                "alias": "cambodian",
                "title": "Cambodian"
            },
            {
                "alias": "sandwiches",
                "title": "Sandwiches"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7503831245874,
            "longitude": -73.9761078759491
        },
        "transactions": [
            "pickup",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "140 E 41st St",
            "address2": null,
            "address3": "",
            "city": "New York",
            "zip_code": "10017",
            "country": "US",
            "state": "NY",
            "display_address": [
                "140 E 41st St",
                "New York, NY 10017"
            ]
        },
        "phone": "+12128678889",
        "display_phone": "(212) 867-8889",
        "distance": 612.4077036500664
    },
    {
        "id": "xZ96vaoL-cQjfotmUKtjJQ",
        "alias": "barn-joo-35-new-york",
        "name": "Barn Joo 35",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/1R5CgYlK5qGUhKZOvZThKw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/barn-joo-35-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1394,
        "categories": [
            {
                "alias": "korean",
                "title": "Korean"
            },
            {
                "alias": "gastropubs",
                "title": "Gastropubs"
            },
            {
                "alias": "tapasmallplates",
                "title": "Tapas/Small Plates"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.74964,
            "longitude": -73.98582
        },
        "transactions": [
            "restaurant_reservation",
            "pickup",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "34 W 35th St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10001",
            "country": "US",
            "state": "NY",
            "display_address": [
                "34 W 35th St",
                "New York, NY 10001"
            ]
        },
        "phone": "+12125644430",
        "display_phone": "(212) 564-4430",
        "distance": 914.785200526764
    },
    {
        "id": "Va_mnsEvBghHXvc7uZIWJQ",
        "alias": "spice-symphony-new-york",
        "name": "Spice Symphony",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/8WJ_wbFgsIvySxSruesmEg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/spice-symphony-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 555,
        "categories": [
            {
                "alias": "indpak",
                "title": "Indian"
            },
            {
                "alias": "chinese",
                "title": "Chinese"
            },
            {
                "alias": "salad",
                "title": "Salad"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.744722,
            "longitude": -73.981202
        },
        "transactions": [
            "pickup",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "182 Lexington Ave",
            "address2": null,
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "182 Lexington Ave",
                "New York, NY 10016"
            ]
        },
        "phone": "+12125457742",
        "display_phone": "(212) 545-7742",
        "distance": 358.37970590690094
    },
    {
        "id": "g2IUVjeIwx5x6x9u1cLS6w",
        "alias": "empire-state-building-new-york-2",
        "name": "Empire State Building",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/TR1QO-8mvJefsIucVASREQ/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/empire-state-building-new-york-2?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1905,
        "categories": [
            {
                "alias": "landmarks",
                "title": "Landmarks & Historical Buildings"
            },
            {
                "alias": "observatories",
                "title": "Observatories"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7484,
            "longitude": -73.9856644
        },
        "transactions": [],
        "location": {
            "address1": "20 W 34th St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10118",
            "country": "US",
            "state": "NY",
            "display_address": [
                "20 W 34th St",
                "New York, NY 10118"
            ]
        },
        "phone": "+12127363100",
        "display_phone": "(212) 736-3100",
        "distance": 829.80724791219
    },
    {
        "id": "cnMNL1O_dVtCdTyQwwOwOQ",
        "alias": "bistango-new-york-9",
        "name": "Bistango",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/q6M3LVt2Fx5urdJYzTj1Ig/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/bistango-new-york-9?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 666,
        "categories": [
            {
                "alias": "italian",
                "title": "Italian"
            },
            {
                "alias": "bars",
                "title": "Bars"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7425771,
            "longitude": -73.9800892
        },
        "transactions": [
            "pickup",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "415 3rd Ave",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "415 3rd Ave",
                "New York, NY 10016"
            ]
        },
        "phone": "+12127258484",
        "display_phone": "(212) 725-8484",
        "distance": 370.36943334922927
    }
],
[
    {
        "id": "FEVQpbOPOwAPNIgO7D3xxw",
        "alias": "shake-shack-new-york-2",
        "name": "Shake Shack",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/J0UoRJKdaMl0EPdgxYIlKw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/shake-shack-new-york-2?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 5514,
        "categories": [
            {
                "alias": "burgers",
                "title": "Burgers"
            },
            {
                "alias": "foodstands",
                "title": "Food Stands"
            },
            {
                "alias": "icecream",
                "title": "Ice Cream & Frozen Yogurt"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7414000197233,
            "longitude": -73.98815019045
        },
        "transactions": [
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "Madison Square Park",
            "address2": "",
            "address3": "E 23rd St & Madison Ave",
            "city": "New York",
            "zip_code": "10010",
            "country": "US",
            "state": "NY",
            "display_address": [
                "Madison Square Park",
                "E 23rd St & Madison Ave",
                "New York, NY 10010"
            ]
        },
        "phone": "+12128896600",
        "display_phone": "(212) 889-6600",
        "distance": 746.6170564877817
    },
    {
        "id": "nRO136GRieGtxz18uD61DA",
        "alias": "eleven-madison-park-new-york",
        "name": "Eleven Madison Park",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/-80vpN8iZykUnx6y8Q-jRw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/eleven-madison-park-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 2034,
        "categories": [
            {
                "alias": "newamerican",
                "title": "American (New)"
            },
            {
                "alias": "french",
                "title": "French"
            },
            {
                "alias": "cocktailbars",
                "title": "Cocktail Bars"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.7416907417333,
            "longitude": -73.9872074872255
        },
        "transactions": [],
        "price": "$$$$",
        "location": {
            "address1": "11 Madison Ave",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10010",
            "country": "US",
            "state": "NY",
            "display_address": [
                "11 Madison Ave",
                "New York, NY 10010"
            ]
        },
        "phone": "+12128890905",
        "display_phone": "(212) 889-0905",
        "distance": 661.1450303444484
    },
    {
        "id": "1LIptXhtDh58vAA-QPFL4w",
        "alias": "cask-bar-and-kitchen-new-york",
        "name": "Cask Bar & Kitchen",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/CshY4h5dQck2Giin-TZa6Q/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/cask-bar-and-kitchen-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1302,
        "categories": [
            {
                "alias": "bars",
                "title": "Bars"
            },
            {
                "alias": "newamerican",
                "title": "American (New)"
            },
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.745414,
            "longitude": -73.979004
        },
        "transactions": [
            "restaurant_reservation",
            "pickup",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "167 E 33rd St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "167 E 33rd St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12123004924",
        "display_phone": "(212) 300-4924",
        "distance": 152.74989092305893
    },
    {
        "id": "raqwXUBlnc0e8c7CYmxEJQ",
        "alias": "scarpetta-new-york",
        "name": "Scarpetta",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/MuSpWrm8AmcalPlKf9gBQg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/scarpetta-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1779,
        "categories": [
            {
                "alias": "italian",
                "title": "Italian"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.744509,
            "longitude": -73.9856
        },
        "transactions": [],
        "price": "$$$",
        "location": {
            "address1": "88 Madison Ave",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "88 Madison Ave",
                "New York, NY 10016"
            ]
        },
        "phone": "+12126910555",
        "display_phone": "(212) 691-0555",
        "distance": 453.6724445592668
    },
    {
        "id": "veq1Bl1DW3UWMekZJUsG1Q",
        "alias": "gramercy-tavern-new-york",
        "name": "Gramercy Tavern",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/1C20qnil3QUWRl3om2gOFg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/gramercy-tavern-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 2738,
        "categories": [
            {
                "alias": "newamerican",
                "title": "American (New)"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.738527,
            "longitude": -73.988417
        },
        "transactions": [],
        "price": "$$$$",
        "location": {
            "address1": "42 E 20th St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10003",
            "country": "US",
            "state": "NY",
            "display_address": [
                "42 E 20th St",
                "New York, NY 10003"
            ]
        },
        "phone": "+12124770777",
        "display_phone": "(212) 477-0777",
        "distance": 950.1054470165357
    },
    {
        "id": "J38XGzriEkMsDfCMt6et_g",
        "alias": "vezzo-new-york-2",
        "name": "Vezzo",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/zEbvF-vMabMmovicwAoCSA/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/vezzo-new-york-2?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1190,
        "categories": [
            {
                "alias": "pizza",
                "title": "Pizza"
            },
            {
                "alias": "pastashops",
                "title": "Pasta Shops"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7445,
            "longitude": -73.98139
        },
        "transactions": [
            "pickup",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "178 Lexington Ave",
            "address2": null,
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "178 Lexington Ave",
                "New York, NY 10016"
            ]
        },
        "phone": "+12128398300",
        "display_phone": "(212) 839-8300",
        "distance": 102.07966383999451
    },
    {
        "id": "xiwnLiNhSlEN4CDcurqsLQ",
        "alias": "2nd-ave-deli-new-york",
        "name": "2nd Ave Deli",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/u9pAnwZlqehOgc1FV572eA/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/2nd-ave-deli-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1123,
        "categories": [
            {
                "alias": "delis",
                "title": "Delis"
            },
            {
                "alias": "kosher",
                "title": "Kosher"
            },
            {
                "alias": "sandwiches",
                "title": "Sandwiches"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.74519,
            "longitude": -73.97918
        },
        "transactions": [
            "pickup",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "162 E 33rd St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "162 E 33rd St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12126899000",
        "display_phone": "(212) 689-9000",
        "distance": 125.13115360054755
    },
    {
        "id": "csVEpHy5KJoFvM1qp5XwLQ",
        "alias": "le-parisien-new-york",
        "name": "Le Parisien",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/o-2sMdEwm9ElaF9y7S_7bg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/le-parisien-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 903,
        "categories": [
            {
                "alias": "french",
                "title": "French"
            },
            {
                "alias": "salad",
                "title": "Salad"
            },
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7454079308793,
            "longitude": -73.9791478306885
        },
        "transactions": [
            "restaurant_reservation"
        ],
        "price": "$$",
        "location": {
            "address1": "163 East 33rd St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "163 East 33rd St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12128895489",
        "display_phone": "(212) 889-5489",
        "distance": 144.39605342578943
    },
    {
        "id": "MKYhiSeXjahxh9O4Gqnimw",
        "alias": "grace-street-new-york",
        "name": "Grace Street",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/-Fa8jLXSUfiT2p4LmHTNEg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/grace-street-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 2049,
        "categories": [
            {
                "alias": "coffee",
                "title": "Coffee & Tea"
            },
            {
                "alias": "desserts",
                "title": "Desserts"
            },
            {
                "alias": "shavedice",
                "title": "Shaved Ice"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7478576793883,
            "longitude": -73.9865590631962
        },
        "transactions": [],
        "price": "$$",
        "location": {
            "address1": "17 W 32nd St",
            "address2": null,
            "address3": "",
            "city": "New York",
            "zip_code": "10001",
            "country": "US",
            "state": "NY",
            "display_address": [
                "17 W 32nd St",
                "New York, NY 10001"
            ]
        },
        "phone": "+19177452125",
        "display_phone": "(917) 745-2125",
        "distance": 658.689299434009
    },
    {
        "id": "ogCC-lJJYnwXDvKGmKZ6Sw",
        "alias": "woorijip-authentic-korean-food-new-york",
        "name": "Woorijip Authentic Korean Food",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/NZcGFutBjf1frDkslh6urw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/woorijip-authentic-korean-food-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 2521,
        "categories": [
            {
                "alias": "korean",
                "title": "Korean"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.74747,
            "longitude": -73.98648
        },
        "transactions": [],
        "price": "$",
        "location": {
            "address1": "12 W 32nd St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10001",
            "country": "US",
            "state": "NY",
            "display_address": [
                "12 W 32nd St",
                "New York, NY 10001"
            ]
        },
        "phone": "+12122441115",
        "display_phone": "(212) 244-1115",
        "distance": 630.5545302079486
    },
    {
        "id": "B55Ocx5RBWxo6AGSucYSIA",
        "alias": "ilili-new-york-2",
        "name": "ilili",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/ReJfm8A_pE-eK9NSnyHfcg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/ilili-new-york-2?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 2250,
        "categories": [
            {
                "alias": "mediterranean",
                "title": "Mediterranean"
            },
            {
                "alias": "lebanese",
                "title": "Lebanese"
            },
            {
                "alias": "cocktailbars",
                "title": "Cocktail Bars"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.74435,
            "longitude": -73.98778
        },
        "transactions": [
            "pickup",
            "delivery"
        ],
        "price": "$$$",
        "location": {
            "address1": "236 5th Ave",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10001",
            "country": "US",
            "state": "NY",
            "display_address": [
                "236 5th Ave",
                "New York, NY 10001"
            ]
        },
        "phone": "+12126832929",
        "display_phone": "(212) 683-2929",
        "distance": 648.7026157385123
    },
    {
        "id": "qY1o1MhoRyN84RRhUJtvpQ",
        "alias": "her-name-is-han-new-york-3",
        "name": "Her Name Is Han",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/v-Q1v7y9q8FbDCzgwAa8Xw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/her-name-is-han-new-york-3?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1031,
        "categories": [
            {
                "alias": "korean",
                "title": "Korean"
            },
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            },
            {
                "alias": "cocktailbars",
                "title": "Cocktail Bars"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.74626,
            "longitude": -73.98473
        },
        "transactions": [
            "pickup",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "17 E 31st St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "17 E 31st St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12127799990",
        "display_phone": "(212) 779-9990",
        "distance": 433.11300046978886
    },
    {
        "id": "klAhw3xLQi9GF1tf_HnS7w",
        "alias": "izakaya-mew-new-york-3",
        "name": "Izakaya MEW",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/Iix5fXx6WGqv-G2gyENd4A/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/izakaya-mew-new-york-3?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 2031,
        "categories": [
            {
                "alias": "tapas",
                "title": "Tapas Bars"
            },
            {
                "alias": "sushi",
                "title": "Sushi Bars"
            },
            {
                "alias": "izakaya",
                "title": "Izakaya"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7501853096499,
            "longitude": -73.9863203465939
        },
        "transactions": [
            "pickup",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "53 W 35th St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10001",
            "country": "US",
            "state": "NY",
            "display_address": [
                "53 W 35th St",
                "New York, NY 10001"
            ]
        },
        "phone": "+16463689384",
        "display_phone": "(646) 368-9384",
        "distance": 824.13176942534
    },
    {
        "id": "Va_mnsEvBghHXvc7uZIWJQ",
        "alias": "spice-symphony-new-york",
        "name": "Spice Symphony",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/8WJ_wbFgsIvySxSruesmEg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/spice-symphony-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 555,
        "categories": [
            {
                "alias": "indpak",
                "title": "Indian"
            },
            {
                "alias": "chinese",
                "title": "Chinese"
            },
            {
                "alias": "salad",
                "title": "Salad"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.744722,
            "longitude": -73.981202
        },
        "transactions": [
            "pickup",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "182 Lexington Ave",
            "address2": null,
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "182 Lexington Ave",
                "New York, NY 10016"
            ]
        },
        "phone": "+12125457742",
        "display_phone": "(212) 545-7742",
        "distance": 90.69100611966336
    },
    {
        "id": "sSQ3dtC8nbfeT6srFiiIlA",
        "alias": "stumptown-coffee-roasters-new-york",
        "name": "Stumptown Coffee Roasters",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/MjfyS99JsOMjsX51tdcHWw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/stumptown-coffee-roasters-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1356,
        "categories": [
            {
                "alias": "coffee",
                "title": "Coffee & Tea"
            },
            {
                "alias": "coffeeroasteries",
                "title": "Coffee Roasteries"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.7456663381275,
            "longitude": -73.9880916348562
        },
        "transactions": [],
        "price": "$$",
        "location": {
            "address1": "20 W 29th St",
            "address2": "",
            "address3": "The Ace Hotel",
            "city": "New York",
            "zip_code": "10001",
            "country": "US",
            "state": "NY",
            "display_address": [
                "20 W 29th St",
                "The Ace Hotel",
                "New York, NY 10001"
            ]
        },
        "phone": "+18557113385",
        "display_phone": "(855) 711-3385",
        "distance": 678.332073049763
    },
    {
        "id": "8HkB3JfIj7_g-MN5ujoRig",
        "alias": "grand-central-terminal-new-york",
        "name": "Grand Central Terminal",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/t9Pl11kD4bs9J3AJRJlHyQ/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/grand-central-terminal-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1329,
        "categories": [
            {
                "alias": "landmarks",
                "title": "Landmarks & Historical Buildings"
            },
            {
                "alias": "trainstations",
                "title": "Train Stations"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.752793,
            "longitude": -73.977165
        },
        "transactions": [],
        "location": {
            "address1": "89 E 42nd St",
            "address2": null,
            "address3": "",
            "city": "New York",
            "zip_code": "10017",
            "country": "US",
            "state": "NY",
            "display_address": [
                "89 E 42nd St",
                "New York, NY 10017"
            ]
        },
        "phone": "+12123402583",
        "display_phone": "(212) 340-2583",
        "distance": 968.7800184974117
    },
    {
        "id": "FZpm4_fbd6P984foOUejWg",
        "alias": "jongro-bbq-new-york-3",
        "name": "Jongro BBQ",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/zTVtLZtqwAFqYPXwuk1t5w/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/jongro-bbq-new-york-3?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1566,
        "categories": [
            {
                "alias": "korean",
                "title": "Korean"
            },
            {
                "alias": "bbq",
                "title": "Barbeque"
            },
            {
                "alias": "beerbar",
                "title": "Beer Bar"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.747514,
            "longitude": -73.986884
        },
        "transactions": [],
        "price": "$$",
        "location": {
            "address1": "22 W 32nd St",
            "address2": "Fl 2",
            "address3": "",
            "city": "New York",
            "zip_code": "10001",
            "country": "US",
            "state": "NY",
            "display_address": [
                "22 W 32nd St",
                "Fl 2",
                "New York, NY 10001"
            ]
        },
        "phone": "+12124732233",
        "display_phone": "(212) 473-2233",
        "distance": 660.2172212691622
    },
    {
        "id": "1z5Nu66M6W8mk5Ap4osZwA",
        "alias": "the-nomad-restaurant-new-york",
        "name": "The NoMad Restaurant",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/ct1j_pmuauuFqGK5p2IMTg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/the-nomad-restaurant-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1399,
        "categories": [
            {
                "alias": "french",
                "title": "French"
            },
            {
                "alias": "newamerican",
                "title": "American (New)"
            },
            {
                "alias": "gastropubs",
                "title": "Gastropubs"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7449,
            "longitude": -73.988482
        },
        "transactions": [],
        "price": "$$$",
        "location": {
            "address1": "1170 Broadway",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10001",
            "country": "US",
            "state": "NY",
            "display_address": [
                "1170 Broadway",
                "New York, NY 10001"
            ]
        },
        "phone": "+13474725660",
        "display_phone": "(347) 472-5660",
        "distance": 698.5580391161084
    },
    {
        "id": "pQuZDnefX038xurT1BhDXA",
        "alias": "keens-steakhouse-new-york",
        "name": "Keens Steakhouse",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/Wt-lr0rX2f-lncs05SWDlA/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/keens-steakhouse-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 2351,
        "categories": [
            {
                "alias": "steak",
                "title": "Steakhouses"
            },
            {
                "alias": "desserts",
                "title": "Desserts"
            },
            {
                "alias": "pubs",
                "title": "Pubs"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.75071,
            "longitude": -73.98652
        },
        "transactions": [],
        "price": "$$$$",
        "location": {
            "address1": "72 W 36th St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10018",
            "country": "US",
            "state": "NY",
            "display_address": [
                "72 W 36th St",
                "New York, NY 10018"
            ]
        },
        "phone": "+12129473636",
        "display_phone": "(212) 947-3636",
        "distance": 874.2884041134556
    },
    {
        "id": "g2IUVjeIwx5x6x9u1cLS6w",
        "alias": "empire-state-building-new-york-2",
        "name": "Empire State Building",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/TR1QO-8mvJefsIucVASREQ/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/empire-state-building-new-york-2?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1905,
        "categories": [
            {
                "alias": "landmarks",
                "title": "Landmarks & Historical Buildings"
            },
            {
                "alias": "observatories",
                "title": "Observatories"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7484,
            "longitude": -73.9856644
        },
        "transactions": [],
        "location": {
            "address1": "20 W 34th St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10118",
            "country": "US",
            "state": "NY",
            "display_address": [
                "20 W 34th St",
                "New York, NY 10118"
            ]
        },
        "phone": "+12127363100",
        "display_phone": "(212) 736-3100",
        "distance": 639.622876382336
    }
],
[
    {
        "id": "FEVQpbOPOwAPNIgO7D3xxw",
        "alias": "shake-shack-new-york-2",
        "name": "Shake Shack",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/J0UoRJKdaMl0EPdgxYIlKw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/shake-shack-new-york-2?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 5514,
        "categories": [
            {
                "alias": "burgers",
                "title": "Burgers"
            },
            {
                "alias": "foodstands",
                "title": "Food Stands"
            },
            {
                "alias": "icecream",
                "title": "Ice Cream & Frozen Yogurt"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7414000197233,
            "longitude": -73.98815019045
        },
        "transactions": [
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "Madison Square Park",
            "address2": "",
            "address3": "E 23rd St & Madison Ave",
            "city": "New York",
            "zip_code": "10010",
            "country": "US",
            "state": "NY",
            "display_address": [
                "Madison Square Park",
                "E 23rd St & Madison Ave",
                "New York, NY 10010"
            ]
        },
        "phone": "+12128896600",
        "display_phone": "(212) 889-6600",
        "distance": 662.6045600008392
    },
    {
        "id": "nRO136GRieGtxz18uD61DA",
        "alias": "eleven-madison-park-new-york",
        "name": "Eleven Madison Park",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/-80vpN8iZykUnx6y8Q-jRw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/eleven-madison-park-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 2034,
        "categories": [
            {
                "alias": "newamerican",
                "title": "American (New)"
            },
            {
                "alias": "french",
                "title": "French"
            },
            {
                "alias": "cocktailbars",
                "title": "Cocktail Bars"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.7416907417333,
            "longitude": -73.9872074872255
        },
        "transactions": [],
        "price": "$$$$",
        "location": {
            "address1": "11 Madison Ave",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10010",
            "country": "US",
            "state": "NY",
            "display_address": [
                "11 Madison Ave",
                "New York, NY 10010"
            ]
        },
        "phone": "+12128890905",
        "display_phone": "(212) 889-0905",
        "distance": 577.579250004887
    },
    {
        "id": "veq1Bl1DW3UWMekZJUsG1Q",
        "alias": "gramercy-tavern-new-york",
        "name": "Gramercy Tavern",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/1C20qnil3QUWRl3om2gOFg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/gramercy-tavern-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 2738,
        "categories": [
            {
                "alias": "newamerican",
                "title": "American (New)"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.738527,
            "longitude": -73.988417
        },
        "transactions": [],
        "price": "$$$$",
        "location": {
            "address1": "42 E 20th St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10003",
            "country": "US",
            "state": "NY",
            "display_address": [
                "42 E 20th St",
                "New York, NY 10003"
            ]
        },
        "phone": "+12124770777",
        "display_phone": "(212) 477-0777",
        "distance": 825.4495425738303
    },
    {
        "id": "raqwXUBlnc0e8c7CYmxEJQ",
        "alias": "scarpetta-new-york",
        "name": "Scarpetta",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/MuSpWrm8AmcalPlKf9gBQg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/scarpetta-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1779,
        "categories": [
            {
                "alias": "italian",
                "title": "Italian"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.744509,
            "longitude": -73.9856
        },
        "transactions": [],
        "price": "$$$",
        "location": {
            "address1": "88 Madison Ave",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "88 Madison Ave",
                "New York, NY 10016"
            ]
        },
        "phone": "+12126910555",
        "display_phone": "(212) 691-0555",
        "distance": 458.08121553352765
    },
    {
        "id": "1LIptXhtDh58vAA-QPFL4w",
        "alias": "cask-bar-and-kitchen-new-york",
        "name": "Cask Bar & Kitchen",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/CshY4h5dQck2Giin-TZa6Q/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/cask-bar-and-kitchen-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1302,
        "categories": [
            {
                "alias": "bars",
                "title": "Bars"
            },
            {
                "alias": "newamerican",
                "title": "American (New)"
            },
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.745414,
            "longitude": -73.979004
        },
        "transactions": [
            "pickup",
            "restaurant_reservation",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "167 E 33rd St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "167 E 33rd St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12123004924",
        "display_phone": "(212) 300-4924",
        "distance": 302.5041319396073
    },
    {
        "id": "J38XGzriEkMsDfCMt6et_g",
        "alias": "vezzo-new-york-2",
        "name": "Vezzo",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/zEbvF-vMabMmovicwAoCSA/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/vezzo-new-york-2?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1190,
        "categories": [
            {
                "alias": "pizza",
                "title": "Pizza"
            },
            {
                "alias": "pastashops",
                "title": "Pasta Shops"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7445,
            "longitude": -73.98139
        },
        "transactions": [
            "pickup",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "178 Lexington Ave",
            "address2": null,
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "178 Lexington Ave",
                "New York, NY 10016"
            ]
        },
        "phone": "+12128398300",
        "display_phone": "(212) 839-8300",
        "distance": 186.61638286451335
    },
    {
        "id": "B55Ocx5RBWxo6AGSucYSIA",
        "alias": "ilili-new-york-2",
        "name": "ilili",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/ReJfm8A_pE-eK9NSnyHfcg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/ilili-new-york-2?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 2250,
        "categories": [
            {
                "alias": "mediterranean",
                "title": "Mediterranean"
            },
            {
                "alias": "lebanese",
                "title": "Lebanese"
            },
            {
                "alias": "cocktailbars",
                "title": "Cocktail Bars"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.74435,
            "longitude": -73.98778
        },
        "transactions": [
            "pickup",
            "delivery"
        ],
        "price": "$$$",
        "location": {
            "address1": "236 5th Ave",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10001",
            "country": "US",
            "state": "NY",
            "display_address": [
                "236 5th Ave",
                "New York, NY 10001"
            ]
        },
        "phone": "+12126832929",
        "display_phone": "(212) 683-2929",
        "distance": 640.3085751026352
    },
    {
        "id": "cnMNL1O_dVtCdTyQwwOwOQ",
        "alias": "bistango-new-york-9",
        "name": "Bistango",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/q6M3LVt2Fx5urdJYzTj1Ig/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/bistango-new-york-9?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 666,
        "categories": [
            {
                "alias": "italian",
                "title": "Italian"
            },
            {
                "alias": "bars",
                "title": "Bars"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7425771,
            "longitude": -73.9800892
        },
        "transactions": [
            "pickup",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "415 3rd Ave",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "415 3rd Ave",
                "New York, NY 10016"
            ]
        },
        "phone": "+12127258484",
        "display_phone": "(212) 725-8484",
        "distance": 58.394503979443826
    },
    {
        "id": "MKYhiSeXjahxh9O4Gqnimw",
        "alias": "grace-street-new-york",
        "name": "Grace Street",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/-Fa8jLXSUfiT2p4LmHTNEg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/grace-street-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 2049,
        "categories": [
            {
                "alias": "coffee",
                "title": "Coffee & Tea"
            },
            {
                "alias": "desserts",
                "title": "Desserts"
            },
            {
                "alias": "shavedice",
                "title": "Shaved Ice"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7478576793883,
            "longitude": -73.9865590631962
        },
        "transactions": [],
        "price": "$$",
        "location": {
            "address1": "17 W 32nd St",
            "address2": null,
            "address3": "",
            "city": "New York",
            "zip_code": "10001",
            "country": "US",
            "state": "NY",
            "display_address": [
                "17 W 32nd St",
                "New York, NY 10001"
            ]
        },
        "phone": "+19177452125",
        "display_phone": "(917) 745-2125",
        "distance": 742.7571388663546
    },
    {
        "id": "xiwnLiNhSlEN4CDcurqsLQ",
        "alias": "2nd-ave-deli-new-york",
        "name": "2nd Ave Deli",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/u9pAnwZlqehOgc1FV572eA/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/2nd-ave-deli-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1123,
        "categories": [
            {
                "alias": "delis",
                "title": "Delis"
            },
            {
                "alias": "kosher",
                "title": "Kosher"
            },
            {
                "alias": "sandwiches",
                "title": "Sandwiches"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.74519,
            "longitude": -73.97918
        },
        "transactions": [
            "pickup",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "162 E 33rd St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "162 E 33rd St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12126899000",
        "display_phone": "(212) 689-9000",
        "distance": 274.1165921059256
    },
    {
        "id": "ogCC-lJJYnwXDvKGmKZ6Sw",
        "alias": "woorijip-authentic-korean-food-new-york",
        "name": "Woorijip Authentic Korean Food",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/NZcGFutBjf1frDkslh6urw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/woorijip-authentic-korean-food-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 2521,
        "categories": [
            {
                "alias": "korean",
                "title": "Korean"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.74747,
            "longitude": -73.98648
        },
        "transactions": [],
        "price": "$",
        "location": {
            "address1": "12 W 32nd St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10001",
            "country": "US",
            "state": "NY",
            "display_address": [
                "12 W 32nd St",
                "New York, NY 10001"
            ]
        },
        "phone": "+12122441115",
        "display_phone": "(212) 244-1115",
        "distance": 706.602985709164
    },
    {
        "id": "csVEpHy5KJoFvM1qp5XwLQ",
        "alias": "le-parisien-new-york",
        "name": "Le Parisien",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/o-2sMdEwm9ElaF9y7S_7bg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/le-parisien-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 903,
        "categories": [
            {
                "alias": "french",
                "title": "French"
            },
            {
                "alias": "salad",
                "title": "Salad"
            },
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7454079308793,
            "longitude": -73.9791478306885
        },
        "transactions": [
            "restaurant_reservation"
        ],
        "price": "$$",
        "location": {
            "address1": "163 East 33rd St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "163 East 33rd St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12128895489",
        "display_phone": "(212) 889-5489",
        "distance": 296.8345689040994
    },
    {
        "id": "NgD-6ogFGc_c4z5_Ur4k2g",
        "alias": "dhaba-indian-cuisine-new-york",
        "name": "Dhaba Indian Cuisine",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/Efhl_heypCY732jne50d1g/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/dhaba-indian-cuisine-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1442,
        "categories": [
            {
                "alias": "indpak",
                "title": "Indian"
            },
            {
                "alias": "buffets",
                "title": "Buffets"
            }
        ],
        "rating": 3.5,
        "coordinates": {
            "latitude": 40.742364,
            "longitude": -73.982813
        },
        "transactions": [
            "pickup",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "108 Lexington Ave",
            "address2": "",
            "address3": null,
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "108 Lexington Ave",
                "New York, NY 10016"
            ]
        },
        "phone": "+12126791284",
        "display_phone": "(212) 679-1284",
        "distance": 201.10537048970568
    },
    {
        "id": "sSQ3dtC8nbfeT6srFiiIlA",
        "alias": "stumptown-coffee-roasters-new-york",
        "name": "Stumptown Coffee Roasters",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/MjfyS99JsOMjsX51tdcHWw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/stumptown-coffee-roasters-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1356,
        "categories": [
            {
                "alias": "coffee",
                "title": "Coffee & Tea"
            },
            {
                "alias": "coffeeroasteries",
                "title": "Coffee Roasteries"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.7456663381275,
            "longitude": -73.9880916348562
        },
        "transactions": [],
        "price": "$$",
        "location": {
            "address1": "20 W 29th St",
            "address2": "",
            "address3": "The Ace Hotel",
            "city": "New York",
            "zip_code": "10001",
            "country": "US",
            "state": "NY",
            "display_address": [
                "20 W 29th St",
                "The Ace Hotel",
                "New York, NY 10001"
            ]
        },
        "phone": "+18557113385",
        "display_phone": "(855) 711-3385",
        "distance": 702.1117377660079
    },
    {
        "id": "qY1o1MhoRyN84RRhUJtvpQ",
        "alias": "her-name-is-han-new-york-3",
        "name": "Her Name Is Han",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/v-Q1v7y9q8FbDCzgwAa8Xw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/her-name-is-han-new-york-3?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1031,
        "categories": [
            {
                "alias": "korean",
                "title": "Korean"
            },
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            },
            {
                "alias": "cocktailbars",
                "title": "Cocktail Bars"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.74626,
            "longitude": -73.98473
        },
        "transactions": [
            "pickup",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "17 E 31st St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "17 E 31st St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12127799990",
        "display_phone": "(212) 779-9990",
        "distance": 505.6327506581673
    },
    {
        "id": "dMhRafXdr765DHe0k-QfaQ",
        "alias": "abc-kitchen-new-york",
        "name": "ABC Kitchen",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/k2V0QyHL_IFbfDnR33S0cg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/abc-kitchen-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 2863,
        "categories": [
            {
                "alias": "newamerican",
                "title": "American (New)"
            },
            {
                "alias": "french",
                "title": "French"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.738085,
            "longitude": -73.989472
        },
        "transactions": [],
        "price": "$$$",
        "location": {
            "address1": "35 E 18th St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10003",
            "country": "US",
            "state": "NY",
            "display_address": [
                "35 E 18th St",
                "New York, NY 10003"
            ]
        },
        "phone": "+12124755829",
        "display_phone": "(212) 475-5829",
        "distance": 926.1915356765269
    },
    {
        "id": "1z5Nu66M6W8mk5Ap4osZwA",
        "alias": "the-nomad-restaurant-new-york",
        "name": "The NoMad Restaurant",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/ct1j_pmuauuFqGK5p2IMTg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/the-nomad-restaurant-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1399,
        "categories": [
            {
                "alias": "french",
                "title": "French"
            },
            {
                "alias": "newamerican",
                "title": "American (New)"
            },
            {
                "alias": "gastropubs",
                "title": "Gastropubs"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7449,
            "longitude": -73.988482
        },
        "transactions": [],
        "price": "$$$",
        "location": {
            "address1": "1170 Broadway",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10001",
            "country": "US",
            "state": "NY",
            "display_address": [
                "1170 Broadway",
                "New York, NY 10001"
            ]
        },
        "phone": "+13474725660",
        "display_phone": "(347) 472-5660",
        "distance": 701.2823823564187
    },
    {
        "id": "01isnBO1rFO2LTOeNfYl9w",
        "alias": "hillstone-restaurant-new-york",
        "name": "Hillstone Restaurant",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/hb1l4N5QnEPaBwf9O3xBWw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/hillstone-restaurant-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 889,
        "categories": [
            {
                "alias": "newamerican",
                "title": "American (New)"
            },
            {
                "alias": "sushi",
                "title": "Sushi Bars"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7427534,
            "longitude": -73.9847308
        },
        "transactions": [],
        "price": "$$$",
        "location": {
            "address1": "378 Park Ave S",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10010",
            "country": "US",
            "state": "NY",
            "display_address": [
                "378 Park Ave S",
                "New York, NY 10010"
            ]
        },
        "phone": "+12126891090",
        "display_phone": "(212) 689-1090",
        "distance": 352.11622422365446
    },
    {
        "id": "klAhw3xLQi9GF1tf_HnS7w",
        "alias": "izakaya-mew-new-york-3",
        "name": "Izakaya MEW",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/Iix5fXx6WGqv-G2gyENd4A/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/izakaya-mew-new-york-3?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 2031,
        "categories": [
            {
                "alias": "tapas",
                "title": "Tapas Bars"
            },
            {
                "alias": "sushi",
                "title": "Sushi Bars"
            },
            {
                "alias": "izakaya",
                "title": "Izakaya"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7501853096499,
            "longitude": -73.9863203465939
        },
        "transactions": [
            "pickup",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "53 W 35th St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10001",
            "country": "US",
            "state": "NY",
            "display_address": [
                "53 W 35th St",
                "New York, NY 10001"
            ]
        },
        "phone": "+16463689384",
        "display_phone": "(646) 368-9384",
        "distance": 938.3597372232241
    },
    {
        "id": "MIuFXBFthAWeEMxyP_lm9A",
        "alias": "blue-smoke-new-york",
        "name": "Blue Smoke",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/n8YfhHfqGdd76QJdbe1NeQ/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/blue-smoke-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1685,
        "categories": [
            {
                "alias": "southern",
                "title": "Southern"
            },
            {
                "alias": "bbq",
                "title": "Barbeque"
            }
        ],
        "rating": 3.5,
        "coordinates": {
            "latitude": 40.74228,
            "longitude": -73.98375
        },
        "transactions": [
            "pickup",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "116 East 27th St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "116 East 27th St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12124477733",
        "display_phone": "(212) 447-7733",
        "distance": 284.12019574286944
    }
],
[
    {
        "id": "nRO136GRieGtxz18uD61DA",
        "alias": "eleven-madison-park-new-york",
        "name": "Eleven Madison Park",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/-80vpN8iZykUnx6y8Q-jRw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/eleven-madison-park-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 2034,
        "categories": [
            {
                "alias": "newamerican",
                "title": "American (New)"
            },
            {
                "alias": "french",
                "title": "French"
            },
            {
                "alias": "cocktailbars",
                "title": "Cocktail Bars"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.7416907417333,
            "longitude": -73.9872074872255
        },
        "transactions": [],
        "price": "$$$$",
        "location": {
            "address1": "11 Madison Ave",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10010",
            "country": "US",
            "state": "NY",
            "display_address": [
                "11 Madison Ave",
                "New York, NY 10010"
            ]
        },
        "phone": "+12128890905",
        "display_phone": "(212) 889-0905",
        "distance": 759.8245084529256
    },
    {
        "id": "raqwXUBlnc0e8c7CYmxEJQ",
        "alias": "scarpetta-new-york",
        "name": "Scarpetta",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/MuSpWrm8AmcalPlKf9gBQg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/scarpetta-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1779,
        "categories": [
            {
                "alias": "italian",
                "title": "Italian"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.744509,
            "longitude": -73.9856
        },
        "transactions": [],
        "price": "$$$",
        "location": {
            "address1": "88 Madison Ave",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "88 Madison Ave",
                "New York, NY 10016"
            ]
        },
        "phone": "+12126910555",
        "display_phone": "(212) 691-0555",
        "distance": 758.192361605281
    },
    {
        "id": "1LIptXhtDh58vAA-QPFL4w",
        "alias": "cask-bar-and-kitchen-new-york",
        "name": "Cask Bar & Kitchen",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/CshY4h5dQck2Giin-TZa6Q/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/cask-bar-and-kitchen-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1302,
        "categories": [
            {
                "alias": "bars",
                "title": "Bars"
            },
            {
                "alias": "newamerican",
                "title": "American (New)"
            },
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.745414,
            "longitude": -73.979004
        },
        "transactions": [
            "restaurant_reservation",
            "delivery",
            "pickup"
        ],
        "price": "$$",
        "location": {
            "address1": "167 E 33rd St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "167 E 33rd St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12123004924",
        "display_phone": "(212) 300-4924",
        "distance": 550.3429544289537
    },
    {
        "id": "kIm0oeOaVfC9-2flLPVklA",
        "alias": "patrizias-pizza-and-pasta-new-york",
        "name": "Patrizia's Pizza and Pasta",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/x6-5UXbsM-iPu_Nr89q-jQ/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/patrizias-pizza-and-pasta-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 503,
        "categories": [
            {
                "alias": "italian",
                "title": "Italian"
            },
            {
                "alias": "pizza",
                "title": "Pizza"
            },
            {
                "alias": "catering",
                "title": "Caterers"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7398415,
            "longitude": -73.9792862
        },
        "transactions": [
            "delivery",
            "pickup"
        ],
        "price": "$$",
        "location": {
            "address1": "462-466 2nd Ave",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "462-466 2nd Ave",
                "New York, NY 10016"
            ]
        },
        "phone": "+12125979999",
        "display_phone": "(212) 597-9999",
        "distance": 79.3320437082857
    },
    {
        "id": "cnMNL1O_dVtCdTyQwwOwOQ",
        "alias": "bistango-new-york-9",
        "name": "Bistango",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/q6M3LVt2Fx5urdJYzTj1Ig/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/bistango-new-york-9?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 666,
        "categories": [
            {
                "alias": "italian",
                "title": "Italian"
            },
            {
                "alias": "bars",
                "title": "Bars"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7425771,
            "longitude": -73.9800892
        },
        "transactions": [
            "delivery",
            "pickup"
        ],
        "price": "$$",
        "location": {
            "address1": "415 3rd Ave",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "415 3rd Ave",
                "New York, NY 10016"
            ]
        },
        "phone": "+12127258484",
        "display_phone": "(212) 725-8484",
        "distance": 275.3129838786137
    },
    {
        "id": "J38XGzriEkMsDfCMt6et_g",
        "alias": "vezzo-new-york-2",
        "name": "Vezzo",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/zEbvF-vMabMmovicwAoCSA/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/vezzo-new-york-2?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1190,
        "categories": [
            {
                "alias": "pizza",
                "title": "Pizza"
            },
            {
                "alias": "pastashops",
                "title": "Pasta Shops"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7445,
            "longitude": -73.98139
        },
        "transactions": [
            "delivery",
            "pickup"
        ],
        "price": "$$",
        "location": {
            "address1": "178 Lexington Ave",
            "address2": null,
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "178 Lexington Ave",
                "New York, NY 10016"
            ]
        },
        "phone": "+12128398300",
        "display_phone": "(212) 839-8300",
        "distance": 517.1204299935853
    },
    {
        "id": "xiwnLiNhSlEN4CDcurqsLQ",
        "alias": "2nd-ave-deli-new-york",
        "name": "2nd Ave Deli",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/u9pAnwZlqehOgc1FV572eA/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/2nd-ave-deli-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1123,
        "categories": [
            {
                "alias": "delis",
                "title": "Delis"
            },
            {
                "alias": "kosher",
                "title": "Kosher"
            },
            {
                "alias": "sandwiches",
                "title": "Sandwiches"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.74519,
            "longitude": -73.97918
        },
        "transactions": [
            "delivery",
            "pickup"
        ],
        "price": "$$",
        "location": {
            "address1": "162 E 33rd St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "162 E 33rd St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12126899000",
        "display_phone": "(212) 689-9000",
        "distance": 527.3922717658526
    },
    {
        "id": "NgD-6ogFGc_c4z5_Ur4k2g",
        "alias": "dhaba-indian-cuisine-new-york",
        "name": "Dhaba Indian Cuisine",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/Efhl_heypCY732jne50d1g/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/dhaba-indian-cuisine-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1442,
        "categories": [
            {
                "alias": "indpak",
                "title": "Indian"
            },
            {
                "alias": "buffets",
                "title": "Buffets"
            }
        ],
        "rating": 3.5,
        "coordinates": {
            "latitude": 40.742364,
            "longitude": -73.982813
        },
        "transactions": [
            "delivery",
            "pickup"
        ],
        "price": "$$",
        "location": {
            "address1": "108 Lexington Ave",
            "address2": "",
            "address3": null,
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "108 Lexington Ave",
                "New York, NY 10016"
            ]
        },
        "phone": "+12126791284",
        "display_phone": "(212) 679-1284",
        "distance": 431.3886862653788
    },
    {
        "id": "csVEpHy5KJoFvM1qp5XwLQ",
        "alias": "le-parisien-new-york",
        "name": "Le Parisien",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/o-2sMdEwm9ElaF9y7S_7bg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/le-parisien-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 903,
        "categories": [
            {
                "alias": "french",
                "title": "French"
            },
            {
                "alias": "salad",
                "title": "Salad"
            },
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7454079308793,
            "longitude": -73.9791478306885
        },
        "transactions": [
            "restaurant_reservation"
        ],
        "price": "$$",
        "location": {
            "address1": "163 East 33rd St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "163 East 33rd St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12128895489",
        "display_phone": "(212) 889-5489",
        "distance": 551.057661172653
    },
    {
        "id": "ogw2U2u5EHjfQih-WvgI3Q",
        "alias": "gilas-nosh-new-york",
        "name": "Gila's Nosh",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/-NbSaoUzaz1lbU8ixwBEeQ/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/gilas-nosh-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 381,
        "categories": [
            {
                "alias": "coffee",
                "title": "Coffee & Tea"
            },
            {
                "alias": "mediterranean",
                "title": "Mediterranean"
            },
            {
                "alias": "mideastern",
                "title": "Middle Eastern"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.738616,
            "longitude": -73.98184
        },
        "transactions": [
            "delivery",
            "pickup"
        ],
        "price": "$",
        "location": {
            "address1": "221 E 23rd St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10010",
            "country": "US",
            "state": "NY",
            "display_address": [
                "221 E 23rd St",
                "New York, NY 10010"
            ]
        },
        "phone": "+12122133334",
        "display_phone": "(212) 213-3334",
        "distance": 361.9253368478975
    },
    {
        "id": "OqNmzS2N2I750zYgUC6IgA",
        "alias": "riverpark-new-york",
        "name": "Riverpark",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/y_HtJhGJUjg-HWueaCDzqg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/riverpark-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 752,
        "categories": [
            {
                "alias": "newamerican",
                "title": "American (New)"
            },
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            },
            {
                "alias": "venues",
                "title": "Venues & Event Spaces"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7393734243765,
            "longitude": -73.9734843398117
        },
        "transactions": [],
        "price": "$$$",
        "location": {
            "address1": "450 E 29th St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "450 E 29th St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12127299790",
        "display_phone": "(212) 729-9790",
        "distance": 426.64226598565165
    },
    {
        "id": "MIuFXBFthAWeEMxyP_lm9A",
        "alias": "blue-smoke-new-york",
        "name": "Blue Smoke",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/n8YfhHfqGdd76QJdbe1NeQ/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/blue-smoke-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1685,
        "categories": [
            {
                "alias": "southern",
                "title": "Southern"
            },
            {
                "alias": "bbq",
                "title": "Barbeque"
            }
        ],
        "rating": 3.5,
        "coordinates": {
            "latitude": 40.74228,
            "longitude": -73.98375
        },
        "transactions": [
            "delivery",
            "pickup"
        ],
        "price": "$$",
        "location": {
            "address1": "116 East 27th St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "116 East 27th St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12124477733",
        "display_phone": "(212) 447-7733",
        "distance": 496.5596283244631
    },
    {
        "id": "01isnBO1rFO2LTOeNfYl9w",
        "alias": "hillstone-restaurant-new-york",
        "name": "Hillstone Restaurant",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/hb1l4N5QnEPaBwf9O3xBWw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/hillstone-restaurant-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 889,
        "categories": [
            {
                "alias": "newamerican",
                "title": "American (New)"
            },
            {
                "alias": "sushi",
                "title": "Sushi Bars"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7427534,
            "longitude": -73.9847308
        },
        "transactions": [],
        "price": "$$$",
        "location": {
            "address1": "378 Park Ave S",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10010",
            "country": "US",
            "state": "NY",
            "display_address": [
                "378 Park Ave S",
                "New York, NY 10010"
            ]
        },
        "phone": "+12126891090",
        "display_phone": "(212) 689-1090",
        "distance": 595.1384348623089
    },
    {
        "id": "qY1o1MhoRyN84RRhUJtvpQ",
        "alias": "her-name-is-han-new-york-3",
        "name": "Her Name Is Han",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/v-Q1v7y9q8FbDCzgwAa8Xw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/her-name-is-han-new-york-3?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1031,
        "categories": [
            {
                "alias": "korean",
                "title": "Korean"
            },
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            },
            {
                "alias": "cocktailbars",
                "title": "Cocktail Bars"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.74626,
            "longitude": -73.98473
        },
        "transactions": [
            "delivery",
            "pickup"
        ],
        "price": "$$",
        "location": {
            "address1": "17 E 31st St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "17 E 31st St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12127799990",
        "display_phone": "(212) 779-9990",
        "distance": 835.4411815276135
    },
    {
        "id": "xkvv0n7jbl4Ra3Vm_jfxaA",
        "alias": "upland-new-york",
        "name": "Upland",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/8phn-1Xcrg2DdIlH8rodfQ/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/upland-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 883,
        "categories": [
            {
                "alias": "newamerican",
                "title": "American (New)"
            },
            {
                "alias": "burgers",
                "title": "Burgers"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.74171,
            "longitude": -73.98503
        },
        "transactions": [],
        "price": "$$$",
        "location": {
            "address1": "345 Park Ave S",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10010",
            "country": "US",
            "state": "NY",
            "display_address": [
                "345 Park Ave S",
                "New York, NY 10010"
            ]
        },
        "phone": "+12126861006",
        "display_phone": "(212) 686-1006",
        "distance": 588.036008542532
    },
    {
        "id": "yi6jIxzHo-nbAOG4KWuqcw",
        "alias": "maialino-new-york",
        "name": "Maialino",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/-1krIn9ragupH06CH11Kug/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/maialino-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1299,
        "categories": [
            {
                "alias": "italian",
                "title": "Italian"
            },
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            },
            {
                "alias": "bars",
                "title": "Bars"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.738437,
            "longitude": -73.985686
        },
        "transactions": [],
        "price": "$$$",
        "location": {
            "address1": "2 Lexington Ave",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10010",
            "country": "US",
            "state": "NY",
            "display_address": [
                "2 Lexington Ave",
                "New York, NY 10010"
            ]
        },
        "phone": "+12127772410",
        "display_phone": "(212) 777-2410",
        "distance": 660.6014715048852
    },
    {
        "id": "3uEkZEAp7biQEtt0S7W1Vg",
        "alias": "vatan-indian-vegetarian-new-york-2",
        "name": "Vatan Indian Vegetarian",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/icuBrbAkITE206AojVhBFw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/vatan-indian-vegetarian-new-york-2?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 581,
        "categories": [
            {
                "alias": "indpak",
                "title": "Indian"
            },
            {
                "alias": "vegetarian",
                "title": "Vegetarian"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.74236,
            "longitude": -73.9803699
        },
        "transactions": [
            "restaurant_reservation"
        ],
        "price": "$$$",
        "location": {
            "address1": "409 3rd Ave",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "409 3rd Ave",
                "New York, NY 10016"
            ]
        },
        "phone": "+12126895666",
        "display_phone": "(212) 689-5666",
        "distance": 256.3588061161371
    },
    {
        "id": "2mzyXxnstSPcpDS3u5g_7w",
        "alias": "park-avenue-autumn-winter-spring-summer-new-york-3",
        "name": "Park Avenue Autumn/Winter/Spring/Summer",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/20UlOQJjS2syEHEpols9oQ/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/park-avenue-autumn-winter-spring-summer-new-york-3?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 842,
        "categories": [
            {
                "alias": "newamerican",
                "title": "American (New)"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7419710606337,
            "longitude": -73.9852105826139
        },
        "transactions": [],
        "price": "$$$",
        "location": {
            "address1": "360 Park Ave S",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10010",
            "country": "US",
            "state": "NY",
            "display_address": [
                "360 Park Ave S",
                "New York, NY 10010"
            ]
        },
        "phone": "+12129517111",
        "display_phone": "(212) 951-7111",
        "distance": 602.6876116155679
    },
    {
        "id": "HEs6llkn3wIP1ATXeIZQew",
        "alias": "pippali-new-york",
        "name": "Pippali",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/kqeBc_ItizjF_qbQotpRKw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/pippali-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 674,
        "categories": [
            {
                "alias": "indpak",
                "title": "Indian"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.74233,
            "longitude": -73.98331
        },
        "transactions": [
            "restaurant_reservation",
            "delivery",
            "pickup"
        ],
        "price": "$$",
        "location": {
            "address1": "129 E 27th St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "129 E 27th St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12126891999",
        "display_phone": "(212) 689-1999",
        "distance": 466.8989728916127
    },
    {
        "id": "CW3PJ0GJ-jiiJF98AyEznw",
        "alias": "modern-pinball-nyc-arcade-party-place-and-museum-new-york-4",
        "name": "Modern Pinball NYC Arcade, Party Place & Museum",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/rJezIQeQAGVyi7t6wm3qdA/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/modern-pinball-nyc-arcade-party-place-and-museum-new-york-4?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 234,
        "categories": [
            {
                "alias": "arcades",
                "title": "Arcades"
            },
            {
                "alias": "kids_activities",
                "title": "Kids Activities"
            },
            {
                "alias": "museums",
                "title": "Museums"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.74109,
            "longitude": -73.98193
        },
        "transactions": [],
        "location": {
            "address1": "362 3rd Ave",
            "address2": null,
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "362 3rd Ave",
                "New York, NY 10016"
            ]
        },
        "phone": "+16466530839",
        "display_phone": "(646) 653-0839",
        "distance": 310.5440535555591
    }
],
[
    {
        "id": "8HkB3JfIj7_g-MN5ujoRig",
        "alias": "grand-central-terminal-new-york",
        "name": "Grand Central Terminal",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/t9Pl11kD4bs9J3AJRJlHyQ/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/grand-central-terminal-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1329,
        "categories": [
            {
                "alias": "landmarks",
                "title": "Landmarks & Historical Buildings"
            },
            {
                "alias": "trainstations",
                "title": "Train Stations"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.752793,
            "longitude": -73.977165
        },
        "transactions": [],
        "location": {
            "address1": "89 E 42nd St",
            "address2": null,
            "address3": "",
            "city": "New York",
            "zip_code": "10017",
            "country": "US",
            "state": "NY",
            "display_address": [
                "89 E 42nd St",
                "New York, NY 10017"
            ]
        },
        "phone": "+12123402583",
        "display_phone": "(212) 340-2583",
        "distance": 403.6280217433307
    },
    {
        "id": "7EaiwMVaNdQibSs0yYkE5Q",
        "alias": "sushi-yasuda-new-york",
        "name": "Sushi Yasuda",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/z6GvhobHxGaKtpfXBFd5Lg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/sushi-yasuda-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 2047,
        "categories": [
            {
                "alias": "japanese",
                "title": "Japanese"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.75113,
            "longitude": -73.97347
        },
        "transactions": [],
        "price": "$$$$",
        "location": {
            "address1": "204 E 43rd St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10017",
            "country": "US",
            "state": "NY",
            "display_address": [
                "204 E 43rd St",
                "New York, NY 10017"
            ]
        },
        "phone": "+12129721001",
        "display_phone": "(212) 972-1001",
        "distance": 326.26870062851896
    },
    {
        "id": "oTkzgr7hzOAdlP99Auj3GQ",
        "alias": "momosan-ramen-and-sake-new-york-2",
        "name": "Momosan Ramen & Sake",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/Z6hFFtvLlEIf5SqwxckvmQ/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/momosan-ramen-and-sake-new-york-2?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1449,
        "categories": [
            {
                "alias": "ramen",
                "title": "Ramen"
            },
            {
                "alias": "tapasmallplates",
                "title": "Tapas/Small Plates"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.74993,
            "longitude": -73.97746
        },
        "transactions": [],
        "price": "$$",
        "location": {
            "address1": "342 Lexington Ave",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "342 Lexington Ave",
                "New York, NY 10016"
            ]
        },
        "phone": "+16462015529",
        "display_phone": "(646) 201-5529",
        "distance": 118.55521276227293
    },
    {
        "id": "7iY35991NhQ1AShJZCNZgA",
        "alias": "sakagura-new-york",
        "name": "Sakagura",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/f-Z182ojMUKsP9qamFfXRQ/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/sakagura-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1709,
        "categories": [
            {
                "alias": "japanese",
                "title": "Japanese"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7516467024541,
            "longitude": -73.9729489318165
        },
        "transactions": [],
        "price": "$$$",
        "location": {
            "address1": "211 E 43rd St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10017",
            "country": "US",
            "state": "NY",
            "display_address": [
                "211 E 43rd St",
                "New York, NY 10017"
            ]
        },
        "phone": "+12129537253",
        "display_phone": "(212) 953-7253",
        "distance": 400.28434925874313
    },
    {
        "id": "cxtg17yy1YFt8gHRckUQcw",
        "alias": "num-pang-kitchen-new-york-2",
        "name": "Num Pang Kitchen",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/V9Y92UBe7WkgIEJwhTzrCw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/num-pang-kitchen-new-york-2?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1104,
        "categories": [
            {
                "alias": "cambodian",
                "title": "Cambodian"
            },
            {
                "alias": "sandwiches",
                "title": "Sandwiches"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7503831245874,
            "longitude": -73.9761078759491
        },
        "transactions": [
            "delivery",
            "pickup"
        ],
        "price": "$$",
        "location": {
            "address1": "140 E 41st St",
            "address2": null,
            "address3": "",
            "city": "New York",
            "zip_code": "10017",
            "country": "US",
            "state": "NY",
            "display_address": [
                "140 E 41st St",
                "New York, NY 10017"
            ]
        },
        "phone": "+12128678889",
        "display_phone": "(212) 867-8889",
        "distance": 133.98230143649343
    },
    {
        "id": "lESxFswvOPUFUzj6HsTnqw",
        "alias": "sons-of-thunder-new-york-4",
        "name": "Sons of Thunder",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/UDUrMLOEw6auFfCMQt-EGg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/sons-of-thunder-new-york-4?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 713,
        "categories": [
            {
                "alias": "hotdog",
                "title": "Hot Dogs"
            },
            {
                "alias": "poke",
                "title": "Poke"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.74786,
            "longitude": -73.97589
        },
        "transactions": [
            "delivery",
            "pickup"
        ],
        "price": "$$",
        "location": {
            "address1": "204 E 38th St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "204 E 38th St",
                "New York, NY 10016"
            ]
        },
        "phone": "+16468632212",
        "display_phone": "(646) 863-2212",
        "distance": 154.15739567098234
    },
    {
        "id": "MJJi_5tGkWYI1VReTjhCCA",
        "alias": "bryant-park-new-york-2",
        "name": "Bryant Park",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/e3C0L_4bryzvPU6PbmZ_dA/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/bryant-park-new-york-2?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1077,
        "categories": [
            {
                "alias": "parks",
                "title": "Parks"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.7538842911333,
            "longitude": -73.9836510457098
        },
        "transactions": [],
        "location": {
            "address1": "41 W 40th St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10018",
            "country": "US",
            "state": "NY",
            "display_address": [
                "41 W 40th St",
                "New York, NY 10018"
            ]
        },
        "phone": "+12127684242",
        "display_phone": "(212) 768-4242",
        "distance": 799.791777393767
    },
    {
        "id": "sSSV7G16yUijp-Peq4fmsA",
        "alias": "benjamin-steakhouse-new-york-2",
        "name": "Benjamin Steakhouse",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/wanEz7BJwOUiLHSHpXH4BQ/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/benjamin-steakhouse-new-york-2?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1101,
        "categories": [
            {
                "alias": "steak",
                "title": "Steakhouses"
            },
            {
                "alias": "seafood",
                "title": "Seafood"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7518,
            "longitude": -73.97896
        },
        "transactions": [
            "delivery"
        ],
        "price": "$$$$",
        "location": {
            "address1": "52 E 41st St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10017",
            "country": "US",
            "state": "NY",
            "display_address": [
                "52 E 41st St",
                "New York, NY 10017"
            ]
        },
        "phone": "+12122979177",
        "display_phone": "(212) 297-9177",
        "distance": 358.2159059778007
    },
    {
        "id": "1LIptXhtDh58vAA-QPFL4w",
        "alias": "cask-bar-and-kitchen-new-york",
        "name": "Cask Bar & Kitchen",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/CshY4h5dQck2Giin-TZa6Q/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/cask-bar-and-kitchen-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1302,
        "categories": [
            {
                "alias": "bars",
                "title": "Bars"
            },
            {
                "alias": "newamerican",
                "title": "American (New)"
            },
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.745414,
            "longitude": -73.979004
        },
        "transactions": [
            "delivery",
            "pickup",
            "restaurant_reservation"
        ],
        "price": "$$",
        "location": {
            "address1": "167 E 33rd St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "167 E 33rd St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12123004924",
        "display_phone": "(212) 300-4924",
        "distance": 473.62050238880306
    },
    {
        "id": "jNRT5vY1Hvp5WDTaHy4Mhw",
        "alias": "sarges-delicatessen-and-diner-new-york-2",
        "name": "Sarge's Delicatessen & Diner",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/NmwQpoVgSjqFH_SIZXjuqg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/sarges-delicatessen-and-diner-new-york-2?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 996,
        "categories": [
            {
                "alias": "delis",
                "title": "Delis"
            },
            {
                "alias": "sandwiches",
                "title": "Sandwiches"
            },
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7473279523583,
            "longitude": -73.9772017867971
        },
        "transactions": [
            "delivery",
            "pickup"
        ],
        "price": "$$",
        "location": {
            "address1": "548 3rd Ave",
            "address2": null,
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "548 3rd Ave",
                "New York, NY 10016"
            ]
        },
        "phone": "+12126790442",
        "display_phone": "(212) 679-0442",
        "distance": 218.33103890763516
    },
    {
        "id": "kctef59qqlzJNqAc1ZGEvg",
        "alias": "the-capital-grille-new-york",
        "name": "The Capital Grille",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/yUFQDDkS7O0ENkd9zS7y5g/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/the-capital-grille-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 768,
        "categories": [
            {
                "alias": "steak",
                "title": "Steakhouses"
            },
            {
                "alias": "seafood",
                "title": "Seafood"
            },
            {
                "alias": "wine_bars",
                "title": "Wine Bars"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.75114,
            "longitude": -73.97491
        },
        "transactions": [],
        "price": "$$$",
        "location": {
            "address1": "155 E 42nd St",
            "address2": null,
            "address3": "",
            "city": "New York",
            "zip_code": "10017",
            "country": "US",
            "state": "NY",
            "display_address": [
                "155 E 42nd St",
                "New York, NY 10017"
            ]
        },
        "phone": "+12129532000",
        "display_phone": "(212) 953-2000",
        "distance": 254.33384341718153
    },
    {
        "id": "LQHegfNHe7ylY3bocrFlpg",
        "alias": "calle-dao-bryant-park-new-york",
        "name": "Calle Dao - Bryant Park",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/VWVDXCpZcx80WNs_9dBnWQ/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/calle-dao-bryant-park-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1503,
        "categories": [
            {
                "alias": "cuban",
                "title": "Cuban"
            },
            {
                "alias": "cocktailbars",
                "title": "Cocktail Bars"
            },
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.752155,
            "longitude": -73.984223
        },
        "transactions": [
            "delivery",
            "pickup"
        ],
        "price": "$$",
        "location": {
            "address1": "38 W 39th St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10018",
            "country": "US",
            "state": "NY",
            "display_address": [
                "38 W 39th St",
                "New York, NY 10018"
            ]
        },
        "phone": "+12122219002",
        "display_phone": "(212) 221-9002",
        "distance": 733.0708523085245
    },
    {
        "id": "ryvBsB9FrBBZDak87iGS1w",
        "alias": "the-seafire-grill-new-york-4",
        "name": "The Seafire Grill",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/XfmiprKBLVpP5ukKd1GnrA/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/the-seafire-grill-new-york-4?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1049,
        "categories": [
            {
                "alias": "seafood",
                "title": "Seafood"
            },
            {
                "alias": "steak",
                "title": "Steakhouses"
            },
            {
                "alias": "bars",
                "title": "Bars"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.7547012104496,
            "longitude": -73.972255513072
        },
        "transactions": [],
        "price": "$$$",
        "location": {
            "address1": "158 E 48th St",
            "address2": null,
            "address3": "",
            "city": "New York",
            "zip_code": "10017",
            "country": "US",
            "state": "NY",
            "display_address": [
                "158 E 48th St",
                "New York, NY 10017"
            ]
        },
        "phone": "+12129353785",
        "display_phone": "(212) 935-3785",
        "distance": 705.5463873891749
    },
    {
        "id": "bJgl6cDIBIMlgrntQbxt1g",
        "alias": "café-zaiya-new-york-4",
        "name": "Café Zaiya",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/TyMYZGPLqqEOgD65GXHQmw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/caf%C3%A9-zaiya-new-york-4?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1141,
        "categories": [
            {
                "alias": "japanese",
                "title": "Japanese"
            },
            {
                "alias": "desserts",
                "title": "Desserts"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7523,
            "longitude": -73.98043
        },
        "transactions": [
            "delivery",
            "pickup"
        ],
        "price": "$",
        "location": {
            "address1": "18 E 41st St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10017",
            "country": "US",
            "state": "NY",
            "display_address": [
                "18 E 41st St",
                "New York, NY 10017"
            ]
        },
        "phone": "+12127790740",
        "display_phone": "(212) 779-0740",
        "distance": 475.2375922631559
    },
    {
        "id": "c3eMI4_o4dPDDhPV_ibBYQ",
        "alias": "ess-a-bagel-new-york",
        "name": "Ess-a-Bagel",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/yt3JyNOwoSOmeyPXza6O7w/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/ess-a-bagel-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 3195,
        "categories": [
            {
                "alias": "bakeries",
                "title": "Bakeries"
            },
            {
                "alias": "bagels",
                "title": "Bagels"
            },
            {
                "alias": "delis",
                "title": "Delis"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.756300559255,
            "longitude": -73.9703701025162
        },
        "transactions": [
            "delivery",
            "pickup"
        ],
        "price": "$",
        "location": {
            "address1": "831 3rd Ave",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10022",
            "country": "US",
            "state": "NY",
            "display_address": [
                "831 3rd Ave",
                "New York, NY 10022"
            ]
        },
        "phone": "+12129801010",
        "display_phone": "(212) 980-1010",
        "distance": 940.2075278443751
    },
    {
        "id": "bEXTA_Gwo2oVg4gnFd9fNA",
        "alias": "ai-fiori-new-york",
        "name": "Ai Fiori",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/H88_SHG7RAD_IB8T5G8NPA/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/ai-fiori-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1182,
        "categories": [
            {
                "alias": "italian",
                "title": "Italian"
            },
            {
                "alias": "french",
                "title": "French"
            },
            {
                "alias": "cocktailbars",
                "title": "Cocktail Bars"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7500752,
            "longitude": -73.9837835
        },
        "transactions": [],
        "price": "$$$$",
        "location": {
            "address1": "400 5th Ave",
            "address2": "Ste 2",
            "address3": "",
            "city": "New York",
            "zip_code": "10018",
            "country": "US",
            "state": "NY",
            "display_address": [
                "400 5th Ave",
                "Ste 2",
                "New York, NY 10018"
            ]
        },
        "phone": "+12126138660",
        "display_phone": "(212) 613-8660",
        "distance": 626.0891876859115
    },
    {
        "id": "csVEpHy5KJoFvM1qp5XwLQ",
        "alias": "le-parisien-new-york",
        "name": "Le Parisien",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/o-2sMdEwm9ElaF9y7S_7bg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/le-parisien-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 903,
        "categories": [
            {
                "alias": "french",
                "title": "French"
            },
            {
                "alias": "salad",
                "title": "Salad"
            },
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7454079308793,
            "longitude": -73.9791478306885
        },
        "transactions": [
            "restaurant_reservation"
        ],
        "price": "$$",
        "location": {
            "address1": "163 East 33rd St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "163 East 33rd St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12128895489",
        "display_phone": "(212) 889-5489",
        "distance": 479.8602060972285
    },
    {
        "id": "xq0cX_DgxiJMXwhmEl9kUA",
        "alias": "café-china-new-york-2",
        "name": "Café China",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/XSudwvbbAfYFYZViZB5ucw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/caf%C3%A9-china-new-york-2?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1384,
        "categories": [
            {
                "alias": "szechuan",
                "title": "Szechuan"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7499225208569,
            "longitude": -73.9819464127197
        },
        "transactions": [
            "delivery",
            "pickup",
            "restaurant_reservation"
        ],
        "price": "$$",
        "location": {
            "address1": "13 E 37th St",
            "address2": null,
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "13 E 37th St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12122132810",
        "display_phone": "(212) 213-2810",
        "distance": 470.6276766088871
    },
    {
        "id": "xHBpwGzxxbC3vTahHWdABg",
        "alias": "perk-kafe-new-york",
        "name": "Perk Kafe",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/GN_GrTR4Gm9JyqKIZOHZEw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/perk-kafe-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 365,
        "categories": [
            {
                "alias": "coffee",
                "title": "Coffee & Tea"
            },
            {
                "alias": "bakeries",
                "title": "Bakeries"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.747764735907,
            "longitude": -73.9770407671092
        },
        "transactions": [],
        "price": "$",
        "location": {
            "address1": "162 E 37th St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "162 E 37th St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12126867375",
        "display_phone": "(212) 686-7375",
        "distance": 167.92620498956626
    },
    {
        "id": "xiwnLiNhSlEN4CDcurqsLQ",
        "alias": "2nd-ave-deli-new-york",
        "name": "2nd Ave Deli",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/u9pAnwZlqehOgc1FV572eA/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/2nd-ave-deli-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1123,
        "categories": [
            {
                "alias": "delis",
                "title": "Delis"
            },
            {
                "alias": "kosher",
                "title": "Kosher"
            },
            {
                "alias": "sandwiches",
                "title": "Sandwiches"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.74519,
            "longitude": -73.97918
        },
        "transactions": [
            "delivery",
            "pickup"
        ],
        "price": "$$",
        "location": {
            "address1": "162 E 33rd St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "162 E 33rd St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12126899000",
        "display_phone": "(212) 689-9000",
        "distance": 502.0532055904801
    }
],
[
    {
        "id": "MKYhiSeXjahxh9O4Gqnimw",
        "alias": "grace-street-new-york",
        "name": "Grace Street",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/-Fa8jLXSUfiT2p4LmHTNEg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/grace-street-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 2049,
        "categories": [
            {
                "alias": "coffee",
                "title": "Coffee & Tea"
            },
            {
                "alias": "desserts",
                "title": "Desserts"
            },
            {
                "alias": "shavedice",
                "title": "Shaved Ice"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7478576793883,
            "longitude": -73.9865590631962
        },
        "transactions": [],
        "price": "$$",
        "location": {
            "address1": "17 W 32nd St",
            "address2": null,
            "address3": "",
            "city": "New York",
            "zip_code": "10001",
            "country": "US",
            "state": "NY",
            "display_address": [
                "17 W 32nd St",
                "New York, NY 10001"
            ]
        },
        "phone": "+19177452125",
        "display_phone": "(917) 745-2125",
        "distance": 236.49882491093626
    },
    {
        "id": "ogCC-lJJYnwXDvKGmKZ6Sw",
        "alias": "woorijip-authentic-korean-food-new-york",
        "name": "Woorijip Authentic Korean Food",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/NZcGFutBjf1frDkslh6urw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/woorijip-authentic-korean-food-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 2521,
        "categories": [
            {
                "alias": "korean",
                "title": "Korean"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.74747,
            "longitude": -73.98648
        },
        "transactions": [],
        "price": "$",
        "location": {
            "address1": "12 W 32nd St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10001",
            "country": "US",
            "state": "NY",
            "display_address": [
                "12 W 32nd St",
                "New York, NY 10001"
            ]
        },
        "phone": "+12122441115",
        "display_phone": "(212) 244-1115",
        "distance": 221.01140965280902
    },
    {
        "id": "klAhw3xLQi9GF1tf_HnS7w",
        "alias": "izakaya-mew-new-york-3",
        "name": "Izakaya MEW",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/Iix5fXx6WGqv-G2gyENd4A/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/izakaya-mew-new-york-3?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 2031,
        "categories": [
            {
                "alias": "tapas",
                "title": "Tapas Bars"
            },
            {
                "alias": "sushi",
                "title": "Sushi Bars"
            },
            {
                "alias": "izakaya",
                "title": "Izakaya"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7501853096499,
            "longitude": -73.9863203465939
        },
        "transactions": [
            "pickup",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "53 W 35th St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10001",
            "country": "US",
            "state": "NY",
            "display_address": [
                "53 W 35th St",
                "New York, NY 10001"
            ]
        },
        "phone": "+16463689384",
        "display_phone": "(646) 368-9384",
        "distance": 405.39229048527113
    },
    {
        "id": "raqwXUBlnc0e8c7CYmxEJQ",
        "alias": "scarpetta-new-york",
        "name": "Scarpetta",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/MuSpWrm8AmcalPlKf9gBQg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/scarpetta-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1779,
        "categories": [
            {
                "alias": "italian",
                "title": "Italian"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.744509,
            "longitude": -73.9856
        },
        "transactions": [],
        "price": "$$$",
        "location": {
            "address1": "88 Madison Ave",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "88 Madison Ave",
                "New York, NY 10016"
            ]
        },
        "phone": "+12126910555",
        "display_phone": "(212) 691-0555",
        "distance": 307.68069207032784
    },
    {
        "id": "FEVQpbOPOwAPNIgO7D3xxw",
        "alias": "shake-shack-new-york-2",
        "name": "Shake Shack",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/J0UoRJKdaMl0EPdgxYIlKw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/shake-shack-new-york-2?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 5514,
        "categories": [
            {
                "alias": "burgers",
                "title": "Burgers"
            },
            {
                "alias": "foodstands",
                "title": "Food Stands"
            },
            {
                "alias": "icecream",
                "title": "Ice Cream & Frozen Yogurt"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7414000197233,
            "longitude": -73.98815019045
        },
        "transactions": [
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "Madison Square Park",
            "address2": "",
            "address3": "E 23rd St & Madison Ave",
            "city": "New York",
            "zip_code": "10010",
            "country": "US",
            "state": "NY",
            "display_address": [
                "Madison Square Park",
                "E 23rd St & Madison Ave",
                "New York, NY 10010"
            ]
        },
        "phone": "+12128896600",
        "display_phone": "(212) 889-6600",
        "distance": 713.8167944785401
    },
    {
        "id": "FZpm4_fbd6P984foOUejWg",
        "alias": "jongro-bbq-new-york-3",
        "name": "Jongro BBQ",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/zTVtLZtqwAFqYPXwuk1t5w/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/jongro-bbq-new-york-3?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1566,
        "categories": [
            {
                "alias": "korean",
                "title": "Korean"
            },
            {
                "alias": "bbq",
                "title": "Barbeque"
            },
            {
                "alias": "beerbar",
                "title": "Beer Bar"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.747514,
            "longitude": -73.986884
        },
        "transactions": [],
        "price": "$$",
        "location": {
            "address1": "22 W 32nd St",
            "address2": "Fl 2",
            "address3": "",
            "city": "New York",
            "zip_code": "10001",
            "country": "US",
            "state": "NY",
            "display_address": [
                "22 W 32nd St",
                "Fl 2",
                "New York, NY 10001"
            ]
        },
        "phone": "+12124732233",
        "display_phone": "(212) 473-2233",
        "distance": 250.2664439384473
    },
    {
        "id": "qY1o1MhoRyN84RRhUJtvpQ",
        "alias": "her-name-is-han-new-york-3",
        "name": "Her Name Is Han",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/v-Q1v7y9q8FbDCzgwAa8Xw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/her-name-is-han-new-york-3?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1031,
        "categories": [
            {
                "alias": "korean",
                "title": "Korean"
            },
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            },
            {
                "alias": "cocktailbars",
                "title": "Cocktail Bars"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.74626,
            "longitude": -73.98473
        },
        "transactions": [
            "pickup",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "17 E 31st St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "17 E 31st St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12127799990",
        "display_phone": "(212) 779-9990",
        "distance": 109.31875747879553
    },
    {
        "id": "g2IUVjeIwx5x6x9u1cLS6w",
        "alias": "empire-state-building-new-york-2",
        "name": "Empire State Building",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/TR1QO-8mvJefsIucVASREQ/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/empire-state-building-new-york-2?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1905,
        "categories": [
            {
                "alias": "landmarks",
                "title": "Landmarks & Historical Buildings"
            },
            {
                "alias": "observatories",
                "title": "Observatories"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7484,
            "longitude": -73.9856644
        },
        "transactions": [],
        "location": {
            "address1": "20 W 34th St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10118",
            "country": "US",
            "state": "NY",
            "display_address": [
                "20 W 34th St",
                "New York, NY 10118"
            ]
        },
        "phone": "+12127363100",
        "display_phone": "(212) 736-3100",
        "distance": 210.36617569262793
    },
    {
        "id": "nRO136GRieGtxz18uD61DA",
        "alias": "eleven-madison-park-new-york",
        "name": "Eleven Madison Park",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/-80vpN8iZykUnx6y8Q-jRw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/eleven-madison-park-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 2034,
        "categories": [
            {
                "alias": "newamerican",
                "title": "American (New)"
            },
            {
                "alias": "french",
                "title": "French"
            },
            {
                "alias": "cocktailbars",
                "title": "Cocktail Bars"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.7416907417333,
            "longitude": -73.9872074872255
        },
        "transactions": [],
        "price": "$$$$",
        "location": {
            "address1": "11 Madison Ave",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10010",
            "country": "US",
            "state": "NY",
            "display_address": [
                "11 Madison Ave",
                "New York, NY 10010"
            ]
        },
        "phone": "+12128890905",
        "display_phone": "(212) 889-0905",
        "distance": 648.8836417821586
    },
    {
        "id": "pQuZDnefX038xurT1BhDXA",
        "alias": "keens-steakhouse-new-york",
        "name": "Keens Steakhouse",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/Wt-lr0rX2f-lncs05SWDlA/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/keens-steakhouse-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 2351,
        "categories": [
            {
                "alias": "steak",
                "title": "Steakhouses"
            },
            {
                "alias": "desserts",
                "title": "Desserts"
            },
            {
                "alias": "pubs",
                "title": "Pubs"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.75071,
            "longitude": -73.98652
        },
        "transactions": [],
        "price": "$$$$",
        "location": {
            "address1": "72 W 36th St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10018",
            "country": "US",
            "state": "NY",
            "display_address": [
                "72 W 36th St",
                "New York, NY 10018"
            ]
        },
        "phone": "+12129473636",
        "display_phone": "(212) 947-3636",
        "distance": 458.75433914648187
    },
    {
        "id": "j1S3NUrkB3BVT49n_e76NQ",
        "alias": "best-bagel-and-coffee-new-york",
        "name": "Best Bagel & Coffee",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/9-8DVzhwfzFS5GUCq3O6NA/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/best-bagel-and-coffee-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 2790,
        "categories": [
            {
                "alias": "bagels",
                "title": "Bagels"
            },
            {
                "alias": "coffee",
                "title": "Coffee & Tea"
            },
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.7522683,
            "longitude": -73.9910861
        },
        "transactions": [],
        "price": "$",
        "location": {
            "address1": "225 W 35th St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10001",
            "country": "US",
            "state": "NY",
            "display_address": [
                "225 W 35th St",
                "New York, NY 10001"
            ]
        },
        "phone": "+12125644409",
        "display_phone": "(212) 564-4409",
        "distance": 837.2057833381101
    },
    {
        "id": "xZ96vaoL-cQjfotmUKtjJQ",
        "alias": "barn-joo-35-new-york",
        "name": "Barn Joo 35",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/1R5CgYlK5qGUhKZOvZThKw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/barn-joo-35-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1394,
        "categories": [
            {
                "alias": "korean",
                "title": "Korean"
            },
            {
                "alias": "gastropubs",
                "title": "Gastropubs"
            },
            {
                "alias": "tapasmallplates",
                "title": "Tapas/Small Plates"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.74964,
            "longitude": -73.98582
        },
        "transactions": [
            "delivery",
            "restaurant_reservation",
            "pickup"
        ],
        "price": "$$",
        "location": {
            "address1": "34 W 35th St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10001",
            "country": "US",
            "state": "NY",
            "display_address": [
                "34 W 35th St",
                "New York, NY 10001"
            ]
        },
        "phone": "+12125644430",
        "display_phone": "(212) 564-4430",
        "distance": 334.41308894537207
    },
    {
        "id": "xWUL-j6TQyKQHIfOtetu-Q",
        "alias": "hangawi-new-york",
        "name": "Hangawi",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/5Vq0yzqN8MRQyLGpb1Mw4Q/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/hangawi-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1077,
        "categories": [
            {
                "alias": "vegetarian",
                "title": "Vegetarian"
            },
            {
                "alias": "korean",
                "title": "Korean"
            },
            {
                "alias": "vegan",
                "title": "Vegan"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.746737,
            "longitude": -73.984662
        },
        "transactions": [],
        "price": "$$$",
        "location": {
            "address1": "12 E 32nd St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "12 E 32nd St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12122130077",
        "display_phone": "(212) 213-0077",
        "distance": 63.148867727981944
    },
    {
        "id": "sSQ3dtC8nbfeT6srFiiIlA",
        "alias": "stumptown-coffee-roasters-new-york",
        "name": "Stumptown Coffee Roasters",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/MjfyS99JsOMjsX51tdcHWw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/stumptown-coffee-roasters-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1356,
        "categories": [
            {
                "alias": "coffee",
                "title": "Coffee & Tea"
            },
            {
                "alias": "coffeeroasteries",
                "title": "Coffee Roasteries"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.7456663381275,
            "longitude": -73.9880916348562
        },
        "transactions": [],
        "price": "$$",
        "location": {
            "address1": "20 W 29th St",
            "address2": "",
            "address3": "The Ace Hotel",
            "city": "New York",
            "zip_code": "10001",
            "country": "US",
            "state": "NY",
            "display_address": [
                "20 W 29th St",
                "The Ace Hotel",
                "New York, NY 10001"
            ]
        },
        "phone": "+18557113385",
        "display_phone": "(855) 711-3385",
        "distance": 375.47264946768837
    },
    {
        "id": "gXnC_aZR09BvqEQKGKFjBg",
        "alias": "bcd-tofu-house-new-york-3",
        "name": "BCD Tofu House",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/o1UZWG8neCdH5M4jzS_lig/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/bcd-tofu-house-new-york-3?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1827,
        "categories": [
            {
                "alias": "korean",
                "title": "Korean"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.747503631444,
            "longitude": -73.9862447208321
        },
        "transactions": [],
        "price": "$$",
        "location": {
            "address1": "5W 32nd St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10001",
            "country": "US",
            "state": "NY",
            "display_address": [
                "5W 32nd St",
                "New York, NY 10001"
            ]
        },
        "phone": "+12129671900",
        "display_phone": "(212) 967-1900",
        "distance": 197.92774411516152
    },
    {
        "id": "B55Ocx5RBWxo6AGSucYSIA",
        "alias": "ilili-new-york-2",
        "name": "ilili",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/ReJfm8A_pE-eK9NSnyHfcg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/ilili-new-york-2?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 2250,
        "categories": [
            {
                "alias": "mediterranean",
                "title": "Mediterranean"
            },
            {
                "alias": "lebanese",
                "title": "Lebanese"
            },
            {
                "alias": "cocktailbars",
                "title": "Cocktail Bars"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.74435,
            "longitude": -73.98778
        },
        "transactions": [
            "pickup",
            "delivery"
        ],
        "price": "$$$",
        "location": {
            "address1": "236 5th Ave",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10001",
            "country": "US",
            "state": "NY",
            "display_address": [
                "236 5th Ave",
                "New York, NY 10001"
            ]
        },
        "phone": "+12126832929",
        "display_phone": "(212) 683-2929",
        "distance": 438.06815176828934
    },
    {
        "id": "a0IET3_yCFcO36OqGSsisg",
        "alias": "eataly-new-york",
        "name": "Eataly",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/9Xzihhf_KcZieyru9TX-pg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/eataly-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 5253,
        "categories": [
            {
                "alias": "italian",
                "title": "Italian"
            },
            {
                "alias": "grocery",
                "title": "Grocery"
            },
            {
                "alias": "cafes",
                "title": "Cafes"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.74195877796,
            "longitude": -73.989716662832
        },
        "transactions": [],
        "price": "$$",
        "location": {
            "address1": "200 5th Ave",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10010",
            "country": "US",
            "state": "NY",
            "display_address": [
                "200 5th Ave",
                "New York, NY 10010"
            ]
        },
        "phone": "+12122292560",
        "display_phone": "(212) 229-2560",
        "distance": 738.8759654587675
    },
    {
        "id": "JeCtYANe0eqW8xe1SN3lWg",
        "alias": "turntable-chicken-jazz-new-york-2",
        "name": "Turntable Chicken Jazz",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/uivaMzcNwduJpPEDWA5GlQ/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/turntable-chicken-jazz-new-york-2?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1868,
        "categories": [
            {
                "alias": "chicken_wings",
                "title": "Chicken Wings"
            },
            {
                "alias": "korean",
                "title": "Korean"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.74828,
            "longitude": -73.98649
        },
        "transactions": [],
        "price": "$$",
        "location": {
            "address1": "20 W 33rd St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10001",
            "country": "US",
            "state": "NY",
            "display_address": [
                "20 W 33rd St",
                "New York, NY 10001"
            ]
        },
        "phone": "+12127149700",
        "display_phone": "(212) 714-9700",
        "distance": 241.30022537445936
    },
    {
        "id": "1z5Nu66M6W8mk5Ap4osZwA",
        "alias": "the-nomad-restaurant-new-york",
        "name": "The NoMad Restaurant",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/ct1j_pmuauuFqGK5p2IMTg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/the-nomad-restaurant-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1399,
        "categories": [
            {
                "alias": "french",
                "title": "French"
            },
            {
                "alias": "newamerican",
                "title": "American (New)"
            },
            {
                "alias": "gastropubs",
                "title": "Gastropubs"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7449,
            "longitude": -73.988482
        },
        "transactions": [],
        "price": "$$$",
        "location": {
            "address1": "1170 Broadway",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10001",
            "country": "US",
            "state": "NY",
            "display_address": [
                "1170 Broadway",
                "New York, NY 10001"
            ]
        },
        "phone": "+13474725660",
        "display_phone": "(347) 472-5660",
        "distance": 444.0606088798347
    },
    {
        "id": "srhEv1OqoK9W5JRdiMWDyw",
        "alias": "ayza-wine-and-chocolate-bar-new-york-6",
        "name": "Ayza Wine & Chocolate Bar",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/SeMjfr3Ga1xPXht7k9DGcg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/ayza-wine-and-chocolate-bar-new-york-6?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1488,
        "categories": [
            {
                "alias": "wine_bars",
                "title": "Wine Bars"
            },
            {
                "alias": "desserts",
                "title": "Desserts"
            },
            {
                "alias": "mediterranean",
                "title": "Mediterranean"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7471774721074,
            "longitude": -73.987011312828
        },
        "transactions": [
            "restaurant_reservation"
        ],
        "price": "$$",
        "location": {
            "address1": "11 W 31st St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10001",
            "country": "US",
            "state": "NY",
            "display_address": [
                "11 W 31st St",
                "New York, NY 10001"
            ]
        },
        "phone": "+12127142992",
        "display_phone": "(212) 714-2992",
        "distance": 255.038232184515
    }
],
[
    {
        "id": "8HkB3JfIj7_g-MN5ujoRig",
        "alias": "grand-central-terminal-new-york",
        "name": "Grand Central Terminal",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/t9Pl11kD4bs9J3AJRJlHyQ/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/grand-central-terminal-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1329,
        "categories": [
            {
                "alias": "landmarks",
                "title": "Landmarks & Historical Buildings"
            },
            {
                "alias": "trainstations",
                "title": "Train Stations"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.752793,
            "longitude": -73.977165
        },
        "transactions": [],
        "location": {
            "address1": "89 E 42nd St",
            "address2": null,
            "address3": "",
            "city": "New York",
            "zip_code": "10017",
            "country": "US",
            "state": "NY",
            "display_address": [
                "89 E 42nd St",
                "New York, NY 10017"
            ]
        },
        "phone": "+12123402583",
        "display_phone": "(212) 340-2583",
        "distance": 430.4348188825917
    },
    {
        "id": "7EaiwMVaNdQibSs0yYkE5Q",
        "alias": "sushi-yasuda-new-york",
        "name": "Sushi Yasuda",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/z6GvhobHxGaKtpfXBFd5Lg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/sushi-yasuda-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 2047,
        "categories": [
            {
                "alias": "japanese",
                "title": "Japanese"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.75113,
            "longitude": -73.97347
        },
        "transactions": [],
        "price": "$$$$",
        "location": {
            "address1": "204 E 43rd St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10017",
            "country": "US",
            "state": "NY",
            "display_address": [
                "204 E 43rd St",
                "New York, NY 10017"
            ]
        },
        "phone": "+12129721001",
        "display_phone": "(212) 972-1001",
        "distance": 356.31445451877147
    },
    {
        "id": "oTkzgr7hzOAdlP99Auj3GQ",
        "alias": "momosan-ramen-and-sake-new-york-2",
        "name": "Momosan Ramen & Sake",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/Z6hFFtvLlEIf5SqwxckvmQ/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/momosan-ramen-and-sake-new-york-2?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1449,
        "categories": [
            {
                "alias": "ramen",
                "title": "Ramen"
            },
            {
                "alias": "tapasmallplates",
                "title": "Tapas/Small Plates"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.74993,
            "longitude": -73.97746
        },
        "transactions": [],
        "price": "$$",
        "location": {
            "address1": "342 Lexington Ave",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "342 Lexington Ave",
                "New York, NY 10016"
            ]
        },
        "phone": "+16462015529",
        "display_phone": "(646) 201-5529",
        "distance": 131.39892154318125
    },
    {
        "id": "7iY35991NhQ1AShJZCNZgA",
        "alias": "sakagura-new-york",
        "name": "Sakagura",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/f-Z182ojMUKsP9qamFfXRQ/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/sakagura-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1709,
        "categories": [
            {
                "alias": "japanese",
                "title": "Japanese"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7516467024541,
            "longitude": -73.9729489318165
        },
        "transactions": [],
        "price": "$$$",
        "location": {
            "address1": "211 E 43rd St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10017",
            "country": "US",
            "state": "NY",
            "display_address": [
                "211 E 43rd St",
                "New York, NY 10017"
            ]
        },
        "phone": "+12129537253",
        "display_phone": "(212) 953-7253",
        "distance": 430.6794589265456
    },
    {
        "id": "lESxFswvOPUFUzj6HsTnqw",
        "alias": "sons-of-thunder-new-york-4",
        "name": "Sons of Thunder",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/UDUrMLOEw6auFfCMQt-EGg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/sons-of-thunder-new-york-4?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 713,
        "categories": [
            {
                "alias": "hotdog",
                "title": "Hot Dogs"
            },
            {
                "alias": "poke",
                "title": "Poke"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.74786,
            "longitude": -73.97589
        },
        "transactions": [
            "delivery",
            "pickup"
        ],
        "price": "$$",
        "location": {
            "address1": "204 E 38th St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "204 E 38th St",
                "New York, NY 10016"
            ]
        },
        "phone": "+16468632212",
        "display_phone": "(646) 863-2212",
        "distance": 133.24557487948937
    },
    {
        "id": "cxtg17yy1YFt8gHRckUQcw",
        "alias": "num-pang-kitchen-new-york-2",
        "name": "Num Pang Kitchen",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/V9Y92UBe7WkgIEJwhTzrCw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/num-pang-kitchen-new-york-2?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1104,
        "categories": [
            {
                "alias": "cambodian",
                "title": "Cambodian"
            },
            {
                "alias": "sandwiches",
                "title": "Sandwiches"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7503831245874,
            "longitude": -73.9761078759491
        },
        "transactions": [
            "delivery",
            "pickup"
        ],
        "price": "$$",
        "location": {
            "address1": "140 E 41st St",
            "address2": null,
            "address3": "",
            "city": "New York",
            "zip_code": "10017",
            "country": "US",
            "state": "NY",
            "display_address": [
                "140 E 41st St",
                "New York, NY 10017"
            ]
        },
        "phone": "+12128678889",
        "display_phone": "(212) 867-8889",
        "distance": 165.48555400402242
    },
    {
        "id": "MJJi_5tGkWYI1VReTjhCCA",
        "alias": "bryant-park-new-york-2",
        "name": "Bryant Park",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/e3C0L_4bryzvPU6PbmZ_dA/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/bryant-park-new-york-2?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1077,
        "categories": [
            {
                "alias": "parks",
                "title": "Parks"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.7538842911333,
            "longitude": -73.9836510457098
        },
        "transactions": [],
        "location": {
            "address1": "41 W 40th St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10018",
            "country": "US",
            "state": "NY",
            "display_address": [
                "41 W 40th St",
                "New York, NY 10018"
            ]
        },
        "phone": "+12127684242",
        "display_phone": "(212) 768-4242",
        "distance": 808.2358594674201
    },
    {
        "id": "sSSV7G16yUijp-Peq4fmsA",
        "alias": "benjamin-steakhouse-new-york-2",
        "name": "Benjamin Steakhouse",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/wanEz7BJwOUiLHSHpXH4BQ/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/benjamin-steakhouse-new-york-2?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1101,
        "categories": [
            {
                "alias": "steak",
                "title": "Steakhouses"
            },
            {
                "alias": "seafood",
                "title": "Seafood"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7518,
            "longitude": -73.97896
        },
        "transactions": [
            "delivery"
        ],
        "price": "$$$$",
        "location": {
            "address1": "52 E 41st St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10017",
            "country": "US",
            "state": "NY",
            "display_address": [
                "52 E 41st St",
                "New York, NY 10017"
            ]
        },
        "phone": "+12122979177",
        "display_phone": "(212) 297-9177",
        "distance": 374.0557577783354
    },
    {
        "id": "1LIptXhtDh58vAA-QPFL4w",
        "alias": "cask-bar-and-kitchen-new-york",
        "name": "Cask Bar & Kitchen",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/CshY4h5dQck2Giin-TZa6Q/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/cask-bar-and-kitchen-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1302,
        "categories": [
            {
                "alias": "bars",
                "title": "Bars"
            },
            {
                "alias": "newamerican",
                "title": "American (New)"
            },
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.745414,
            "longitude": -73.979004
        },
        "transactions": [
            "delivery",
            "pickup",
            "restaurant_reservation"
        ],
        "price": "$$",
        "location": {
            "address1": "167 E 33rd St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "167 E 33rd St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12123004924",
        "display_phone": "(212) 300-4924",
        "distance": 441.287540700906
    },
    {
        "id": "jNRT5vY1Hvp5WDTaHy4Mhw",
        "alias": "sarges-delicatessen-and-diner-new-york-2",
        "name": "Sarge's Delicatessen & Diner",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/NmwQpoVgSjqFH_SIZXjuqg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/sarges-delicatessen-and-diner-new-york-2?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 996,
        "categories": [
            {
                "alias": "delis",
                "title": "Delis"
            },
            {
                "alias": "sandwiches",
                "title": "Sandwiches"
            },
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7473279523583,
            "longitude": -73.9772017867971
        },
        "transactions": [
            "delivery",
            "pickup"
        ],
        "price": "$$",
        "location": {
            "address1": "548 3rd Ave",
            "address2": null,
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "548 3rd Ave",
                "New York, NY 10016"
            ]
        },
        "phone": "+12126790442",
        "display_phone": "(212) 679-0442",
        "distance": 186.51423706857602
    },
    {
        "id": "LQHegfNHe7ylY3bocrFlpg",
        "alias": "calle-dao-bryant-park-new-york",
        "name": "Calle Dao - Bryant Park",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/VWVDXCpZcx80WNs_9dBnWQ/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/calle-dao-bryant-park-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1503,
        "categories": [
            {
                "alias": "cuban",
                "title": "Cuban"
            },
            {
                "alias": "cocktailbars",
                "title": "Cocktail Bars"
            },
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.752155,
            "longitude": -73.984223
        },
        "transactions": [
            "delivery",
            "pickup"
        ],
        "price": "$$",
        "location": {
            "address1": "38 W 39th St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10018",
            "country": "US",
            "state": "NY",
            "display_address": [
                "38 W 39th St",
                "New York, NY 10018"
            ]
        },
        "phone": "+12122219002",
        "display_phone": "(212) 221-9002",
        "distance": 733.7951255711813
    },
    {
        "id": "kctef59qqlzJNqAc1ZGEvg",
        "alias": "the-capital-grille-new-york",
        "name": "The Capital Grille",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/yUFQDDkS7O0ENkd9zS7y5g/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/the-capital-grille-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 768,
        "categories": [
            {
                "alias": "steak",
                "title": "Steakhouses"
            },
            {
                "alias": "seafood",
                "title": "Seafood"
            },
            {
                "alias": "wine_bars",
                "title": "Wine Bars"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.75114,
            "longitude": -73.97491
        },
        "transactions": [],
        "price": "$$$",
        "location": {
            "address1": "155 E 42nd St",
            "address2": null,
            "address3": "",
            "city": "New York",
            "zip_code": "10017",
            "country": "US",
            "state": "NY",
            "display_address": [
                "155 E 42nd St",
                "New York, NY 10017"
            ]
        },
        "phone": "+12129532000",
        "display_phone": "(212) 953-2000",
        "distance": 286.58276971388284
    },
    {
        "id": "bJgl6cDIBIMlgrntQbxt1g",
        "alias": "café-zaiya-new-york-4",
        "name": "Café Zaiya",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/TyMYZGPLqqEOgD65GXHQmw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/caf%C3%A9-zaiya-new-york-4?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1141,
        "categories": [
            {
                "alias": "japanese",
                "title": "Japanese"
            },
            {
                "alias": "desserts",
                "title": "Desserts"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7523,
            "longitude": -73.98043
        },
        "transactions": [
            "delivery",
            "pickup"
        ],
        "price": "$",
        "location": {
            "address1": "18 E 41st St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10017",
            "country": "US",
            "state": "NY",
            "display_address": [
                "18 E 41st St",
                "New York, NY 10017"
            ]
        },
        "phone": "+12127790740",
        "display_phone": "(212) 779-0740",
        "distance": 486.24308745841114
    },
    {
        "id": "csVEpHy5KJoFvM1qp5XwLQ",
        "alias": "le-parisien-new-york",
        "name": "Le Parisien",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/o-2sMdEwm9ElaF9y7S_7bg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/le-parisien-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 903,
        "categories": [
            {
                "alias": "french",
                "title": "French"
            },
            {
                "alias": "salad",
                "title": "Salad"
            },
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7454079308793,
            "longitude": -73.9791478306885
        },
        "transactions": [
            "restaurant_reservation"
        ],
        "price": "$$",
        "location": {
            "address1": "163 East 33rd St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "163 East 33rd St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12128895489",
        "display_phone": "(212) 889-5489",
        "distance": 447.54294482485835
    },
    {
        "id": "ryvBsB9FrBBZDak87iGS1w",
        "alias": "the-seafire-grill-new-york-4",
        "name": "The Seafire Grill",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/XfmiprKBLVpP5ukKd1GnrA/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/the-seafire-grill-new-york-4?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1049,
        "categories": [
            {
                "alias": "seafood",
                "title": "Seafood"
            },
            {
                "alias": "steak",
                "title": "Steakhouses"
            },
            {
                "alias": "bars",
                "title": "Bars"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.7547012104496,
            "longitude": -73.972255513072
        },
        "transactions": [],
        "price": "$$$",
        "location": {
            "address1": "158 E 48th St",
            "address2": null,
            "address3": "",
            "city": "New York",
            "zip_code": "10017",
            "country": "US",
            "state": "NY",
            "display_address": [
                "158 E 48th St",
                "New York, NY 10017"
            ]
        },
        "phone": "+12129353785",
        "display_phone": "(212) 935-3785",
        "distance": 737.8263020387492
    },
    {
        "id": "xHBpwGzxxbC3vTahHWdABg",
        "alias": "perk-kafe-new-york",
        "name": "Perk Kafe",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/GN_GrTR4Gm9JyqKIZOHZEw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/perk-kafe-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 365,
        "categories": [
            {
                "alias": "coffee",
                "title": "Coffee & Tea"
            },
            {
                "alias": "bakeries",
                "title": "Bakeries"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.747764735907,
            "longitude": -73.9770407671092
        },
        "transactions": [],
        "price": "$",
        "location": {
            "address1": "162 E 37th St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "162 E 37th St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12126867375",
        "display_phone": "(212) 686-7375",
        "distance": 136.08783558518337
    },
    {
        "id": "bEXTA_Gwo2oVg4gnFd9fNA",
        "alias": "ai-fiori-new-york",
        "name": "Ai Fiori",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/H88_SHG7RAD_IB8T5G8NPA/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/ai-fiori-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1182,
        "categories": [
            {
                "alias": "italian",
                "title": "Italian"
            },
            {
                "alias": "french",
                "title": "French"
            },
            {
                "alias": "cocktailbars",
                "title": "Cocktail Bars"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7500752,
            "longitude": -73.9837835
        },
        "transactions": [],
        "price": "$$$$",
        "location": {
            "address1": "400 5th Ave",
            "address2": "Ste 2",
            "address3": "",
            "city": "New York",
            "zip_code": "10018",
            "country": "US",
            "state": "NY",
            "display_address": [
                "400 5th Ave",
                "Ste 2",
                "New York, NY 10018"
            ]
        },
        "phone": "+12126138660",
        "display_phone": "(212) 613-8660",
        "distance": 617.0440273056013
    },
    {
        "id": "xiwnLiNhSlEN4CDcurqsLQ",
        "alias": "2nd-ave-deli-new-york",
        "name": "2nd Ave Deli",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/u9pAnwZlqehOgc1FV572eA/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/2nd-ave-deli-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1123,
        "categories": [
            {
                "alias": "delis",
                "title": "Delis"
            },
            {
                "alias": "kosher",
                "title": "Kosher"
            },
            {
                "alias": "sandwiches",
                "title": "Sandwiches"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.74519,
            "longitude": -73.97918
        },
        "transactions": [
            "delivery",
            "pickup"
        ],
        "price": "$$",
        "location": {
            "address1": "162 E 33rd St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "162 E 33rd St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12126899000",
        "display_phone": "(212) 689-9000",
        "distance": 469.7210953323664
    },
    {
        "id": "c3eMI4_o4dPDDhPV_ibBYQ",
        "alias": "ess-a-bagel-new-york",
        "name": "Ess-a-Bagel",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/yt3JyNOwoSOmeyPXza6O7w/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/ess-a-bagel-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 3195,
        "categories": [
            {
                "alias": "bakeries",
                "title": "Bakeries"
            },
            {
                "alias": "bagels",
                "title": "Bagels"
            },
            {
                "alias": "delis",
                "title": "Delis"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.756300559255,
            "longitude": -73.9703701025162
        },
        "transactions": [
            "delivery",
            "pickup"
        ],
        "price": "$",
        "location": {
            "address1": "831 3rd Ave",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10022",
            "country": "US",
            "state": "NY",
            "display_address": [
                "831 3rd Ave",
                "New York, NY 10022"
            ]
        },
        "phone": "+12129801010",
        "display_phone": "(212) 980-1010",
        "distance": 972.3486303659301
    },
    {
        "id": "xq0cX_DgxiJMXwhmEl9kUA",
        "alias": "café-china-new-york-2",
        "name": "Café China",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/XSudwvbbAfYFYZViZB5ucw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/caf%C3%A9-china-new-york-2?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1384,
        "categories": [
            {
                "alias": "szechuan",
                "title": "Szechuan"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7499225208569,
            "longitude": -73.9819464127197
        },
        "transactions": [
            "delivery",
            "pickup",
            "restaurant_reservation"
        ],
        "price": "$$",
        "location": {
            "address1": "13 E 37th St",
            "address2": null,
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "13 E 37th St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12122132810",
        "display_phone": "(212) 213-2810",
        "distance": 462.3191068917001
    }
],
[
    {
        "id": "1LIptXhtDh58vAA-QPFL4w",
        "alias": "cask-bar-and-kitchen-new-york",
        "name": "Cask Bar & Kitchen",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/CshY4h5dQck2Giin-TZa6Q/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/cask-bar-and-kitchen-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1302,
        "categories": [
            {
                "alias": "bars",
                "title": "Bars"
            },
            {
                "alias": "newamerican",
                "title": "American (New)"
            },
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.745414,
            "longitude": -73.979004
        },
        "transactions": [
            "pickup",
            "restaurant_reservation",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "167 E 33rd St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "167 E 33rd St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12123004924",
        "display_phone": "(212) 300-4924",
        "distance": 379.1509804244601
    },
    {
        "id": "7EaiwMVaNdQibSs0yYkE5Q",
        "alias": "sushi-yasuda-new-york",
        "name": "Sushi Yasuda",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/z6GvhobHxGaKtpfXBFd5Lg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/sushi-yasuda-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 2047,
        "categories": [
            {
                "alias": "japanese",
                "title": "Japanese"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.75113,
            "longitude": -73.97347
        },
        "transactions": [],
        "price": "$$$$",
        "location": {
            "address1": "204 E 43rd St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10017",
            "country": "US",
            "state": "NY",
            "display_address": [
                "204 E 43rd St",
                "New York, NY 10017"
            ]
        },
        "phone": "+12129721001",
        "display_phone": "(212) 972-1001",
        "distance": 695.6735605128539
    },
    {
        "id": "8HkB3JfIj7_g-MN5ujoRig",
        "alias": "grand-central-terminal-new-york",
        "name": "Grand Central Terminal",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/t9Pl11kD4bs9J3AJRJlHyQ/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/grand-central-terminal-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1329,
        "categories": [
            {
                "alias": "landmarks",
                "title": "Landmarks & Historical Buildings"
            },
            {
                "alias": "trainstations",
                "title": "Train Stations"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.752793,
            "longitude": -73.977165
        },
        "transactions": [],
        "location": {
            "address1": "89 E 42nd St",
            "address2": null,
            "address3": "",
            "city": "New York",
            "zip_code": "10017",
            "country": "US",
            "state": "NY",
            "display_address": [
                "89 E 42nd St",
                "New York, NY 10017"
            ]
        },
        "phone": "+12123402583",
        "display_phone": "(212) 340-2583",
        "distance": 903.4195244957041
    },
    {
        "id": "lESxFswvOPUFUzj6HsTnqw",
        "alias": "sons-of-thunder-new-york-4",
        "name": "Sons of Thunder",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/UDUrMLOEw6auFfCMQt-EGg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/sons-of-thunder-new-york-4?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 713,
        "categories": [
            {
                "alias": "hotdog",
                "title": "Hot Dogs"
            },
            {
                "alias": "poke",
                "title": "Poke"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.74786,
            "longitude": -73.97589
        },
        "transactions": [
            "pickup",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "204 E 38th St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "204 E 38th St",
                "New York, NY 10016"
            ]
        },
        "phone": "+16468632212",
        "display_phone": "(646) 863-2212",
        "distance": 348.8668571858225
    },
    {
        "id": "7iY35991NhQ1AShJZCNZgA",
        "alias": "sakagura-new-york",
        "name": "Sakagura",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/f-Z182ojMUKsP9qamFfXRQ/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/sakagura-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1709,
        "categories": [
            {
                "alias": "japanese",
                "title": "Japanese"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7516467024541,
            "longitude": -73.9729489318165
        },
        "transactions": [],
        "price": "$$$",
        "location": {
            "address1": "211 E 43rd St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10017",
            "country": "US",
            "state": "NY",
            "display_address": [
                "211 E 43rd St",
                "New York, NY 10017"
            ]
        },
        "phone": "+12129537253",
        "display_phone": "(212) 953-7253",
        "distance": 760.817787123861
    },
    {
        "id": "oTkzgr7hzOAdlP99Auj3GQ",
        "alias": "momosan-ramen-and-sake-new-york-2",
        "name": "Momosan Ramen & Sake",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/Z6hFFtvLlEIf5SqwxckvmQ/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/momosan-ramen-and-sake-new-york-2?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1449,
        "categories": [
            {
                "alias": "ramen",
                "title": "Ramen"
            },
            {
                "alias": "tapasmallplates",
                "title": "Tapas/Small Plates"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.74993,
            "longitude": -73.97746
        },
        "transactions": [],
        "price": "$$",
        "location": {
            "address1": "342 Lexington Ave",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "342 Lexington Ave",
                "New York, NY 10016"
            ]
        },
        "phone": "+16462015529",
        "display_phone": "(646) 201-5529",
        "distance": 609.7617252020535
    },
    {
        "id": "csVEpHy5KJoFvM1qp5XwLQ",
        "alias": "le-parisien-new-york",
        "name": "Le Parisien",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/o-2sMdEwm9ElaF9y7S_7bg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/le-parisien-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 903,
        "categories": [
            {
                "alias": "french",
                "title": "French"
            },
            {
                "alias": "salad",
                "title": "Salad"
            },
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7454079308793,
            "longitude": -73.9791478306885
        },
        "transactions": [
            "restaurant_reservation"
        ],
        "price": "$$",
        "location": {
            "address1": "163 East 33rd St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "163 East 33rd St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12128895489",
        "display_phone": "(212) 889-5489",
        "distance": 391.0448999088475
    },
    {
        "id": "xiwnLiNhSlEN4CDcurqsLQ",
        "alias": "2nd-ave-deli-new-york",
        "name": "2nd Ave Deli",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/u9pAnwZlqehOgc1FV572eA/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/2nd-ave-deli-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1123,
        "categories": [
            {
                "alias": "delis",
                "title": "Delis"
            },
            {
                "alias": "kosher",
                "title": "Kosher"
            },
            {
                "alias": "sandwiches",
                "title": "Sandwiches"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.74519,
            "longitude": -73.97918
        },
        "transactions": [
            "pickup",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "162 E 33rd St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "162 E 33rd St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12126899000",
        "display_phone": "(212) 689-9000",
        "distance": 390.2410199565427
    },
    {
        "id": "1u_vkRFPuT8Aeh7Zk3bKyw",
        "alias": "galata-mediterranean-cuisine-new-york",
        "name": "Galata Mediterranean Cuisine",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/0AKKyZh7wKMRshTIx7bIvg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/galata-mediterranean-cuisine-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 304,
        "categories": [
            {
                "alias": "turkish",
                "title": "Turkish"
            },
            {
                "alias": "mediterranean",
                "title": "Mediterranean"
            },
            {
                "alias": "halal",
                "title": "Halal"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.74531,
            "longitude": -73.97753
        },
        "transactions": [
            "pickup",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "212 E 34th St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "212 E 34th St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12126839206",
        "display_phone": "(212) 683-9206",
        "distance": 259.2239440863164
    },
    {
        "id": "jNRT5vY1Hvp5WDTaHy4Mhw",
        "alias": "sarges-delicatessen-and-diner-new-york-2",
        "name": "Sarge's Delicatessen & Diner",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/NmwQpoVgSjqFH_SIZXjuqg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/sarges-delicatessen-and-diner-new-york-2?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 996,
        "categories": [
            {
                "alias": "delis",
                "title": "Delis"
            },
            {
                "alias": "sandwiches",
                "title": "Sandwiches"
            },
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7473279523583,
            "longitude": -73.9772017867971
        },
        "transactions": [
            "pickup",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "548 3rd Ave",
            "address2": null,
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "548 3rd Ave",
                "New York, NY 10016"
            ]
        },
        "phone": "+12126790442",
        "display_phone": "(212) 679-0442",
        "distance": 349.17325434551077
    },
    {
        "id": "BZcG-xN3DCxlfhckBZYeuw",
        "alias": "pio-pio-7-new-york-5",
        "name": "Pio Pio 7",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/KAU9yCws4Kxqh39y_ZPidg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/pio-pio-7-new-york-5?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 782,
        "categories": [
            {
                "alias": "latin",
                "title": "Latin American"
            },
            {
                "alias": "peruvian",
                "title": "Peruvian"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.74525,
            "longitude": -73.97768
        },
        "transactions": [
            "pickup",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "210 E 34th St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "210 E 34th St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12124810034",
        "display_phone": "(212) 481-0034",
        "distance": 267.8938178795224
    },
    {
        "id": "J38XGzriEkMsDfCMt6et_g",
        "alias": "vezzo-new-york-2",
        "name": "Vezzo",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/zEbvF-vMabMmovicwAoCSA/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/vezzo-new-york-2?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1190,
        "categories": [
            {
                "alias": "pizza",
                "title": "Pizza"
            },
            {
                "alias": "pastashops",
                "title": "Pasta Shops"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7445,
            "longitude": -73.98139
        },
        "transactions": [
            "pickup",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "178 Lexington Ave",
            "address2": null,
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "178 Lexington Ave",
                "New York, NY 10016"
            ]
        },
        "phone": "+12128398300",
        "display_phone": "(212) 839-8300",
        "distance": 580.2216056597692
    },
    {
        "id": "cxtg17yy1YFt8gHRckUQcw",
        "alias": "num-pang-kitchen-new-york-2",
        "name": "Num Pang Kitchen",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/V9Y92UBe7WkgIEJwhTzrCw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/num-pang-kitchen-new-york-2?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1104,
        "categories": [
            {
                "alias": "cambodian",
                "title": "Cambodian"
            },
            {
                "alias": "sandwiches",
                "title": "Sandwiches"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7503831245874,
            "longitude": -73.9761078759491
        },
        "transactions": [
            "pickup",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "140 E 41st St",
            "address2": null,
            "address3": "",
            "city": "New York",
            "zip_code": "10017",
            "country": "US",
            "state": "NY",
            "display_address": [
                "140 E 41st St",
                "New York, NY 10017"
            ]
        },
        "phone": "+12128678889",
        "display_phone": "(212) 867-8889",
        "distance": 622.190439389956
    },
    {
        "id": "IGZkGbwE36iE1yaDW5NNKA",
        "alias": "the-flying-cock-new-york-2",
        "name": "The Flying Cock",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/3YlRSHL1Lja7Ke0ptnxLIQ/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/the-flying-cock-new-york-2?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 430,
        "categories": [
            {
                "alias": "pubs",
                "title": "Pubs"
            },
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.745296,
            "longitude": -73.978073
        },
        "transactions": [
            "restaurant_reservation"
        ],
        "price": "$$",
        "location": {
            "address1": "497 3rd Ave",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "497 3rd Ave",
                "New York, NY 10016"
            ]
        },
        "phone": "+12126896900",
        "display_phone": "(212) 689-6900",
        "distance": 298.64695329227607
    },
    {
        "id": "xHBpwGzxxbC3vTahHWdABg",
        "alias": "perk-kafe-new-york",
        "name": "Perk Kafe",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/GN_GrTR4Gm9JyqKIZOHZEw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/perk-kafe-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 365,
        "categories": [
            {
                "alias": "coffee",
                "title": "Coffee & Tea"
            },
            {
                "alias": "bakeries",
                "title": "Bakeries"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.747764735907,
            "longitude": -73.9770407671092
        },
        "transactions": [],
        "price": "$",
        "location": {
            "address1": "162 E 37th St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "162 E 37th St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12126867375",
        "display_phone": "(212) 686-7375",
        "distance": 380.1200073900464
    },
    {
        "id": "oSFL1AVZYouS4YrDjoLyLA",
        "alias": "baby-bos-cantina-new-york",
        "name": "Baby Bo's Cantina",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/IomSvlwVkiMVXMo5i2CTeQ/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/baby-bos-cantina-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 584,
        "categories": [
            {
                "alias": "mexican",
                "title": "Mexican"
            }
        ],
        "rating": 3.5,
        "coordinates": {
            "latitude": 40.74514,
            "longitude": -73.97598
        },
        "transactions": [
            "pickup",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "627 2nd Ave",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "627 2nd Ave",
                "New York, NY 10016"
            ]
        },
        "phone": "+12127792656",
        "display_phone": "(212) 779-2656",
        "distance": 120.47469770544964
    },
    {
        "id": "jCRblp7F5IbUSySK_Y7Qiw",
        "alias": "eons-greek-food-for-life-new-york",
        "name": "EONS Greek Food for Life",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/aB0DOvTN8aHEYO7S_-Qu5Q/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/eons-greek-food-for-life-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 289,
        "categories": [
            {
                "alias": "greek",
                "title": "Greek"
            },
            {
                "alias": "mediterranean",
                "title": "Mediterranean"
            },
            {
                "alias": "salad",
                "title": "Salad"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.74528,
            "longitude": -73.97588
        },
        "transactions": [
            "pickup",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "633 2nd Ave",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "633 2nd Ave",
                "New York, NY 10016"
            ]
        },
        "phone": "+12126961234",
        "display_phone": "(212) 696-1234",
        "distance": 117.16453468388968
    },
    {
        "id": "cnMNL1O_dVtCdTyQwwOwOQ",
        "alias": "bistango-new-york-9",
        "name": "Bistango",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/q6M3LVt2Fx5urdJYzTj1Ig/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/bistango-new-york-9?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 666,
        "categories": [
            {
                "alias": "italian",
                "title": "Italian"
            },
            {
                "alias": "bars",
                "title": "Bars"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7425771,
            "longitude": -73.9800892
        },
        "transactions": [
            "pickup",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "415 3rd Ave",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "415 3rd Ave",
                "New York, NY 10016"
            ]
        },
        "phone": "+12127258484",
        "display_phone": "(212) 725-8484",
        "distance": 533.917555304695
    },
    {
        "id": "sSSV7G16yUijp-Peq4fmsA",
        "alias": "benjamin-steakhouse-new-york-2",
        "name": "Benjamin Steakhouse",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/wanEz7BJwOUiLHSHpXH4BQ/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/benjamin-steakhouse-new-york-2?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1101,
        "categories": [
            {
                "alias": "steak",
                "title": "Steakhouses"
            },
            {
                "alias": "seafood",
                "title": "Seafood"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7518,
            "longitude": -73.97896
        },
        "transactions": [
            "delivery"
        ],
        "price": "$$$$",
        "location": {
            "address1": "52 E 41st St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10017",
            "country": "US",
            "state": "NY",
            "display_address": [
                "52 E 41st St",
                "New York, NY 10017"
            ]
        },
        "phone": "+12122979177",
        "display_phone": "(212) 297-9177",
        "distance": 851.054876968182
    },
    {
        "id": "BdHWUmVFuo1R8Lctv4K1Ow",
        "alias": "el-parador-cafe-new-york",
        "name": "El Parador Cafe",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/N_FIh5qakcz1XfzlmjAlcg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/el-parador-cafe-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 415,
        "categories": [
            {
                "alias": "mexican",
                "title": "Mexican"
            },
            {
                "alias": "desserts",
                "title": "Desserts"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7444599,
            "longitude": -73.97472
        },
        "transactions": [],
        "price": "$$",
        "location": {
            "address1": "325 E 34th St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "325 E 34th St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12126796812",
        "display_phone": "(212) 679-6812",
        "distance": 49.67320066190754
    }
],
[
    {
        "id": "8HkB3JfIj7_g-MN5ujoRig",
        "alias": "grand-central-terminal-new-york",
        "name": "Grand Central Terminal",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/t9Pl11kD4bs9J3AJRJlHyQ/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/grand-central-terminal-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1329,
        "categories": [
            {
                "alias": "landmarks",
                "title": "Landmarks & Historical Buildings"
            },
            {
                "alias": "trainstations",
                "title": "Train Stations"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.752793,
            "longitude": -73.977165
        },
        "transactions": [],
        "location": {
            "address1": "89 E 42nd St",
            "address2": null,
            "address3": "",
            "city": "New York",
            "zip_code": "10017",
            "country": "US",
            "state": "NY",
            "display_address": [
                "89 E 42nd St",
                "New York, NY 10017"
            ]
        },
        "phone": "+12123402583",
        "display_phone": "(212) 340-2583",
        "distance": 604.52496703694
    },
    {
        "id": "lESxFswvOPUFUzj6HsTnqw",
        "alias": "sons-of-thunder-new-york-4",
        "name": "Sons of Thunder",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/UDUrMLOEw6auFfCMQt-EGg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/sons-of-thunder-new-york-4?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 713,
        "categories": [
            {
                "alias": "hotdog",
                "title": "Hot Dogs"
            },
            {
                "alias": "poke",
                "title": "Poke"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.74786,
            "longitude": -73.97589
        },
        "transactions": [
            "pickup",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "204 E 38th St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "204 E 38th St",
                "New York, NY 10016"
            ]
        },
        "phone": "+16468632212",
        "display_phone": "(646) 863-2212",
        "distance": 74.27970715486518
    },
    {
        "id": "7EaiwMVaNdQibSs0yYkE5Q",
        "alias": "sushi-yasuda-new-york",
        "name": "Sushi Yasuda",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/z6GvhobHxGaKtpfXBFd5Lg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/sushi-yasuda-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 2047,
        "categories": [
            {
                "alias": "japanese",
                "title": "Japanese"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.75113,
            "longitude": -73.97347
        },
        "transactions": [],
        "price": "$$$$",
        "location": {
            "address1": "204 E 43rd St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10017",
            "country": "US",
            "state": "NY",
            "display_address": [
                "204 E 43rd St",
                "New York, NY 10017"
            ]
        },
        "phone": "+12129721001",
        "display_phone": "(212) 972-1001",
        "distance": 483.3423772939268
    },
    {
        "id": "oTkzgr7hzOAdlP99Auj3GQ",
        "alias": "momosan-ramen-and-sake-new-york-2",
        "name": "Momosan Ramen & Sake",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/Z6hFFtvLlEIf5SqwxckvmQ/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/momosan-ramen-and-sake-new-york-2?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1449,
        "categories": [
            {
                "alias": "ramen",
                "title": "Ramen"
            },
            {
                "alias": "tapasmallplates",
                "title": "Tapas/Small Plates"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.74993,
            "longitude": -73.97746
        },
        "transactions": [],
        "price": "$$",
        "location": {
            "address1": "342 Lexington Ave",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "342 Lexington Ave",
                "New York, NY 10016"
            ]
        },
        "phone": "+16462015529",
        "display_phone": "(646) 201-5529",
        "distance": 296.23996449346885
    },
    {
        "id": "7iY35991NhQ1AShJZCNZgA",
        "alias": "sakagura-new-york",
        "name": "Sakagura",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/f-Z182ojMUKsP9qamFfXRQ/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/sakagura-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1709,
        "categories": [
            {
                "alias": "japanese",
                "title": "Japanese"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7516467024541,
            "longitude": -73.9729489318165
        },
        "transactions": [],
        "price": "$$$",
        "location": {
            "address1": "211 E 43rd St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10017",
            "country": "US",
            "state": "NY",
            "display_address": [
                "211 E 43rd St",
                "New York, NY 10017"
            ]
        },
        "phone": "+12129537253",
        "display_phone": "(212) 953-7253",
        "distance": 557.8130348574373
    },
    {
        "id": "1LIptXhtDh58vAA-QPFL4w",
        "alias": "cask-bar-and-kitchen-new-york",
        "name": "Cask Bar & Kitchen",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/CshY4h5dQck2Giin-TZa6Q/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/cask-bar-and-kitchen-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1302,
        "categories": [
            {
                "alias": "bars",
                "title": "Bars"
            },
            {
                "alias": "newamerican",
                "title": "American (New)"
            },
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.745414,
            "longitude": -73.979004
        },
        "transactions": [
            "pickup",
            "restaurant_reservation",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "167 E 33rd St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "167 E 33rd St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12123004924",
        "display_phone": "(212) 300-4924",
        "distance": 307.62089472910213
    },
    {
        "id": "jNRT5vY1Hvp5WDTaHy4Mhw",
        "alias": "sarges-delicatessen-and-diner-new-york-2",
        "name": "Sarge's Delicatessen & Diner",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/NmwQpoVgSjqFH_SIZXjuqg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/sarges-delicatessen-and-diner-new-york-2?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 996,
        "categories": [
            {
                "alias": "delis",
                "title": "Delis"
            },
            {
                "alias": "sandwiches",
                "title": "Sandwiches"
            },
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7473279523583,
            "longitude": -73.9772017867971
        },
        "transactions": [
            "pickup",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "548 3rd Ave",
            "address2": null,
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "548 3rd Ave",
                "New York, NY 10016"
            ]
        },
        "phone": "+12126790442",
        "display_phone": "(212) 679-0442",
        "distance": 64.44092104312513
    },
    {
        "id": "cxtg17yy1YFt8gHRckUQcw",
        "alias": "num-pang-kitchen-new-york-2",
        "name": "Num Pang Kitchen",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/V9Y92UBe7WkgIEJwhTzrCw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/num-pang-kitchen-new-york-2?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1104,
        "categories": [
            {
                "alias": "cambodian",
                "title": "Cambodian"
            },
            {
                "alias": "sandwiches",
                "title": "Sandwiches"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7503831245874,
            "longitude": -73.9761078759491
        },
        "transactions": [
            "pickup",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "140 E 41st St",
            "address2": null,
            "address3": "",
            "city": "New York",
            "zip_code": "10017",
            "country": "US",
            "state": "NY",
            "display_address": [
                "140 E 41st St",
                "New York, NY 10017"
            ]
        },
        "phone": "+12128678889",
        "display_phone": "(212) 867-8889",
        "distance": 334.64483506713276
    },
    {
        "id": "csVEpHy5KJoFvM1qp5XwLQ",
        "alias": "le-parisien-new-york",
        "name": "Le Parisien",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/o-2sMdEwm9ElaF9y7S_7bg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/le-parisien-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 903,
        "categories": [
            {
                "alias": "french",
                "title": "French"
            },
            {
                "alias": "salad",
                "title": "Salad"
            },
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7454079308793,
            "longitude": -73.9791478306885
        },
        "transactions": [
            "restaurant_reservation"
        ],
        "price": "$$",
        "location": {
            "address1": "163 East 33rd St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "163 East 33rd St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12128895489",
        "display_phone": "(212) 889-5489",
        "distance": 316.71272735234356
    },
    {
        "id": "xiwnLiNhSlEN4CDcurqsLQ",
        "alias": "2nd-ave-deli-new-york",
        "name": "2nd Ave Deli",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/u9pAnwZlqehOgc1FV572eA/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/2nd-ave-deli-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1123,
        "categories": [
            {
                "alias": "delis",
                "title": "Delis"
            },
            {
                "alias": "kosher",
                "title": "Kosher"
            },
            {
                "alias": "sandwiches",
                "title": "Sandwiches"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.74519,
            "longitude": -73.97918
        },
        "transactions": [
            "pickup",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "162 E 33rd St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "162 E 33rd St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12126899000",
        "display_phone": "(212) 689-9000",
        "distance": 335.16606030625627
    },
    {
        "id": "MJJi_5tGkWYI1VReTjhCCA",
        "alias": "bryant-park-new-york-2",
        "name": "Bryant Park",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/e3C0L_4bryzvPU6PbmZ_dA/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/bryant-park-new-york-2?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1077,
        "categories": [
            {
                "alias": "parks",
                "title": "Parks"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.7538842911333,
            "longitude": -73.9836510457098
        },
        "transactions": [],
        "location": {
            "address1": "41 W 40th St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10018",
            "country": "US",
            "state": "NY",
            "display_address": [
                "41 W 40th St",
                "New York, NY 10018"
            ]
        },
        "phone": "+12127684242",
        "display_phone": "(212) 768-4242",
        "distance": 944.11043364762
    },
    {
        "id": "xHBpwGzxxbC3vTahHWdABg",
        "alias": "perk-kafe-new-york",
        "name": "Perk Kafe",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/GN_GrTR4Gm9JyqKIZOHZEw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/perk-kafe-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 365,
        "categories": [
            {
                "alias": "coffee",
                "title": "Coffee & Tea"
            },
            {
                "alias": "bakeries",
                "title": "Bakeries"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.747764735907,
            "longitude": -73.9770407671092
        },
        "transactions": [],
        "price": "$",
        "location": {
            "address1": "162 E 37th St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "162 E 37th St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12126867375",
        "display_phone": "(212) 686-7375",
        "distance": 65.94308375127426
    },
    {
        "id": "sSSV7G16yUijp-Peq4fmsA",
        "alias": "benjamin-steakhouse-new-york-2",
        "name": "Benjamin Steakhouse",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/wanEz7BJwOUiLHSHpXH4BQ/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/benjamin-steakhouse-new-york-2?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1101,
        "categories": [
            {
                "alias": "steak",
                "title": "Steakhouses"
            },
            {
                "alias": "seafood",
                "title": "Seafood"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7518,
            "longitude": -73.97896
        },
        "transactions": [
            "delivery"
        ],
        "price": "$$$$",
        "location": {
            "address1": "52 E 41st St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10017",
            "country": "US",
            "state": "NY",
            "display_address": [
                "52 E 41st St",
                "New York, NY 10017"
            ]
        },
        "phone": "+12122979177",
        "display_phone": "(212) 297-9177",
        "distance": 534.927262861098
    },
    {
        "id": "1u_vkRFPuT8Aeh7Zk3bKyw",
        "alias": "galata-mediterranean-cuisine-new-york",
        "name": "Galata Mediterranean Cuisine",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/0AKKyZh7wKMRshTIx7bIvg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/galata-mediterranean-cuisine-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 304,
        "categories": [
            {
                "alias": "turkish",
                "title": "Turkish"
            },
            {
                "alias": "mediterranean",
                "title": "Mediterranean"
            },
            {
                "alias": "halal",
                "title": "Halal"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.74531,
            "longitude": -73.97753
        },
        "transactions": [
            "pickup",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "212 E 34th St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "212 E 34th St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12126839206",
        "display_phone": "(212) 683-9206",
        "distance": 250.42976626330713
    },
    {
        "id": "J38XGzriEkMsDfCMt6et_g",
        "alias": "vezzo-new-york-2",
        "name": "Vezzo",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/zEbvF-vMabMmovicwAoCSA/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/vezzo-new-york-2?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1190,
        "categories": [
            {
                "alias": "pizza",
                "title": "Pizza"
            },
            {
                "alias": "pastashops",
                "title": "Pasta Shops"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7445,
            "longitude": -73.98139
        },
        "transactions": [
            "pickup",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "178 Lexington Ave",
            "address2": null,
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "178 Lexington Ave",
                "New York, NY 10016"
            ]
        },
        "phone": "+12128398300",
        "display_phone": "(212) 839-8300",
        "distance": 527.3290209698363
    },
    {
        "id": "BZcG-xN3DCxlfhckBZYeuw",
        "alias": "pio-pio-7-new-york-5",
        "name": "Pio Pio 7",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/KAU9yCws4Kxqh39y_ZPidg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/pio-pio-7-new-york-5?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 782,
        "categories": [
            {
                "alias": "latin",
                "title": "Latin American"
            },
            {
                "alias": "peruvian",
                "title": "Peruvian"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.74525,
            "longitude": -73.97768
        },
        "transactions": [
            "pickup",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "210 E 34th St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "210 E 34th St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12124810034",
        "display_phone": "(212) 481-0034",
        "distance": 263.17841944585854
    },
    {
        "id": "qY1o1MhoRyN84RRhUJtvpQ",
        "alias": "her-name-is-han-new-york-3",
        "name": "Her Name Is Han",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/v-Q1v7y9q8FbDCzgwAa8Xw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/her-name-is-han-new-york-3?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1031,
        "categories": [
            {
                "alias": "korean",
                "title": "Korean"
            },
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            },
            {
                "alias": "cocktailbars",
                "title": "Cocktail Bars"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.74626,
            "longitude": -73.98473
        },
        "transactions": [
            "pickup",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "17 E 31st St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "17 E 31st St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12127799990",
        "display_phone": "(212) 779-9990",
        "distance": 713.6630460865593
    },
    {
        "id": "LQHegfNHe7ylY3bocrFlpg",
        "alias": "calle-dao-bryant-park-new-york",
        "name": "Calle Dao - Bryant Park",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/VWVDXCpZcx80WNs_9dBnWQ/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/calle-dao-bryant-park-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1503,
        "categories": [
            {
                "alias": "cuban",
                "title": "Cuban"
            },
            {
                "alias": "cocktailbars",
                "title": "Cocktail Bars"
            },
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.752155,
            "longitude": -73.984223
        },
        "transactions": [
            "pickup",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "38 W 39th St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10018",
            "country": "US",
            "state": "NY",
            "display_address": [
                "38 W 39th St",
                "New York, NY 10018"
            ]
        },
        "phone": "+12122219002",
        "display_phone": "(212) 221-9002",
        "distance": 843.33562373458
    },
    {
        "id": "bEXTA_Gwo2oVg4gnFd9fNA",
        "alias": "ai-fiori-new-york",
        "name": "Ai Fiori",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/H88_SHG7RAD_IB8T5G8NPA/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/ai-fiori-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1182,
        "categories": [
            {
                "alias": "italian",
                "title": "Italian"
            },
            {
                "alias": "french",
                "title": "French"
            },
            {
                "alias": "cocktailbars",
                "title": "Cocktail Bars"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7500752,
            "longitude": -73.9837835
        },
        "transactions": [],
        "price": "$$$$",
        "location": {
            "address1": "400 5th Ave",
            "address2": "Ste 2",
            "address3": "",
            "city": "New York",
            "zip_code": "10018",
            "country": "US",
            "state": "NY",
            "display_address": [
                "400 5th Ave",
                "Ste 2",
                "New York, NY 10018"
            ]
        },
        "phone": "+12126138660",
        "display_phone": "(212) 613-8660",
        "distance": 687.1466125941116
    },
    {
        "id": "ESREfCxyY9A1Wetnk47xJQ",
        "alias": "dukes-new-york-9",
        "name": "Duke's",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/zheBaz5IO9wxl8b-CU_Kcg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/dukes-new-york-9?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 787,
        "categories": [
            {
                "alias": "southern",
                "title": "Southern"
            },
            {
                "alias": "tradamerican",
                "title": "American (Traditional)"
            },
            {
                "alias": "bars",
                "title": "Bars"
            }
        ],
        "rating": 3.5,
        "coordinates": {
            "latitude": 40.748089,
            "longitude": -73.976864
        },
        "transactions": [
            "pickup",
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "560 3rd Ave",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "560 3rd Ave",
                "New York, NY 10016"
            ]
        },
        "phone": "+12129495400",
        "display_phone": "(212) 949-5400",
        "distance": 86.11559485602072
    }
],
[
    {
        "id": "FEVQpbOPOwAPNIgO7D3xxw",
        "alias": "shake-shack-new-york-2",
        "name": "Shake Shack",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/J0UoRJKdaMl0EPdgxYIlKw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/shake-shack-new-york-2?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 5514,
        "categories": [
            {
                "alias": "burgers",
                "title": "Burgers"
            },
            {
                "alias": "foodstands",
                "title": "Food Stands"
            },
            {
                "alias": "icecream",
                "title": "Ice Cream & Frozen Yogurt"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7414000197233,
            "longitude": -73.98815019045
        },
        "transactions": [
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "Madison Square Park",
            "address2": "",
            "address3": "E 23rd St & Madison Ave",
            "city": "New York",
            "zip_code": "10010",
            "country": "US",
            "state": "NY",
            "display_address": [
                "Madison Square Park",
                "E 23rd St & Madison Ave",
                "New York, NY 10010"
            ]
        },
        "phone": "+12128896600",
        "display_phone": "(212) 889-6600",
        "distance": 677.4773887583473
    },
    {
        "id": "raqwXUBlnc0e8c7CYmxEJQ",
        "alias": "scarpetta-new-york",
        "name": "Scarpetta",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/MuSpWrm8AmcalPlKf9gBQg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/scarpetta-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1779,
        "categories": [
            {
                "alias": "italian",
                "title": "Italian"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.744509,
            "longitude": -73.9856
        },
        "transactions": [],
        "price": "$$$",
        "location": {
            "address1": "88 Madison Ave",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "88 Madison Ave",
                "New York, NY 10016"
            ]
        },
        "phone": "+12126910555",
        "display_phone": "(212) 691-0555",
        "distance": 290.4809910702813
    },
    {
        "id": "nRO136GRieGtxz18uD61DA",
        "alias": "eleven-madison-park-new-york",
        "name": "Eleven Madison Park",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/-80vpN8iZykUnx6y8Q-jRw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/eleven-madison-park-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 2034,
        "categories": [
            {
                "alias": "newamerican",
                "title": "American (New)"
            },
            {
                "alias": "french",
                "title": "French"
            },
            {
                "alias": "cocktailbars",
                "title": "Cocktail Bars"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.7416907417333,
            "longitude": -73.9872074872255
        },
        "transactions": [],
        "price": "$$$$",
        "location": {
            "address1": "11 Madison Ave",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10010",
            "country": "US",
            "state": "NY",
            "display_address": [
                "11 Madison Ave",
                "New York, NY 10010"
            ]
        },
        "phone": "+12128890905",
        "display_phone": "(212) 889-0905",
        "distance": 600.4400388762542
    },
    {
        "id": "MKYhiSeXjahxh9O4Gqnimw",
        "alias": "grace-street-new-york",
        "name": "Grace Street",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/-Fa8jLXSUfiT2p4LmHTNEg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/grace-street-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 2049,
        "categories": [
            {
                "alias": "coffee",
                "title": "Coffee & Tea"
            },
            {
                "alias": "desserts",
                "title": "Desserts"
            },
            {
                "alias": "shavedice",
                "title": "Shaved Ice"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7478576793883,
            "longitude": -73.9865590631962
        },
        "transactions": [],
        "price": "$$",
        "location": {
            "address1": "17 W 32nd St",
            "address2": null,
            "address3": "",
            "city": "New York",
            "zip_code": "10001",
            "country": "US",
            "state": "NY",
            "display_address": [
                "17 W 32nd St",
                "New York, NY 10001"
            ]
        },
        "phone": "+19177452125",
        "display_phone": "(917) 745-2125",
        "distance": 401.57082438805696
    },
    {
        "id": "ogCC-lJJYnwXDvKGmKZ6Sw",
        "alias": "woorijip-authentic-korean-food-new-york",
        "name": "Woorijip Authentic Korean Food",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/NZcGFutBjf1frDkslh6urw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/woorijip-authentic-korean-food-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 2521,
        "categories": [
            {
                "alias": "korean",
                "title": "Korean"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.74747,
            "longitude": -73.98648
        },
        "transactions": [],
        "price": "$",
        "location": {
            "address1": "12 W 32nd St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10001",
            "country": "US",
            "state": "NY",
            "display_address": [
                "12 W 32nd St",
                "New York, NY 10001"
            ]
        },
        "phone": "+12122441115",
        "display_phone": "(212) 244-1115",
        "distance": 375.53868811336326
    },
    {
        "id": "qY1o1MhoRyN84RRhUJtvpQ",
        "alias": "her-name-is-han-new-york-3",
        "name": "Her Name Is Han",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/v-Q1v7y9q8FbDCzgwAa8Xw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/her-name-is-han-new-york-3?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1031,
        "categories": [
            {
                "alias": "korean",
                "title": "Korean"
            },
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            },
            {
                "alias": "cocktailbars",
                "title": "Cocktail Bars"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.74626,
            "longitude": -73.98473
        },
        "transactions": [
            "delivery",
            "pickup"
        ],
        "price": "$$",
        "location": {
            "address1": "17 E 31st St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "17 E 31st St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12127799990",
        "display_phone": "(212) 779-9990",
        "distance": 185.83220561462892
    },
    {
        "id": "a0IET3_yCFcO36OqGSsisg",
        "alias": "eataly-new-york",
        "name": "Eataly",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/9Xzihhf_KcZieyru9TX-pg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/eataly-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 5253,
        "categories": [
            {
                "alias": "italian",
                "title": "Italian"
            },
            {
                "alias": "grocery",
                "title": "Grocery"
            },
            {
                "alias": "cafes",
                "title": "Cafes"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.74195877796,
            "longitude": -73.989716662832
        },
        "transactions": [],
        "price": "$$",
        "location": {
            "address1": "200 5th Ave",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10010",
            "country": "US",
            "state": "NY",
            "display_address": [
                "200 5th Ave",
                "New York, NY 10010"
            ]
        },
        "phone": "+12122292560",
        "display_phone": "(212) 229-2560",
        "distance": 736.2663256020504
    },
    {
        "id": "klAhw3xLQi9GF1tf_HnS7w",
        "alias": "izakaya-mew-new-york-3",
        "name": "Izakaya MEW",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/Iix5fXx6WGqv-G2gyENd4A/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/izakaya-mew-new-york-3?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 2031,
        "categories": [
            {
                "alias": "tapas",
                "title": "Tapas Bars"
            },
            {
                "alias": "sushi",
                "title": "Sushi Bars"
            },
            {
                "alias": "izakaya",
                "title": "Izakaya"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7501853096499,
            "longitude": -73.9863203465939
        },
        "transactions": [
            "delivery",
            "pickup"
        ],
        "price": "$$",
        "location": {
            "address1": "53 W 35th St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10001",
            "country": "US",
            "state": "NY",
            "display_address": [
                "53 W 35th St",
                "New York, NY 10001"
            ]
        },
        "phone": "+16463689384",
        "display_phone": "(646) 368-9384",
        "distance": 576.5292499107621
    },
    {
        "id": "veq1Bl1DW3UWMekZJUsG1Q",
        "alias": "gramercy-tavern-new-york",
        "name": "Gramercy Tavern",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/1C20qnil3QUWRl3om2gOFg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/gramercy-tavern-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 2738,
        "categories": [
            {
                "alias": "newamerican",
                "title": "American (New)"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.738527,
            "longitude": -73.988417
        },
        "transactions": [],
        "price": "$$$$",
        "location": {
            "address1": "42 E 20th St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10003",
            "country": "US",
            "state": "NY",
            "display_address": [
                "42 E 20th St",
                "New York, NY 10003"
            ]
        },
        "phone": "+12124770777",
        "display_phone": "(212) 477-0777",
        "distance": 946.9761894666951
    },
    {
        "id": "B55Ocx5RBWxo6AGSucYSIA",
        "alias": "ilili-new-york-2",
        "name": "ilili",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/ReJfm8A_pE-eK9NSnyHfcg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/ilili-new-york-2?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 2250,
        "categories": [
            {
                "alias": "mediterranean",
                "title": "Mediterranean"
            },
            {
                "alias": "lebanese",
                "title": "Lebanese"
            },
            {
                "alias": "cocktailbars",
                "title": "Cocktail Bars"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.74435,
            "longitude": -73.98778
        },
        "transactions": [
            "delivery",
            "pickup"
        ],
        "price": "$$$",
        "location": {
            "address1": "236 5th Ave",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10001",
            "country": "US",
            "state": "NY",
            "display_address": [
                "236 5th Ave",
                "New York, NY 10001"
            ]
        },
        "phone": "+12126832929",
        "display_phone": "(212) 683-2929",
        "distance": 473.1585061450042
    },
    {
        "id": "FZpm4_fbd6P984foOUejWg",
        "alias": "jongro-bbq-new-york-3",
        "name": "Jongro BBQ",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/zTVtLZtqwAFqYPXwuk1t5w/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/jongro-bbq-new-york-3?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1566,
        "categories": [
            {
                "alias": "korean",
                "title": "Korean"
            },
            {
                "alias": "bbq",
                "title": "Barbeque"
            },
            {
                "alias": "beerbar",
                "title": "Beer Bar"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.747514,
            "longitude": -73.986884
        },
        "transactions": [],
        "price": "$$",
        "location": {
            "address1": "22 W 32nd St",
            "address2": "Fl 2",
            "address3": "",
            "city": "New York",
            "zip_code": "10001",
            "country": "US",
            "state": "NY",
            "display_address": [
                "22 W 32nd St",
                "Fl 2",
                "New York, NY 10001"
            ]
        },
        "phone": "+12124732233",
        "display_phone": "(212) 473-2233",
        "distance": 405.3977610509017
    },
    {
        "id": "sSQ3dtC8nbfeT6srFiiIlA",
        "alias": "stumptown-coffee-roasters-new-york",
        "name": "Stumptown Coffee Roasters",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/MjfyS99JsOMjsX51tdcHWw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/stumptown-coffee-roasters-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1356,
        "categories": [
            {
                "alias": "coffee",
                "title": "Coffee & Tea"
            },
            {
                "alias": "coffeeroasteries",
                "title": "Coffee Roasteries"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.7456663381275,
            "longitude": -73.9880916348562
        },
        "transactions": [],
        "price": "$$",
        "location": {
            "address1": "20 W 29th St",
            "address2": "",
            "address3": "The Ace Hotel",
            "city": "New York",
            "zip_code": "10001",
            "country": "US",
            "state": "NY",
            "display_address": [
                "20 W 29th St",
                "The Ace Hotel",
                "New York, NY 10001"
            ]
        },
        "phone": "+18557113385",
        "display_phone": "(855) 711-3385",
        "distance": 461.256345635007
    },
    {
        "id": "g2IUVjeIwx5x6x9u1cLS6w",
        "alias": "empire-state-building-new-york-2",
        "name": "Empire State Building",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/TR1QO-8mvJefsIucVASREQ/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/empire-state-building-new-york-2?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1905,
        "categories": [
            {
                "alias": "landmarks",
                "title": "Landmarks & Historical Buildings"
            },
            {
                "alias": "observatories",
                "title": "Observatories"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7484,
            "longitude": -73.9856644
        },
        "transactions": [],
        "location": {
            "address1": "20 W 34th St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10118",
            "country": "US",
            "state": "NY",
            "display_address": [
                "20 W 34th St",
                "New York, NY 10118"
            ]
        },
        "phone": "+12127363100",
        "display_phone": "(212) 736-3100",
        "distance": 384.49860553400083
    },
    {
        "id": "xWUL-j6TQyKQHIfOtetu-Q",
        "alias": "hangawi-new-york",
        "name": "Hangawi",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/5Vq0yzqN8MRQyLGpb1Mw4Q/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/hangawi-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1077,
        "categories": [
            {
                "alias": "vegetarian",
                "title": "Vegetarian"
            },
            {
                "alias": "korean",
                "title": "Korean"
            },
            {
                "alias": "vegan",
                "title": "Vegan"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.746737,
            "longitude": -73.984662
        },
        "transactions": [],
        "price": "$$$",
        "location": {
            "address1": "12 E 32nd St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "12 E 32nd St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12122130077",
        "display_phone": "(212) 213-0077",
        "distance": 199.7539771443794
    },
    {
        "id": "pQuZDnefX038xurT1BhDXA",
        "alias": "keens-steakhouse-new-york",
        "name": "Keens Steakhouse",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/Wt-lr0rX2f-lncs05SWDlA/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/keens-steakhouse-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 2351,
        "categories": [
            {
                "alias": "steak",
                "title": "Steakhouses"
            },
            {
                "alias": "desserts",
                "title": "Desserts"
            },
            {
                "alias": "pubs",
                "title": "Pubs"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.75071,
            "longitude": -73.98652
        },
        "transactions": [],
        "price": "$$$$",
        "location": {
            "address1": "72 W 36th St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10018",
            "country": "US",
            "state": "NY",
            "display_address": [
                "72 W 36th St",
                "New York, NY 10018"
            ]
        },
        "phone": "+12129473636",
        "display_phone": "(212) 947-3636",
        "distance": 628.802569173832
    },
    {
        "id": "1LIptXhtDh58vAA-QPFL4w",
        "alias": "cask-bar-and-kitchen-new-york",
        "name": "Cask Bar & Kitchen",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/CshY4h5dQck2Giin-TZa6Q/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/cask-bar-and-kitchen-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1302,
        "categories": [
            {
                "alias": "bars",
                "title": "Bars"
            },
            {
                "alias": "newamerican",
                "title": "American (New)"
            },
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.745414,
            "longitude": -73.979004
        },
        "transactions": [
            "restaurant_reservation",
            "delivery",
            "pickup"
        ],
        "price": "$$",
        "location": {
            "address1": "167 E 33rd St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "167 E 33rd St",
                "New York, NY 10016"
            ]
        },
        "phone": "+12123004924",
        "display_phone": "(212) 300-4924",
        "distance": 308.02701888777005
    },
    {
        "id": "j1S3NUrkB3BVT49n_e76NQ",
        "alias": "best-bagel-and-coffee-new-york",
        "name": "Best Bagel & Coffee",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/9-8DVzhwfzFS5GUCq3O6NA/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/best-bagel-and-coffee-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 2790,
        "categories": [
            {
                "alias": "bagels",
                "title": "Bagels"
            },
            {
                "alias": "coffee",
                "title": "Coffee & Tea"
            },
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.7522683,
            "longitude": -73.9910861
        },
        "transactions": [],
        "price": "$",
        "location": {
            "address1": "225 W 35th St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10001",
            "country": "US",
            "state": "NY",
            "display_address": [
                "225 W 35th St",
                "New York, NY 10001"
            ]
        },
        "phone": "+12125644409",
        "display_phone": "(212) 564-4409",
        "distance": 1011.007034653657
    },
    {
        "id": "J38XGzriEkMsDfCMt6et_g",
        "alias": "vezzo-new-york-2",
        "name": "Vezzo",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/zEbvF-vMabMmovicwAoCSA/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/vezzo-new-york-2?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1190,
        "categories": [
            {
                "alias": "pizza",
                "title": "Pizza"
            },
            {
                "alias": "pastashops",
                "title": "Pasta Shops"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7445,
            "longitude": -73.98139
        },
        "transactions": [
            "delivery",
            "pickup"
        ],
        "price": "$$",
        "location": {
            "address1": "178 Lexington Ave",
            "address2": null,
            "address3": "",
            "city": "New York",
            "zip_code": "10016",
            "country": "US",
            "state": "NY",
            "display_address": [
                "178 Lexington Ave",
                "New York, NY 10016"
            ]
        },
        "phone": "+12128398300",
        "display_phone": "(212) 839-8300",
        "distance": 177.74977677147464
    },
    {
        "id": "xZ96vaoL-cQjfotmUKtjJQ",
        "alias": "barn-joo-35-new-york",
        "name": "Barn Joo 35",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/1R5CgYlK5qGUhKZOvZThKw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/barn-joo-35-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1394,
        "categories": [
            {
                "alias": "korean",
                "title": "Korean"
            },
            {
                "alias": "gastropubs",
                "title": "Gastropubs"
            },
            {
                "alias": "tapasmallplates",
                "title": "Tapas/Small Plates"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 40.74964,
            "longitude": -73.98582
        },
        "transactions": [
            "restaurant_reservation",
            "delivery",
            "pickup"
        ],
        "price": "$$",
        "location": {
            "address1": "34 W 35th St",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10001",
            "country": "US",
            "state": "NY",
            "display_address": [
                "34 W 35th St",
                "New York, NY 10001"
            ]
        },
        "phone": "+12125644430",
        "display_phone": "(212) 564-4430",
        "distance": 505.0248566751661
    },
    {
        "id": "1z5Nu66M6W8mk5Ap4osZwA",
        "alias": "the-nomad-restaurant-new-york",
        "name": "The NoMad Restaurant",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/ct1j_pmuauuFqGK5p2IMTg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/the-nomad-restaurant-new-york?adjust_creative=l9agJO_xn0aq7qyWKA_uOA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=l9agJO_xn0aq7qyWKA_uOA",
        "review_count": 1399,
        "categories": [
            {
                "alias": "french",
                "title": "French"
            },
            {
                "alias": "newamerican",
                "title": "American (New)"
            },
            {
                "alias": "gastropubs",
                "title": "Gastropubs"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 40.7449,
            "longitude": -73.988482
        },
        "transactions": [],
        "price": "$$$",
        "location": {
            "address1": "1170 Broadway",
            "address2": "",
            "address3": "",
            "city": "New York",
            "zip_code": "10001",
            "country": "US",
            "state": "NY",
            "display_address": [
                "1170 Broadway",
                "New York, NY 10001"
            ]
        },
        "phone": "+13474725660",
        "display_phone": "(347) 472-5660",
        "distance": 504.37811773161087
    }
]
]