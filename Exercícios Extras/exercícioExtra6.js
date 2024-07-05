//QUESTÃO 6
let Finanças = {
     receitas: [],
     despesas: []
}
function calcularSaldo(Finanças) {
     let receitaTotal = 0
     for (let i = 0; i < Finanças.receitas.length; i++) {
          receitaTotal += Finanças.receitas[i]
     }

     let despesaTotal = 0
     for (let i = 0; i < Finanças.despesas.length; i++) {
          despesaTotal += Finanças.despesas[i]
     }

     let saldo = receitaTotal - despesaTotal
     if (saldo > 0) {
          console.log(`A família está com saldo positivo, valor do saldo: ${saldo}`)
     } else if (saldo < 0) {
          console.log(`A família está com saldo negativo, valor do saldo: ${saldo}`)
     } else {
          console.log(`A família está com saldo zerado, valor do saldo: ${saldo}`)
     }
}
Finanças.receitas.push(340,506,948)
Finanças.despesas.push(360,954,480)
calcularSaldo(Finanças)