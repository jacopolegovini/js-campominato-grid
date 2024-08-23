// * MILESTONE 1
// Prendi gli elementi dal DOM
// Crea le variabili necessarie
// Imposta l'event listener
// Crea il ciclo per far comparire le celle


// Prendi gli elementi dal DOM
const form = document.querySelector('form');
let table = document.querySelector('.table');


// Crea le variabili necessarie
const numberCell = 100;
let cell;


// Imposta l'event listener
form.addEventListener('click', function(event) {
    event.preventDefault();
    
    for (let i = 0; i < numberCell; i++) {
        cell = document.createElement('div');
        cell.classList.add('cell');
        table.appendChild(cell)
    }


})