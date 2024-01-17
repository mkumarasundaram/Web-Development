//document.querySelector(".img1").src = "images/dice1.png";
//document.querySelector(".img2").src = "images/dice1.png";

var img_arr = ["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];
//alert(img_arr.length);


shuffle_dice();


function shuffle_dice(){
  //document.querySelector(img).src = "images/" + img_arr[Math.floor(Math.random()*img_arr.length)];

  var img1 = generateRandomNum(img_arr.length);
  var img2 = generateRandomNum(img_arr.length);
  document.querySelector(".img1").src = "images/" + img_arr[img1];
  document.querySelector(".img2").src = "images/" + img_arr[img2];

  if (img1==img2){
    document.querySelector("h1").innerHTML = "&#128077; Draw";
  } else if (img1 > img2) {
    document.querySelector("h1").innerHTML = "&#128079; Player 1 is winner";
  } else {
    document.querySelector("h1").innerHTML = "&#128079; Player 2 is winner";
  }

}

function generateRandomNum(max_value){
  return Math.floor(Math.random()*max_value);
}
