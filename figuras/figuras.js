//codigo del cuadrado 
console.group("cuadrado");

function perimetroCuadrado(ladoCuadrado){
    return ladoCuadrado * 4;
};

function areaCuadrado(ladoCuadrado) {
    return ladoCuadrado * ladoCuadrado;
};

console.groupEnd();

//codigo triangulo 
console.group("triangulo");

function perimetroTriangulo(ladoTriangulo1,ladoTriangulo2,baseTriangulo) {
    return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
};

function semiperimetro(ladoA,ladoB,ladoC){
    let semiPerTriangulo = ((ladoA + ladoB + ladoC)/2)
    return semiPerTriangulo
}

function areaTriangulo (ladoA,ladoB,ladoC){    
    let i = semiperimetro(ladoA,ladoB,ladoC)
    let areaHeron = (Math.sqrt(i*(i-ladoA)*(i-ladoB)*(i-ladoC)))
    return areaHeron;
};

console.groupEnd();

//codigo circulo

console.group("circulo");

function diametro (radio){
    return radio*2;
};
const PI = Math.PI;

function perimetroCirculo(radio) {
    const Diametro = diametro(radio);
    return Diametro * PI;
};

function areaCirculo(radio){
    return PI * (radio*radio);
}

console.groupEnd();
//enlazamos con html

function calcPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = Number(input.value);

    const Perimetro = perimetroCuadrado(value);
    const valorPerimetro = document.getElementById("valorPerimetroCuadrado");
    valorPerimetro.innerText = "EL PERIMETRO ES " + Perimetro;
};

function calcAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = Number(input.value);

    const AreaCuadrado = areaCuadrado(value);
    const ValorAreaCuadrado = document.getElementById("valorAreaCuadrado");
    ValorAreaCuadrado.innerText = "EL AREA ES " + AreaCuadrado;
};

function calcPerimetroTriangulo(){
    const inputA = document.getElementById("inputLadoA");
    const inputB = document.getElementById("inputLadoB");
    const inputC = document.getElementById("inputLadoC");
    const valueA = Number (inputA.value);
    const valueB = Number(inputB.value);
    const valueC = Number(inputC.value);

    let PerimetroTriangulo = perimetroTriangulo(valueA, valueB, valueC);
    const valorPerimetroTriangulo = document.getElementById("valorPerimetroTriangulo");
    valorPerimetroTriangulo.innerText = "EL PERIMETRO ES " + PerimetroTriangulo;
};

function calcAreaTriangulo() {
    const inputA = document.getElementById("inputLadoA");
    const inputB = document.getElementById("inputLadoB");
    const inputC = document.getElementById("inputLadoC");
    const valueA = Number (inputA.value);
    const valueB = Number(inputB.value);
    const valueC = Number(inputC.value);
    

    let AreaTriangulo = areaTriangulo(valueA, valueB, valueC);
    const ValorAreaTriangulo = document.getElementById("valorAreaTriangulo");
    ValorAreaTriangulo.innerText = "EL AREA ES " + AreaTriangulo;
};

function calcPerimetroCirculo() {
    const inputR = document.getElementById("inputRadio");
    const valueR = inputR.value;

    const PerimetroCir = perimetroCirculo(valueR);
    const valorPerimetroCirc = document.getElementById("valorPerimetroCirculo");
    valorPerimetroCirc.innerText = "EL PERIMETRO ES " + PerimetroCir;
};

function calcAreaCirculo() {
    const inputR = document.getElementById("inputRadio");
    const valueR = Number(inputR.value);

    const AreaCir = areaCirculo(valueR);
    const valorAreaCirc = document.getElementById("valorAreaCirculo");
    valorAreaCirc.innerText = "EL AREA ES " + AreaCir;
};
