
//input salarios
let lista = [];

function agregarSalario(){ 
    let i = document.getElementById("inputSalarios");
    const elemento = Number(i.value);
    lista.push(elemento);

    const listado = document.getElementById("listaSalarios");
    listado.innerText = "lista de salarios= [" + lista + "]";
};
/*
function separarComa(){
    
    let j = document.getElementById("inputSal");
    let stringJ = String(j.value)
    let listaComa = stringJ.split(",");

    const listadoFinal = document.getElementById("listaSalarios");
    listadoFinal.innerText = "lista de salarios= [" + listaComa + "]";
}
*/
function borrarSalario (){
    lista.pop();

    const listado = document.getElementById("listaSalarios");
    listado.innerText = "lista de salarios= [" + lista + "]";
};

function esPar (i) {
    return (i % 2 ===0);
};

function mediaAritmetica (lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado =0, nuevoValor){
           return valorAcumulado + nuevoValor;
        }
    )
    const promedio = sumaLista / lista.length ;
    return promedio;
    };

function mediaAritmeticaSal(lista){
    const resultadoMedia = mediaAritmetica(lista);

    const MediaAritmetica = document.getElementById("result-Promedio");
    MediaAritmetica.innerText = "EL PROMEDIO SALARIAL ES " + resultadoMedia;
};

function medianaSalary (lista){
    const mitad = parseInt (lista.length /2);

    if (esPar(lista.length)){
        const PersonaMitad1 = lista[mitad-1];
        const PersonaMitad2 = lista[mitad];

        const medianaSalarial = mediaAritmetica ([PersonaMitad1, PersonaMitad2]);
        const MedianaSalarial = document.getElementById("result-Mediana");
        MedianaSalarial.innerText = "LA MEDIANA SALARIAL ES " + medianaSalarial;
    } else {
        const PersonaMitad = lista[mitad];
        const MedianaSalarial = document.getElementById("result-Mediana");
        MedianaSalarial.innerText = "LA MEDIANA SALARIAL ES " + PersonaMitad;
    }

};

let cantidadVeces = {};

function contar (lista){
    lista.map(
    function (i){
        if(cantidadVeces[i]){
            cantidadVeces[i] += 1;
        } else{
            cantidadVeces[i] =1;
        }
    }
    );

    const listaModa = Object.entries(cantidadVeces).sort(
        function (valorSumado, nuevoNum){
            return nuevoNum[1] -valorSumado[1];
        }
    );

    const moda = listaModa[0];
    let ModaAritmetica = document.getElementById("result-Moda");
    ModaAritmetica.innerText = "LA MODA SALARIAL ES " + moda[0] + " Y SE REPITE " + moda[1] + " VECES";
};

function top10(lista){

    const salarioSorted = lista.sort(
        function (salaryA , salaryB) {
            return salaryA - salaryB;
        }
    );

    let i = parseInt(salarioSorted.length-salarioSorted.length*0.1);
    const j = salarioSorted.slice(i);

    let top = document.getElementById("result-Top");
    top.innerText = "EL TOP 10% DE SALARIOS ES TOP= [ "+ j + "]";
    
}
