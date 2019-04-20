<!DOCTYPE html>
<html>
<head>
  <title>Simple Map</title>
  <meta name="viewport" content="initial-scale=1.0">
  <meta charset="utf-8">
  <style>
    /* Always set the map height explicitly to define the size of the div
     * element that contains the map. */
    #map {
      height: 80%;
      width: 50%;
      margin-top:100px;
      margin-right:10px;
    }
    /* Optional: Makes the sample page fill the window. */
    html, body {
      height: 100%;
      width: : 100%;
      padding: 0;
    }

    #markers_info .marker {
      height: 40px;
      width: 50px;
      margin-left:1000px;
      margin-right:10px;
      cursor: pointer;*/*/
    }

  </style>
</head>
<body>

<div id="map">
    <script>
      var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      var labelIndex = 0;
      var work = {lat: 40.723042, lng: -73.999180};
      var apt1 = {lat: 40.688453, lng: -73.986503};
      var apt2 = {lat: 40.748760, lng: -74.005323};
      var apt3 = {lat: 40.806264, lng: -73.950991};

      var markers = [];
      var infowindows = [];

      var string1 = '<div id="content">'+
              '<div id="siteNotice">'+
              '</div>'+
            //  '<h1 id="firstHeading" class="firstHeading">Apt1</h1>'+
              '<div id="bodyContent">'+
              '<p><b>Apt1</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
              'sandstone rock formation in the southern part of the '+
              'Heritage Site.</p>'+
              '<p>Attribution: <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
              'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
              '.</p>'+
              '</div>'+
              '</div>';

      var string2 = '<div id="content">'+
              '<div id="siteNotice">'+
              '</div>'+
              '<div id="bodyContent">'+
              '<p><b>Apt2</b>, is located in <b>Area2</b>, is 2,000 square feet ' +
              'Heritage Site.</p>'+
              '<p>Attribution: <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
              'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
              '.</p>'+
              '</div>'+
              '</div>';

      var string3 = '<div id="content">'+
              '<div id="siteNotice">'+
              '</div>'+
              '<div id="bodyContent">'+
              '<p><b>Apt3</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
              'Heritage Site.</p>'+
              '<p>Attribution: <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
              'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
              '.</p>'+
              '</div>'+
              '</div>';


      var apts=[]
      apts.push(apt1)
      apts.push(apt2)
      apts.push(apt3)


      var strings=[]
      strings.push(string1)
      strings.push(string2)
      strings.push(string3)

      console.log(apts)
      console.log(strings)

      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.723040, lng: -73.999180},
          zoom: 10
        });


      var styles = {
          default: null,
          hide: [
            // {
            //   featureType: 'poi.business',
            //   stylers: [{visibility: 'off'}]
            // },
            {
              featureType: 'poi',
              stylers: [{visibility: 'off'}]
            },
            {
              featureType: 'transit',
              elementType: 'labels.icon',
              stylers: [{visibility: 'off'}]
            }
          ]
      };

        map.setOptions({styles: styles['hide']});


        // var marker = new google.maps.Marker({
        //   position: {lat: 40.723040, lng: -73.999180},
        //   map: map,
        //   title: 'Hello World!'
        // });

        for (i = 0; i < apts.length; i++) { 
          addMarker(apts[i], map, strings[i])
           
        }
        // addMarker(apt1, map, string1);
        // addMarker(apt2, map, string2);
        // addMarker(apt3, map, string3);

      //var infowindow = Object.create(google.maps.InfoWindow({content: string}));

      }

      function normalIcon() {
        return 'marker_house_green.png'
      }

      function highlightedIcon() {
        return 'marker_house_pink.png'
      }


      // var infowindow = new google.maps.InfoWindow();


      function addMarker(location, map, string) {
        // Add the marker at the clicked location, and add the next-available label
        // from the array of alphabetical characters.
 
       if(infowindow)
       infowindow.close();
       var infowindow = new google.maps.InfoWindow({content: string});


        //var image = 'marker_house_pink.png';

        // var infowindow = new google.maps.InfoWindow({
        //       content: string
        // });
        

        var marker = new google.maps.Marker({
          position: location,
          // label: labels[labelIndex++ % labels.length],
          map: map,
          icon: normalIcon()         
        });
        // marker.addListener('mouseover', function() {
        //   infowindow.open(map, marker);
        //   marker.setIcon(highlightedIcon());
        // });
        // marker.addListener('mouseout', function() {
        //    infowindow.close(map, marker);
        //    marker.setIcon(normalIcon());
        // });
        // marker.addListener('click', function() {
        //   infowindow.open(map, marker);
        //   marker.setIcon(highlightedIcon());
        // });

 
        google.maps.event.addListener(map, "click", function(event) {
            infowindow.close();
            marker.setIcon(normalIcon());
        });

        marker.addListener('click', function () {
            for (var j = 0; j < markers.length; j++) {
              markers[j].setIcon(normalIcon());
              infowindows[j].close(map, markers[j])
            }
            marker.setIcon(highlightedIcon());
            infowindow.open(map, marker);
        })

        infowindows.push(infowindow)
        markers.push(marker);
      }
    </script>
</div>

<div id='markers_info'>
  <script>

     function myfunction() {
        console.log('image clicked')
     }
     function highlightedList() {
        document.getElementById('img1').style.height = "400px";
     }
     function normalList() {

     }

  </script>
<!--   <div class="marker">  
    <img src='image1.jpeg' width="50" height="50" name='img1' 
      onmouseover="img1.width='100';img1.height='50';" 
      onmouseout="img1.width='50';img1.height='50';" />
  </div> -->

  <div class="marker">  
    <img src='image1.jpeg' width="50" height="50" name='img1' 
      onmouseover="markers[0].setIcon(highlightedIcon());" 
      onmouseout="markers[0].setIcon(normalIcon());" />
  </div>

  <div class="marker">
    <img src="image2.jpeg" width="50" height='50' name='img2' 
      onmouseover="markers[1].setIcon(highlightedIcon());" 
      onmouseout="markers[1].setIcon(normalIcon());" />
  </div>

  <div class="marker">
    <img src="image3.jpeg" width="50" height='50' name='img3' 
      onmouseover="markers[2].setIcon(highlightedIcon());" 
      onmouseout="markers[2].setIcon(normalIcon());" />
  </div>


</div>


<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAwrdvLk2XruYEsLwqpYwiqnaKbSwhHiiM&callback=initMap"
    async defer></script>
  </body>
</html>
