'use strict';

const modal = document.querySelector('.modal');
const showModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');



console.log(showModal);

for (let i = 0; i < showModal.length; i++) {
    showModal[i].addEventListener('click', () => {
       modal.classList.remove('hidden');
       overlay.classList.remove('hidden'); 
    })    
}

closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});

overlay.addEventListener('click', () =>{
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});

document.addEventListener('keydown', (event) => {
    if (event.key === "Escape") {
        if (!modal.classList.contains('hidden') && !overlay.classList.contains('hidden')) {
            modal.classList.add('hidden');
            overlay.classList.add('hidden');
        }
    }
});