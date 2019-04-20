function normalIcon() {
 //return 'map-icons.png'
   return 'marker_restaurant.png'
}

function highlightedIcon() {
  return 'marker_restaurant_large.png'
}

function normalOpacity() {
  return 0.8
}

function highlightedOpacity() {
  return 1
}

function getTimesTransit(yelp_coordinates, map) {
    let timeData = [];
    let latValue;
    for(let i = 0; i < yelp_coordinates.length; i++){
        console.log(yelp_coordinates[i]);
        console.log(YelpTimeTransit(yelp_coordinates[i], serviceTimeTransit, map));
        timeData.push(YelpTimeTransit(yelp_coordinates[i], serviceTimeTransit, map));
        // console.log(timeData);
    }
    console.log(timeData)
    return timeData // array of promises
}

function YelpTimeTransit(coordinate, service, mainMap) {
    return new Promise(function(resolve) {
    serviceTimeTransit.getDistanceMatrix({
      origins: [apt],
      destinations: [coordinate],
      travelMode: 'TRANSIT',
      unitSystem: google.maps.UnitSystem.METRIC,
    }, function(response, status) {
      if (status !== 'OK') {
        alert('Error was: ' + status);
      } else {
        var originList = response.originAddresses;
        var destinationList = response.destinationAddresses;
        // var outputDiv = document.getElementById('output');
        for (var i = 0; i < 1; i++) {
          var results = response.rows[i].elements;            
          for (var j = 0; j < results.length; j++) {
            var time = results[j]['duration']['text'];
            // console.log(times);
            resolve(time);
          }
        }
        // console.log(time);
      }
    })
    })
} 

function getTimesWalk(yelp_coordinates, map) {
    let timeData = [];
    let latValue;
    for(let i = 0; i < yelp_coordinates.length; i++){
        console.log(yelp_coordinates[i]);
        console.log(YelpTimeTransit(yelp_coordinates[i], serviceTimeWalk, map));
        timeData.push(YelpTimeTransit(yelp_coordinates[i], serviceTimeWalk, map));
        // console.log(timeData);
    }
    console.log(timeData)
    return timeData // array of promises
}

function YelpTimeWalk(coordinate, service, mainMap) {
    return new Promise(function(resolve) {
    serviceTimeWalk.getDistanceMatrix({
      origins: [apt],
      destinations: [coordinate],
      travelMode: 'Walk',
      unitSystem: google.maps.UnitSystem.METRIC,
    }, function(response, status) {
      if (status !== 'OK') {
        alert('Error was: ' + status);
      } else {
        var originList = response.originAddresses;
        var destinationList = response.destinationAddresses;
        // var outputDiv = document.getElementById('output');
        for (var i = 0; i < 1; i++) {
          var results = response.rows[i].elements;            
          for (var j = 0; j < results.length; j++) {
            var time = results[j]['duration']['text'];
            // console.log(times);
            resolve(time);
          }
        }
        // console.log(time);
      }
    })
    })
} 


function addMarker(location, map, string) {
  if(infowindow)
  infowindow.close();
  var infowindow = new google.maps.InfoWindow({content: string});
  var marker = new google.maps.Marker({
    position: location,
    // label: labels[labelIndex++ % labels.length],
    map: map,
    icon: normalIcon(),  
    opacity: normalOpacity()      
  });

  google.maps.event.addListener(map, "click", function(event) {
      infowindow.close();
      marker.setIcon(normalIcon());
      marker.setOpacity(normalOpacity());
  });

  marker.addListener('click', function () {
      for (var j = 0; j < markers.length; j++) {
        markers[j].setIcon(normalIcon());
        marker.setOpacity(normalOpacity());
        infowindows[j].close(map, markers[j])
      }
      marker.setIcon(highlightedIcon());
      marker.setOpacity(highlightedOpacity());
      infowindow.open(map, marker);
  })

  infowindows.push(infowindow)
  markers.push(marker);
}


function myfunction() {
}
function highlightedList() {
  document.getElementById('img1').style.height = "400px";
}
function normalList() {

}