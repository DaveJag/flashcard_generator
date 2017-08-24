//Basic_Card.js
console.log("Basic_Card.js is loaded.");
//Create the Basic Constructor with text appearing on the front and the back.
exports.BasicCard = function(front, back){

	this.front = front; //text on front of the card
	this.back = back; //text on back of the card
}

//module.exports = BasicCard;

// reference: https://stackoverflow.com/questions/5311334/what-is-the-purpose-of-node-js-module-exports-and-how-do-you-use-it