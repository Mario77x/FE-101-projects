// CREDIT CARD VALIDATOR

// ---------------------------------------------------------------------------------------
// Test CC value (for personal use). Note i'll use a string instead of a number,
// as it's easier to get digit length and 
// check if CC is number or include letters (parseInt() returns NaN when letters present).
// I also decided to create all functions and execute all at the end to have a more organized execution 

var ccString = 'a0001111000011110000';


// ---------------------------------------------------------------------------------------
// Variables used to get final result of the process
var validCCLength = false;
var validCCNums = false;
var validCCDiff = false;
var validCCEven = false;
var validCCFinal = false;

// Aray to be used to slice the CC into 16 digits
var arrayCC = [];

// Var used to check sum of number > 16
var sumCC = 0;

// Var used to store message
var errorMessage= '';


// ---------------------------------------------------------------------------------------
// Check if number is 16 digits and all of them are numbers

function length16Digits(s) {

	var x = /^\d+$/.test(s);

	if (s.length !== 16) {
		validCCLength = false;
		errorMessage = 'Your number is either too long or too short';
		return;
	}

	if (x === false) {
		validCCNums = false;
		errorMessage = 'Credit cards numbers cannot have letters';
		return;
	} else {
		validCCNums = true;
	}
}



// ---------------------------------------------------------------------------------------
// Function checking if digits are different

function checkDiffNum(n) {

	for (i=0; i<16; i++) {
		var j = i + 1;
		arrayCC[i] = [n.slice(i,j)];
	}

	for (i=0; i<16; i++) {
		var j = i + 1;
		if (arrayCC[i] !== arrayCC[j]) {
			validCCDiff = true;
			return;
		} else {
			validCCDiff = false;
			errorMessage = 'Credit cards numbers cannot have all equal numbers';
		}
	}
}



// ---------------------------------------------------------------------------------------
// Check if the final digit is even

function finalDigit(last) {

	if (last%2 == 0) {
		validCCEven = true;
	} else {
		validCCEven = false;
		errorMessage = 'Credit cards numbers end always in an even number';
	}
}



// ---------------------------------------------------------------------------------------
// Check if the sum of all the digits is greater than 16

function sumMore16() {

	for (i=0; i<16; i++) {
		sumCC = sumCC + parseInt(arrayCC[i]);
	}

	if (sumCC > 16) {
		validCCFinal = true;
	} else {
		validCCFinal = false;
		errorMessage = 'Invalid credit card number';
	}

}



// ---------------------------------------------------------------------------------------
// I decided to create all functions and execute all at the end to have a more organized execution 

length16Digits(ccString);

if (validCCLength === false && validCCNums === false) {
	alert(errorMessage);
} else {
	checkDiffNum(ccString);	
	if (validCCDiff === false) {
		alert(errorMessage);
	} else {
		finalDigit(arrayCC[15]);
		if (validCCEven === false) {
			alert(errorMessage);
		} else {
			sumMore16();
			if (validCCFinal === false) {
				alert(errorMessage);
			} else {
				alert("Valid CC number, you can proceed");
			}
		}
	}
}


