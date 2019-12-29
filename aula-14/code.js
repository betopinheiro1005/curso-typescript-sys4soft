function executar() {
    // funções (functions)
    function multiplicar(a, b) {
        return a * b;
    }
    // funcões anônimas
    var f = function (c, d) {
        return c + d;
    };
    function nomeCompleto(nome, sobrenome) {
        var n = "";
        if (sobrenome) {
            n = nome + ' ' + sobrenome;
        }
        else {
            n = nome;
        }
        return n;
    }
    var resultado = multiplicar(10, 20);
    var soma = f(13, 66);
    document.getElementById('info1').innerHTML = resultado.toString();
    document.getElementById('info2').innerHTML = soma.toString();
    document.getElementById('info3').innerHTML = nomeCompleto('João', 'Ribeiro');
    document.getElementById('info4').innerHTML = nomeCompleto('João');
}
