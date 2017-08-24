//ClozeCard.js file

//Create the Cloze Constructor with the full text string and the Cloze phrase to be removed.

exports.ClozeCard = function(text, cloze){

    console.log("ClozeCard.js is loaded.");
	var lcText = text.toLowerCase();
	var lcCloze = cloze.toLowerCase();

	// Test if the cloze statement appears within the complete text
	if (!lcText.includes(lcCloze)) {
		console.log("ERROR:");
		console.log ("The cloze-deletion string " + "\"" + cloze +"\"" + "is not contained within the full text string.");
		return;
	}

	this.full = text;//The full statement.
	this.cloze = cloze;// the text to be removed from the full text.
	this.partial = text.replace(cloze, "_____________"); //the text remaining after removal of the Cloze text.
	
}; //end function

//module.exports = ClozeCard;
