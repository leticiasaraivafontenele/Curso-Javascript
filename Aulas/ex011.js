// const oc1 = document.getElementById("c1")

// const msg = ()=>{
//     alert("Clicou")
// }

// oc1.addEventListener("click", msg)

// oc1.addEventListener("click", ((quemfoi)=>{
//     //alert("Clicoooooooooooooooou")

//     console.log(quemfoi)
// }))

const personagens = [...document.querySelectorAll(".persona")]

personagens.map((elemeto)=>{

    elemeto.addEventListener("click", ((qmfoi)=>{
        const ocara = qmfoi.target

        ocara.classList.add("FoiClicado")

        console.log(ocara)
    }))

})