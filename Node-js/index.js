//console.log("Hello World - Test Node Js");

var superheroes = require("superheroes")
console.log("Super Hero " + superheroes.random());

var supervillains = require("supervillains")
console.log("Super Villain " + supervillains.random());


/*
var fs = require('fs');

fs.appendFile('source.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

fs.copyFile('source.txt', 'destination.txt', function (err) {
  if (err) throw err;
  console.log('source.txt was copied to destination.txt');
});

fs.appendFile('destination.txt', ' This is appendFile text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});

*/
