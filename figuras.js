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

function areaTriangulo (baseTriangulo, alturaTriangulo){    
    return((baseTriangulo*alturaTriangulo)/2);
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
    const value = input.value;

    const Perimetro = perimetroCuadrado(value);
    alert(Perimetro);
};

function calcAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = Number(input.value);

    const Area = areaCuadrado(value);
    alert(Area);
};

function calcPerimetroTriangulo(){
    const inputA = document.getElementById("inputLadoA");
    const inputB = document.getElementById("inputLadoB");
    const inputBa = document.getElementById("inputBase");
    const valueA = Number (inputA.value);
    const valueB = Number(inputB.value);
    const valueBa = Number(inputBa.value);

    let PerimetroTriangulo = perimetroTriangulo(valueA, valueB, valueBa);
    alert(PerimetroTriangulo);
};

function calcAreaTriangulo() {
    const inputBa = document.getElementById("inputBase");
    const inputAlt = document.getElementById("inputAltura");
    const valueBa = Number(inputBa.value);
    const valueAlt = Number(inputAlt.value);
    

    let AreaTriangulo = areaTriangulo(valueBa, valueAlt);
    alert(AreaTriangulo);
};

function calcPerimetroCirculo() {
    const inputR = document.getElementById("inputRadio");
    const valueR = inputR.value;

    const PerimetroCir = perimetroCirculo(valueR);
    alert(PerimetroCir);
};

function calcAreaCirculo() {
    const inputR = document.getElementById("inputRadio");
    const valueR = Number(inputR.value);

    const AreaCir = areaCirculo(valueR);
    alert(AreaCir);
};
