function executar(){
    
    // funções (functions)

    function multiplicar(a: number, b: number){
        return a * b;
    }   

    // funcões anônimas

    let f = function(c: number, d: number){
        return c + d;
    }

    function nomeCompleto(nome: string, sobrenome?: string): string {
        let n = "";

        if(sobrenome){
            n = nome + ' ' + sobrenome;
        } else {
            n = nome;
        }

        return n;

    }

    let resultado = multiplicar(10, 20);
    let soma = f(13, 66);

    document.getElementById('info1').innerHTML = resultado.toString();
    document.getElementById('info2').innerHTML = soma.toString();
    document.getElementById('info3').innerHTML = nomeCompleto('João', 'Ribeiro');
    document.getElementById('info4').innerHTML = nomeCompleto('João');

}