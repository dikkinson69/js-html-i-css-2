// modalni UI window sa 3 butttona, kada ih kliknemo izlazi poruka
// iz te poruke mozemo da izadjemo na x, esc na tastaturi ili kliktanjem van otvorenog prozora poruke

//radicemo sa klasama!

'use strict';

// selektujemo sve elemente sto nam trebaju i storujemo ih u varijable.
// i koristimo ih tako.

// imamo 3 buttona
//imamo div klase hidden. Ta klasa je u cssu
// podesena na display:none. To cemo da menjamo

// imamo i overlay klasu hidden. To je kad se otvori poruka
// blurovana pozadinu. Koju cemo podesiti kad kliknemo
// da izadje iz poruke

// i imamo button close window

//NOT DRY NOT DRY NOT DRY

//elementi hidden div modal klase
const modal = document.querySelector('.modal');

//sada cemo overlay div
const overlay = document.querySelector('.overlay');

//close button klasa close-modal
const btnCloseModal = document.querySelector('.close-modal');

// 3 buttona show-modal
const btnOpenModal = document.querySelector('.show-modal');
console.log(btnOpenModal);// ovo izabuje samo prvo show modal1 button
//ovo je limitacija querySelectora. Samo se prvi slektuje!!!
//querySelectorAll
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

//idemo na for petlju
//da sa i razdvojimo svaki posebno
for (let i = 0; i < btnsOpenModal.length; i++) {
    console.log(btnsOpenModal[i].textContent);
    //EVENT HANDLER FUNKCIJA
    btnsOpenModal[i].addEventListener('click', () => {
        console.log('button clicked');
        //sada cemo da removeujemo hidden klasu sa div modala
        modal.classList.remove('hidden');//nema tacke za css klase
        overlay.classList.remove('hidden');//i overlay da sakrijemo;
    })
        const closeModal = () => {
            modal.classList.add('hidden');
            overlay.classList.add('hidden');
        };

        btnCloseModal.addEventListener('click', () => {
            modal.classList.add('hidden');//sada vracamo hidden klasu kada izlazimo na x;
            overlay.classList.add('hidden');
        })
    
    overlay.addEventListener('click', () => {
        //mozemo da dupliramo onaj modal add hidden i overlay add hidden kao gore u bloku koda
        //bolje funkcija
        closeModal();
    })
    //overlay.addEventListener('click', closeModal);moze i ovo
}


