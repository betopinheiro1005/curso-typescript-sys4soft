function executar() {
    // classe
    var veiculo = /** @class */ (function () {
        function veiculo(m, a) {
            this.marca = m;
            this.ano = a;
        }
        veiculo.prototype.mover = function () {
            return "Eu me desloquei.";
        };
        return veiculo;
    }());
    var automovel = new veiculo('Audi', 2015);
    // automovel.ano = 2010;
    // automovel.marca = "BMW";
    document.write(automovel.mover());
    document.write("<br>");
    document.write(automovel.marca + " " + automovel.ano);
}
