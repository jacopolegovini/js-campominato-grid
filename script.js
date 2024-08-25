// Crea le funzioni
// Prendi gli elementi dal DOM
// Crea le variabili necessarie
// Imposta l'event listener
    // Crea il ciclo per far comparire le celle e numerale            
    // Crea un nuovo event listener  
        //Aggiungi la classe clicked



// Prendi gli elementi dal DOM
const formElement = document.querySelector('form');
let tableElement = document.querySelector('.table');
const buttonElement = document.querySelector('button');
const selectElement = document.querySelector('select');
const optionElement = document.querySelectorAll('option');

//----------------------------------------------------------------------------

// Crea le funzioni necessarie
// Funzione per cambiare il valore
function changeValue() {
    selection = selectElement.value;
    console.log(selection);
}

//Funzione per creare il numero di celle corretto
function createCell(cell) {
    tableElement.innerHTML = '';
    for (let i = 0; i < numberCell; i++) {

        // Dichiara un array cells
        let cells = [i];
    
        // Monta quanto necessario
        cells[i] = document.createElement('div');
        cells[i].classList.add(cell);
        tableElement.appendChild(cells[i]);
        
        // Richiama dal DOM quanto appena creato
        const cellsElement = document.querySelectorAll('.' + cell); 
    
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
}

//----------------------------------------------------------------------------

// Crea le variabili necessarie
let numberCell;
let selection = '';

//----------------------------------------------------------------------------

// Inserisci l'evento change
selectElement.addEventListener('change', changeValue())

//----------------------------------------------------------------------------

// Imposta l'event listener
buttonElement.addEventListener('click', function(event) {
    event.preventDefault();

    // Imposta il numero di celle in base alla selezione
    if (selection === 'Easy') {
        numberCell = 100;    
        createCell('cell')

    } else if (selection === 'Medium') {
        numberCell = 81;
        createCell('cell-medium')

    } else if (selection === 'Hard') {
        numberCell = 49;
        createCell('cell-hard')

    } else {
        console.log('Seleziona una difficoltà');
        return;
    }   
})