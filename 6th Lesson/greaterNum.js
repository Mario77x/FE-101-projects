

function greaterNum(num1, num2) {

	if (num1 > num2){
		var stringResult = "The greater number of " + num1 + " and " + num2 + " is " + num1;

	} else if (num2 > num1) {
		var stringResult = "The greater number of " + num1 + " and " + num2 + " is " + num2;

	} else {
		var stringResult = "The numbers " + num1 + " and " + num2 + " are equal";
	}
	
	document.getElementById('result').innerHTML = stringResult;

}


