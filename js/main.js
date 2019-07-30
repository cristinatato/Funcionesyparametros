'use strict';

function ten(str,maxNumber) {
    for (let i=0; i<maxNumber; i++) {
    console.log(str);
    // console.log(`${i}patata`)
    }   
}

ten('Patata', 10);
ten('Aguacate', 7);
ten('Pizza', 50);
// esto llama a la función, si no se llama no funciona.ç


// function ten(paco) {
//     for (let i=0; i<paco.max; i++) {
//         console.log(paco.text);
//     }
// }

// ten({text:'patata', max:10});