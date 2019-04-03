code download: https://github.com/Yelp/yelp-fusion

how to use: 
(https://github.com/Yelp/yelp-fusion/tree/master/fusion/node)

go to your folder, run following commands:
git clone https://github.com/Yelp/yelp-fusion.git
cd yelp-fusion/fusion/node
npm install 
Open up the sample.js：const apiKey = '<YOUR_API_KEY>'; replace key with: 6da7_Adx5Ru5fdHfXHUvkKXOoOQtQuJKA8nNURL-n6ZH1yUsMaDH4q5o6AgbEzJ9RH9-Bh1OHl-uJEmtiJ865l1mzeQM_mjFBNVAJ-_zcTx-y-nwCXeIrHzpZZKaXHYx

run: node sample.js
or: node sample.js > a.txt
or: node sample.js --

results has following attributes:
id
alias
name
image url
is_closed
url
num_review
rating
coordinates(Latitude, Longtitude)
location
phone
distance: straight line distance (https://www.quora.com/How-does-Yelp-calculate-distance)