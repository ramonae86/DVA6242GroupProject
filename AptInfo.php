<!DOCTYPE html>
<html>
    <head>
	<meta name="viewport" content="initial-scale=1.0, user-scalable=no">
	<meta charset="utf-8">
	<title>Team 127</title>
	<style>
	 body {
	     margin: 0px;
	 }
	 #logo_container {
	     background-color: white;
	     text-align: center;
	     border-bottom: 2px solid #424242;
	 }
	 #logo{
	     margin: auto;
	     width: 100px;
	 }
	 .name_and_address{
	     border-bottom: 2px solid #424242;
	     display: inline-block;
	     background: #d3d3d3;
	     width: 100%;
	 }
	 .name_and_address h1 {
	     line-height: 20px;
	 }
	 .features {
	     position: absolute;
	     bottom: 0;
	     left: 0;
	     width: 65%;
	     height: 75%;
	     overflow: scroll;
	 }
	 .contact {
	     display: inline-block;
	     position: absolute;
	     top: 230px;
	     right: 25px;
	     width: 34%;
	 }
	 .contact_container {
	     width: 100%;
	     margin: 10px;
	     border: 5px #424242 solid;
	 }
	 #apt_map {
	     position: absolute;
	     bottom: 0;
	     right: 0;
	     width: 35%;
	     height: 60%;
	 }
	 .phone_number {
	     position: absolute;
	     color: white;
	     font-family: sans-serif;
	     font-size: 60px;
	     line-height: 100px;
	     vertical-align: middle;
	 }
	 .apt_img {
	     margin: 10px;
	     height: 60%;
	 }
	</style>
    </head>
    <body>
	<div id="logo_container">
	    <a href="index.html">
		<img id="logo" src="img/logo.jpg" align="middle">
	    </a>
	</div>

	<div id="info">
	    <div class="name_and_address">
		<h1>[Herald Towers](https://www.apartments.com/herald-towers-new-york-ny/rjlbf92/)</h1>
		<p>[50 W 34th St, New York, NY 10001](https://www.google.com/maps/dir/'350+5th+Ave+New+York,+NY+10118'/50+W+34th+St,+New+York,+NY+10001/data=!4m2!4m1!3e2)</p>
	    </div>

	    <div class="features">
		<img class="apt_img" src="https://images1.apartments.com/i2/pA7OU9D2pbCA2cIJcBHGdAgnvH46dcAdLaSBY5WWybE/111/518-w-204th-st-unit-1-new-york-ny-primary-photo.jpg" align="middle">
		<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>features<br>
	    </div>

	    <div class="contact">
		<div class="contact_container" style="background: #2dc100; height:100px; width: 100%; border-radius:10px;">
		    <img class="phone_img" src="./img/phone.png" height="100px">
		    <span class="phone_number">646-868-3032</span>
		</div>
	    </div>

	    <div id="apt_map">
		<script>
		 function initMap() {
		     var map;
		     map = new google.maps.Map(document.getElementById('apt_map'), {
			 center: {lat: 40.723040, lng: -73.999180},
			 zoom: 14
		     });
		 }
		</script>
		<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAwrdvLk2XruYEsLwqpYwiqnaKbSwhHiiM&callback=initMap" async defer>
		</script>
	    </div>
	    
	</div>




	
    </body>
</html>
