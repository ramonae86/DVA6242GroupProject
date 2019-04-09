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
	 }
	 #logo{
	     margin: auto;
	     width: 100px;
	 }
	 #filter {
	     background:#2d2d2d;
	     display:flex;
	     justify-content: center;
	     align-items:center;
	     flex-wrap:wrap;
	     padding:0;
	     margin:0;
	     font-family: sans-serif;
	     color:#FFF;
	 }
	 #result_list {
	     float: left;
	     width: 25%;
	 }
	 #result_map {
	     float: right;
	     width: 75%;
	     
	 }
	 .select {
	     display:flex;
	     flex-direction: column;
	     position:relative;
	     width:200px;
	     height:40px;
	     
	 }
	 .option {
	     padding:0 30px 0 10px;
	     min-height:40px;
	     display:flex;
	     align-items:center;
	     background:#424242;
	     border-top:#222 solid 1px;
	     position:absolute;
	     top:0;
	     width: 100%;
	     pointer-events:none;
	     order:2;
	     z-index:1;
	     transition:background .4s ease-in-out;
	     box-sizing:border-box;
	     overflow:hidden;
	     white-space:nowrap;
	     
	 }
	 .option:hover {
	     background:#afafaf;
	 }
	 .select:focus .option {
	     position:relative;
	     pointer-events:all;
	 }
	 input {
	     opacity:0;
	     position:absolute;
	     left:-99999px;
	 }
	 input:checked + label {
	     order: 1;
	     z-index:2;
	     /* background:#666; */
	     border-top:none;
	     position:relative;
	 }
	 input:checked + label:after {
	     content:'';
	     width: 0; 
	     height: 0; 
	     border-left: 5px solid transparent;
	     border-right: 5px solid transparent;
	     border-top: 5px solid white;
	     position:absolute;
	     right:10px;
	     top:calc(50% - 2.5px);
	     pointer-events:none;
	     z-index:3;
	 }
	 input:checked + label:before {
	     position:absolute;
	     right:0;
	     height: 40px;
	     width: 40px;
	     content: '';
	     /* background:#666; */
	 }
	 .button {
	     display: inline-block;
	     border-radius: 4px;
	     background-color: #f4511e;
	     border: none;
	     color: #FFFFFF;
	     text-align: center;
	     font-size: 16px;
	     padding: 12px;
	     width: 120px;
	     transition: all 0.5s;
	     cursor: pointer;
	     margin-left: 20px;
	 }

	 .button span {
	     cursor: pointer;
	     display: inline-block;
	     position: relative;
	     transition: 0.5s;
	 }

	 .button span:after {
	     content: '\00bb';
	     position: absolute;
	     opacity: 0;
	     top: 0;
	     right: -20px;
	     transition: 0.5s;
	 }

	 .button:hover span {
	     padding-right: 25px;
	 }

	 .button:hover span:after {
	     opacity: 1;
	     right: 0;
	 }
	</style>
    </head>
    <body>
	<div id="logo_container">
	    <a href="index.html">
		<img id="logo" src="img/logo.jpg" align="middle">
	    </a>
	</div>


	<div id="filter">
	    <p style="background:#424242;line-height:40px;margin-left:30px;">traffic</p>
	    <div class="select" tabindex="1">
		<input class="selectopt" name="traffic" type="radio" id="traffic1">
		<label for="traffic1" class="option">1</label>
		<input class="selectopt" name="traffic" type="radio" id="traffic2">
		<label for="traffic2" class="option">2</label>
		<input class="selectopt" name="traffic" type="radio" id="traffic3">
		<label for="traffic3" class="option">3</label>
		<input class="selectopt" name="traffic" type="radio" id="traffic4">
		<label for="traffic4" class="option">4</label>
		<input class="selectopt" name="traffic" type="radio" id="traffic5" checked>
		<label for="traffic5" class="option">5</label>
		<input class="selectopt" name="traffic" type="radio" id="traffic6">
		<label for="traffic6" class="option">6</label>
		<input class="selectopt" name="traffic" type="radio" id="traffic7">
		<label for="traffic7" class="option">7</label>
		<input class="selectopt" name="traffic" type="radio" id="traffic8">
		<label for="traffic8" class="option">8</label>
		<input class="selectopt" name="traffic" type="radio" id="traffic9">
		<label for="traffic9" class="option">9</label>
		<input class="selectopt" name="traffic" type="radio" id="traffic10">
		<label for="traffic10" class="option">10</label>
	    </div>
	    <p style="background:#424242;line-height:40px;margin-left:30px;">education</p>
	    <div class="select" tabindex="1">
		<input class="selectopt" name="education" type="radio" id="education1">
		<label for="education1" class="option">1</label>
		<input class="selectopt" name="education" type="radio" id="education2">
		<label for="education2" class="option">2</label>
		<input class="selectopt" name="education" type="radio" id="education3">
		<label for="education3" class="option">3</label>
		<input class="selectopt" name="education" type="radio" id="education4">
		<label for="education4" class="option">4</label>
		<input class="selectopt" name="education" type="radio" id="education5" checked>
		<label for="education5" class="option">5</label>
		<input class="selectopt" name="education" type="radio" id="education6">
		<label for="education6" class="option">6</label>
		<input class="selectopt" name="education" type="radio" id="education7">
		<label for="education7" class="option">7</label>
		<input class="selectopt" name="education" type="radio" id="education8">
		<label for="education8" class="option">8</label>
		<input class="selectopt" name="education" type="radio" id="education9">
		<label for="education9" class="option">9</label>
		<input class="selectopt" name="education" type="radio" id="education10" >
		<label for="education10" class="option">10</label>
	    </div>
	    <p style="background:#424242;line-height:40px;margin-left:30px;">environment</p>
	    <div class="select" tabindex="1">
		<input class="selectopt" name="environment" type="radio" id="environment1">
		<label for="environment1" class="option">1</label>
		<input class="selectopt" name="environment" type="radio" id="environment2">
		<label for="environment2" class="option">2</label>
		<input class="selectopt" name="environment" type="radio" id="environment3">
		<label for="environment3" class="option">3</label>
		<input class="selectopt" name="environment" type="radio" id="environment4">
		<label for="environment4" class="option">4</label>
		<input class="selectopt" name="environment" type="radio" id="environment5" checked>
		<label for="environment5" class="option">5</label>
		<input class="selectopt" name="environment" type="radio" id="environment6">
		<label for="environment6" class="option">6</label>
		<input class="selectopt" name="environment" type="radio" id="environment7">
		<label for="environment7" class="option">7</label>
		<input class="selectopt" name="environment" type="radio" id="environment8">
		<label for="environment8" class="option">8</label>
		<input class="selectopt" name="environment" type="radio" id="environment9">
		<label for="environment9" class="option">9</label>
		<input class="selectopt" name="environment" type="radio" id="environment10">
		<label for="environment10" class="option">10</label>
	    </div>
	    <p style="background:#424242;line-height:40px;margin-left:30px;">safety</p>
	    <div class="select" tabindex="1">
		<input class="selectopt" name="safety" type="radio" id="safety1">
		<label for="safety1" class="option">1</label>
		<input class="selectopt" name="safety" type="radio" id="safety2">
		<label for="safety2" class="option">2</label>
		<input class="selectopt" name="safety" type="radio" id="safety3">
		<label for="safety3" class="option">3</label>
		<input class="selectopt" name="safety" type="radio" id="safety4">
		<label for="safety4" class="option">4</label>
		<input class="selectopt" name="safety" type="radio" id="safety5" checked>
		<label for="safety5" class="option">5</label>
		<input class="selectopt" name="safety" type="radio" id="safety6">
		<label for="safety6" class="option">6</label>
		<input class="selectopt" name="safety" type="radio" id="safety7">
		<label for="safety7" class="option">7</label>
		<input class="selectopt" name="safety" type="radio" id="safety8">
		<label for="safety8" class="option">8</label>
		<input class="selectopt" name="safety" type="radio" id="safety9">
		<label for="safety9" class="option">9</label>
		<input class="selectopt" name="safety" type="radio" id="safety10">
		<label for="safety10" class="option">10</label>
	    </div>
	    <button class="button" style="vertical-align:middle"><span>Update </span></button>
	</div>

	<div id="result_list">
	    list
	</div>

	<div id="result_map">
	    map
	</div>
    </body>
</html>
