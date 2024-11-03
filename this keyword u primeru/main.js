'use strict';
console.log(this);//ovako sam this je ceo window

const calcAge = function(birthYear) {
    console.log(2024 - birthYear);
    console.log(this);
};
calcAge(1994);
//sa ovom prvom funkcijom, dobicemo rezultat. Ali
//this pokazuje na undefined, jer smo u strict modey

//sa arrow funckijom je malo drugacije vec
//this pokazuje na ceo window opet
//jer u arrow funkcijama this keyword pokazuje na 
//svog parenta, sto je ceo window u ovom slucaju
const ageCalc = (birthYear) => {
    console.log(2024 - birthYear);
    console.log(this);
};

ageCalc(1994);

//pravimo objekat
//ovde ce this keyword pokazati na svog parenta
//a to je diki objekat
const diki = {
    year: 1994,

    calcAge: function() {
        console.log(this);
        console.log(2024 - this.year);//sa thisom povezujemo se sa year keyem
    }
}
diki.calcAge();


const marlene = {
    year: 1922,
};

marlene.calcAge = diki.calcAge;//kopiramo metod iz objekta diki
//ovo se zove method borrowing
//ovako smo ubacili calcAge funkciju i u marlene objekat
marlene.calcAge();//ovo radi
//poenta je da ce se this keyword, iako je u diki objektu
//prikazati i pojaviti u marlene objektu, kao da je tu pozvan

const funkcija = diki.calcAge;//hocemo samo da kopiramo funkciju u novu varijablu
console.log(funkcija);//prikauje se ta funckcija iz dikija
//funkcija();  greska, ne moze!