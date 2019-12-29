function executar(){
    
    // function apresentar(valor: any): any{
    //     return valor;
    // }

    // document.getElementById('info1').innerHTML = apresentar(5);

    // generics

    function apresentar<T>(valor: T): T{
         return valor;
    }

    let teste1 = apresentar<string>('João');
    let teste2 = apresentar<number>(15);

    document.getElementById('info1').innerHTML = teste1;
    document.getElementById('info2').innerHTML = teste2.toString();

}