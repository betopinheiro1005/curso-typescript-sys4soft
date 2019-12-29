function executar() {
    // enums
    var direcoes;
    (function (direcoes) {
        direcoes[direcoes["cima"] = 0] = "cima";
        direcoes[direcoes["baixo"] = 1] = "baixo";
        direcoes[direcoes["esquerda"] = 2] = "esquerda";
        direcoes[direcoes["direita"] = 3] = "direita";
    })(direcoes || (direcoes = {}));
    var sentido1 = direcoes.cima; // 0
    var sentido2 = direcoes[2]; // esquerda
    function mover(sentido) {
        if (sentido == direcoes.cima) {
            return "Direção para cima";
        }
    }
    var partidos;
    (function (partidos) {
        partidos[partidos["pt"] = 13] = "pt";
        partidos[partidos["psl"] = 17] = "psl";
        partidos[partidos["pmdb"] = 25] = "pmdb";
        partidos[partidos["psdb"] = 45] = "psdb";
    })(partidos || (partidos = {}));
    var eleicoes = partidos.psdb;
    document.getElementById('info1').innerHTML = sentido1.toString();
    document.getElementById('info2').innerHTML = sentido2;
    document.getElementById('info3').innerHTML = mover(0);
    document.getElementById('info4').innerHTML = eleicoes.toString();
}
