//Oppgave 1
/*
function oppg2(tall1,tall2,tall3) {
    return tall1+tall2+tall3;
}
*/

//Oppgave 2
/*
var i = 0

function oppg2() {
    while (i <= 25) {
        i++
        console.log(i);
    }
}

console.log(oppg2());
*/
//Oppgave 3
/*
function oppg3(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(oppg3(20, 39));
*/
//Oppgave 4



//Oppgave 5
/*
function oppg5() {
    const tall1 = Math.round(Math.random() * 10);
    const tall2 = Math.round(Math.random() * 10);

    if (tall1 > tall2) {
        return(tall1 + " er større enn " + tall2)
    } else if (tall1 < tall2) {
        return(tall2 + " er større enn " + tall1)        
    } else {
        return(tall1 + " er like stor som " + tall2)
    }
}

console.log(oppg5())
*/

//Oppgave 6
/*
function leggSammen(a, b) {
    return a + b;
}

function trekkeFra(a, b) {
    return a - b;
}

function multiplisere(a, b) {
    return a * b;
}

function dividere(a, b) {
    return a / b;
}

function kalkuler() {
    var tall1 = parseInt(prompt("Skriv inn det første tallet:"));
    var operator = prompt("Skriv inn operatoren (+, -, *, /):");
    var tall2 = parseInt(prompt("Skriv inn det andre tallet:"));
    var resultat;

    switch (operator) {
        case '+':
            resultat = leggSammen(tall1, tall2);
            break;
        case '-':
            resultat = trekkeFra(tall1, tall2);
            break;
        case '*':
            resultat = multiplisere(tall1, tall2);
            break;
        case '/':
            resultat = dividere(tall1, tall2);
            break;
        default:
            resultat = "Ugyldig operasjon";
    }

    console.log("Resultatet er: " + resultat);
}

kalkuler();
*/