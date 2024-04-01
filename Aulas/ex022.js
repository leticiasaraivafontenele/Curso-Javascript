//SEMPRE EXECUTADA 
//const numero = document.querySelector(".numero")

// let promesa = new Promise((res_ok,rejeitado_naoOk)=>{
//     let resultado = false
//     let tempo = 3000

//     setTimeout(()=>{
//         if (resultado) {
//             res_ok ("Deu tudo certo" )  
//         }else{
//             rejeitado_naoOk ("Deu tudo errado")
//         }
//     }, tempo)

// })

// promesa.then((retorno)=>{
//     numero.innerHTML = retorno
//     numero.classList.add("ok")
//     numero.classList.remove("erro")
// })
// promesa.catch((retorno)=>{
//     numero.innerHTML = retorno
//     numero.classList.add("erro")
//     numero.classList.remove("ok")
// })

// numero.innerHTML = "Processando..."


//EXECUTA QUANDO EU QUERO
const numero = document.querySelector(".numero")
const btn_promessa= document.querySelector("#btn_promessa")

console.log(numero)

btn_promessa.addEventListener("click",(qmfoi)=>{
    numero.innerHTML ="Processando..."
    promesar()
})

const promesar=()=>{
    let promesa = new Promise((res_ok,rejeitado_naoOk)=>{
        let resultado = true
        let tempo = 3000
    
        setTimeout(()=>{
            if (resultado) {
                res_ok ("Deu tudo certo" )  
            }else{
                rejeitado_naoOk ("Deu tudo errado")
            }
        }, tempo)
    
    })
    
    promesa.then((retorno)=>{
        numero.innerHTML = retorno
        numero.classList.add("ok")
        numero.classList.remove("erro")
    })
    promesa.catch((retorno)=>{
        numero.innerHTML = retorno
        numero.classList.add("erro")
        numero.classList.remove("ok")
    })
}

numero.innerHTML = "Esperando"