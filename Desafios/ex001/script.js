const caixa1 = document.getElementById("caixa1")
const caixa2 = document.querySelector("#caixa2")

const botao = document.querySelector("button")

const todosCursos = [...document.querySelectorAll(".curso")]

todosCursos.map((elemento)=>{
    elemento.addEventListener("click", ((qmfoi)=>{
        const curso = qmfoi.target
        curso.classList.toggle("destaque")
        //Toggle: se ja tem - remove, se nao tem - adiciona
    }))
})

botao.addEventListener("click", ()=>{
    const clicados = [...document.querySelectorAll(".destaque")]
    const naoclicados = [...document.querySelectorAll(".curso:not(.destaque)")]

    clicados.map((elemento)=>{
        caixa2.appendChild(elemento)
    })

    naoclicados.map((elemento)=>{
        caixa1.appendChild(elemento)
    })
})


