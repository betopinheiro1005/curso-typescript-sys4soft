function executar() {
    // string
    var valor1 = "João";
    // boolean
    var valor2 = true;
    // number
    var valor3 = 23;
    var valor4 = 16.5;
    var valor5 = 0xA;
    var valor6 = 100;
    var valor7 = 100;
    // concatenando
    var primeiro_nome = "João";
    var nome_completo = primeiro_nome + " Ribeiro";
    // arrayx
    var nomes = ['João', 'Ana', 'Carlos'];
    var sobrenomes = ['Silva', 'Ribeiro', 'Oliveira'];
    var valor = "String: " + valor1 + "<br>Boolean: " + valor2 + "<br>Number1: " + valor3
        + "<br>Number2: " + valor4 + "<br>Number3: " + valor5 + "<br>Number4: " + valor6
        + "<br>Number5: " + valor7 + "<br>Nome completo: " + nome_completo
        + "<br>Array: " + (nomes[0] + " " + sobrenomes[1]);
    document.getElementById("info").innerHTML += valor;
}
