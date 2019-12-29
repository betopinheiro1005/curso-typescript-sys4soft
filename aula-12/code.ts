function executar(){
    
    // classe - readonly e accessors

    class homem {

        readonly nome: string;
        readonly idade: number;

        constructor(n: string, i: number){
            this.nome = n;
            this.idade = i;
        }

    }

    class mulher {
        private _nome: string;
        private _sobrenome: string;

        // setter

        set Nome(n: string){
            if(n != 'x'){
               this._nome = n;
            } else {
               this._nome = "Nome indefinido"; 
            }
        }

        // getter

        get Nome(){
            return this._nome;
        }

    }

    let h = new homem('João', 43);
    // h.nome = 'João';

    let m = new mulher();
    m.Nome = 'x';
    // m.Nome = 'Ana';

    document.getElementById("info1").innerHTML = h.nome + " - " + h.idade + " anos";
    document.getElementById("info2").innerHTML = m.Nome;

}