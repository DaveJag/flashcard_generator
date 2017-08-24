//web.js file
//provide access to external file.
var basicCards = require("./Basic_Card.js");
var clozeCards = require("./ClozeCard.js");

var fs = require('graceful-fs');
var request = require("request");

//collect node input
var flashCardType = process.argv[2].toLowerCase();

    //log an error to the console if file cannot be read
console.log("flashCardType = " + flashCardType);
if (flashCardType === "basic") {
 	fs.readFile("Basic_Card.js", "utf8", function(error, data) {
  	if (!error) {
  	    BasicCard();
	} else {
		console.log(error);
	    return; 
	  }
	})//end fs.readFile
}//end if

else if (flashCardType === "cloze") {
	fs.readFile("ClozeCard.js", "utf8", function(error, data) {
  	if (!error) {
  	    ClozeCard();
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