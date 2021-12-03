var readlineSync = require('readline-sync')

var userName = readlineSync.question("Please enter your name....")

var welcomeMessage = "Hey " + userName + "! Welcome to Karan's NeoG MarkTwo quiz on Cobra Kai." 

console.log(welcomeMessage);

var score = 0;

function play(question, answer){
  var userAnswer = readlineSync.question(question);
  console.log("---------------------")

  if (userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("You are right!")
    score = score + 1;
  } else {
    console.log("Oh No! You are wrong!")
    score = score -1;
    console.log("Correct Answer: " + answer);
  }
  console.log("Current Score = " + score);
  console.log("---------------------")
}


var questionBankOne = [
  {
    question:"What motto is written on the walls of the Cobra Kai Dojo? ",
    answer: "Strike First. Strike Hard. No Mercy."
  },
  {
    question: "What was the name of the competition where Daniel LaRusso defeated Johnny Lawrence? "  ,
    answer: "All Valley Karate Tournament"
  },
  {
    question: "In the first season of Cobra Kai, what does Daniel LaRusso do for a job? ",
    answer: "Sells cars" 
  },
  {
    question:  "Why does Daniel want Cobra Kai to be closed down? ",
    answer: "So that students don't become bullies"
  },
  {
    question: "Who is the older martial artist by eight months? " ,
    answer: "No One"
  },
  {
    question: "Who said: I wasn't taught the difference between mercy and honour and I paid the price for it.",
    answer: "Johnny Lawerence"
  }

]


for (var i=0; i<questionBankOne.length; i++){
  var currentQuestion = questionBankOne[i];

  play(currentQuestion.question, currentQuestion.answer);

}


var questionBankTwo = [
  {
    question:"In which country was Miguel Diaz born? ",
    answer: "Ecuador"
  },
  {
    question: "Which TV show is Daniel Larusso a fan of? ",
    answer: "Gilmore Girls"
  },
  {
    question: "Who said, Everyone's got a sob story. That doesn't give you the right to be a bully.",
    answer: "Samantha LaRusso" 
  },
  {
    question: "What is the name of the dojo run by both Daniel and Johnny?",
    answer: "Miyagi-Do Karate"
  },
  {
    question: "What Is Johnny Lawrence Doing For Work In Season 1?" ,
    answer: "Handyman"
  },
  {
    question: "What Is Johnny's Son Called? ",
    answer: "Robbie"
  }

]


if (score < 2){
  console.log("You have not scored enough to continue onto the next level. Please reload the page to try again!")
} else {
  var startLevelTwo = readlineSync.question("You have scored enough to proceed to Level Two, Press ENTER to keep Playing or E to exit.")

  if (startLevelTwo.toUpperCase() === "e".toUpperCase()){
    console.log("Oh No! We're Sorry to see you go, please go play again!")
  } else {
    console.log("----------------")
    for (var j=0; j<6; j++){
      var currentQuestionLtwo = questionBankTwo[j];
      play(currentQuestionLtwo.question, currentQuestionLtwo.answer);
    }

    var finalScore = score;
    console.log("Your Final Score is: " + score);
    console.log("Let's see if you have beaten any High Scores...")
    console.log("----------------")

    var highScores = [
      { name: "Meenakshi",
        score: "10"
      },
      { name: "Gaurav",
        score: "09"
      }
    ]

    for (var k=0; k<highScores.length; k++){
      var scoreDisplay = highScores[k];
      console.log("----------------")
      console.log(scoreDisplay.name + ": " + scoreDisplay.score)
      console.log("----------------")
    }

    
    if(finalScore > 10){
      console.log("Congratulations! You won the first spot! Email us this screenshot at karanmaneetgandhi@gmail.com and we'll put your name here.")
    } else{ 
      if (finalScore === 10){
        console.log("Great Work! You tied for the first place. Send us this screenshot at karanmaneetgandhi@gmail.com and we will put you here!")
      } else{ 
        if(finalScore === 9){
          console.log("Great! You have Tied for the second place! Send us this screenshot at karanmaneetgandhi@gmail.com and we will put you here")
        } else{
          console.log("Great Work!, you have come in third place. Send us this Screenshot at karanmaneetgandhi@gmail.com and we will put you here.")
        }
      }

    }
    }
  }

