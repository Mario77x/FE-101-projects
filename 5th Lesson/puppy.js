
var puppyAge = 3;
var humanAge = 39;

function calculateDogAge() {
	document.getElementById('pup').innerHTML = "Your doggie is " + (puppyAge * 7) + " years old in human years!";
	document.getElementById('human').innerHTML = "Your age is " + (Math.round((humanAge / 7) * 10) / 10) + " years old in dog years!";
}

