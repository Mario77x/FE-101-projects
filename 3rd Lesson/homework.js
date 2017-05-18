// INITIAL NOTE:
// I'm adding the value of each variable at the beginning of each exercise, 
// but this wasn't meant to make them global variables,
// I just thought it was easier to keep track of the testing.

// Ideally, this would be a user input or an internal operation, 
// though I agree I should have added the local variable between the brackets of each function.



//---------------------------------------------------------------------------------
// Function that returns the square of a number

// Not meant to be global variables: I added the values here to let you see how I tested the function.
var n = 5;

function squareNumber(n) {
	var squaring = n * n;
	console.log("The result of squaring the number " + n + " is " + squaring);
	return squaring;
}



//---------------------------------------------------------------------------------
// Function that returns the division of a number by two

// Not meant to be global variables: I added the values here to let you see how I tested the function.
var n = 5;

function halfNumber(n) {
	var halfing = n / 2;
	console.log("Half of " + n + " is " + halfing);
	return halfing;
}



//---------------------------------------------------------------------------------
// Function that returns what percent of a number another number is


// Not meant to be global variables: I added the values here to let you see how I tested the function.
var num = 2568;
var result = 513.6;

function percentOf(num, result) {
	var per = (result * 100) / num
	console.log(result + " is the " + per + "% of " + num);
	return per;
}



//---------------------------------------------------------------------------------
// Function that returns the area of a circle base on its radius

// Not meant to be global variables: I added the values here to let you see how I tested the function.
var rad = 391;

function areaOfCircle(rad) {
	var x = 3.14159265359 * (rad * rad);
	var area = Math.round(x * 100) / 100;
	console.log("The area for a circle with radius " + rad + " is " + area);
	return area;
}



//---------------------------------------------------------------------------------
// 1- Take half of the number and store the result.
// 2- Square the result of #1 and store that result.
// 3- Calculate the area of a circle with the result of #2 as the radius.
// 4- Calculate what percentage the squared result (#2) is of the area (#3).


// Not meant to be global variables: I added the values here to let you see how I tested the function.
var num = 10;

function allTogether(num) {

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