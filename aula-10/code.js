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
    // classe - hereditariedade
    var animal = /** @class */ (function () {
        function animal(designacao) {
            this.designacao = "animal";
            this.designacao = designacao;
        }
        animal.prototype.mover = function (distancia) {
            return "deslocou-se por " + distancia + " metros";
        };
        return animal;
    }());
    var cavalo = /** @class */ (function (_super) {
        __extends(cavalo, _super);
        function cavalo() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        cavalo.prototype.mover = function (distancia) {
            return _super.prototype.designacao + (this.designacao + " a cavalgar... ") + _super.prototype.mover.call(this, distancia);
        };
        return cavalo;
    }(animal));
    var peixe = /** @class */ (function (_super) {
        __extends(peixe, _super);
        function peixe() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        peixe.prototype.mover = function (distancia) {
            return this.designacao + " a nadar... " + _super.prototype.mover.call(this, distancia);
        };
        return peixe;
    }(animal));
    var c = new cavalo('mangalarga');
    var p = new peixe('tubarão');
    document.getElementById("info1").innerHTML = c.mover(50);
    document.getElementById("info2").innerHTML = p.mover(100);
}
