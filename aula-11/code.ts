function executar(){
    
    // classe - modifiers
    class humano{
        private nome: string;
        protected genero: string;

        constructor(n: string){
            this.nome = n;
        }

        setNome(n:string){
            this.nome = n;
        }

        getNome(){
            return this.nome;
        }

        private falar(texto: string){
            return `Eu, ` + this.nome + `, disse ` + texto;
        }

        public gritar(){
            return this.falar('OLÁ');
        }

    }

    class homem extends humano{

        setGenero(g:string){
            this.genero = g;
        }

        getGenero(){
            return this.genero;
        }

    }

    let pessoa = new humano('José');
    pessoa.setNome('João');
    let pn = pessoa.getNome();
    
    let h = new homem('João');
    h.setGenero('masculino');
    
    let g = h.getGenero();

    document.getElementById("info1").innerHTML = pessoa.gritar();
    document.getElementById("info2").innerHTML = "Genero: " + g;

}