let frase = "Frase teste para este algoritmo de contagem de letras.";
let letraEscolida = "a";
let totalLetras = 0;

for (let i = 0; i < frase.length; i++){
    if(frase[i].toLowerCase() === letraEscolida.toLowerCase()){
        totalLetras++;
    }
}

console.log("O total de letras '" + letraEscolida + "' é de " + totalLetras);
