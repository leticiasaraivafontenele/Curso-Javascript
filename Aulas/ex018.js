const p_array =document.querySelector("#array")
const txt_pesquisar =document.querySelector("#txt_pesquisar")
const btnPesquisar =document.querySelector("#btnPesquisar")
const resultado =document.querySelector("#resultado")

const ele_array = [1, 2, 3, 4, 5]
p_array.innerHTML = "[ "+ ele_array+" ]"

let ant =[]
let atu =[]

//Usando o every() = verifica se tudo esta nos conformes
// btnPesquisar.addEventListener("click", (qmfoi)=>{

//     const ret = ele_array.every((e, i)=>{
//         return e>= 18
//     })
//     resultado.innerHTML= ret
// })


//usando o some() = verifca se pelo menos 1 esta nos conformes
// btnPesquisar.addEventListener("click", (qmfoi)=>{

//     const ret = ele_array.some((e, i)=>{
//         return e>= 18
//     })
//     resultado.innerHTML= ret
// })

//Reduce() =
btnPesquisar.addEventListener("click", (qmfoi)=>{
    resultado.innerHTML = ele_array.reduce((anterior, atual, posi)=>{
        ant.push(anterior)
        atu.push(atual)
        return atual+anterior
    })
    resultado.innerHTML += "<br/> Anterior: "+ ant
    resultado.innerHTML += "<br/> Atual: "+ atu

})