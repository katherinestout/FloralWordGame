window.onload = function(){
//arrays
var wordBank = ['Republican', 'Democrat', 'Trump', 'Whitehouse', 'DC', 'vote'];

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
                    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 

var hints = ['Elephant', 'Donkey', '45th President', 'House of the president', 'Capitol of the USA', 
            'Action everyone needs to do every year'];
  

var wins = 0;
var losses = 0;

var answerArray = [];
var incorrectGuess = [];
var space;
var count = 0;
var text ="";
var lettersLeft = 0;

var hint = "";
var hintIndex = "";

//reset function
function reset(){ 
  alert('reset');
  count = 0;
 // lettersLeft = 0;
  answerArray = [];
  incorrectGuess = 0;
}


//Generate a random word from the wordBank, store it in randomWord  
var str = wordBank[Math.floor(Math.random() * wordBank.length)];

//convert str to lower case letters
var currentWord = str.toLowerCase();
    console.log(currentWord);

//lettersLeft is how many letters are in the word
lettersLeft = currentWord.length;
console.log(lettersLeft);

//the index of the word chosen
var wordIndex = wordBank.indexOf(str);
console.log(wordIndex);
//matches the index of the corresponding hint
hintIndex = wordIndex;
console.log(hintIndex);

hint = hints.indexOf('Donkey');
//console.log(hint);



//Generate spaces for how many letters currentWord has
  for(var i =0; i < currentWord.length; i++){
    answerArray[i] = "_";
  }
  space = answerArray.join(" ");
  document.getElementById("answer").innerHTML = space;

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
            console.log(lettersLeft);
            // - - -- - -  -- - - - - - -  -- -- - - - - why does it work up here? but not down there?
            if ( lettersLeft == 0 ){
             // alert("you win!");
              wins ++;
              document.getElementById("wins").innerHTML = "Wins:" + wins;
              reset();
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
      //if the user goes over 20 tries, their loser score goes up
      if (count>20){
         //alert("You lose! Try again ^__^");
         losses ++;
         document.getElementById("losses").innerHTML = "Losses:" + losses; 
         reset();
      }
       
    });
  };
};

