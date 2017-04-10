// Function that returns the square of a number

var n = 5;

function squareNumber() {
	console.log("The result of squaring the number " + n + " is " + n * n);
	return n;
}


// Function that returns the division of a number by two

var n = 5;

function halfNumber() {
	console.log("Half of " + n + " is " + n / 2);
	return n;
}


// Function that returns what percent of a number another number is

var num = 2568;
var result = 513.6;

function percentOf() {
	var per = (result * 100) / num
	console.log(result + " is the " + per + "% of " + num);
	return per;
}


// Function that returns the area of a circle base on its radius

var rad = 391;

function areaOfCircle() {
	var x = 3.14159265359 * (rad * rad);
	var area = Math.round(x * 100) / 100;
	console.log("The area for a circle with radius " + rad + " is " + area);
	return area;
}


// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage the squared result (#2) is of the area (#3).


// Define initial variable/number

var num = 10;


// Funtion

function allTogether() {

	// 1- Division by two
	var halfN = num / 2;
	console.log("Half of " + num + " is " + halfN);


	// 2- Square
	var squareN = halfN * halfN;
	console.log("The result of squaring the number " + halfN + " is " + squareN);


	// 3- Area of a circle based on radius
	var x = 3.14159265359 * (squareN * squareN);
	var area = Math.round(x * 100) / 100;
	console.log("The area for a circle with radius " + squareN + " is " + area);


	// 4- What percentage of 'area' 'squareN' is

	var y = (squareN * 100) / area;
	var per = Math.round(y * 100) / 100;
	console.log(squareN + " is the " + per + "% of " + area);

	return;

}