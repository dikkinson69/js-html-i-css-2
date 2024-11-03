const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

const showModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

for (let i =0; i < btnShowModal.length; i++) {
    btnShowModal[i].addEventListener('click', showModal);
    
    btnCloseModal.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
}




//keyboard events su glova eventi. Tako da se odnose
// na ceo window
//keyup-cim podignemo prst sa dugmica
//keypress ako ga pritiskamo neprekidno
//keydown-cim pritisnemo


//dole u primeru linije 36 u console logu, se stvara informacija
// o eventu i o dugmicu koji smo stisnuli, u OBLIKU OBJEKTA
//event listeneri stvaraju objekte
document.addEventListener('keydown', (event) =>{
    console.log('a key pressed');
    console.log(event);
    console.log(event.key);//izbacuje koji key tacno

    if (event.key === 'Escape'){
        if (!modal.classList.contains('hidden')) {
            closeModal();
        }
    }
});
//da izadjemo iz prozora sa escapes