//Funções Geradoras

function* cores(){
    yield 'Vermelho'
    yield 'Amarelo'
    yield 'Azul'
}

const itc = cores()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)



console.log(" ")



function* perguntas(){
    const nome = yield 'Qual seu nome?'
    const esporte = yield 'Qual seu esporte favorito?'
    return "Seu nome é " + nome + ", e seu esporte favorito é "+ esporte
}

const itp = perguntas()
console.log(itp.next().value)
console.log(itp.next("Shuya").value)
console.log(itp.next("Caçar").value)



console.log(" ")



function* contador(){
    let i = 0
    while(true){
        yield i++
    }
}

const itr = contador()
console.log(itr.next().value)
console.log(itr.next().value)
console.log(itr.next().value)
console.log(itr.next().value)
