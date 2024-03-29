const Pessoa={
    nome: "Bruno",
    canal: "CFB_Cursos",
    curso: "JavaScript",

    aulas: {
        aula1: "Introduçao",
        aula2: "Variaves",
        aula3: "Condicional"
    }
}


const string_pessoa = `{"nome":"Bruno","canal":"CFB_Cursos","curso":"JavaScript","aulas":{"aula1":"Introduçao","aula2":"Variaves","aula3":"Condicional"}}`  

const s_json =JSON.stringify(Pessoa) //objeto literal => string json
const o_json =JSON.parse(string_pessoa)// string json => objeto liteal

console.log(Pessoa)
console.log(Pessoa.aulas.aula2)
console.log(s_json)
console.log(o_json)