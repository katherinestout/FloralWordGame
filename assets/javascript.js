window.onload = function(){
//arrays
var wordBank = ['republican', 'democrat', 'trump', 'whitehouse', 'DC', 'vote'];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
                    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 
//variables
//for each item in array, attach an id or value

/*
for (let value of Object.values(alphabet)){
  console.log(value);
}*/

var wins = 0;
var losses = 0;

var guessesLeft = 10;

var guessedLetters = [];
var incorrectLetters = [];
var space;



//for each letter in the alphabet, list it out and create a button
var text ="";
var i;
for (var i = 0; i < alphabet.length; i++){
    var letter = alphabet[i];
   // console.log(letter);
     text += "<button>" + letter + "</button>";
     //value of each button is equal to the letter in the button
  check();
}
//alphabet.forEach(value => console.log(value));
document.getElementById("alphabet").innerHTML = text;
//alphabet.forEach(id => console.log(id));

 function check(){
  $("body").on("click", "#alphabet button", function(){
   // $("body").on("click", "#list ul li", function(){
  // alphabet.forEach(value => console.log(value));
    //console.log(Object.values(alphabet));
    console.log(this.innerHTML);

  });
}



//when you click on each button console log the value of the letter

  //console.log(Object.values(alphabet));
 // console.log(Object.values(alphabet[20]));

//console log each value of each item in array

//Generate a random word from the wordBank, store it in randomWord  
var currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(currentWord);

//if the letter they type in the space does not match the current word, put the letter in incorrect lettes
//if the letter they type in does match one of the current word, put it in guessed letters
//each time they type in a letter the guessesLeft goes down.


}