// STARTS THE MARINE BIOLOGY TRIVIA GAME

$(document).ready(function() {
    
// THIS HIDES ALL OF THE Q'S & ALLOWS THE USER TO CLICK START

$('#timeRemaining').hide();
$(".trivia-questions").hide();
$(".results").hide();
$("#game-finished").hide();

// DE'CLAIRE'ING THE VARIABLES

var countdown = 30; 
var intervalId; 
var correctAnswers;
var wrongAnswers;
var unanswered; 

// FUNCTIONS FOR THE MARINE BIOLOGY TRIVIA GAME

function showQuestions(){
$('#timeRemaining').show();
$(".trivia-questions").show();
$("#game-done").show();

}

function countdownTimer(){
    intervalId = setInterval(decrement, 1000);
}

function decrement(){
    countdown--;
    $('#timer').html(" " + countdown+ " " + "seconds");
    if (countdown === 1){
        $('#timer').html(" " + countdown + " " + "second");
    }
    else if(countdown === 0){
        stop();
        displaySummary();
    }
}

function stop(){
    $('#timeRemaining').hide();
    $('trivia-questions').hide()
    $('#game-done').hide();
}

function displaySummary(){
    console.log(correctAnswers);
    console.log(wrongAnswers);
    $('.results').show();
    unanswered = (10-(correctAnswers + wrongAnswers));
    $('#correctScore').text("Correct Answers:" + " " + correctAnswers);
    $('#wrongScore').text("Wrong Answers:" + " " + wrongAnswers);
    $('#unanswered').text("Unanswered:" + " " + unanswered);
}

// .ON CLICK FUNCTIONS

$('#start-game').on('click', function(){
    $('#start-game').hide();
    $('#game-finished').show();
    showQuestions();
    countdownTimer();
});

$('#game-finished').on('click', function(){
    $('.results').show();
    $('#game-finished').hide();
    displaySummary();
    $('.trivia-questions').hide();
    $('#timeRemaining').hide();
});

$('input[type=radio]').on ('change', function(){
    correctAnswers = $('input[value=correct]:checked').length;
    console.log(correctAnswers);
    wrongAnswers = $('input[value=wrong]:checked').length;
    console.log(wrongAnswers);
    unanswered = (10-(correctAnswers + wrongAnswers));
    });

});

function reset(){
    $('#game-reset').on('click', function (){
      location.reload();
    })
  };