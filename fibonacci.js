let fib1 = 0;
let fib2 = 1;
let numEscolido = 171;
let pertence = false;

while (fib2 <= numEscolido) {
  if(fib2 === numEscolido){
    pertence = true;
  }
  console.log(fib2);
  let temp = fib1 + fib2;
  fib1 = fib2;
  fib2 = temp;
}

if (pertence) {
  console.log(numEscolido + " faz parte da sequência de Fibonacci.");
} else {
  console.log(numEscolido + " não faz parte da sequência de Fibonacci.");
};