function executar() {
    // destructuring
    var valores = ['João', 'Ribeiro'];
    var nome = valores[0], sobrenome = valores[1];
    document.getElementById("info").innerHTML = teste(['João', 'Ribeiro']);
}
function teste(_a) {
    var nome = _a[0], sobrenome = _a[1];
    return nome + " " + sobrenome;
}
