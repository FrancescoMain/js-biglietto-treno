// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
const km = parseInt(prompt("Inserisci i chilometri che devi percorrere"));
const eta = parseInt(prompt("Inserisci la tua età"));


// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
const tariffa = 0.21;
let prezzoBiglietto = km * tariffa;


// va applicato uno sconto del 20% per i minorenni
if (eta < 18){ 
    prezzoBiglietto = prezzoBiglietto * 0.8

}


// va applicato uno sconto del 40% per gli over 65.
if (eta > 65){ 
    prezzoBiglietto = prezzoBiglietto * 0.6;

}



// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
let risultato = prezzoBiglietto.toFixed(2);


// BONUS possibili:
// elaborazione dell’output come detto, più articolata del semplice prezzo;
document.getElementById("title").innerHTML = `In base alla tua età (${eta}) e ai kilometri da percorrere (${km})
Il tuo biglietto costerà: = ${risultato}€. `

// interfaccia un pò eleaorata con CSS.