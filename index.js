let nomeJogador = "Darius"
let resultados = ranking(95,5)

function ranking(vitorias, derrotas){
    let saldo = vitorias - derrotas
    return saldo
}


let nivel = "" 

if(resultados < 10){
    nivel = "Ferro"
}else if(resultados > 11 && resultados < 20){
    nivel - "Bronze"
}else if(resultados > 21 && resultados < 50){
    nivel = "Prata"
}else if(resultados > 51 && resultados < 80){
    nivel - "Ouro"
}else if(resultados > 81 && resultados < 90){
    nivel - "Diamante"
}else if(resultados > 91 && resultados < 100){
    nivel = "Mestre"
}else if(resultados > 101){
    nivel - "Challenger"
}

console.log("O Herói " + nomeJogador + " tem saldo de " + resultados + " vitórias e está no nível = " + nivel)