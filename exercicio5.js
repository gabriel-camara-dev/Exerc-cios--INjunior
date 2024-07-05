//QUESTÃO 5
function dividirNumerosPor5(A) {
     for (let i = 0; i < A.length; i++) {
         if (A[i] % 5 === 0 && A[i] % 3 === 0) {
             console.log(A[i] + ": fizzbuzz");
         } else if (A[i] % 5 === 0 && A[i] % 3 !== 0) {
             console.log(A[i] + ": buzz");
         } else if (A[i] % 5 !== 0 && A[i] % 3 === 0) {
             console.log(A[i] + ": fizz");
         } else {
         }
     }
 }

function gerarInteirosAleatorios(n) {
     let inteiros_aleatorios = []
     for (let i = 0; i < n; i++) {
          inteiros_aleatorios.push(Math.floor(Math.random() * (1000 - (-1000)) + (-1000)))
     }
     return inteiros_aleatorios
}

dividirNumerosPor5(gerarInteirosAleatorios(5))