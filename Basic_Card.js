//Dave Jagodowski - HW09 - Cloze Constructors


var fs = require("node-fs"); //need this to write card data out to log.txt file

//Create the Basic Constructor with text appearing on the front and the back.
function BasicCard(front, back) {
	this.front = front; 
	this.back = back; 
	this.create = function() {  
		var cardData = {
			front: this.front,
			back: this.back,
			type: "basic",
		}; 
	}
};

module.exports = BasicCard;
