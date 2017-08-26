//main.js file

var fs = require("node-fs");
var request = require("request");
var inquirer = require("inquirer");

var BasicCard = require("./Basic_Card.js");
var ClozeCard = require("./ClozeCard.js");

//collect node input

var flashCardType = process.argv[2].toLowerCase();

//log an error to the console if file cannot be read
console.log("flashCardType = " + flashCardType);
if (flashCardType === "basic") {
 	fs.readFile("Basic_Card.js", "utf8", function(error, data) {
  	if (!error) {
  		var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");
  		console.log(firstPresident.front);
  		console.log(firstPresident.back);n

	} else {
		console.log(error);
	    return; 
	  }
	})//end fs.readFile
}//end if

else if (flashCardType === "cloze") {
	fs.readFile("ClozeCard.js", "utf8", function(error, data) {
  	if (!error) {
  	    var firstPresident = new ClozeCard("George Washington was the first president of the United States.", "George Washington");
  	    console.log(firstPresident.partial);
  	    console.log(firstPresident.cloze); 
	} else {
		console.log(error);
	    return; 
	  }
	})//end fs.readFile
}//end function 

else {
	  	console.log("Sorry, that command is not valid. Please enter one of the following words:");
	  	console.log("Enter \"basic\" for a simple two-sided flash card.");
	  	console.log("Enter \"cloze\" for a cloze-deleted flashcard that contains partial text.");
	  }	//end else



//var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");

//Create a new basic card
function newBasic(){  
	console.log("Enter question for front of the card.");
	var question = process.argv[0].toLowerCase();
	console.log("question is " + question);
}

/*
var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");
console.log(firstPresident.front);
console.log(firstPresident.back);
*/