
var wordBank = ['republican', 'democrat', 'trump', 'whitehouse', 'DC', 'vote'];

var wins = 0;
var losses = 0;
var currentWord = '';
var guessesLeft = 10;

var guessedLetters = [];
var incorrectLetters = [];




//Generate a random word from the wordBank, store it in randomWord  
var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(randomWord);
    

