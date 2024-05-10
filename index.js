let personagem = ["Vinicius", 10001];

function classificarNivelHeroi(_args) {
    let nomeHeroi = personagem[0];
    let nivelHeroi = personagem[1];
    let classificaoHeroi;
    
    if(nivelHeroi <= 1000) classificaoHeroi = "Ferro";
    if(nivelHeroi > 1000 && nivelHeroi < 2000) classificaoHeroi = "Bronze";
    if(nivelHeroi >= 2001 && nivelHeroi < 5000) classificaoHeroi = "Prata";
    if(nivelHeroi >= 5001 && nivelHeroi < 7000) classificaoHeroi = "Ouro";
    if(nivelHeroi >= 7001 && nivelHeroi < 8000) classificaoHeroi = "Platina";
    if(nivelHeroi >= 8001 && nivelHeroi < 9000) classificaoHeroi = "Ascendente";
    if(nivelHeroi >= 9001 && nivelHeroi < 10000) classificaoHeroi = "Imortal";
    if(nivelHeroi >= 10001) classificaoHeroi = "Radiante";
    
    return `O Herói de nome ${nomeHeroi} está no nível de ${classificaoHeroi}`;
}

console.log(classificarNivelHeroi(personagem));