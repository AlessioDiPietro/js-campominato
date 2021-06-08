// Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero. La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto) all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali: con difficoltà 0 => tra 1 e 100 con difficoltà 1 => tra 1 e 80 con difficoltà 2 => tra 1 e 50

//area funzioni
function generatoreNumRand (min,max){
    return Math.floor(Math.random()*(max - min + 1) + min);
}

// Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri non possono essere duplicati.

var numeriEsplosivi = [];

while (numeriEsplosivi.length < 16){
    var numeroGen= generatoreNumRand(1,100)

    if (!numeriEsplosivi.includes(numeroGen)) {
        
        numeriEsplosivi.push(numeroGen);
    }
}

console.log(numeriEsplosivi);



// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.

var risposteUtente = [];

var colpito = true;

    while (risposteUtente.length < 4 && colpito){
    
        var numeroUtente = parseInt(prompt("numero utente inserire"));
    
        // Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero. La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
        
        if (numeroUtente > 100 && numeroUtente < 1){
            alert("numero tra 1 e 100 please!")
        }else if (numeriEsplosivi.includes(numeroUtente)){
            colpito = false;
        }else if (!risposteUtente.includes(numeroUtente)){
            risposteUtente.push(numeroUtente);
            
        }else {
            alert("numero gia inserito. PROVA CON UN ALTRO!")
            
        }
    }
console.log(risposteUtente);


var strikewin = risposteUtente.length + 1;
console.log(strikewin);




