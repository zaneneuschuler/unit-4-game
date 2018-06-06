$(document).ready(function(){
let winsCounter = 0;
let losesCounter = 0;
var targetDiv = $('.matchScore');
var matchDiv = $('.playerScore');
var winsDiv = $('.winsCount');
var lossDiv = $('.lossCount');
var gem1 = readyGem();
var gem2 = readyGem();
var gem3 = readyGem();
var gem4 = readyGem();
var target = readyTarget();
let userScore = 0;
setBoard();

console.log("HEY MAN NO CHEATING CAN YOU PLEASE NOT LOOK DOWN HERE LIKE STRAIGHT UP THE ONLY REASON THERE'S ANYTHING HERE IS FOR DEBUGGING OK");
console.log("SERIOUSLY PLEASE IF YOU'RE ACTUALLY SERIOUSLY PLAYING THIS, THIS IS CHEATING PLEASE DON'T")
console.log("Gem 1: " + gem1);
console.log("Gem 2: " + gem2);
console.log("Gem 3: " + gem3);
console.log("Gem 4: " + gem4);
console.log("Target: " + target);


$('.gems').on("click", function(){


})




function setBoard() {
    targetDiv.text(target);
    matchDiv.text(userScore);
    winsDiv.text(winsCounter);
    lossDiv.text(losesCounter);
    console.log("All set!");

    
}


})//end of document ready, don't go past here

function readyGem() {
    return Math.floor(Math.random() * 12 + 1);
}
function readyTarget() {
    return Math.floor(Math.random() * 120 + 19);
}

function reset() {
     gem1 = readyGem();
     gem2 = readyGem();
     gem3 = readyGem();
     gem4 = readyGem();
     target = readyTarget();
    
}
