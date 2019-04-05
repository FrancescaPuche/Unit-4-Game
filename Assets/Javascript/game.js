 // Javascript and JQuery for Crystal Collector Game
 // ----------------------------------------------------------


 // Global Variables 
 //-----------------------------------------------------------
 
var counter;
var wins = 0; 
var losses = 0; 

//-----------------------------------------------------------
// Starting Game  

function startGame () { 

    var number = Math.floor(Math.random() * (120 - 19 + 1) + 19); // Random number generator between the numbers 19 and 120
    
    var start = confirm("Would you like to play Crystal Collector?"); 

    counter = 0; 
    

    if (start === true) { 

        //Assign random number that player number target
        $("#number").text(number); 

        // Assigning Numbers to Crystals 
        function crystalNums () { 
            $("#blueCrystal").attr("data-crystalvalue", Math.floor(Math.random() * 12 + 1));
            $("#darkGreenCrystal").attr("data-crystalvalue", Math.floor(Math.random() * 12 + 1));
            $("#redCrystal").attr("data-crystalvalue", Math.floor(Math.random() * 12 + 1));
            $("#limeCrystal").attr("data-crystalvalue", Math.floor(Math.random() * 12 + 1));
        }

        // Adding click function to crystal so they have values when clicked on
        $(".crystal").on("click", function() { 

            // Running function that assigns random numbers to crystals
            crystalNums(); 


            // Declaring and assigning crystalNumber to crystalNums function
            var crystalNumber = ($(this).attr("data-crystalvalue")); 
            // Reassigning crystalNumber to change it to a integer from a string
            crystalNumber = parseInt(crystalNumber); 
            // Reassigned counter to equal what ever number it currently has plus crystalNumber
            counter = counter + crystalNumber; 

            // Adding counter to element that has "totalScore" id in html file
            $("#totalScore").text(counter);

            // If statement for winning and losing
            if (counter === number) { 
                // if player wins, then it will display an alert letting them know they won
                alert("You win!!!"); 
                // Will add one point to the wins column
                $("#wins").text(wins = wins + 1);
                // Will restart the start game function
                startGame();   
                // Will change the counter back to 0
                counter = 0; 
                $("#totalScore").text(counter);
            }
            else if (counter >= number) { 
                // if player loses, then it will display an alert letting them know they lost
                alert("You lose.")
                // Will add one point to the losses column
                $("#losses").text(losses = losses + 1); 
                // Will restart the start game function
                startGame(); 
                // Will change the counter back to 0
                counter = 0; 
                $("#totalScore").text(counter);
            }
            // Logging crystalNumbers to the console to see what value was assignment to them
            console.log(crystalNumber);
        });   
    } 
}
//Running the startGame function
startGame(); 

