
//Q1
console.log(booksByCategory.length + " categorias:")
booksByCategory.forEach(category => console.log(`${category.category}: ${category.books.length} livros`))

//Q2
let autores = []
booksByCategory.forEach(category => category.books.forEach(book => {
     if (autores.includes(book.author) === false) {
          autores.push(book.author)
     }
}))
console.log(`São ${autores.length} autores`)

//Q3
let livros_AugustoCury = []
booksByCategory.forEach(category => category.books.forEach(book => {
     if (book.author === 'Augusto Cury') {
          console.log(`${book.title} || Livro do autor Augusto Cury`)
     }
}))

const booksByCategory = [
     {
     category: "Riqueza",
     books: [
     {
     title: "Os segredos da mente milionária",
     author: "T. Harv Eker",
     },
     {
     title: "O homem mais rico da Babilônia",
     author: "George S. Clason",
     },
     {
     title: "Pai rico, pai pobre",
     author: "Robert T. Kiyosaki e Sharon L. Lechter",
     },
     ],
     },
     {
     category: "Inteligência Emocional",
     books: [
     {
     title: "Você é Insubstituível",
     author: "Augusto Cury",
     },
     {
     title: "Ansiedade – Como enfrentar o mal do século",
     author: "Augusto Cury",
     
     },
     {
     title: "Os 7 hábitos das pessoas altamente eficazes",
     author: "Stephen R. Covey"
     }
     ]
     }
     ];