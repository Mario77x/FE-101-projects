
var fahrTemp = 99;
var celsTemp = 37;

function celsiusToFahrenheit() {
	var resultF = (Math.round((celsTemp * 1.8) + 32) * 100) / 100;
	document.getElementById('tempsCC').innerHTML = "The current temperature of " + celsTemp + "C is equal to " + resultF + "F";
}


function fahrenheitToCelsius() {
	var resultC = (Math.round((fahrTemp - 32) / 1.8) * 100) / 100;
	document.getElementById('tempsFF').innerHTML = "The current temperature of " + fahrTemp + "F is equal to " + resultC + "C";
}