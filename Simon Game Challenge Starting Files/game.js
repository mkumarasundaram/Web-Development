
var buttonColours = ["green","red","blue","yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

//KeyPress Event
$(document).keypress(function(){
  if (gamePattern.length == 0) {
    nextSequence();
  }
});


function nextSequence(){
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  console.log(gamePattern);
  $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);

  level++;
  $("h1").html("Level "+level);
}

function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

$(".btn").click(function(){
  if (gamePattern.length > 0) {
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer();
  } else {
    location.reload();
  }
});

function animatePress(currentColour){
  $("#"+currentColour).addClass("pressed");
  setTimeout(function(){$("#"+currentColour).removeClass("pressed");}, 100);
}


function checkAnswer(){
  //console.log("gamePattern = "+ gamePattern);
  //console.log("userClickedPattern = "+ userClickedPattern);

  if (gamePattern.length == userClickedPattern.length) {
     for (var i = 0; i < gamePattern.length; i++) {
       if (gamePattern[i] != userClickedPattern[i]) {
         gameOver();
         break;
       }
     }
     if (gamePattern.length > 0) {
       console.log("Level "+ level + " Success");
       nextSequence();
       userClickedPattern = [];
     }
  }

}

function gameOver(){
  playSound("wrong");
  $("body").addClass("game-over");
  $("#level-title").text("Game Over, Press Any Key to Restart");

  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 200);

  level = 0;
  gamePattern = [];
  userClickedPattern = [];
}

function startOver() {
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
  //started = false;
}

/*
alert("Game")

var a = [...], b = [...]
a.forEach(function(el) {
    if(b.indexOf(el) > 0) console.log(b.indexOf(el));
    else console.log("b does not contain " + el);
});

$("#level-title").click(function(){
  gamePattern.push(buttonColours[nextSequence()]);
  alert(gamePattern);
});

setInterval(myTimer, 1000);

*/
