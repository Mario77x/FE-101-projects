
var currentAge = 39;
var futureAge = 91;
var amountPerDay = 3;

function calculateSupply() {
	var result = amountPerDay * ((futureAge - currentAge) * 365);
	document.getElementById('sup').innerHTML = "You will need " + result + " packs of your favourite snack to last you until the ripe old age of " + futureAge + "!";
}

