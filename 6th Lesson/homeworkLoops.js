
// 1. From 0 to 100, print all the numbers that are divisible by 3.

function divByThree() {
	
	var message1 = "Numbers divisible by three between 0 and 100: ";

		for (i = 1; i < 99; i++) {

			// division by 3	
			var result = i / 3;

			// transforming number in string, in order to be able to use indexOf()
			var resultString = result.toString();

			// indexOf() allows to find the position of a character in a string
			var multiple = resultString.indexOf(".");
			
			// if result of indexOf() is -1, 
			// it means that there is no '.' and therefore the number is a perfect division by 3
			if (multiple < 0) {
				message1 = message1 + i + ", ";
			}

		}

	// this last line is only for style in the message
	message1 = message1 + " and 99.";

	// this line displays the message after the button in the html h4
	document.getElementById("demo1").innerHTML = message1;

}




// 2. Fizz Buzz is a classic programming interview question-
// Write a program that prints the numbers from 1 to 100. 
// But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. 
// For numbers which are multiples of both three and five print “FizzBuzz”

function fizzBuzz() {

	var message2 = "Numbers multiple of 3 = 'Fizz' and multiple of 5 = 'Buzz': ";

		for (i = 1; i < 100; i++) {

			// division by 3	
			var result3 = i / 3;

			// transforming number in string, in order to be able to use indexOf()
			var resultString3 = result3.toString();

			// indexOf() allows to find the position of a character in a string
			var multiple3 = resultString3.indexOf(".");

			// division by 5	
			var result5 = i / 5;

			// transforming number in string, in order to be able to use indexOf()
			var resultString5 = result5.toString();

			// indexOf() allows to find the position of a character in a string
			var multiple5 = resultString5.indexOf(".");


			// if result of indexOf() is -1, 
			// it means that there is no '.' and therefore the number is a perfect division by 3 or 5

			if (multiple3 < 0 && multiple5 < 0) {
				message2 = message2 + "FizzBuzz, ";
			} else if (multiple3 < 0) {
				message2 = message2 + "Fizz, ";
			} else if (multiple5 < 0) {
				message2 = message2 + "Buzz, ";
			} else {
				message2 = message2 + i + ", ";
			}

		}

	// this last line is only for style in the message
	message2 = message2 + " and Buzz.";

	// this line displays the message after the button in the html h4
	document.getElementById("demo2").innerHTML = message2;

}




// 3. Write a function that takes an input, numRows, and prints out a triangle with numRows rows made out of star characters.
// For example, if numRows = 3, it would print out 3 rows - the first would have 1 star, the second would have 3 stars, and the third would have 5 stars, like this:

// * 
// ***
// ***** 

// If x = 4, it would print out 4 rows - having 1, 3, 5, and 7 stars, respectively:

// *
// ***
// *****
// ******* 


function triagleOfStars(numRows) {

	var starsRow = "*";

	for (i = 0; i < numRows; i++) {
		console.log(starsRow);
		var starsRow = starsRow + "**";
	}

}


// Bonus. Modify your solution to the star question (#2) to add the right # of spaces to each row so that your stars are centered, forming a "Christmas Tree", like this:

//    *
//   ***
//  *****
// *******

// function triagleOfStars(numRows) {

// 	var spaces = (numRows / 2).toFixed(0);

// 	if (numRows = 2) {
// 		var starsRow = " *";
// 		console.log(starsRow);
// 		var starsRow = "***";
// 		console.log(starsRow);

// 	} else {

// 		for (a = spaces; a > 0; a--) {
// 			var addSpaces = addSpaces + "-";
// 			var starsRowObject = {[a]:addSpaces};
// 			console.log(starsRowObject[i]);
// 		}

// 		var starsRow = addSpaces + "*";

// 		for (b = 0; b < numRows; b++) {
// 			console.log(starsRowObject[b] + starsRow);
// 			starsRow = starsRow + "**";
// 		}

// 	}

// }




