
var birthYear = 1977;
var futureYear = 2035;


function ageCalculator() {
	var futureAge = (2017 - birthYear) + (futureYear - 2017);
	document.getElementById('ageString').innerHTML = "You will be " + futureAge + " in " + futureYear;
	return;
}

