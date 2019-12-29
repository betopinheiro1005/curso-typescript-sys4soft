function executar() {
    // classe - readonly e accessors
    var homem = /** @class */ (function () {
        function homem(n, i) {
            this.nome = n;
            this.idade = i;
        }
        return homem;
    }());
    var mulher = /** @class */ (function () {
        function mulher() {
        }
        Object.defineProperty(mulher.prototype, "Nome", {
            // getter
            get: function () {
                return this._nome;
            },
            // setter
            set: function (n) {
                if (n != 'x') {
                    this._nome = n;
                }
                else {
                    this._nome = "Nome indefinido";
                }
            },
            enumerable: true,
            configurable: true
        });
        return mulher;
    }());
    var h = new homem('João', 43);
    // h.nome = 'João';
    var m = new mulher();
    m.Nome = 'x';
    // m.Nome = 'Ana';
    document.getElementById("info1").innerHTML = h.nome + " - " + h.idade + " anos";
    document.getElementById("info2").innerHTML = m.Nome;
}
