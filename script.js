// Crea le funzioni
// Prendi gli elementi dal DOM
// Crea le variabili necessarie
// Imposta l'event listener
    // Crea il ciclo per far comparire le celle e numerale            
    // Crea un nuovo event listener  
        //Aggiungi la classe clicked



// Crea le funzioni
// ? Come mai non funziona? Lavoraci su
// function createAnElement(cells, tag, className) {
//     // Dichiara un array cells
//     let cells = [i];

//     // Monta quanto necessario
//     cells[i] = document.createElement(`${tag}`);
//     cells[i].classList.add(`${className}`);
//     tableElement.appendChild(cells[i]);
// }


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
        cellsElement[i].innerHTML = `<p>${i + 1}</p>`;

        // Crea un nuovo event listener  
        cellsElement[i].addEventListener('click', function() {

            //Aggiungi la classe clicked
            cellsElement[i].classList.add('clicked');

            // Richiama dal DOM quanto appena creato
            const numberElement = document.querySelectorAll('p');

            //Controlla e stampa il numero
            const number = numberElement[i].textContent;
            console.log(number);
        })
    }
})