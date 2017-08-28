//Dave Jagodowski - HW09 - Building Flashcards with Constructors

//This function accepts the full text string and the Cloze-deletion phrase.

function ClozeCard(text, cloze){
	//Convert both strings to lower case for comparison. 
	var lcText = text.toLowerCase();
	var lcCloze = cloze.toLowerCase();

    //Test input by making sure cloze-deletion string is contained in full string. .  
	if (!lcText.includes(lcCloze)) {
		console.log("ERROR:");
		console.log ("The cloze-deletion string " + "\"" + cloze +"\"" + "is not contained within the full text string.");
		return;
	}    
	else {
	    this.full = text;  //The full statement.
	    this.cloze = cloze;  // the text string to be removed.
	    this.partial = text.replace(cloze, "__________"); //the Cloze statement.
	 }
};
	
module.exports = ClozeCard;
