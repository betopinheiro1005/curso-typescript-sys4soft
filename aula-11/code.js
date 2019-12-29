var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function executar() {
    // classe - modifiers
    var humano = /** @class */ (function () {
        function humano(n) {
            this.nome = n;
        }
        humano.prototype.setNome = function (n) {
            this.nome = n;
        };
        humano.prototype.getNome = function () {
            return this.nome;
        };
        humano.prototype.falar = function (texto) {
            return "Eu, " + this.nome + ", disse " + texto;
        };
        humano.prototype.gritar = function () {
            return this.falar('OLÁ');
        };
        return humano;
    }());
    var homem = /** @class */ (function (_super) {
        __extends(homem, _super);
        function homem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        homem.prototype.setGenero = function (g) {
            this.genero = g;
        };
        homem.prototype.getGenero = function () {
            return this.genero;
        };
        return homem;
    }(humano));
    var pessoa = new humano('José');
    pessoa.setNome('João');
    var pn = pessoa.getNome();
    var h = new homem('João');
    h.setGenero('masculino');
    var g = h.getGenero();
    document.getElementById("info1").innerHTML = pessoa.gritar();
    document.getElementById("info2").innerHTML = "Genero: " + g;
}
