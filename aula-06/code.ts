function executar(): void{

    // destructuring
    let valores = ['João', 'Ribeiro'];
    let [nome, sobrenome] = valores;
    document.getElementById("info").innerHTML = teste(['João', 'Ribeiro']);
}

function teste([nome, sobrenome]: [string, string]): string{
    return `${nome} ${sobrenome}`;
}

