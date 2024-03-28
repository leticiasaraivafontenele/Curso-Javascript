const p_array =document.querySelector("#array")
const txt_pesquisar =document.querySelector("#txt_pesquisar")
const btnPesquisar =document.querySelector("#btnPesquisar")
const resultado =document.querySelector("#resultado")

const ele_array = [10, 19, 247, 37, 25, 57, 8, 59, 27 ,37]
p_array.innerHTML = "[ "+ ele_array+" ]"

btnPesquisar.addEventListener("click", (qmfoi)=>{
    const ret=ele_array.find((e,i)=>{
        if(e == txt_pesquisar.value){
            resultado.innerHTML = "valor pesquisado: "+e + "na posiçao: " + i
            return e
        }else{
            resultado.innerHTML = "Valor nn encontrado"
        }
    })
    console.log(ret)
})
