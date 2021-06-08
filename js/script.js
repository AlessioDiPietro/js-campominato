// Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero. La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto) all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali: con difficoltà 0 => tra 1 e 100 con difficoltà 1 => tra 1 e 80 con difficoltà 2 => tra 1 e 50

//area funzioni
function generatoreNumRand (min,max){
    return Math.floor(Math.random()*(max - min +1) + min);
}

// Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri non possono essere duplicati.

var numeriEsplosivi = [];

while (numeriEsplosivi.length < 100){

    if (!numeriEsplosivi.includes(generatoreNumRand(1,100))) {
        
        numeriEsplosivi.push(generatoreNumRand(1,100));
    }
}

console.log(numeriEsplosivi);



// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.

var risposteUtente = [];


while (risposteUtente.length < 3 ){

    var numeroUtente = parseInt(prompt("numero utente inserire"));
    if (numeroUtente > 100){
        alert("numero tra 1 e 100 please!")
    }
    else if (!risposteUtente.includes(numeroUtente)){
        risposteUtente.push(numeroUtente);
    }else {
        alert("numero gia inserito. PROVA CON UN ALTRO!")
        
    }
}
console.log(risposteUtente);