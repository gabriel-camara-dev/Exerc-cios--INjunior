//QUESTÃO 3
function avaliarAluno(N1,N2,N3) {
     media = (N1 + N2 + N3) / 3
     if (media >= 6) {
          return console.log('Aprovado')
     } else {
          return console.log('Reprovado')
     }
}
avaliarAluno(9,9,9)