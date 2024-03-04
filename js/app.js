//Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//oppure applicato uno sconto del 40% per gli over 65.
//L’output del prezzo finale va stampato in console in forma “umana” cioè con al massimo due decimali, per indicare centesimi sul prezzo. Questo richiederà un minimo di ricerca.

//dichiarazione delle costanti e richiesta tramite prompt
const km = parseFloat(prompt('Inserisci i chilometri da percorrere:')); //number
const age = parseInt(prompt('Inserisci la tua età:')); //number

//dichiarazione della variabile prezzo calcolata sulla base dei chilometri da percorrere
let price = km*0.21; //number

//controllo dell'età per applicare lo sconto
if (age < 18){
    price = price - price*0.2; //number
} 
if (age >= 65){
        price = price - price*0.4; //number
} 
// passaggio da numero a stringa per troncare il prezzo al secondo decimale
const finalPrice = price.toFixed(2);

console.log('Il prezzo del biglietto è: ' + finalPrice );