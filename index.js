//generate a random number and store it in a variable.the problem then takes an input from the user to tell them whether the guess was correct,greater or lesser than the original value.number of guesses is the score of the user the program is expected to terminate once the number is guessed.number shouble be between 0-100

// Returns a random integer from 0 to 99:
let random_value=Math.floor(Math.random() * 100);
var guess=0;
let guess_number;
do
  {
    guess_number=prompt("guess number:");
    guess_number=Number.parseInt(guess_number);
guess=guess+1;
 if(random_value==guess_number)
   console.log("correct guess!!!!");
else if(random_value>guess_number) 
  console.log("guess value is lesser");
else if(random_value<guess_number) 
  console.log("guess value is greater");    
  }while(random_value!=guess_number);
console.log("your score is:"+guess);