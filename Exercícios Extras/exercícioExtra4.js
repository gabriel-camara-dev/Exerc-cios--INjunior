//QUESTÃO 4
function transformarNota(nota) {
     switch (true) {
          case nota >= 90:
               return 'A'
          case nota >= 80:
               return 'B'
          case nota >= 70:
               return 'C'
          case nota >= 60:
               return 'D'
          default:
               return 'F'
     }
 }
 console.log(transformarNota(75))