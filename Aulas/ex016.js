const cursos =[...document.querySelectorAll(".curso")]

const tirarSelecao=()=>{
    const cursosSelecionados = [...document.querySelectorAll(".destaque")]
    cursosSelecionados.map((elementp)=>{
        elementp.classList.remove("destaque")
    })
}

cursos.map((ele)=>{
    ele.addEventListener("click", (quemfoi)=>{
        tirarSelecao()
        quemfoi.target.classList.toggle("destaque")
    })
})