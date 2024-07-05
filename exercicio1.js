//EXERCÍCIO 1

function multiplicarMatrizes(A,B) {
     let C = [[0,0],[0,0]]
     for (let i = 0; i < 2; i++) {
          for (let j = 0; j < 2; j++) {
               for (let k = 0; k < 2; k++) {
                    C[i][j] += A[i][k] * B[k][j]
               }
          }
     }
     return C
}

console.log(multiplicarMatrizes([[5,6],[1,5]],[[3,6],[1,2]]))