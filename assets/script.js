window.onload = function(){
//arrays
var wordBank = ['republican', 'democrat', 'trump', 'whitehouse', 'DC', 'vote'];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
                    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 

                    var iterator = alphabet.values();
                    for (const value of iterator){
                      console.log(value);
                    }
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



/*
let add_btns = document.querySelector('.btn');
add_btns.addEventListener("click", function(){

  let btn = document.createElement("BUTTON");
  alphabet.push(document.body.appendChild(btn));
 
  for (let button in alphabet){
    btn.setAttribute('id', 'button' + button);
    btn.innerHTML = "Button #" + button;
  
    btn.addEventListener("click", function () {
      let id = this.id;
      console.log("my id is: " + id);
  });
  }
})
*/

function start(){
  $("body").on("click", "#start", function(){
//Generate a random word from the wordBank, store it in randomWord  
var currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(currentWord);

   //for each letter in the alphabet, list it out and create a button
var text ="";
var i;
for (var i = 0; i < alphabet.length; i++){
    var letter = alphabet[i];
     text += "<button>" + letter + "</button>";
  check();
}
//alphabet.forEach(value => console.log(value));
document.getElementById("alphabet").innerHTML = text;
//alphabet.forEach(id => console.log(id));
  });
}


function check(){
  $("body").on("click", "#alphabet button", function(){
   // $("body").on("click", "#list ul li", function(){
  // alphabet.forEach(value => console.log(value));
    //console.log(this.innerHTML);
  
    var guess = this.innerHTML;
    console.log(guess);
    //if guess letter is in any of the word, consolelog yaya
  });
}
start();
//when you click on each button console log the value of the letter

  //console.log(Object.values(alphabet));
 // console.log(Object.values(alphabet[20]));

}