function executar(){
    
    // enums
    enum direcoes{
        cima, baixo, esquerda, direita
    }

    let sentido1 = direcoes.cima; // 0
    let sentido2 = direcoes[2]; // esquerda

    function mover(sentido: direcoes){
        if(sentido == direcoes.cima){
            return "Direção para cima";
        }
    }

    enum partidos{
        pt=13, psl=17, pmdb=25, psdb=45
    }

    let eleicoes = partidos.psdb;

    document.getElementById('info1').innerHTML = sentido1.toString();
    document.getElementById('info2').innerHTML = sentido2;
    document.getElementById('info3').innerHTML = mover(0);
    document.getElementById('info4').innerHTML = eleicoes.toString();

}