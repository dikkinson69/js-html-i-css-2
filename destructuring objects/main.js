//DESTRUCTURING OBJECTS
'use strict';
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
    // ES6 enhanced object literals
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close:24,
        },
    },
  
    order: function(starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    
    orderDelivery: function (object) {
        console.log(object);
    },

    orderDeliveryDes: function ({starterIndex, mainIndex, time, adress}) {
        console.log(`Order received: ${this.starterMenu[starterIndex]}, ${this.mainMenu[mainIndex]},will be delievered at ${time},to  ${adress}`);
    },
    
};



//za destructuring objekata koristimo {}
//treba da izvadimo imena varijabli koje se matchuju sa imenima propertija.
//u destructuring objektima nema reda pa ono treba visa zarezi kao u nizovima
const {name, openingHours, categories} = restaurant;
console.log (name, openingHours, categories);
//ovo ke je sve za propertije

// menjanje imena neim propertijima, ovako sa :
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

//hocemo da ubacimo novi key-menu
//stavimo mu default vrednost praznog niza
//uuvacicemo i starter menu, da ga preimenujemo u starters
//takodje i da my stavimo prazan niz kao default vrednost
//kada bi kreirali smao menu, bez praznog niza
//vrednosti bi bila undefiined
const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);



//Mutating variables
//zelimo da a posta
let a = 111;
let b = 999;
const obj =  {a: 23, b: 7, c: 14};

//{a, b} = obj ovo ne moze jer js vidi {} kao blok koda
({a, b} = obj); //moramo da ga wrapujemo u ()
console.log(a,b);


//sada sa nestovanim objektima
//hocemo 2 varijable open i close i da su u njima opening i closing hours od friday
const {fri: {open: o, close: c}} = openingHours;
console.log(o, c);
//to je sintaksa
//takodje smo promenili ime opena u o i close u c


//sada cemo sa orderDelivery funkcijom da se zajebavamo
restaurant.orderDelivery ({
    time: '22.30',
    adress: 'topolska 18, beograd',
    mainIndex: 2,
    starterIndex: 2,
});
//znaci u order delivery funkciju, stavili smo da je parametar zvani object---ovaj ceo objekt gore
//fora je da i gore u funkciji orderDelivery u parametrima mozemo da dekonstruisemo 
// npravicu novi delivery funkciju, skoro istu kao ova dole
restaurant.orderDeliveryDes ({
    time: '22.30',
    adress: 'topolska 18, beograd',
    mainIndex: 1,
    starterIndex: 1,
});