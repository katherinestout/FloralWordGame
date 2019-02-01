window.onload = function(){
//arrays
var wordBank = ['Sunflower', 'Petunia', 'Rose', 'Carnation', 'Daisy', 'Lily'];

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
                    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 
  
var wins = 0;
var losses = 0;

var answerArray = [];
var incorrectGuess = [];
var space;
var count = 0;
var text ="";
var lettersLeft = 0;
var currentWord = "";


//reset the values
function init(){ 
  count = 0;
  lettersLeft = 0;
  answerArray = [];
  incorrectGuess = [];
  currentWord = "";
}

//Generating the word to guess function
function initWord(){

//generating a random word from the word bank, store in str
var str = wordBank[Math.floor(Math.random() * wordBank.length)];

//convert str to lower case letters
currentWord = str.toLowerCase();
    console.log(currentWord);

//lettersLeft is how many letters are in the word
lettersLeft = currentWord.length;
console.log(lettersLeft);
hintsFunction();

function hintsFunction(){
  $("#vowelsshow").toggle();
  $("#showone").show();
  $("#showone").on('click',(function(){
    $("#vowelsshow").show();
    $("#showone").hide();
  
  })
  );
  
  $("#lettersshow").toggle();
  $("#showtwo").show();
  $("#showtwo").on('click',(function(){
    $("#lettersshow").show();
    $("#showtwo").hide();
  })
  );
  
  //hints section
  var subject = currentWord;
  
  //counting how many vowels there are
  function getVowels(subject) {
    var m = subject.match(/[aeiou]/gi);
    return m === null ? 0 : m.length;
  }
  
  var vowels = getVowels(subject);
  console.log(vowels);
  
  document.getElementById("numbervowels").innerHTML = vowels;
  
  //getting the last letter of the word
  var lastLetter = subject.charAt(subject.length -1);
  console.log(lastLetter);
  
  document.getElementById("lastletter").innerHTML = lastLetter;

}



}




//Generate spaces for how many letters currentWord has
function initPlayerWord(){
  for(var i =0; i < currentWord.length; i++){
    answerArray[i] = "_";
  }
  space = answerArray.join(" ");
  document.getElementById("answer").innerHTML = space;
}

//for each letter in the alphabet, list it out and create a button
var iterator = alphabet.values();
for (const value of iterator){
       var btnval;
       btnval = value;
      //appending the value and buttons to the alphabet div
    $("<button>", {id: value}).appendTo('.alphabet').text(value);
}

document.getElementsByClassName(".alphabet").innerHTML = text;

//assign each button a click event
btnval.onclick = check();

//click event
  function check(){
    $("body").on("click", "button", function(){
        //letter is equal to the id of the button (which is the letter)
        var letter = this.id;

      for(var i = 0; i < currentWord.length; i++){
          //if letter is equal to any of the current word letters

      if(letter === currentWord[i]){
            var found = false;
            //then add it to the answer array
            answerArray[i] = letter;
            document.getElementById("answer").innerHTML = answerArray.join(" ");
            //checking if the letter is found
            found = true;
            //take away from lettersLeft
            lettersLeft --;
           // console.log(lettersLeft);
          
      if ( lettersLeft == 0 ){
              //add to wins if lettersLeft is equal to zero
              wins ++;
              document.getElementById("wins").innerHTML = "Wins:" + wins;
              //reset the game
              initGame();
            }
            } 
          }
      if (found) return;
        //but if the letter isn't found add letter to the incorrectguess array
      if(incorrectGuess.indexOf(letter) < 0){
           incorrectGuess.push(letter);
           document.getElementById("incorrect").innerHTML = incorrectGuess.join(" ");
         }
      //the count goes up every time a guess is made
      count ++;
      document.getElementById("guesses").innerHTML = "Guesses:" + count;

        if (count>20){
        //if the count is over twenty then the losses goes up
         losses ++;
         document.getElementById("losses").innerHTML = "Losses:" + losses; 
         //reset the game
         initGame();
      }
       
    });
  };
//function that fires other functions
function initGame(){
  init();
  initWord();
  initPlayerWord();
  
}

function runGame(){
  initGame();
  }
//Executing the game
  runGame();

};

