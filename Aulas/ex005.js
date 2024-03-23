function somar ( a = 0, b = 1){
    return a+ b;
}
function print (){
    console.log("printattttt")
}
print()
print()
console.log(somar(10))



console.log(" ")


//Paramestros rest (usando o operador Spred)

function multi(...valores){
    return valores.length
}
console.log(multi(10, 30, 6))

function variasSomas(...numeros){
    let res = 0
    for(i of numeros){
        res += i
    }
    return res
}

console.log(variasSomas(10,3,4,5,6,7))



console.log(" ")


//funcoes anonimas

let fun = function(a, b){ //funcao anonima
    return a+b
}

console.log(fun(9, 5))

let func = new Function("v1", "v2", "return v1 + v2") //funcao construtor anonima
console.log(func(2, 5))



console.log(" ")



//var/let/const nome = () => {}

const arow = (v1, v2) => v1 + v2 //arrow function
console.log(arow(2, 5))

const arow2 = n => n*n //arow function so com 1 argumento 
console.log(arow2(4))
//funcoes mais complexas precisa das chaves e do return
