function executar(): void{

    // interfaces
    interface intPessoa {
        nome: string;
        sobrenome?: string;
    }

    interface intCoordenadas {
        x: number;
        readonly y: number;
    }

    function pessoa(dados: intPessoa){
        let final = '';
        if(dados.nome){
            final = dados.nome;
        }
        if(dados.sobrenome){
            final += " " + dados.sobrenome;
        }
        return final;
    }

    let d = {nome:'João'};
    let nome_completo = pessoa(d);

    let posicao: intCoordenadas = {x: 100, y: 200};

    posicao.x = 500;

    document.getElementById('info1').innerHTML = nome_completo;
    document.getElementById('info2').innerHTML = "Posição x = " + posicao.x + ' - Posição y = ' + posicao.y;

}

