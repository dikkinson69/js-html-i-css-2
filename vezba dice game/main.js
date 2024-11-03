const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");

const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");

const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let playerActive, playing, score, currentScore;

const initGame = () => {
    playerActive = 0;
    playing = true;
    score = [0, 0];
    currentScore = 0;
    
    diceEl.classList.add('hidden');
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');

}

const switchPlayer = () => {
    document.getElementById(`current--${playerActive}`).textContent = 0;
    currentScore = 0;
    playerActive = playerActive === 0
    ? 1
    : 0;

    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

initGame();

btnRoll.addEventListener('click', () => {
    if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1){
        currentScore += dice;
        document.getElementById(`current--${playerActive}`).textContent = currentScore;

    }else{
        switchPlayer();
    }

    }
});

btnHold.addEventListener('click', () => {
    if  (playing) {
        
       
        let skorina = score[playerActive] += currentScore;
        document.getElementById(`score--${playerActive}`).textContent = skorina;
   
        
        if (skorina >= 20) {
            playing = false;
            document.querySelector(`.player--${playerActive}`).classList.remove('player--active');
            document.querySelector(`.player--${playerActive}`).classList.add('player--winner');
        }
        switchPlayer();
    }
});

btnNew.addEventListener('click', initGame);