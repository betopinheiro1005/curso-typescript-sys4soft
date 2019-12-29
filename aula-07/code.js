var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function executar() {
    // spread
    var nomes_1 = ['João', 'Carlos'];
    var nomes_2 = ['Ana', 'Cristina'];
    var nomes_totais = __spreadArrays(['Ronaldo'], nomes_1, ['Antonio'], nomes_2);
    document.getElementById("info1").innerHTML = JSON.stringify(nomes_totais);
    var pessoa = {
        nome: "João",
        sobrenome: "Ribeiro",
        idade: 43
    };
    var nova_pessoa = __assign(__assign({}, pessoa), { nome: "Joaquim" });
    document.getElementById("info2").innerHTML = nova_pessoa.nome;
}
