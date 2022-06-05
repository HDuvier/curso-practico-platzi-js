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
    return(baseTriangulo * alturaTriangulo)/2;
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