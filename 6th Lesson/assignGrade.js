

function assignGrade(grade) {

	if  (grade) {
		return(alert("The value of your input is not supported"));

	} else if (grade < 0){
		return(alert("The value of your input is not supported"));

	} else if (grade > 10){
		return(alert("The value of your input is not supported"));

	} else if (grade == 10 || grade == 9) {
		var stringResult =  "A";

	} else if (grade == 8) {
		var stringResult = "B";

	} else if (grade == 7 ) {
		var stringResult = "C";

	} else if (grade == 6) {
		var stringResult = "D";

	} else {
		var stringResult = "F";
	}
	
	document.getElementById('result').innerHTML = stringResult;

}


