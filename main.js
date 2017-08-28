//Dave Jagodowski - HW09 - Making Basic Flashcards and Cloze Deletions using Constructors.

var fs = require("node-fs");
var request = require("request");
var inquirer = require("inquirer");
var BasicCard = require("./Basic_Card.js");
var ClozeCard = require("./ClozeCard.js");
var cardType = "";



function getUserInput() {
//Find out if user wants to create or view basic/Cloze flashcards.
inquirer.prompt([
  {
    type: "list",
    name: "doWhat",
    message: "What would you like to do?",
    choices: ["Create Basic flashcards", "Create Cloze flashcards", "View the Basic Cards", "View the Cloze Cards", "Exit"]
  }
]).then(function(user) {
	if (user.doWhat === "Create Basic flashcards") {
		basicCardInfo();
	}
	else if (user.doWhat === "Create Cloze flashcards") {
		clozeCardInfo();
	}
	else if (user.doWhat === "View the Basic Cards") {
		cardType = "basic";
		showCards(cardType);
	}
	else if (user.doWhat === "View the Cloze Cards") {
		cardType = "cloze";
		showCards(cardType);
	}
	else {
		console.log("Have a nice day!");
		return;
	}

})
};  


function basicCardInfo() {
//Gathers data for a new basic card
	inquirer.prompt([
  {
    type: "input",
    name: "front",
    message: "Enter a question for the front of the flashcard: "
  },
  {
    type: "input",
    name: "back",
    message: "Enter the answer for the back of the flashcard: "
   }
   ]).then(function(cardInfo) {
   	    newBasic(cardInfo.front, cardInfo.back);
   	});
};



function clozeCardInfo() {
//Gathers date for a new cloze card
	inquirer.prompt([
  {
    type: "input",
    name: "front",
    message: "Enter a full statement for the front of the Cloze flashcard: "
  },
  {
    type: "input",
    name: "back",
    message: "Enter the Cloze-deletion phrase to remove. (Must exactly match part of the full statement.): "
   }
   ]).then(function(cardInfo) {
   	    newCloze(cardInfo.front, cardInfo.back);
   	});
};



function createAnotherBasicCard() {
  //Prompts user to create an additional Basic flashcard
	inquirer.prompt([
    {
        type: "confirm",
        name: "another",
        message: "Create another card?"
    }
    ]).then(function(result) {
        if (result.another) {
        	  basicCardInfo();
        }  else {
        	   getUserInput();
           }
    })       
};



function createAnotherClozeCard() {
   //Prompts user to create an additional Cloze flashcard
	inquirer.prompt([
    {
        type: "confirm",
        name: "another",
        message: "Create another Cloze card?"
    }
    ]).then(function(result) {
        if (result.another) {
        	  clozeCardInfo();
        } else {
        	    getUserInput();
           }
    })       
};



function newBasic(question, answer){  
	fs.readFile("Basic_Card.js", "utf8", function(error, data) {
  	if (error) {
    	console.log(error);
    	return;
    }
  	else {  //Create the flashcard using constructor in Basic_Card.js file.
	      var flashcard = new BasicCard(question, answer);
        //format flashcard info and write it to log file
        var logBasicOutput = ("Question: " + flashcard.front + "; " + "\r\n" + "Answer: " + flashcard.back + ";" + "\r\n"); 
	      fs.appendFile("logbasic.txt", logBasicOutput, "utf8", function(error) {
      	    if (error) {
   		          console.log(error);
   		          return;
   	        }//end if error
   	        else {
	              createAnotherBasicCard();
	          } 
	      })
	  }
	})    
}; 




function newCloze(text, cloze) {
	fs.readFile("ClozeCard.js", "utf8", function(error, data) {
  	  if (error) {
    	    console.log(error);
    	    return;
      }
  	  else { //create new Cloze flashcard with constructor
  	      var clozecard = new ClozeCard(text, cloze);
  	      //format card data and print to cloze log file.
  	      var logClozeOutput = ("Question: " + clozecard.partial + "; \r\n" + "Answer: " + clozecard.cloze + "\r\n"); 
  		    fs.appendFile("logcloze.txt", logClozeOutput, "utf8", function(error) {
       	      if (error) {
   		            console.log(error);
   		            return;
   	          }
   	          else {
	                createAnotherClozeCard();
	            } 
          })
	    }
	})
};




function showCards(cardType) {
    //Displays existing cards from the log files, based on the user's selection. 
    if (cardType === "basic") {
    	  logfile = "./logbasic.txt";
    }
    else {
      	logfile = "./logcloze.txt";
    }

    fs.readFile(logfile, "utf8", function(error, data) {
        if (error) {
            console.log(error);
        }
        //read questions and answers from logfile into an array. 
        var questions = data.split("\r\n");
        var notBlank = function(value) {
            return value;
        };
        questions = questions.filter(notBlank);
        //Even numbered indexes in the array are the Questions. Odd indexes are the Answers.
        var count = 0;
        while (questions[count] != undefined){
            console.log("--------------------------------------" + "\r\n");
            console.log(questions[count]); //display question
            console.log(questions[count+1] + "\r\n"); //display answer
            
            count = count + 2; //move to then next question
        }
    //After showing input, display main menu.
    getUserInput();  //After showing input, display main menu. 
    });
};


getUserInput();  //Initiates the program.