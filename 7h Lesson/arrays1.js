// Your top choices
// ----------------
// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", 
// picking the right suffix for the number based on what it is.

var topChoices = ['blue', 'black', 'Daft Punk', 'Bob Marley', 'Star Wars', 'Star Trek', 'Stargate SG1', 'Friends'];

var i = 0 ;

while (i < topChoices.length) {
	var message = "My #" + (i+1) + " choice is: " + topChoices[i];
	console.log(message);
	i++;
}


// Longest String
// --------------
// Given an array of strings, find the longest string and print out that string.
// hint: strings also have the .length property - i.e `"starburst".length` is 9.

var arrayStrings = ["Today is sunny and warm", "Tomorrow will rain cats and dogs", 
"Today it's snowing like hell", "April doet wat hij wilt", "Summertime"];

var j = 0;
var lengthy = 0;
var position = 0;

while (j < (arrayStrings.length)) {

	if (arrayStrings[j].length > lengthy) {
		lengthy = arrayStrings[j].length;
		position = j;
	}

	j++;
}

var message = "The longest string in the array is '" + arrayStrings[position] + "', as it has " + lengthy + " characters.";
console.log(message);


// First and Last
// --------------
// Write a JavaScript function called first() that takes one input, an array, and returns the first element in that array.
// Write another JavaScript function called last() that takes one input, an array, and returns the lastt element in that array.

var arrayDay = ['mañana', 'mediodía', 'tarde', 'noche'];

function first() {
	return(console.log(arrayDay[0]));
}

function last() {
	// When extracting a value from the array using a variable for position calculated from the length of the array,
	// remember that the length gives you the amount, not the position - which starts with 0.
	// Always substract 1!
	var a = (arrayDay.length) - 1;
	return(console.log(arrayDay[a]));
}