
// The Movie Database

// It's like IMDB, but much much smaller!
// - Create an object to store the following information about your favorite movie: 
//   title (a string), duration (a number), and stars (an array of strings).
// - Create a function to print out the movie information like so: 
//   "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."


// Defining the array of objects

var favMovies = {
	title: "Star Wars: The Return of the Jedi",
	duration: 120,
	stars: ['Han Solo', 'Princess Leia', 'Luke Skywalker', 'Chewbacka', 'Darth Vader']}

// Function

function showMovies(movies) {
	console.log('"' + movies.title + '" lasts ' + movies.duration + ' minutes. Starring: ' + movies.stars.join(" and ") + ".");
}

