//ClozeCard.js file

//This file contains  the Cloze Constructor which accepts  the full text string and the Cloze-deletion phrase.

function ClozeCard(text, cloze){

    //Test input for Cloze-deletion validity by making sure cloze-deletion string is contained in full string. .  
	//Convert both strings to lower case for comparison. 
	var lcText = text.toLowerCase();
	var lcCloze = cloze.toLowerCase();
	if (!lcText.includes(lcCloze)) {
		console.log("ERROR:");
		console.log ("The cloze-deletion string " + "\"" + cloze +"\"" + "is not contained within the full text string.");
		return;
	}    
	else {
	    this.full = text;//The full statement.
	    this.cloze = cloze;// the text to be removed from the full text.
	    this.partial = text.replace(cloze, "_____________"); //the text remaining after removal of the Cloze text.
	    this.logCloze(this.partial, this.cloze);
	 }//end else
};//end function ClozeCard

	
module.exports = ClozeCard;
