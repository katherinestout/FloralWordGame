window.onload = function(){
//arrays
var wordBank = ['republican', 'democrat', 'trump', 'whitehouse', 'DC', 'vote'];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
                    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 
//variables
var wins = 0;
var losses = 0;

var guessesLeft = 10;

var guessedLetters = [];
var incorrectLetters = [];
var space;

//get elements

var text ="";
var i;

  for (var i = 0; i < alphabet.length; i++){
      //console.log(alphabet[i]);
       text += "<button>" + alphabet[i] + "</button>";
}

//var more = alphabet.forEach(function(element){
 //   document.write(element);
//});

document.getElementById("alphabet").innerHTML = text;



//Generate a random word from the wordBank, store it in randomWord  
var currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(currentWord);

document.getElementById("hello").innerHTML = currentWord;

//if the letter they type in the space does not match the current word, put the letter in incorrect lettes
//if the letter they type in does match one of the current word, put it in guessed letters
//each time they type in a letter the guessesLeft goes down.


}