$(document).ready(function(){
     // STARTS THE MARINE BIOLOGY TRIVIA GAME


    // VARIBLE FOR TRIVIA GAME (QUESTIONS, ANSWERS, CORRECT, IMAGE)

    var myQuestions =[{
        question: "Which ocean basin is the most geologically active?",
        answer: ["Pacific Ocean", "Atlantic Opaccean", "Indian Ocean"],
        correct: "0",
        photo: "assets/images/pacificocean.gif" 
    }, {
        question: "What marine mammal is referred to as the 'wolf of the sea'?",
        answer: ["Dolphins", "Narwhals", "Orcas", "Manatees"],
        correct: "2",
        photo: "assets/images/orcas.gif" 
    }, {
        question: "What's the longest amount of time that whales can go without breathing?",
        answer: ["4 minutes", "67 minutes","0 minutes","120 minutes"],
        correct: "3",
        photo: "assets/images/holdbreath.gif"
    },{
        question: "What are narwhal tusks made of?",
        answer: ["Calcium", "Limestone", "Sponge", "Ivory"],
        correct: "3",
        photo: "assets/images/narwhal.gif"
    },{
        question: "What is the largest fish in the world?",
        answer: ["Blue Whale", "Whale Shark", "Squid", "Humpback Whale"],
        correct: "1",
        photo: "assets/images/whaleshark.gif"
    },{
        question: "What animal is responsible for the Great Barrier Reef's existence?",
        answer: ["Coral", "Conchs", "Sharks", "Clownfish"],
        correct: "0",
       photo: "assets/images/coral.gif"
    },{
        question: "What is a group of fish that swim together called?",
        answer: ["An office", "A tornado", "A school", "A herd"],
        correct: "2",
       photo: "assets/images/schoolfish.gif"
    },{
        question: "How many hearts does an octopus have?",
        answer: ["One heart", "Five Hearts", "Three Hearts", "Two Hearts"],
        correct: "2",
        photo: "assets/images/octopus.gif"
    },{
        question: "Can a jellyfish clone themselves?",
        answer: ["Yes", "No"],
        correct: "0",
        photo: "assets/images/jellyfish.gif"
    },{
        question: "Who mows the ocean's lawns?",
        answer: ["Jellyfish", "Cuttlefish", "Sea Turles", "Suckerfish"],
        correct: "2",
        photo: "assets/images/seaturtle.gif"
    }
]};
    
var correctAnswers = 0; 
var incorrectAnswers = 0; 
var unansweredQuestions = 0; 
var timeRemaining = 30; 
var intervalId;


  $("#start").on("click", function(){

    $(this).hide();

    $("#time").html("<h2> Time Remaining: 30 Seconds </h2>" + "<br>");

    run();


    $("#submit").html("<button id='done' class='btn'>Done</button>");
    
    $("#done").on("click", function (){

        keepingScore();

        displayResults();
    });
});

function run(){
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement(){
    number --;

    $("#time").html("<h2>Time Remaining: " + number + " Seconds</h2>" + "<br>");

    if (number===0){

        stop();

        keepingScore();
        displayResults();
    }
}

function stop() {

    clearInterval(intervalId);
}
