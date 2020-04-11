// Starts the trivia game

$(document).ready(function() {
    
// these .hide() methods allows the questions to be hidden before the user starts

$('#timeRemaining').hide();
$(".trivia-questions").hide();
$(".results").hide();
$("#game-finished").hide();

// VARIABLES

// countdown clock
var countdown = 30; 

// holds the value of the intervals of the countdown timer
var intervalId; 

// holds the correct answers
var correctAnswers;

// holds the wrong answers
var wrongAnswers;

// holds unanswered questions
var unanswered; 

// FUNCTIONS

// function that shows the questions after the user clicks start
function showQuestions(){
$('#timeRemaining').show();
$(".trivia-questions").show();
$("#game-done").show();

}

// function that calls for the timer to decrease by one second
function countdownTimer(){
    intervalId = setInterval(decrement, 1000);
}

// function that invokes the decrement of the timer
function decrement(){
    countdown--;
    // tells timer to remain in seconds - plural
    $('#timer').html(" " + countdown+ " " + "seconds");
    // once timer hits an interval of one, changes from seconds to second
    if (countdown === 1){
        $('#timer').html(" " + countdown + " " + "second");
    }
    // once timer hits 0, tells the timer to stop & hide the questions and game
    else if(countdown === 0){
        stop();
        displaySummary();
        $(".container-questions").hide();
        $("#game-finished").hide();
    }
}
// function that invokes timer, questions, and button to be hidden
function stop(){
    $('#timeRemaining').hide();
    $('trivia-questions').hide()
    $('#game-done').hide();
}

// function that invokes to display the correct answers, wrong answers, and unanswered questions
function displaySummary(){
    // shows correct/wrong answers in the console
    console.log(correctAnswers);
    console.log(wrongAnswers);
    // pulls results from HTML and shows on page
    $('.results').show();
    // Unanswered is ten subtracted from the number of correct answers and wrong answers
    unanswered = (10-(correctAnswers + wrongAnswers));
    // pulls all of the answers from the HTML
    $('#correctScore').text("Correct Answers:" + " " + correctAnswers);
    $('#wrongScore').text("Wrong Answers:" + " " + wrongAnswers);
    $('#unanswered').text("Unanswered:" + " " + unanswered);
}

// .ON CLICK FUNCTIONS

// on click function fires when user clicks start button
$('#start-game').on('click', function(){
    // hides the start page 
    $('#start-game').hide();
    // shows the submit button, questions, and timer
    $('#game-finished').show();
    showQuestions();
    countdownTimer();
});

// on click function fires when user clicks the submit button
$('#game-finished').on('click', function(){
    // pulls results from HTML
    $('.results').show();
    // hides the submit button 
    $('#game-finished').hide();
    // shows the summary of results
    displaySummary();
    // hides trivia questions and timer
    $('.trivia-questions').hide();
    $('#timeRemaining').hide();
});

// on click function fires when user clicks on an answer
$('input[type=radio]').on ('change', function(){
    // checks if user clicks on the correct radio button
    correctAnswers = $('input[value=correct]:checked').length;
    // correct answer shows up in the console 
    console.log(correctAnswers);
    // checks if user clicks on the wrong radio button
    wrongAnswers = $('input[value=wrong]:checked').length;
    // wrong answer shows up in the console 
    console.log(wrongAnswers);
    // collects the unanswered questions and subtracts from the total of correct and wrong answers
    unanswered = (10-(correctAnswers + wrongAnswers));
    });

});

// on click function fires when user clicks try again button and resets the game
$('#game-reset').on('click', function (){
      location.reload();
    })
