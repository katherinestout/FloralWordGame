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
//10 guesses
var guessesLeft = 10;
//stores the guessed letters
var answerArray = [];
//stores the incorrect guessed letters
var incorrectLetters = [];
var space;
var count = 0;


var text ="";
function start(){
  $("body").on("click", "#start", function(){
    /*
    var keys = Object.keys(alphabet);
    for(i=0; i< keys.length; i++){
      var value = alphabet[keys[i]];
      console.log(keys[i],value);

     text += "<button>" + value + "</button>";
     // $("<button>", {id: value}).appendTo('body');
      
    }
   */

//Generate a random word from the wordBank, store it in randomWord  
var currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(currentWord);

//Generate spaces for how many letters currentWord has
function spaces(){
  for(var i =0; i < currentWord.length; i++){
    answerArray[i] = "_";
  }
  space = answerArray.join(" ");
  document.getElementById("answer").innerHTML = space;
}
spaces();

   //for each letter in the alphabet, list it out and create a button

//var text="";

var iterator = alphabet.values();
for (const value of iterator){
      var btnval;
       btnval = value;
  //  text += "<button>" + btnval + "</button>";
    $("<button>", {id: value}).appendTo('body');
}
document.getElementById("alphabet").innerHTML = text;


//assign each button a click event
btnval.onclick = check();

  function check(){
    $("body").on("click", "button", function(){
   
        //console.log(this.id);
        var letter = this.id;
        console.log(letter);
        letter = document.getElementById("letter").value;
     
      //if letter is equal to any of the current word letters...
      for(var i = 0; i < currentWord.length; i++){
      if(letter === currentWord[i]){
        //then add it to the answer array?
        answerArray[i] = letter;
      }
      }
      count ++;
      document.getElementById("counter").innerHTML = "no" + count;
      document.getElementById("answer").innerHTML = answerArray.join(" ");

    
    });
  }

//alphabet.forEach(value => console.log(value));

//alphabet.forEach(id => console.log(id));
  });
}
start();
//when you click on each button console log the value of the letter
  //console.log(Object.values(alphabet));
  //console.log(Object.values(alphabet[20]));
}