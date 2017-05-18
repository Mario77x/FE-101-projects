
// IF STATEMENTS


// 1. Is it positive?
// Write a function called isPositive that:
// - takes one argument, a number
// - returns true if it is positive, and false if it is not


function isPositive(n) {
	if (n==0) {
		alert("0 (zero) is neither positive nor negative");
	} else if (n<0) {
		alert("The number is negative");
	} else if (n>0) {
		alert("The number is positive");
	} else {
		alert(n + " is not a valid number");
	}
}

isPositive(-20);
isPositive(0);
isPositive(5);
isPositive('jhjh');



// 2. State capitals
// Write a function called getCapital that:
// - takes one argument, a two-letter state abbreviation (ie. "ny", "ma", "fl")
// - returns the state capital (you don't need to do all 50 states! 3 or 4 will suffice)

var stateCapitalArray = [
	{state: "FL", capital: "Orlando"},
	{state: "NY", capital: "New York"},
	{state: "CA", capital: "San Francisco"}
	];

function getCapital(stateInput){

	// Search the state in the array
	for (i=0; i<stateCapitalArray.length; i++) {
		if (stateCapitalArray[i].state === stateInput) {
			var x = true;
			alert("The state capital of " + stateCapitalArray[i].state + " is " + stateCapitalArray[i].capital + ".");
			var stateInput = '';
		} 
	}

	// Check the some value was found in the array
	if (x != true) {
		alert("That's not a valid state");
	}

}

getCapital('FL');
getCapital('OH');
getCapital('CA');



// 3. Tax brackets
// Write a function called calculateTaxes that:
// - takes one argument, an income (a number)
// - returns 5% of that income if it is less than $10000, 10% of that income if it is between $10001-$20000, 
// and 15% if it is greater than $20000

function calculateTaxes(income) {

 	if (income <= 0) {
		alert("That's not a valid income");
		return;

	} else if (income > 0 && income <= 10000) {
		var tax = (income * 5) / 100;

	} else if (income > 10000 && income <= 20000) {
		var tax = (income * 10) / 100;

	} else if (income > 20000) {
		var tax = (income * 15) / 100;
	}
	
	alert("The taxes on your income are " + tax);

}

calculateTaxes(-20);
calculateTaxes(0);
calculateTaxes(5000);
calculateTaxes(10000);
calculateTaxes(11000);
calculateTaxes(20000);
calculateTaxes(30000);


