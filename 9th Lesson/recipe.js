
// The Recipe Card

// Create an object to hold information on your favorite recipe. 
// It should have properties for title (a string), servings (a number), and ingredients (an array of strings).

// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// - Mole
// - Serves: 2
// - Ingredients:
//   * cinnamon
//   * cumin
//   * cocoa


// Defining the object
var recipe = {
	title: "FLUFFY PANCAKES",
	serves: 2,
	ingredients: ["1 cup all-purpose flour", 
	"2 tablespoons sugar", 
	"2 teaspoons baking powder", 
	"1/2 teaspoon salt", "1 cup milk", 
	"2 tablespoons unsalted butter, melted, or vegetable oil", 
	"1 large egg", 
	"1 tablespoon vegetable oil", 
	"1 teaspoon vanilla extract"],
}

// Console.logging the properties/values
console.log(recipe['title']);
console.log("* Serves: " + recipe['serves']);
console.log("* Ingredients:");

console.log("   - " + recipe['ingredients'][0]);
console.log("   - " + recipe['ingredients'][1]);
console.log("   - " + recipe['ingredients'][2]);
console.log("   - " + recipe['ingredients'][3]);
console.log("   - " + recipe['ingredients'][4]);
console.log("   - " + recipe['ingredients'][5]);
console.log("   - " + recipe['ingredients'][6]);
console.log("   - " + recipe['ingredients'][7]);



