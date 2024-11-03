'use strict';


//deconstructiring:
//to je unpackovanje objekata ili nizova u razlicite varijable
//razbijanje kompleksnog sadrzaja u jednostavan, kao sto su varijable



//ovo je najrpostije uzimanje iz niza
const arr = [2,3,4];
const array = arr[0];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//sa dekosnstrukcijom sve 3 varijable mozemo da vratimo u isto vree

const [x,y,z] = arr;//to je to
console.log(x , y , z);
//rezultat je 2,3,   4
// kad god je [] na levoj strani pre =. Znaci to je deconstrucuring
console.log(arr);//originalni niz nije prekinut, samo raspakovan za druge potrebe, druge varijable




const restaurant = {
    name: 'classico italiano',
    location: 'svetog nikole 14',
    categories: ['italian', 'pizzeria', 'vegetarian'],
    starterMenu: ['foccacia','bruschetta','garlic', 'bread', 'salad'],
    mainMenu: ['pizza', 'pasta', 'risotto'],

    //funckija sa 2 paremtra za deconstructing
    order: function(starterIndex, mainIndex) {

        return [this.starterMenu [starterIndex], this.mainMenu[mainIndex]];
    }
};

//napraicemo 2 valua, da izvocuemo iz niza categories
//tako da ce on uzeti prva dva valuea 

const [first, second] = restaurant.categories;//categories je niz u objektu resotran
console.log(first, second);//italian, pizzeria. Jer su rpva 2 valuea

//ako hocemo da preskovimo jedan od delova niza, samo stavimo zapetu ,
let [first1, ,second1] = restaurant.categories;
console.log(first1, second1);//ovo su prvi i treci
//italian, vegetarian

//1 nacin da zamene mesta
const temp = first1;
first1 = second1;
second1 = temp;
console.log(first1, second1);

//zamene mesta deconstruturingom
//kreiramo novi niz sa obrnyti varijablama
[first1, second1] = [second1, first1];

console.log(first1, second1);

//hhocemo da narucimo nesto iz menija. Ima starter meny i main meny

const [starter, mainCourse]  = restaurant.order(2,0);
console.log(starter, mainCourse);

//netovani nizovi

const nested = [2,4,[5,6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j,k]] = nested;
console.log (i, j, k);


//default vrednosti
const [p= 1, q = 1 , r = 1] = [8,9];
console.log(p, q, r);