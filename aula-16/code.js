function executar() {
    // function apresentar(valor: any): any{
    //     return valor;
    // }
    // document.getElementById('info1').innerHTML = apresentar(5);
    // generics
    function apresentar(valor) {
        return valor;
    }
    var teste1 = apresentar('João');
    var teste2 = apresentar(15);
    document.getElementById('info1').innerHTML = teste1;
    document.getElementById('info2').innerHTML = teste2.toString();
}
