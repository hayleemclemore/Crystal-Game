
$(document).ready(function(){ 


    //Set variable for targeting a random number.
    //* The random number shown at the start of the game should be between 19 - 120.
    
    
    
    
    //Variables
    var counter = 0;
    var wins = 0;
    var losses = 0;
    var targetRandomNum = 0;
    
    // * Each crystal should have an initial value of 0
    var crystals = { 
        blue: { 
            value:0
        },
    
        green: { 
            value:0
        },
    
        yellow: { 
            value:0
        },
    
        purple: { 
            value:0
        },
    
    };
    
    
    
    startGame();
    function startGame () {
     targetRandomNum = Math.floor(Math.random() * 102 + 19);
     console.log(targetRandomNum)
    
    
     counter = 0;
     
     //Set variable for scores
    $("#wins-num").text(wins);
    $("#losses-num").text(losses);
    $("#counter").text(counter);
    $("#target-num").text(targetRandomNum);
    
    
     // * Each crystal should have a random hidden value between 1 - 12.
    crystals.blue.value = Math.floor(Math.random() * 12 + 1);
    crystals.green.value = Math.floor(Math.random() * 12 + 1);
    crystals.yellow.value = Math.floor(Math.random() * 12 + 1);
    crystals.purple.value = Math.floor(Math.random() * 12 + 1);
    
    console.log(crystals);
    
    }
    
    
    
    // COUNTING CRYSTAL CLICKS
    // Create an "on-click" event attached to each of the crystals that adds to the counter variable
    
    
    $("#blue").on("click", function() {
        
        counter = counter + crystals.blue.value;
        console.log(counter);
        $("#counter").text(counter);
    
        checkScore();
    
     });
    
     $("#green").on("click", function() {
        
        counter = counter + crystals.green.value;
        console.log(counter);
        $("#counter").text(counter);
    
        checkScore();
     });
    
     $("#yellow").on("click", function() {
        
        counter = counter + crystals.green.value;
        console.log(counter);
        $("#counter").text(counter);
    
        checkScore();
     });
    
     $("#purple").on("click", function() {
        
        counter = counter + crystals.purple.value;
        console.log(counter);
        $("#counter").text(counter);
    
        checkScore();
    
     });
    
    
    
    
    
    
    //CHECK IF USER WINS
    //Create a function to check user wins or looses
    
    var checkScore = function() {
    
    if (counter > targetRandomNum) {
        alert("you loose!");
        losses++;
        $("#losses-num").text(losses);
        startGame();
    
    }
    
     if (counter === targetRandomNum) {
        alert("you win!");
        wins++;
        $("#wins-num").text(wins);
        startGame();
    
    }
    };
    
    
    
    
    //RESET BUTTON
    // Create an "on-click" event attached to the "#clear" button id.
    // $("#reset").on("click", function() {
    
    //     reset();
    
    //  });
    
    
    
    
     //function to reset the game
    
    // function reset() {
    //     counter = 0;
    //     // $("#counter").text(counter);
    
    //    startGame();
    // };
    
    
    
    });
    
    
    
    
    
    