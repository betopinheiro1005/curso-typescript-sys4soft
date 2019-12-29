function executar(){
    
    // iterators

    let nomes1 = ['João', 'Ana', 'Carlos', 'Daniela', 'Sofia'];
    let elemento1 = document.getElementById("info1");
    elemento1.innerHTML = "";

    // for
    for(let i = 0; i < nomes1.length; i++){
        elemento1.innerHTML += `${nomes1[i]} <br />`;
    }    

    // ==============================================================

    let nomes2 = ['Francisco', 'Maria', 'Sérgio', 'Miriam', 'Aline'];
    let elemento2 = document.getElementById("info2");
    elemento2.innerHTML = "";


    // foreach(array) - 1ª versão
    nomes2.forEach(function(e){
        elemento2.innerHTML += `${e} <br />`;
    })

    // ==============================================================    

    let nomes3 = ['Paulo', 'Joana', 'Pedro', 'Nair', 'Rita'];
    let elemento3 = document.getElementById("info3");
    elemento3.innerHTML = "";

    // for arrow function

    nomes3.forEach(e => {
        elemento3.innerHTML += `${e} <br />`;
    })

    // ==============================================================    

    let nomes4 = ['Antonio', 'Beatriz', 'Roberto', 'Cecília', 'Deise'];
    let elemento4 = document.getElementById("info4");
    elemento4.innerHTML = "";

    // for ... of

    for(let e of nomes4){
        elemento4.innerHTML += `${e} <br />`;
    }

    // ==============================================================    

    let nomes5 = ['Rafael', 'Priscila', 'Daniel', 'Michelle', 'Caroline'];
    let elemento5 = document.getElementById("info5");
    elemento5.innerHTML = "";

    // for ... in

    for(let e in nomes5){
        elemento5.innerHTML += `${e} <br />`;
    }

    // ==============================================================    

} 
