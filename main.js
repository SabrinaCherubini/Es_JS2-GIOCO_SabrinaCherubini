// ES1: Scrivere un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:
//se v e’ minore di 18,  stampare in console  “insufficiente”
//se v e’ maggiore uguale a 18 e minore di 21,  stampare in console “sufficiente” //se v e’ maggiore uguale a 21 e minore di 24,  stampare in console: “buono”
//se v e’ maggiore uguale a 24 e minore di 27, stampare in console: “distinto”
//se v e’ maggiore uguale a 27 e minore uguale 29, stampare in console: “ottimo”
//se v e’ uguale a 30,stampare in console:  “eccellente”
//Cercate di risolvere questo esercizio utilizzando prima if, else e poi con switch, case.

//  let v = prompt('che voto hai preso?');
// if (v < 18) {
//     alert('insufficiente');
// } else if (v >= 18 && v < 21) {
//     alert('sufficiente');
// }
// else if (v >= 21 && v <= 21) {
//     alert('buono');
// }
// else if (v >= 24 && v < 27) {
//     alert('distinto');
// }
// else if (v >= 27 && v <= 29) {
//     alert('ottimo');
// }
// else if (v = 30) {
//     alert('eccellente');
// }


//ES. con CONSOLE LOG

// let v = 30;
// if (v < 18) {
//     console.log('insufficiente');
// } else if (v >= 18 && v < 21) {
//     console.log('sufficiente');
// }
// else if (v >= 21 && v <= 21) {
//     console.log('buono');
// }
// else if (v >= 24 && v < 27) {
// console.log('distinto');
// }
// else if (v >= 27 && v <= 29) {
//     console.log('ottimo');
// }
// else if (v == 30) {
//     console.log('eccellente');
// }
// else {
//     console.log('operazione errata');
// }


// CON LO SWITCH: opzione solo di una scelta caso x caso 

// let vote = prompt('inserisci voto che hai preso')

// switch (true) {
//     case vote < 18:
//         alert('insufficiente');

//         break;
//         case vote>=18:
//             alert('sufficiente');

//             case vote == 30:
//         alert('eccellente');


//     default:
//         alert('inserisci un voto valido')
//         break;
// }


// FOR sappiamo quante volte si ripete il ciclo in qst caso 10 mentre WHILE a ciclo 

//ES2:  Scrivi un programma che dato un numero, let num = 2, stampi la rispettiva tabellina corrispondente.
//parte da 2 e deve finire a 20 x la tabellina (10)

// for (let i = 2; i < 20; i++) --- parti da 2 finisci a 20
//     if (i % 2 == 0) { ---numeri divisi x 2 con resto 0
//         console.log(i);
// }

//ES 3:Scrivere un programma che converta una temperatura con una delle seguenti descrizioni:
// - se temperatura e’ minore di 20, stampare “non ci sono piu’ le mezze stagioni”
// - se temperatura e’ maggiore uguale a 30, stampare “lu mare, lu sole, lu ientu”
// - se temperatura e’ minore di 30, stampare “mi dia una peroni sudata”
// - se temperatura e’ minore di 0, stampare “non e’ tanto il freddo quanto l’umidità’”
// - se temperatura e’ minore di -10, stampare “copriti…ancora ti raffreddi”
// - Cercate di risolvere questo esercizio utilizzando prima if else e poi con switch case.

// let temp = prompt('inserisci temperatura attuale');

// if (temp < 20 && temp >=0) {
//     alert('non ci sono più le mezze stagioni');
// }
// else if (temp >= 30) {
//     alert('lu mare lu sole lu ientu');


// }
// else if (temp < 30) {
//     alert('mi dia una peroni sudata');


// }
// else if (temp < 0) {
//     alert("non è tanto il freddo qunto l'umidità");


// }
// else if (temp < -10) {
//     alert('copriti..ancora ti raffreddi');


// }


//con switch (interruttore)usiamo (true )in questo caso perchè essendo una COMPARAZIONE il pc avrà un valore booleano ovvero: true o false 
// se fosse stato x esempio un colore ovvero una stringa mettevamo una variabile es.'color'. 
// let temp = prompt('inserisci una temperatura')
// switch (true) {
//     case temp < 20:
//         alert('non ci sono più le mezze stagioni')

//         break;
//     case temp >= 30:
//         alert('lu mare lu sole lu ventu')
//         break;
//     case temp < 30:
//         alert('mi dia una peroni sudata')

//         break;
//     case temp < 0:
//         alert('non è tanto il freddo quanto lumidita')

//         break;
//     case temp < -10:
//         alert('copriti ancora che ti raffreddi')
//     default:
//         alert('temperatura non valida')
//         break;
// }


// es. VIDEOGIOCO POKEMON 
let startgame = prompt('Sei pronto a giocare? \n(1)inizia partita! \n(2) Esci dal gioco');
    
while (startgame != '1' && startgame != '2') {
startgame = prompt('Sei pronto a giocare? \n(1)inizia partita! \n(2) Esci dal gioco');
    }


if (startgame == 1) {
    alert('cominiciamo!');


let pokemon = prompt('hai avvistato un pokemon! cosa fai? \n(1) lo catturi \n(2) lo combatti \n(3)ti ritiri');

switch (pokemon) {
    case '1':
        let newpokemon= prompt('hai un nuovo pokemon! scegli se: \n(1) fuoco  \n(2) acqua');

        switch (newpokemon) {
            case '1':
                alert('bruci tutto!')
                break;
        
                case '2':
                    alert('hai una speranza con i pokemon di fuoco')
            default:
                alert ('non ci sono altri pokemon')
                break;
        }
        
        break;
        
        case '2':
            alert('hai perso dei punti vita')

            case '3':
                alert('scampato pericolo!')

    default:
        alert('sei stato troppo lento')
        break;
}
} else{
    alert('bye bye');
}

let game=prompt('vuoi giocare ancora? \n(si) \n(no)');

if (game=='si') {
    alert('sei al livello successivo!');
    
}

else {
    alert('salva e chiudi')
}


















