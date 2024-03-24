const caixa1 = document.querySelector("#caixa1")
const btn_c1 = document.querySelector("#c1")

caixa1.addEventListener("click", (quemfoi)=>{
    console.log("Clicou")
})

btn_c1.addEventListener("click", (quemfoi)=>{
    quemfoi.stopPropagation()

})