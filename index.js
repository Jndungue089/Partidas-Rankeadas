
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularRanking(numVitorias, numDerrotas){
    resultado = numVitorias - numDerrotas;
    if(resultado <= 10){
        console.log("Ferro");
    } else if (resultado >10 && resultado <= 20){
        console.log("Bronze");
    } else if (20 < resultado && resultado <=50){
        console.log("Prata");
    } else if (50 < resultado && resultado <= 80){
        console.log("Ouro");
    } else if (80 < resultado && resultado <= 90) {
        console.log("Diamante");
    } else if (90< resultado && resultado <= 100){
        console.log("Lendário");
    } else if (resultado && resultado >100){
        console.log("Imortal");
    }
}

rl.question('Digite o número de vitórias: ', (vitorias) => {
    rl.question('Digite o número de derrotas: ', (derrotas) => {
        calcularRanking(parseInt(vitorias), parseInt(derrotas));
        rl.close();
    });
});