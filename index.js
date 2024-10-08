// criando a classe personagem 

class personagem {
    //atributos 
    constructor(nome, idade, tipo){
        this.nome = nome;   
        this.idade = idade; 
        this.tipo = tipo;
    }
    //método atacar 
    atacar(){
        let mensagemAtaque = ""
        switch(this.tipo){
            case "mago":
            mensagemAtaque = "magia"
            break

            case "guerreiro":
            mensagemAtaque = "espada"
            break

            case "monge":
            mensagemAtaque = "artes marciais"
            break

            case "ninja":
            mensagemAtaque = "shuriken"
            break
        }

        console.log(`O ${this.tipo} atacou usando ${mensagemAtaque}`);
    }
}

// Criando um personagem do tipo "guerreiro"
let heroi = new personagem ("Gabriela","28", "guerreiro")
//usando o método atacar
heroi.atacar();