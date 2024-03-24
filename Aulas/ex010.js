//retorna o primeiro elemnto que encontrar
const querryDiv = document.querySelector("div")

console.log(querryDiv)

//retorna todos os elemntos que encontrar
const querryDivs = document.querySelectorAll("div")
//Se fosse pegar uma classe: ".cursos"
//Se fosse pegar um id: "#cursos"
//Se fosse pegar mais de uma categoria: ".cursos, p, #c2" OU
//Se fosse pegar mais de uma categoria: "div[.c1]" E
//Pegar todos os p's que estao dentro de divs: "div > p"
//pegar quem nao tem alguma coisa: ":not(.cursos)"

console.log(querryDivs)