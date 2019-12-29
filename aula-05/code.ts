function executar(){

    // tuple
    let dados: [string, number] = ['João', 43];

    // enum
    enum rgb {red=10, breen, blue};
    let cor: rgb = rgb.blue;
    let cor_nome: string = rgb[10];

    enum pontos {derrota=0, empate=1, vitoria=3};
    let resultado: pontos = pontos.vitoria;

    enum genero {masculino, feminino};
    let eu: genero = genero.masculino;

    // any
    let valor: any = 'João';
    valor = 43;

    let valor2: any[] = ['João', 43, false];
    valor2[0] = 2017;

    let nome = "João";
    let sobrenome = "Ribeiro";

    document.getElementById("info1").innerHTML = `${dados[0]} tem ${dados[1]} anos de idade.`;
    document.getElementById("info2").innerHTML = cor_nome;
    document.getElementById("info3").innerHTML = cor.toString();
    document.getElementById("info4").innerHTML = resultado.toString();
    document.getElementById("info5").innerHTML = eu.toString();
    document.getElementById("info6").innerHTML = valor;
    document.getElementById("info6").innerHTML = valor;
    document.getElementById("info7").innerHTML = valor2[0].toString();
    document.getElementById("info8").innerHTML = nome + " " + sobrenome;
}

