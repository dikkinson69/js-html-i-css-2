'use strict';

const calcAge = (birthYear) => {
    const age = 2024 - birthYear;
    const firstName = "Dikson";// ovo pisemo, jer ce sada firstName primaran biti ovim funkcijama ispod iz svoje parent funcije. To im e global. Nije diki
    //console.log(firstName); ucitace ovo jer je u globalu

    const printAge =()=> {
        let output = `${firstName} you are ${age} born in ${birthYear}`;
        console.log(output);
    
        if (birthYear >= 1981 && birthYear <= 1996) {
           var millenial = true;

            const string = `Oh, and you are a millenial, ${firstName}`;
            console.log(string);//iako je ovo block scope u lokalnoj funkciji printAge, koja je opet child od parenta calcAge. 
            //on moze da pristupi firstNameu, koji je u globalu definisan
       
            const add = (a , b) => {
                return a + b;
            }
            output = "new output";
        }
        
        //console.log(string);// ovo je error, jer pokusavamo, van if bloka da ulogujemo const string. On je lokalan za taj block
        console.log(millenial);// var varijable ignorisu scope!!!!!!!
        // on ce moci da se uloguje i van scopea
        console.log(output);
        //console.log(add(2,3)); ovo ne moze da se pozove van svog scopea. Ali ovo vazi samo za strict mode!!!
    
    };// za ovu funkciju age i birth year moze da se ubaci
      // jer je u parent funkciji calcAge

    printAge();
    return age;
} 

const firstName = "Diki";
calcAge(1994);
//console.log(age); ovo ne mozemo da aksesujemo. Jer nije u globalu
// vec u calcAge funksciji

// samo inner scope moze da ima pristup outer scopeu. Obrnuto ne!