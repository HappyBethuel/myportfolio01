//Guessing Game

// Generate a secret random number between 1 and 20 
let secretNumber = Math.floor(Math.random() * 20) + 1

let guess;
while (guess !== secretNumber) {
     
    guess = parseInt(prompt("Please guess the secret number (1-20)"));

    
    if (guess === secretNumber) {
        alert("Correct Guess!");
    } else {
        
        if (guess < secretNumber) {
            alert("Incorrect Guess! Too low!");
        } else {
            alert("Incorrect Guess! Too high");
        }
    }
}
