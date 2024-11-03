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

    orderPizza: function (mainIngrediant, ...otherIndegrediant) {
        console.log(mainIngrediant);
        console.log(otherIndegrediant);
    },
    
};

        // 1) Destucturing

//REST PATTERN isto ... kao spread ali radi suprotnu stvar
//rest packuje elemente u array
//a spread is raspakuje


//SPREAD sa desne strane ...
const arr = [1,2,3, ...[3,4]];
console.log(arr);

//REST sa leve strane...
const [a,b, ...others] = [1,2,3,4,5];
console.log(a,b,others);
//prva dva postaju prva elementa(broja), a ... i others uzimaju preostale u nizu
//i stavljaju ih u novi niz koji se zove others.

//hocemo pizu i rizoto iz main menija
const [pizza, , risotto,...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);
//izdvajamo picu i rizoto i sve ostale elemente koje nismo posebno selektovali
//u novi niz otherFood
//rizoto smo uzeli preskakanjem sa , ,

//REST mora da bude na kraju, inace ne moze drugacije
//Kada su na kraju, pre elementa ... onda je rest 


//SPREAD sa objektima

//selektovacemo saturday i odvojiti a ostale dane u weekdays u opening hours objektu

const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);

        // 2) FUNCTIONS

//koristicemo rest u parametrima
const add = function(...numbers) {
    //console.log(numbers);
    let sum = 0;
    for (let i = 0; i<numbers.length; i++) 
        sum+=numbers[i];
        console.log(sum);
    
};
add(2,3);
add(5, 3, 7, 2);
//stvaraju se nizovi sa brojevima
//imamo i sabiranje
//napravili smo funkciju koja moze da koliko god zelimo parametara

//da pozovemo add funkciju sa ovim nizom i ove 3 vrednosti
const x = [23,5,7];
add(...x);//to je to

//pravimo jos jednu funkciju gore, orderPizza

restaurant.orderPizza('mushrooms','onion','olives','spinach');
//izdvojeno je mushrooms, kao mainIngediant a ostali, novi,
// su spiceni ajedno u niz otherIngediant, sve zbog ... pre other ingredants

//ako hocemo sa jedan prilog, i stavimo ovako dole
//izdvojice mushrooms a za ostale pravi prazan[]
restaurant.orderPizza('mushrooms');