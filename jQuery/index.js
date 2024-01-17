//$("button").css({"background-color":"red", "color":"white"});

$("input").keypress(function(event){
  $("h1").text(event.key);
});
