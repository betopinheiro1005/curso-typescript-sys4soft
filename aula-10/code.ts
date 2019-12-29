function executar(){
    
    // classe - hereditariedade
    class animal{
        designacao: string = "animal";

        constructor(designacao: string){
            this.designacao = designacao;
        }

        mover(distancia: number): string{
            return `deslocou-se por ${distancia} metros`;
        }

    }

    class cavalo extends animal{
        
        mover(distancia: number): string{
            return super.designacao + `${this.designacao} a cavalgar... ` + super.mover(distancia);
        }
    }

    class peixe extends animal{

        mover(distancia: number): string{
            return `${this.designacao} a nadar... ` + super.mover(distancia);
        }
    }

    let c = new cavalo('mangalarga');
    let p = new peixe('tubarão');
    document.getElementById("info1").innerHTML = c.mover(50);
    document.getElementById("info2").innerHTML = p.mover(100);
}