function executar() {
    function pessoa(dados) {
        var final = '';
        if (dados.nome) {
            final = dados.nome;
        }
        if (dados.sobrenome) {
            final += " " + dados.sobrenome;
        }
        return final;
    }
    var d = { nome: 'João' };
    var nome_completo = pessoa(d);
    var posicao = { x: 100, y: 200 };
    posicao.x = 500;
    document.getElementById('info1').innerHTML = nome_completo;
    document.getElementById('info2').innerHTML = "Posição x = " + posicao.x + ' - Posição y = ' + posicao.y;
}
