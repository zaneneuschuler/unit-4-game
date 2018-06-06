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
    var gameOver = false;
    setBoard();

    console.log("HEY MAN NO CHEATING CAN YOU PLEASE NOT LOOK DOWN HERE LIKE STRAIGHT UP THE ONLY REASON THERE'S ANYTHING HERE IS FOR DEBUGGING OK");
    console.log("SERIOUSLY PLEASE IF YOU'RE ACTUALLY SERIOUSLY PLAYING THIS, THIS IS CHEATING PLEASE DON'T")
    console.log("Gem 1: " + gem1);
    console.log("Gem 2: " + gem2);
    console.log("Gem 3: " + gem3);
    console.log("Gem 4: " + gem4);
    console.log("Target: " + target);


    $('.gems').on("click", function(){
        if (userScore == target || userScore > target) {
            console.log("Game over!");
            return;
            
        }
        let click = $(this).attr('id');
        console.log(click);
        switch (click) {
            case 'gem1':
                userScore += gem1;
                setBoard();
                break;
        
            case 'gem2':
                userScore += gem2;
                setBoard();
                break;

            case 'gem3':
                userScore += gem3;
                setBoard();
                break;
            
            case 'gem4':
                userScore += gem4;
                setBoard();
                break;
        }
        if (userScore == target || userScore > target) {
            winOrLose();

        }


    })

    $('.reset').on("click", function(){
        if (gameOver){
            reset();
        }
        else{
           let confirmPrompt = confirm("Are you sure? By resetting before the game ends, it counts as a loss!");
           if (confirmPrompt) {
               losesCounter++;
               reset();
               
           }
        }

    });

    function winOrLose() {
        if (userScore == target) {
            winsCounter++;
            $('.winLose').text("You win! Hit the button below to play again!");
            setBoard();
            
        }
        else{
            losesCounter++;
            $('.winLose').text("Sorry, you lose! Hit the button below to try again!");
            setBoard();
        }
        gameOver = true;
    }

    function setBoard() {
        targetDiv.text(target);
        matchDiv.text(userScore);
        winsDiv.text(winsCounter);
        lossDiv.text(losesCounter);
        console.log("All set!");

        
    }

    function reset() {
        gem1 = readyGem();
        gem2 = readyGem();
        gem3 = readyGem();
        gem4 = readyGem();
        target = readyTarget();
        userScore= 0;
        setBoard();

    }
})//end of document ready, don't go past here

function readyGem() {
    return Math.floor(Math.random() * 12 + 1);
}
function readyTarget() {
    return Math.floor(Math.random() * 120 + 19);
}


