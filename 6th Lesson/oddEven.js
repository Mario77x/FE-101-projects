
// Write a for loop that will iterate from 0 to 20. 
// For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

function checkEven(val) {
     return (val%2 == 0);
}

function loopEvenOdd() {

	for (i = 0; i <=20; i++) {
		
		if (i == 0) {
			alert("Number is zero");

		} else if (checkEven(i)) {
			alert("The number " + i + " is even");

		} else {
			alert("The number " + i + " is odd");

		}

	}

}
