const teclasNum = [...document.querySelectorAll(".num")]
const teclasOp = [...document.querySelectorAll(".op")]
const teclaRes = document.querySelector(".res")
const display = document.querySelector(".display")
const copy = document.querySelector("#tcpy")
const limpar = document.querySelector("#tlimpar")
const igual=document.querySelector("#tigual")
const teste=document.querySelector("#tigual")
const calc_aba = document.getElementById("calc_aba")
const calc = document.getElementById("calc")



let sinal = false
let decimal = false


teclasNum.map((el)=>{
    el.addEventListener("click", (qmfoi)=>{
        sinal = false
        if(qmfoi.target.innerHTML == ","){
            if(!decimal){
                decimal =true
                if(display.innerHTML == "0"){
                    display.innerHTML = "0,"
                }else{
                    display.innerHTML += qmfoi.target.innerHTML
                } 
            }
        }else{
            if(display.innerHTML =="0"){
                display.innerHTML = ""
            }
            display.innerHTML += qmfoi.target.innerHTML
        }
    })
})

teclasOp.map((el)=>{
    el.addEventListener("click", (qmfoi)=>{
        if(!sinal){
            sinal = true

            if(display.innerHTML =="0"){
                display.innerHTML = ""
            }
            if(qmfoi.target.innerHTML == "x"){
                display.innerHTML += "*"
            }else{
                display.innerHTML += qmfoi.target.innerHTML
            }
        }
    })
})

limpar.addEventListener("click", (qmfoi)=>{
    sinal = false
    decimal =false
    display.innerHTML = "0"
})

igual.addEventListener("click", ()=>{
    decimal=false
    sinal=false
    const res =eval(display.innerHTML)
    display.innerHTML = res
})

copy.addEventListener("click", (qmfoi)=>{
    navigator.clipboard.writeText(display.innerHTML)
})

calc_aba.addEventListener("click", (qmfoi)=>{
    calc.classList.toggle("calc_exibir")
})