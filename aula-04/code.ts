function executar(){

    // string
    let valor1: string = "João";

    // boolean
    let valor2: boolean = true;

    // number
    let valor3: number = 23;
    let valor4: number = 16.5;
    let valor5: number = 0xA;
    let valor6: number = 0b1100100;
    let valor7: number = 0o144;

    // concatenando
    let primeiro_nome: string = "João";
    let nome_completo = `${primeiro_nome} Ribeiro`;

    // arrayx
    let nomes: string[] = ['João', 'Ana', 'Carlos'];
    let sobrenomes: Array<string> = ['Silva', 'Ribeiro', 'Oliveira'];

    let valor = "String: " + valor1 + "<br>Boolean: " + valor2 + "<br>Number1: " + valor3
    + "<br>Number2: " + valor4 + "<br>Number3: " + valor5 + "<br>Number4: " + valor6 
    + "<br>Number5: " + valor7  + "<br>Nome completo: " + nome_completo
    + "<br>Array: " + `${nomes[0]} ${sobrenomes[1]}`;

    document.getElementById("info").innerHTML += valor;

}

