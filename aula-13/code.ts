function executar(){
    
    // classe - static properties

    class familia_kennedy {

        private _nome: string;
        static _sobrenome: string = "Kennedy";

        constructor(n: string){
            this._nome = n + ' ' + familia_kennedy._sobrenome;
        }

        get Nome(){
            return this._nome;
        }

    }

    // abstract classes

    abstract class humano{
        nome: string;
        idade: number;

        abstract falar(t: string): string;
    }

    class homem extends humano{
        falar(t: string){
            return "Eu falei " + t + " e sou homem.";
        }
    }

    class mulher extends humano{
        falar(t: string){
            return "Eu falei " + t + " e sou mulher.";
        }
    }

    let familiar1 = new familia_kennedy('John F.');
    let familiar2 = new familia_kennedy('Jacqueline F.');

    let h = new homem();
    let m = new mulher();
    
    document.getElementById("info1").innerHTML = familiar1.Nome;
    document.getElementById("info2").innerHTML = familiar2.Nome;
    document.getElementById("info3").innerHTML = h.falar('algo');
    document.getElementById("info4").innerHTML = m.falar('muito');

}