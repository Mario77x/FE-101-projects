
var radius = 39;

function calcCircumfrence() {
	var resultCirc = radius * 2;
	document.getElementById('circ').innerHTML = "The circumference of the circle with radius " + radius + " is " + resultCirc;
}


function calcArea() {
	var resultArea = 3.14159265359 * (radius * radius);
	document.getElementById('area').innerHTML = "And its area is " + resultArea;
}