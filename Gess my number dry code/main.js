//DRY CONCEPT. Da se ne ponavljamo, narocitu u bloku koda ako je guess too low ili too high. Gde je skoro isti kod prekopiran
//fora je da se stavi terniary operator sa to da guessNumber !== number. PRosto tako. Umesto dva bloka koda 

//resicemo se i message.textContenta jer imamo 5 duplikata
//takodje i onaj math trunc kurac
//FUNKCIJE! su dobre za dry koncept


// Generate a secret number
let number = Math.trunc(Math.random() * 20) + 1;
// Display the secret number (for debugging purposes)

let score = 20;

let highscore = 0;

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
};

// Add event listener to the button
document.querySelector('.check').addEventListener('click', () => {
    // Get the guess from the input field and convert it to a number
    const guess = document.querySelector('.guess').value;
    const guessNumber = Number(guess); // Convert input to a number

    console.log(guess, guessNumber); // Debugging logs

    // Check if the input is empty
    if (!guess) {
       // document.querySelector('.message').textContent = "NO NUMBER";
        displayMessage("NO Numero");
    } 
    // Check if the guess is correct
    //when player wins
    else if (guessNumber === number) {
       // document.querySelector('.message').textContent = "CORRECT NUMBER!";
       displayMessage("CORRECT NUMBER"); 
       document.querySelector('.number').textContent = number;


        document.querySelector('body').style.backgroundColor = "green";
        document.querySelector('.number').style.width = "30rem";
        
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        //too high
    
        //when guess is wrong
    }else if(guessNumber !== number){
        if (score > 1) {
            document.querySelector('.message').textContent = guessNumber > number ?"TOO HIGH"
            :"TOO LOW";
            score = score - 1;
            document.querySelector('.score').textContent = score;
            }else {
                //document.querySelector('.message').textContent = " YOU LOST THE GAME";
                displayMessage("you Lost the mf game");
                document.querySelector('body').style.backgroundColor = "red";
                document.querySelector('.score').textContent = 0;
            }
        
    // } else if (guessNumber > number) {
    //     if (score > 1) {
    //     document.querySelector('.message').textContent = "TOO HIGH";
    //     score = score - 1;
    //     document.querySelector('.score').textContent = score;
    //     }else {
    //         document.querySelector('.message').textContent = " YOU LOST THE GAME";
    //     }
    
    //     //too low
    // }else if(guessNumber < number) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = "TOO LOW";
    //         score = score - 1;
    //         document.querySelector('.score').textContent = score;
    //     }else {
    //         document.querySelector('.message').textContent = " YOU LOST THE GAME";
    //         document.querySelector('body').style.backgroundColor = "red";
        
    //     }
    }
    

    
});


//playing again
const again = document.querySelector('.again');

again.addEventListener("click", () => {
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;

    //document.querySelector('.message').textContent = "Start Guessing";
    displayMessage("Start Guessing");
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = '';//epmty value

    document.querySelector('body').style.backgroundColor ='#222';
    document.querySelector('.number').style.width = '15rem';
},false);

