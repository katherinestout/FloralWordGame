window.onload = function(){
//arrays
var wordBank = ['Republican', 'Democrat', 'Trump', 'Whitehouse', 'DC', 'vote'];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
                    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 
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
var incorrectArray = [];
//console.log(incorrectLetters);
var space;
var count = 0;
var text ="";

//clicking start button
function start(){
  $("body").on("click", "#start", function(){

//Generate a random word from the wordBank, store it in randomWord  
var str = wordBank[Math.floor(Math.random() * wordBank.length)];
    //console.log(str);
//convert str to lower case letters
var currentWord = str.toLowerCase();
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
        var letter = this.id;
        //console.log(letter);
      //if letter is equal to any of the current word letters...
      for(var i = 0; i < currentWord.length; i++){
          if(letter === currentWord[i]){
            //then add it to the answer array
            answerArray.push(letter);
            console.log(answerArray);
            
            } else if(letter !== currentWord[i]) {
              incorrectArray.push(letter);
              console.log(incorrectArray);
            }
          }

      count ++;
      document.getElementById("guesses").innerHTML = "Guesses:" + count;
      document.getElementById("answer").innerHTML = answerArray.join(" ");

      //if the user goes over 20 tries, their loser score goes up
      if (count>20){
         alert("You lose! Try again.");
         losses ++;
         document.getElementById("losses").innerHTML = "Losses:" + losses; 
      }
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