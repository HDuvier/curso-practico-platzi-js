// Derivadas 

function derivar (a,n){
    let valores = [];
    let nuevoA = a*n;
    let nuevoN = n-1;
    valores.push(nuevoA,nuevoN)
    return valores
}

function calcularDerivada (){
    let valorA = document.getElementById("valorA");
    let valorN = document.getElementById("exponente");
    const valueA = Number(valorA.value);
    const valueN = Number(valorN.value);
    let derivando = derivar(valueA,valueN);

    const valorDerivada = document.getElementById("resultadoDerivada")
    valorDerivada.innerText= "El resultado de la derivada es f '(x)= " + derivando[0] + "X^" +derivando[1]
}

// Integrales
function integrar (a,n) {
    let valores = [];
    let newN = n+1;
    let newA = a/newN;
    valores.push(newA,newN)
    return valores
}

function calcularIntegral (){
    let valorA = document.getElementById("valorA");
    let valorN = document.getElementById("exponente");
    const valueA = Number(valorA.value);
    const valueN = Number(valorN.value);
    let integrando = integrar(valueA,valueN);

    const valorIntegral = document.getElementById("resultadoIntegral")
    valorIntegral.innerText= "El resultado de la integral es f(x)= " + integrando[0] + "X^" +integrando[1]
}