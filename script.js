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

function oppg3(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(oppg3(20, 39));
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

//Oppgave 7