//HOISTING neki tipovi varijabla su accesible pre neko sto su uopste
// deklarisani!!
//varijable su podignute na vrh svog skoupa, odnosno funkcije
// kod, pre svoje egzekucije skenira sve varijable koje postoje
// ali razlicite tipove varijabla!!!

//funkije----DA


//var------DA....ALi ako je ubacimo pre definicije, isasce undefined!

//let i const -----NE.... bice uninitialized error


//function expressions i arrow funcije

//TEMPORAL DEAD ZONE
const myName = "diki";

if (myName === "diki") {
    console.log(`diki is a ${job}`);
    const age = 2024 - 1994;
    console.log(age)
    const job = "Guitarist";
    console.log(x);
}
//ovo je klasicna greska gore. Jer ne mozemo da u consoli 
// akssujemo job varijabli, pre inicijalizacije, ona je tek ispod