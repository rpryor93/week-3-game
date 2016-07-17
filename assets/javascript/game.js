$(document).ready(function(){
    
	// Generate a random number
    var random = Math.floor(Math.random() * 26) + 65;
    var wins = 0;
    var losses = 0;
    var guessPerGame = 10;
    var guessesLeft = guessPerGame;
    var guessesSoFar = "";
   

    function resetGame(){
    	guessesLeft = guessPerGame;
    	random = Math.floor(Math.random() * 26) + 65; 
    	//guessesSoFar = 0;
    }

    function scoreBoard(){
    	$('#numberOfWins').html(wins);
    	$('#numberOfLosses').html(losses);
    	$('#guessesLeft').html(guessesLeft);
    	$('#guessesSoFar').html(guessesSoFar);

    }
    
    scoreBoard();

    $(document).keyup(function(event){
    	var letter = String.fromCharCode(event.which);
    	
    	if (event.which == random){
    		wins++;
    		note = "You Win! You must be in touch with your inner eye!"
    		resetGame();
    	} else { 
    		guessesSoFar++;
    		guessesLeft--;
    		if (guessesLeft <= 0){
    			losses++;
    			resetGame();
    		}

    	}
        
        scoreBoard();

        //$('#randomNumber').html(event.which + ": " + random);
    });

})

