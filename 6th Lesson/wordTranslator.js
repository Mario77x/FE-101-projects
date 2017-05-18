

function helloWorld(langCode) {

	if (langCode === "es") {
		var stringResult =  "Hola mundo";

	} else if (langCode === "it") {
		var stringResult = "Ciao mondo";

	} else if (langCode === "nl") {
		var stringResult = "Hallo wereld";

	} else {
		var stringResult = "Hello World";
	}
	
	document.getElementById('result').innerHTML = stringResult;

}


