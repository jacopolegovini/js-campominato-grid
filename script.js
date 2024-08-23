// * MILESTONE 1
// Prendi gli elementi dal DOM
// Crea le variabili necessarie
// Imposta l'event listener
// Crea il ciclo per far comparire le celle


// Prendi gli elementi dal DOM
const formElement = document.querySelector('form');
let tableElement = document.querySelector('.table');


// Crea le variabili necessarie
const numberCell = 100;



// Imposta l'event listener
formElement.addEventListener('click', function(event) {
    event.preventDefault();
    
    for (let i = 0; i < numberCell; i++) {
        // Dichiara un array cells
        let cells = [i];

        // Monta quanto necessario
        cells[i] = document.createElement('div');
        cells[i].classList.add('cell');
        tableElement.appendChild(cells[i]);
        
        // Richiama dal DOM quanto appena creato
        const cellsElement = document.querySelectorAll('.cell'); 

        // Monta quanto necessario
        cellsElement[i].innerHTML += `<p>${i}</p>`;
        console.log(cellsElement)
    }
})