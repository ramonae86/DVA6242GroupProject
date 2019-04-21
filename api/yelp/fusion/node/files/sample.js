'use strict';
const yelp = require('yelp-fusion');
// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = '6da7_Adx5Ru5fdHfXHUvkKXOoOQtQuJKA8nNURL-n6ZH1yUsMaDH4q5o6AgbEzJ9RH9-Bh1OHl-uJEmtiJ865l1mzeQM_mjFBNVAJ-_zcTx-y-nwCXeIrHzpZZKaXHYx';

const searchRequest = {
  term:'Chinese',
  //location: '336 State St # 2, Brooklyn, NY 11217',
  //location: '535 W 23rd St # 27084, New York, NY 10011',
//  location: loc,
  location: '10001',
 radius: 1000
};

const client = yelp.client(apiKey);

client.search(searchRequest).then(response => {
  const Results = response.jsonBody.businesses;
  const prettyJson = JSON.stringify(Results, null, 4);
  //console.log(prettyJson);
  //console.log(Results);
  console.log(prettyJson);
 // console.log(typeof(prettyJson));
 // console.log(typeof(Results));
  //console.log(Results[1]);
}).catch(e => {
  console.log(e);
});
