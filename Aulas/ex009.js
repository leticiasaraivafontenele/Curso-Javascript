let colecaoHTML = document.getElementsByTagName("div")

console.log(colecaoHTML)

colecaoHTML = [...colecaoHTML]

console.log(colecaoHTML)

const colecaoHTML2 = [...document.getElementsByTagName("div")]

console.log(colecaoHTML2)


//adiciona uma classe nova
colecaoHTML.map((el, i)=>{
    el.classList.add("destaque")
})

console.log(colecaoHTML)



//Da pra especificar
const colecaoHTML3 = document.getElementsByTagName("div")[2]
console.log(colecaoHTML3)




// document.getElementsByClassName 
//     Retorna um HTMLcolection de todos os elementos da classe especificada.
// "cursos c1" "cursos c2" se pedir "cursos" retornas os dois.
