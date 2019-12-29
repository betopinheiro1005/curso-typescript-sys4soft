function executar() {
    // funções (functions)
    // rest parameters
    function listaNomes(nome) {
        var restantes = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restantes[_i - 1] = arguments[_i];
        }
        return nome + ", " + restantes.join(", ");
    }
    var nomes = listaNomes('João', 'Carlos', 'Ana', 'Antonio');
    document.getElementById('info1').innerHTML = nomes;
    // overload
    function juntar(x, y) {
        return x + y;
    }
    var nome = juntar('João ', 'Ribeiro');
    var resultado = juntar(10, 20);
    document.getElementById('info2').innerHTML = nome;
    document.getElementById('info3').innerHTML = resultado;
}
