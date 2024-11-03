//  User input

// pop up boxovi
// alert("Hello world");

let myBoolean = confirm("ok === true\nCancel ===false");
console.log(myBoolean);
// confirm isto iskace i radi na ok i cancel. ovo \n znaci linebreak samo


// prompt je user input gde izadje textbox da user nesto napise
let name = prompt ("please enter your name");
if (name) {
	console.log(name);
} else {
	console.log("you didnt enter your name");
}

//  ?? znaci da ako user klikne cancel vrednost onda ce napisati ono drugo u ""
// da nismo stavili ?? ispalo bi u konzoli samo null
//  stavili smo if else u slucaju da ne napisemo nista u textbox. Umesto
// da ispadne samo blank u konzoli, on ce izbaciti you didnt enter your name