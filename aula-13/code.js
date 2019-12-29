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
    // classe - static properties
    var familia_kennedy = /** @class */ (function () {
        function familia_kennedy(n) {
            this._nome = n + ' ' + familia_kennedy._sobrenome;
        }
        Object.defineProperty(familia_kennedy.prototype, "Nome", {
            get: function () {
                return this._nome;
            },
            enumerable: true,
            configurable: true
        });
        familia_kennedy._sobrenome = "Kennedy";
        return familia_kennedy;
    }());
    // abstract classes
    var humano = /** @class */ (function () {
        function humano() {
        }
        return humano;
    }());
    var homem = /** @class */ (function (_super) {
        __extends(homem, _super);
        function homem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        homem.prototype.falar = function (t) {
            return "Eu falei " + t + " e sou homem.";
        };
        return homem;
    }(humano));
    var mulher = /** @class */ (function (_super) {
        __extends(mulher, _super);
        function mulher() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        mulher.prototype.falar = function (t) {
            return "Eu falei " + t + " e sou mulher.";
        };
        return mulher;
    }(humano));
    var familiar1 = new familia_kennedy('John F.');
    var familiar2 = new familia_kennedy('Jacqueline F.');
    var h = new homem();
    var m = new mulher();
    document.getElementById("info1").innerHTML = familiar1.Nome;
    document.getElementById("info2").innerHTML = familiar2.Nome;
    document.getElementById("info3").innerHTML = h.falar('algo');
    document.getElementById("info4").innerHTML = m.falar('muito');
}
