function executar() {
    // tipos e compatibilidade de tipos
    var nome = 'João';
    var sobrenome = "Ribeiro";
    var numero = 100;
    var status = true;
    var direcoes;
    (function (direcoes) {
        direcoes[direcoes["cima"] = 0] = "cima";
        direcoes[direcoes["baixo"] = 1] = "baixo";
        direcoes[direcoes["esquerda"] = 2] = "esquerda";
        direcoes[direcoes["direita"] = 3] = "direita";
    })(direcoes || (direcoes = {}));
    var sentido = direcoes.cima;
    var x = direcoes[3];
    var y = [1, "João", 3];
    document.getElementById('info1').innerHTML = typeof (nome);
    document.getElementById('info2').innerHTML = typeof (sobrenome);
    document.getElementById('info3').innerHTML = typeof (numero);
    document.getElementById('info4').innerHTML = typeof (status);
    document.getElementById('info5').innerHTML = typeof (sentido);
    document.getElementById('info6').innerHTML = typeof (x);
    document.getElementById('info7').innerHTML = typeof (y);
}
