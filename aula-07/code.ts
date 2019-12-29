function executar(): void{

    // spread
    let nomes_1 = ['João', 'Carlos'];
    let nomes_2 = ['Ana', 'Cristina'];
    let nomes_totais = ['Ronaldo', ...nomes_1, 'Antonio', ...nomes_2];
    document.getElementById("info1").innerHTML = JSON.stringify(nomes_totais);

    let pessoa = {
        nome: "João",
        sobrenome: "Ribeiro",
        idade: 43
    };

    let nova_pessoa = {
        ...pessoa,
        nome: "Joaquim"
    };

    document.getElementById("info2").innerHTML = nova_pessoa.nome;

}

