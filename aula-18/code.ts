function executar(){
    
    // tipos e compatibilidade de tipos
    let nome = 'João';
    let sobrenome = "Ribeiro";
    let numero = 100;
    let status = true;

    enum direcoes {
        cima, baixo, esquerda, direita
    }

    let sentido = direcoes.cima;
    let x = direcoes[3];
    let y = [1, "João", 3];

    document.getElementById('info1').innerHTML = typeof(nome);
    document.getElementById('info2').innerHTML = typeof(sobrenome);
    document.getElementById('info3').innerHTML = typeof(numero);
    document.getElementById('info4').innerHTML = typeof(status);
    document.getElementById('info5').innerHTML = typeof(sentido);
    document.getElementById('info6').innerHTML = typeof(x);
    document.getElementById('info7').innerHTML = typeof(y);

}