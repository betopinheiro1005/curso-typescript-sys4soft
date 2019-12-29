function executar(){
    // classe
    class veiculo{

        marca: string;
        ano: number;

        constructor(m: string, a: number){
            this.marca = m;
            this.ano = a;
        }

        mover(){
            return "Eu me desloquei."
        }
    }

    let automovel = new veiculo('Audi', 2015);
    // automovel.ano = 2010;
    // automovel.marca = "BMW";
    document.write(automovel.mover());
    document.write("<br>");
    document.write(automovel.marca + " " + automovel.ano);
}

