//ClozeCard.js file

//Create the Cloze Constructor with the full text string and the Cloze phrase to be removed.
console.log("ClozeCard.js is loaded.");
function ClozeCard(text, cloze){

	//Convert both strings to lower case so they can be compared. 
	var lcText = text.toLowerCase();
	var lcCloze = cloze.toLowerCase();

	// Compare strings. Test if the cloze statement appears within the complete text
	if (!lcText.includes(lcCloze)) {
		console.log("ERROR:");
		console.log ("The cloze-deletion string " + "\"" + cloze +"\"" + "is not contained within the full text string.");
		return;
	}

	this.full = text;//The full statement.
	this.cloze = cloze;// the text to be removed from the full text.
	this.partial = text.replace(cloze, "_____________"); //the text remaining after removal of the Cloze text.
	
}; //end function

var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");


module.exports = ClozeCard;
