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

    orderPasta:function(ingredient1, ingredient2, ingredient3) {
        console.log(`here is your pasta with ${ingredient1}, ${ingredient2}, ${ingredient3}`)
    },
    
};

//hocemo sada da napravimo novi niz, zasnovan na ovom nizu
//ali sa novim elementima na pocetku
const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);
//ovo je los nacin


//SPREAD operator ... tri tacke su fazon

const newArray = [1, 2, ...arr];
console.log(newArray);

//...na pocetku. Loguje individualno svak element niza
//ne loguje niz kao ceo 
console.log(...newArray);

//u main menu nizu cemo napraviti jos jedan element

//const newMenu = originalni niz sa novim elementom

const newMenu = [...restaurant.mainMenu, 'Spaghetti'];
console.log(newMenu);
//sa ovim mi stvaramo potupno novi niz
//ne manipulisemo main menuem u restaurant objektu


//pravljenje shallow copija i mergovanje arraya

//shallow kopija
const mainMenyCopy = [...restaurant.mainMenu];


//mergovanje arraya
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//Iterables: arrays, strings, maps, sets ali ne i OBJEKTI

//spread opearator na stringovima

//da izdvojimo niz sa svakim slovom posebno i dodamo jos jedno
const str = "diki";

//ovo je sa for petljom
for (let i = 0; i <= str.length; i++) {
    console.log(str[i]);
}

//ovo je sa spredom
const letters = [...str, ' ', 's' ];
console.log(letters);
console.log(...str);
///console.log(`${...str} sreckovic`)// ovo ne radi!
// jer literal apostrofi `` ne radi sa SPREDOM!

//napravicemo funkciju u restoranu, orderPasta, sa vise argumenata i iskoristimi spred
// isprobacemo i promt za dobijanje priloga

const ing = [prompt('let\'s make pasta with ingredient 1'), prompt('let\'s make pasta with ingredient 2'), prompt('let\'s make pasta with ingredient 3') ];
//console.log(ing);
///to je to sa spredom
restaurant.orderPasta(...ing);


//SPREAD SA OBJEKTIMA, iako objekti nisu literals

//kreiracemo novi restaurant objekat sa starim podacima
//plus par novih

//samo zvajznemo spred...
const newRestaurant = {...restaurant, founder:"Guiseppe", founded: 1891};
console.log(newRestaurant);

//shallow kopija, sa novim imenom
const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);