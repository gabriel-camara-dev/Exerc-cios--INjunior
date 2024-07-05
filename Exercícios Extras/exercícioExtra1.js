//QUESTÃO 1
function contarPositivos() {
     positivos = 0
     for (let i = 0; i < 6; i++) {
          let valor = parseInt(prompt('Digite um número inteiro diferente de 0'))
          console.log(i+1)
          if (valor === 0) {
               i--
          } else if (valor > 0) {
               positivos++
          }
     }
     console.log(`Foram registrados ${positivos} valores positivos`)
}
contarPositivos()