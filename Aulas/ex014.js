//Removendo elemento
const elementos = [...document.querySelectorAll(".curso")]
const caixa1 = document.getElementById("caixa1")

const btn_lixeira = document.createElement("img")
btn_lixeira.setAttribute("src", "https://www.clipartkey.com/mpngs/m/80-805261_trash-garbage-recycle-bin-svg-png-icon-free.png")
btn_lixeira.setAttribute("class", "btn_lixeira")

caixa1.appendChild(btn_lixeira)

elementos.map((el)=>{
    el.addEventListener("click",(qmfoi)=>{
        (qmfoi.target).classList.toggle("destaque")
    })
})
btn_lixeira.addEventListener("click", ()=>{
    const clicados =[...document.querySelectorAll(".destaque")]
    clicados.map((el)=>{
        caixa1.removeChild(el)
    })
})