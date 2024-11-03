'use strict';

const diki = {
    firstName : 'Dimitrije',
    year: 1994,

    calcAge: function () {
        console.log(this);
        console.log(2024 - this.year);
        console.log(`hey ${this.firstName}`);
    
        // const isMillenial = function() {
        //     console.log(this.year >= 1981 && this.year <= 1996); 
        // };
        //ovo nece raditi jer obicna funkcija this ne prepoznje. 

        //PRVO RESENJE: DA NAPRAVIMO VARIABLU ISTAVIMO DA JE ONA THIS
        
        const self = this;
        const isMillenial = function() {
            console.log(self.year >= 1981 && self.year <= 1996); 
         };//sada je true ismillenial
        
         //drugo resenje su ARROW FUNKCIJE
         const millenial = () => {
            console.log(this.year >= 1981 && this.year <= 1996);
         };


        isMillenial();//radi tako sto smo ubacili varijablu self i stavili da je ona this
        millenial();//radi sa arrow funkcijom
    },

    greet: () => {
        console.log(`hey ${this.firstName}`);
    
    }
};
diki.calcAge();
diki.greet();//izbacice hey undefined. Jer je u arrow funkciji paret od thisa global scope

//!!! OBJEKTI su generalno litteral kodovi. Nemaju svoj scope. Vec su direktno povezani sa globalom!!!



//ARGUMENTS keyword.. Uzima parametre koji ce biti dodati u funkciji ovi a i b kad postanu 2,5
//koristan kad nam treba vise parametara nego sto smo pocetno specificirali
const addExpression = function (a, b) {
    console.log(arguments);
    return a+b;
};

addExpression(2,5);
addExpression(2,5, 8); //dodajemo lagano jos argumenata za parametre

var addArrow = (a, b) => {
    console.log(arguments);
    return a+b;
};
addArrow(2,5,9);
//SA ARROW FUNKCIJAMA arguments keyword ne radi