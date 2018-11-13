window.onload = function(){
//arrays
var wordBank = ['republican', 'democrat', 'trump', 'whitehouse', 'DC', 'vote'];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
                    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 


                    var keys = Object.keys(alphabet);
                    for(i=0; i< keys.length; i++){
                      var value = alphabet[keys[i]];
                      console.log(keys[i],value);
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

var iterator = alphabet.values();
for (const value of iterator){
      var btnval;
       btnval = value;
    
    text += "<button>" + btnval + "</button>";
    $("<button>", {id: value}).appendTo('body');
   

}
document.getElementById("alphabet").innerHTML = text;
//assign each button a click event
btnval.onclick = check();

  function check(){
    $("body").on("click", "button", function(){
      //console.log(this.innerHTML);
      //everytie you click a button you get the value of that letter
        //console.log(this);
        console.log(this.id);
      //if guess letter is in any of the word, consolelog yaya
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