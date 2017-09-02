//weather.js
//This script calls openweather.org API for current local wather conditions and displays the location, temperature, and a weather condition icon.

var wxIcon; //Wx icon code
var wxIconPath; //path to Wx icon
var userLocation = "Denver, CO, USA" 
var apiKey = "b1d8243e585e458550ec2db368435c82";

var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+ userLocation + "&units=imperial&appid=" + apiKey; 

	//console.log(queryURL);

$.ajax({
	url: queryURL,
	method: "GET"
})
.done(function(response) {//Run this code after API get is complete
    
    console.log(response);

    //create path weather icon
    wxIcon = response.weather[0].icon

    wxIconPath = "https://openweathermap.org/img/w/"+ wxIcon +".png";

    //display City
    $("#city").text(response.name)

    //Display temperature a s whole number with degree symbol
    $("#temperature").text(Math.round(response.main.temp)+String.fromCharCode(176));
    
    //Add weather Icon to page
    $("#weather-icon").html("<img src= " + wxIconPath + ">")

    //textual description of weather
    $("#weather-description").text(response.weather[0].main);
    //display windspeed
    $("#windspeed").text(Math.round(response.wind.speed) + "mph")
    
    //display wind direction arrow
    $("#wind-direction").html("<img src= 'assets/images/windIndicator.png'>")

    //rotate arrow into the wind using 3rd party plugin
    $("#wind-direction").rotate(response.wind.deg);


}); //end ajax.done