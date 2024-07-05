function exponenciacao(x, n) {
     if (n === 0) {
         return 1;
     } else {
         return x * exponenciacao(x, n-1);
     }
 }
 console.log(exponenciacao(10,10))