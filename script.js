class jogo {
    constructor(nomeJogador, idadeJogador, tipoJogador){
        this.nomeJogador = nomeJogador
        this.idadeJogador = idadeJogador
        this.tipoJogador = tipoJogador 
    }

    atacar(){
        console.log(`O jogador ${this.nomeJogador}, com idade de ${this.idadeJogador} anos, é do tipo ${this.tipoJogador} e atacou usando ` + nivel + "...")
    }
}

let nivel = ""
let jogadorSimples = new jogo("Goku", 20, "saiajin")
let jogadorSaiajin = new jogo("Goku2", 22, "Super saiajin")
let jogadorSaiajin3 = new jogo("Goku3", 25, "Super saiajin 3")
let jogadorDeus = new jogo("Goku4", 27, "Deus super saiajin")

if (tipoJogador = "mago")
    nivel = "magia"
else if (tipoJogador - "guerreiro")
    nivel = "espada"
else if (tipoJogador = "monge")
    nivel = "usou artes marciais"
else if (tipoJogador - "Deus")
    nivel = "usou a geekdama "

jogadorDeus.atacar()
