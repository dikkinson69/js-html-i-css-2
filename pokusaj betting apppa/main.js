//FOOTBALL BETTING APP
'use strict';;

const football = {
    team1: "fk polet",
    team2: "fk bradic",
    
    players: [
                [
                    'dida',
                    'dzajic',
                    'messi',
                    'inzaghi',
                    'maldini',
                    'giggs',
                    'lampard',
                    'beckham',
                    'scholes',
                    'terry',
                    'cantona'  
                ],
                [
                    'vanDerSaar',
                    'pele',
                    'maradona',
                    'nedved',
                    'kolarov',
                    'sestic',
                    'pepe',
                    'ozil',
                    'diMaria',
                    'lewandowski',
                    'gatuuuso'
                ]
            ],

    score: "4:0",
    scored: ['giggs', 'messi', 'lampard', 'dzajic'],
    date: 'nov 9th 2005',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },    

    
    
    
};

const [players1, players2] = football.players;
console.log(players1, players2);

const { 
    players: [
        [gk1,...others],
        [gk2,...others2],
    ],
    team1,
    team2,
    score,

} = football;

console.log(`team1 goalkeeper ${team1}, ${gk1}`);
console.log(`team2, goalkeeper, ${team2}, ${gk2}`);
console.log(others);
console.log(others2);

const {
    players: [team1Players, team2Players] 
} = football;
const allPlayers = [...team1Players, ...team2Players];

console.log(allPlayers);
const playerFinal = ["thiago", "perisic", "suker", ...team1Players];
console.log(playerFinal);

function checkScorers(allPlayers) {
    const { scored } = football; // Get the list of players who scored

    allPlayers.forEach(player => {
        const isScorer = scored.includes(player);
        if (isScorer) {
            console.log(`${player} scored a goal.`);
        } else {
            console.log(`${player} did not score.`);
        }
    });
}
checkScorers(allPlayers);


console.log(odds);
const mostLikelyToWin = function() {

}