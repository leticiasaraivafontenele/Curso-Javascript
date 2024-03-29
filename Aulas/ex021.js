const Nave =function(enegia){
    this.enegia = enegia
    this.disparos = 100
}

const n1 = new Nave(40)

Nave.prototype.vidas=4

Nave.prototype.Disparar=function(){
    if(this.disparos>0){
        this.disparos--
        console.log("Pil ~~~~")
    }else{
        console.log("sem municao")
    }
}

n1.Disparar()
n1.Disparar()
n1.Disparar()
n1.Disparar()
n1.Disparar()

console.log(Nave)
console.log(n1)
console.log(n1.enegia)
console.log(n1.vidas)
console.log(n1.disparos)