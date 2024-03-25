const idades = [12, 74, 36, 3, 90,34,12,22,46,15,10]
const maiores =idades.filter((elemento, indicie, array)=>{
    if (elemento >= 18) {
        return elemento
    }
})

console.log(maiores)