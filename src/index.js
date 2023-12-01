let nomeHeroi = "Garen"
let xpHeroi = 2546

if(xpHeroi < 1000){
    nivel = "Ferro"
}else if(xpHeroi > 1001 && xpHeroi < 2000){
    nivel - "Bronze"
}else if(xpHeroi > 2001 && xpHeroi < 5000){
    nivel = "Prata"
}else if(xpHeroi > 5001 && xpHeroi < 7000){
    nivel - "Ouro"
}else if(xpHeroi > 7001 && xpHeroi < 8000){
    nivel = "Platina"
}else if(xpHeroi > 8001 && xpHeroi < 9000){
    nivel - "Diamante"
}else if(xpHeroi > 9001 && xpHeroi < 10000){
    nivel = "Mestre"
}else if(xpHeroi > 10001){
    nivel - "Challenger"
}

console.log("O Herói " + nomeHeroi + " está no nível XP = " + nivel)