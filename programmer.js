/*
In this activity, we are going to create a constructor function called "Programmer" which can be used to create objects containing information on various programmers.

Your "Programmer" constructor should be able to take in the following information...

The programmer's name
Their position/job title
How old they are
Favorite programming language
Now create a method for the constructor that would print all of the information contained within an object to the console.

Finally, create a "Programmer" object and call the method to print its contents
*/

function Programmer(name, title, age, language) {
	this.name = name;
	this.title = title;
	this.age = age;
	this.language = language;
}
// ** This creates the printInfo method and applies it to ALL programmer objects.
	Programmer.prototype.printInfo = function() {
		console.log("Name: " + this.name + "\nPosition: " + this.title + "\nAge: " + this.age + "\nLanguages: " + this.language);
	}//end print

 var Dave = new Programmer("Dave", "Professor", 51, "Javascript");
 Dave.printInfo();
