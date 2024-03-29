//Objetos Literais

const Pessoa={
     nome: "Bruno",

     getNome:function(){
        return this.nome
     }
}

const p1 = Pessoa
const p2 = Pessoa

console.log(p1.nome)
console.log(p2.nome)

console.log(p1.getNome())

p2.nome = "Cladisvardson"

console.log(p1.nome)
console.log(p2.nome)