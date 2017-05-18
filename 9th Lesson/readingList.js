
// The Reading List

// Keep track of which books you read and which books you want to read!

// - Create an array of objects, where each object describes a book and has properties for 
// the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// - Iterate through the array of books. 
// - For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// - Now use an if/else statement to change the output depending on whether you read it yet or not. 
// - If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', 
// and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'


// Defining the array of objects
var readingList = [
	{title: "Influence: Psychology of Persuasion",
	author: "Robert B. Cialdini",
	alreadyRead: true},
	{title: "Il Nome della Rosa",
	author: "Umberto Eco",
	alreadyRead: false},
	];

// Console.logging the properties/values

for (i=0; i<readingList.length; i++) {
	if (readingList[i].alreadyRead === true) {
		console.log('Your already read ' + '"' + readingList[i].title + '" by ' + readingList[i].author);
	} else {
		console.log('You still need to read ' + '"' + readingList[i].title + '" by ' + readingList[i].author);
	}
}
