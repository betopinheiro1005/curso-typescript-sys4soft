function executar() {
    // iterators
    var nomes1 = ['João', 'Ana', 'Carlos', 'Daniela', 'Sofia'];
    var elemento1 = document.getElementById("info1");
    elemento1.innerHTML = "";
    // for
    for (var i = 0; i < nomes1.length; i++) {
        elemento1.innerHTML += nomes1[i] + " <br />";
    }
    // ==============================================================
    var nomes2 = ['Francisco', 'Maria', 'Sérgio', 'Miriam', 'Aline'];
    var elemento2 = document.getElementById("info2");
    elemento2.innerHTML = "";
    // foreach(array) - 1ª versão
    nomes2.forEach(function (e) {
        elemento2.innerHTML += e + " <br />";
    });
    // ==============================================================    
    var nomes3 = ['Paulo', 'Joana', 'Pedro', 'Nair', 'Rita'];
    var elemento3 = document.getElementById("info3");
    elemento3.innerHTML = "";
    // for arrow function
    nomes3.forEach(function (e) {
        elemento3.innerHTML += e + " <br />";
    });
    // ==============================================================    
    var nomes4 = ['Antonio', 'Beatriz', 'Roberto', 'Cecília', 'Deise'];
    var elemento4 = document.getElementById("info4");
    elemento4.innerHTML = "";
    // for ... of
    for (var _i = 0, nomes4_1 = nomes4; _i < nomes4_1.length; _i++) {
        var e = nomes4_1[_i];
        elemento4.innerHTML += e + " <br />";
    }
    // ==============================================================    
    var nomes5 = ['Rafael', 'Priscila', 'Daniel', 'Michelle', 'Caroline'];
    var elemento5 = document.getElementById("info5");
    elemento5.innerHTML = "";
    // for ... in
    for (var e in nomes5) {
        elemento5.innerHTML += e + " <br />";
    }
    // ==============================================================    
}
