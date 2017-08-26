//Dave Jagodowski - HW09 - Cloze Constructors
//Basic_Card.js

console.log("Basic_Card.js is loaded.");

var fs = require("fs"); //need this to write card data out to log.txt file

//Create the Basic Constructor with text appearing on the front and the back.
function BasicCard(front, back) {
	this.front = front; //text on front of the card
	this.back = back; //text on back of the card
	this.create = function() {  //create basic card object and save data to log.txt
		var cardData = {
			front: this.front,
			back: this.back,
			type: "basic",
		} //end cardData object
        fs.appendFile("log.txt", JSON.stringify(cardData), "utf8", function(error) {
        	if (error) {
        		console.log(error);
        	}//end if
        })//end fs.appenfile function
	}//end function create
}//end function BasicCard

module.exports = BasicCard;

// reference: https://stackoverflow.com/questions/5311334/what-is-the-purpose-of-node-js-module-exports-and-how-do-you-use-it