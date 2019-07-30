'use strict';

function ten(str,maxNumber) {
    for (let i=0; i<maxNumber; i++) {
    console.log(str);
    // console.log(`${i}patata`)
    }   
}
// function ten(paco) {
    //     for (let i=0; i<paco.max; i++) {
        //         console.log(paco.text);
        //     }
        // }
        
        // ten({text:'patata', max:10});


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

// const randomNumber = getRandomNumber(50); esto no hace falta, porque entonces me generaría el mismo número para los tres.

ten('Patata', getRandomNumber(50));
ten('Aguacate', getRandomNumber(50));
ten('Pizza', getRandomNumber(50));



// ten('Patata', 10);
// ten('Aguacate', 7);
// ten('Pizza', 50);
        // esto llama a la función, si no se llama no funciona.ç
