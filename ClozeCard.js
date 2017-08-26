//ClozeCard.js file

var fs = require("node-fs"); //need this to write card data out to log.txt file


//Create the Cloze Constructor with the full text string and the Cloze phrase to be removed.
//console.log("ClozeCard.js is loaded.");



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
