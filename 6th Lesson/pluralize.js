
function pluralize(number, noun) {

	if (number) {
		return(alert("The value of your input is not supported"));

	} else if (number < 0) {
		return(alert("The value of your input is not supported"));

	} else if (number == 1) {
		var stringResult = number + " " + noun + " singular";

	} else {
		var stringResult = number + " " + noun + " plural";
	}
	
	document.getElementById('result').innerHTML = stringResult;

}


// function pluralize(num, noun) {
//   if (num === 1) {
//     return num + " " + noun;
//   }

//   plurals = {
//     cat: "cats",
//     dog: "dogs",
//     sheep: "sheep",
//     fish: "fish"
//   }

//   return num + " " + plurals[noun];
// }

// console.log(pluralize(1, "cat"));
// console.log(pluralize(3, "cat"));
// console.log(pluralize(1, "sheep"));
// console.log(pluralize(3, "sheep"));

