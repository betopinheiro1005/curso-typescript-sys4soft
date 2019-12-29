function executar(){
    
    // funções (functions)

    // rest parameters

    function listaNomes(nome: string, ...restantes: string[]): string{
        return nome + ", " + restantes.join(", ");
    }
    
    let nomes = listaNomes('João', 'Carlos', 'Ana', 'Antonio');

    document.getElementById('info1').innerHTML = nomes;

    // overload

    function juntar(x: any, y:any): any {
        return x + y;
    }

    let nome = juntar('João ', 'Ribeiro');
    let resultado = juntar(10, 20);

    document.getElementById('info2').innerHTML = nome;
    document.getElementById('info3').innerHTML = resultado;

}