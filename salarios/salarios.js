
//input salarios
let lista = [];

function agregarSalario(){ 
    let i = document.getElementById("inputSalarios");
    const elemento = Number(i.value);
    lista.push(elemento);

    const listado = document.getElementById("listaSalarios");
    listado.innerText = "lista de salarios= [" + lista + "]";
};
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
    MediaAritmetica.innerText = "El promedio salarial es " + resultadoMedia;
};

function medianaSalary (lista){
    const mitad = parseInt (lista.length /2);

    if (esPar(lista.length)){
        const PersonaMitad1 = lista[mitad-1];
        const PersonaMitad2 = lista[mitad];

        const medianaSalarial = mediaAritmetica ([PersonaMitad1, PersonaMitad2]);
        const MedianaSalarial = document.getElementById("result-Mediana");
        MedianaSalarial.innerText = "La mediana salarial es " + medianaSalarial;
    } else {
        const PersonaMitad = lista[mitad];
        const MedianaSalarial = document.getElementById("result-Mediana");
        MedianaSalarial.innerText = "La mediana salarial es " + PersonaMitad;
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
    ModaAritmetica.innerText = "la moda salarial es " + moda[0] + " y se repite " + moda[1] + " veces";
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
    top.innerText = "el top 10% de salarios es Top= [ "+ j + "]";
    
}
