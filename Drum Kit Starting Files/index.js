var drum_buttons = document.querySelectorAll(".drum");
var sounds = ["sounds/crash.mp3","sounds/kick-bass.mp3","sounds/snare.mp3","sounds/tom-1.mp3","sounds/tom-2.mp3","sounds/tom-3.mp3","sounds/tom-4.mp3"];

for (let i = 0; i < drum_buttons.length; i++) {
  drum_buttons[i].addEventListener("click", function () {
    var key = this.innerHTML;
    handleClick(key);
  } );
}

document.addEventListener("keydown",function(event){handleClick(event.key)});

function handleClick(key){
    //alert("I got clicked");
    // Could use switch instead of if else if
  if (key == "w") {
    var audio = new Audio("sounds/crash.mp3");
  } else if (key == "a") {
    var audio = new Audio("sounds/kick-bass.mp3");
  } else if (key == "s") {
    var audio = new Audio("sounds/snare.mp3");
  } else if (key == "d") {
    var audio = new Audio("sounds/tom-1.mp3");
  } else if (key == "j") {
    var audio = new Audio("sounds/tom-2.mp3");
  } else if (key == "k") {
    var audio = new Audio("sounds/tom-3.mp3");
  } else if (key == "l") {
    var audio = new Audio("sounds/tom-4.mp3");
  }
    audio.play();

    //Add Animation effect
    var pressed_key = document.querySelector("."+key)
    pressed_key.classList.add("pressed");
    setTimeout(function(){pressed_key.classList.remove("pressed");}, 200);

}

/*
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
*/




/*

function add(num1, num2) {
return num1 + num2;
}

function subtract(num1, num2) {
return num1 - num2;
}

function multiply(num1, num2) {
return num1 * num2;
}

function divide(num1, num2) {
return num1 / num2;
}

function calculator(num1, num2, operator) {
return operator(num1, num2);
}

alert(calculator(3,5,divide));

*/
