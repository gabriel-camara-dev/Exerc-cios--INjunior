//QUESTÃO 3
function ordenarValores() {
     let valores = []
     for (let i = 0; i < 5; i++) {
          valores.push(parseInt(prompt('Escolha 5 valores inteiros')))
     }
     let valoresIniciais = [...valores]
     let valoresOrdenados = valores.sort((a,b) => a - b)    

     console.log(valoresOrdenados)
     console.log('')
     console.log(valoresIniciais)
 }
 ordenarValores()