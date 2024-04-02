const palco = document.getElementById("palco")
const txt_qtde = document.getElementById("txt_qtde")
const num_objetos = document.getElementById("num_objetos")
const btn_add = document.getElementById("btn_add")
const btn_remover = document.getElementById("btn_remover")

let larguraPalco =palco.offsetWidth
let alturaPalco = palco.offsetHeight
let bolas=[]
let num_bolas = 0


class Bola{
    constructor(Arraybolas, palco){
        this.tam = Math.floor(Math.random()*10 + 10)
        this.r = Math.floor(Math.random()*255)
        this.g = Math.floor(Math.random()*255)
        this.b = Math.floor(Math.random()*255)

        this.px = Math.floor(Math.random()*(larguraPalco - this.tam))
        this.py = Math.floor(Math.random()*(alturaPalco - this.tam))

        this.velx = Math.floor(Math.random()*2 )+ 0.5
        this.vely = Math.floor(Math.random()*2 )+ 0.5

        this.dirx = (Math.random()*10 )>5?1:-1
        this.diry = (Math.random()*10 )>5?1:-1

        this.palco=palco
        this.Arraybolas = Arraybolas

        this.id = Date.now()+"_"+Math.floor(Math.random()*1000000000)
        this.desenhar()
        this.eu = document.getElementById(this.id)
        this.controle =setInterval(this.controlar.bind(this), 10)

        num_bolas++
        num_objetos.innerHTML=num_bolas



    }
    minhaPosNoArray=()=>{
        return this.Arraybolas.indexOf(this)
    }
    remover=()=>{
        clearInterval(this.controle)
        this.Arraybolas = this.Arraybolas.filter((b)=>{
            if(b.id!=this.id){
            return b}
        })
        this.eu.remove()
        num_bolas--
        num_objetos.innerHTML=num_bolas

    }
    desenhar=()=>{
        const div = document.createElement("div")
        div.setAttribute("id", this.id)
        div.setAttribute("class", "bola")
        div.setAttribute("style", `left:${this.px}px;top:${this.py}px;width:${this.tam}px;height:${this.tam}px;background-color:rgb(${this.r},${this.g},${this.b})`)
        this.palco.appendChild(div)

    }
    colisao_bordas=()=>{
        if(this.px+this.tam>=larguraPalco){
            this.dirx =-1
        }else if(this.px<0){
            this.dirx = 1
        }
        if(this.py+this.tam>=alturaPalco){
            this.diry =-1
        }else if(this.py<0){
            this.diry = 1
        }
        
    }
    controlar=()=>{
        this.colisao_bordas()
        this.px+=this.dirx*this.velx
        this.py+=this.diry*this.vely
        this.eu.setAttribute("style", `left:${this.px}px;top:${this.py}px;width:${this.tam}px;height:${this.tam}px;background-color:rgb(${this.r},${this.g},${this.b})`)
        if(this.px+this.tam>larguraPalco || this.px+this.tam>alturaPalco){
            this.remover()
        }


    }

}




//resize = evento de redimencionar a tela
window.addEventListener("resize", (qmfoi)=>{
    larguraPalco =palco.offsetWidth
    alturaPalco = palco.offsetHeight
})

btn_add.addEventListener("click", (qmfoi)=>{
    const qtde = txt_qtde.value
    for(let i =0; i < qtde; i++){
        // instanciar novas bolinhas
        bolas.push(new Bola(bolas, palco))
    }
})
btn_remover.addEventListener("click", (qmfoi)=>{
    bolas.map((el, i)=>{
        //remover as bolinhas
        el.remover()
    })
    
})


