function executar() {
    // tuple
    var dados = ['João', 43];
    // enum
    var rgb;
    (function (rgb) {
        rgb[rgb["red"] = 10] = "red";
        rgb[rgb["breen"] = 11] = "breen";
        rgb[rgb["blue"] = 12] = "blue";
    })(rgb || (rgb = {}));
    ;
    var cor = rgb.blue;
    var cor_nome = rgb[10];
    var pontos;
    (function (pontos) {
        pontos[pontos["derrota"] = 0] = "derrota";
        pontos[pontos["empate"] = 1] = "empate";
        pontos[pontos["vitoria"] = 3] = "vitoria";
    })(pontos || (pontos = {}));
    ;
    var resultado = pontos.vitoria;
    var genero;
    (function (genero) {
        genero[genero["masculino"] = 0] = "masculino";
        genero[genero["feminino"] = 1] = "feminino";
    })(genero || (genero = {}));
    ;
    var eu = genero.masculino;
    // any
    var valor = 'João';
    valor = 43;
    var valor2 = ['João', 43, false];
    valor2[0] = 2017;
    var nome = "João";
    var sobrenome = "Ribeiro";
    document.getElementById("info1").innerHTML = dados[0] + " tem " + dados[1] + " anos de idade.";
    document.getElementById("info2").innerHTML = cor_nome;
    document.getElementById("info3").innerHTML = cor.toString();
    document.getElementById("info4").innerHTML = resultado.toString();
    document.getElementById("info5").innerHTML = eu.toString();
    document.getElementById("info6").innerHTML = valor;
    document.getElementById("info6").innerHTML = valor;
    document.getElementById("info7").innerHTML = valor2[0].toString();
    document.getElementById("info8").innerHTML = nome + " " + sobrenome;
}
