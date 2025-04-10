// Desafio 2

// calcula o saldo total de vitórias com base no número de vitórias e derrotas
function rank(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    return saldoVitorias;
}

let totalVitorias = rank(58, 15);

//calcula o nível do jogador com base no número de total de vitórias

function level(vitorias) {
    let nivel;

    if (vitorias <= 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return nivel;
}

let nivelAtual = level(totalVitorias);

console.log(`O Herói tem um saldo de ${totalVitorias} vitórias e está no nível ${nivelAtual}`);