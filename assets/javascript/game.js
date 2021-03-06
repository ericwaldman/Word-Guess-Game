//create an array of words to guess
var words = ['TWIX', 'MARS', 'PEZ', 'SNICKER', 'AERO', 'BOUNTY'];

//choose one array word randomly
var randomNum = Math.floor(Math.random() * words.length);
var wordPicked = words[randomNum];

//var
var rightLetter = [];
var wrongLetter = [];
var dash = [];
var counter = 0;

//Document Object Model - update the contents on the document
var docDash = document.getElementsByClassName('dash');
var docWrongGuess = document.getElementsByClassName('wrongLetter');
var docWinner = document.getElementsByClassName('winner');
var docCounter = document.getElementsByClassName('counter');

//answer array with _ _ _ _
let makeDash = () => {
    for(var i = 0; i < wordPicked.length; i++) {
        dash.push('_  ');
    }
    return dash;
}

//get players guesses - addEventListner adds an event handler - on keyup
document.addEventListener('keyup',(event) => {
    var keyword = String.fromCharCode(event.keyCode);

    //if the letter is found in the word
    if(counter < 8){
        if(wordPicked.indexOf(keyword) > -1) {

            //replace dash with correct letter
            dash[wordPicked.indexOf(keyword)] = keyword;
            docDash[0].innerHTML = dash.join('');

            //check if players word matches
            if(dash.join('') == wordPicked) {
                docWinner[0].innerHTML = 'For the love of Candy ... You WON!';
            }
        }
        //else wrong letter add to wrong letter list and minus one from counter
        else {
            wrongLetter.push(keyword);
            docWrongGuess[0].innerHTML = wrongLetter.join('');

            counter = counter + 1;
            docCounter[0].innerHTML = counter;
            
            //change hangman image each time player gets a guess wrong
            document.getElementById('hangmanImage').src = "assets/images/hangman_"+ counter +".jpg";
            
            //if counter is greater than 7 player looses and display message
            if (counter > 7) {
                docWinner[0].innerHTML = 'You Lost! Restart Game to play again.';
            }    
        }
    }
});
//make dashes
makeDash();
docDash[0].innerHTML = dash.join('');

