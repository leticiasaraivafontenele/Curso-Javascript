//adicionando elementos


const caixa1 = document.querySelector("#caixa1")
//const btn_c1 = [...document.querySelector(".curso")]

const novoelemento=document.createElement("div")

novoelemento.setAttribute("id","c7")//o que é e o valor
novoelemento.setAttribute("class", "curso")
novoelemento.innerHTML = "qualquer coisa"

caixa1.appendChild(novoelemento)




//removendo elementos