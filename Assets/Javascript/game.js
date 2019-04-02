 // Javascript and JQuery for Crystal Collector Game
 // ----------------------------------------------------------


 // Global Variables 
 //-----------------------------------------------------------
var number = Math.floor(Math.random() * (120 - 19 + 1) + 19); // Random number generator between the numbers 19 and 120
var counter = 0; 
var targetNumber= number; 
var wins = 0; 
var losses = 0; 



// Functions/Statements/Conditions
// ----------------------------------------------------------

// Starting Game  

function startGame () { 

    var start = confirm("Would you like to play Crystal Collector?"); 

    if (start === true) { 

        //Assign random number that player number target
        $("#number").text(targetNumber); 

        // Assigning Numbers to Crystals 
        function crystalNums () { 
            $("#blueCrystal").attr("data-crystalvalue", Math.floor(Math.random() * (12 - 1 + 1) + 1));
            $("#darkGreenCrystal").attr("data-crystalvalue", Math.floor(Math.random() * (12 - 1 + 1) + 1));
            $("#redCrystal").attr("data-crystalvalue", Math.floor(Math.random() * (12 - 1 + 1) + 1));
            $("#limeCrystal").attr("data-crystalvalue", Math.floor(Math.random() * (12 - 1 + 1) + 1));
        }

        // Adding click function to crystal so they have values 
        $(".crystal").on("click", function() { 

            // Running function that assigns random numbers to crystals
            crystalNums(); 

            var crystalNumber = ($(this).attr("data-crystalvalue")); 
            crystalNumber = parseInt(crystalNumber); 
            counter = counter + crystalNumber; 

            $("#totalScore").text(counter);

            if (counter === targetNumber) { 
                alert("You win!!!"); 
                $("#wins").text(wins = wins + 1);
                startGame(); 
            }
            else if (counter >= targetNumber) { 
                alert("You lose.")
                $("#losses").text(losses = losses + 1); 
                startGame(); 
            }
        });       
    } 
}
startGame(); 

