/*
    en este ejercicio solo realice funciones.
    Hice todas funciones flecha, aprovechando el comando nfn de vc
    también en algunas situaciones aproveche e hice las funciones más pequeñas
    para que cupieran en una sola linea
    al igual que los condicionales
    Me gustaria mejorar el nombre de las variables
    darle más documentación y mejorar las condicionales
*/
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random()*10)
}

const compareGuesses = (human,computer,number) => {
    if( human < 0 || human > 10 ){
        alert('Ingrese un valor entre 0 y 10');
    }
    const humanValue= getAbsoluteDistance(human,number);
    const computerValue= getAbsoluteDistance(computer,number);
    let winner;
    ( humanValue <= computerValue ) ? winner = true : winner = false;

    return winner
}

const updateScore = (winner) => {
    if( winner === 'human' ){
        humanScore++;
    }
    if(winner === 'computer'){
        computerScore++;
    }
}

const advanceRound = ( ) => currentRoundNumber++;

const getAbsoluteDistance = (x,y) => Math.abs(x-y)


