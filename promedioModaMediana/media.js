//Se genera una funcion para agregar o borrar elementos de la lista
lista =[]
function incluirLista (){
    let i = document.getElementById("salario");
    const elemento = Number(i.value);
    lista.push(elemento);

    const listado = document.getElementById("listadoSalarios");
    listado.innerText = "lista= [" + lista + "]";
};

function borrarLista (){
    lista.pop();

    const listado = document.getElementById("listadoSalarios");
    listado.innerText = "lista= [" + lista + "]";
};

//se generan las funciones para usar en los calculos

function mediaAritmetica (lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado =0, nuevoValor){
           return valorAcumulado + nuevoValor;
        }
    );
    const promedio = sumaLista / lista.length ;
    return promedio;
};

function esPar(x) {
    if (x % 2 === 0){
        return true;
    } else {
        return false;
    }
};
//se hacen las diferentes funciones que se usaran e imprimiran 

function mediaAritmetica1(lista){
    const resultadoMedia = mediaAritmetica(lista);

    const MediaAritmetica = document.getElementById("resultadoMediaAritmetica");
    MediaAritmetica.innerText = "la media aritmetica es " + resultadoMedia;
};

function mediana (lista){

    let listaSort = lista.sort(
        function(a,b){
            return a-b;
        }
    )

    const posicion = lista.length /2;
    const posicionLista = parseInt(posicion);

    if (esPar(lista.length)){
        let element1 = listaSort[posicionLista -1];
        let element2 = listaSort[posicionLista];

        const promedioMediana = mediaAritmetica([element1,element2]);
        let MedianaAritmetica = document.getElementById("medianaAritmetica");
        MedianaAritmetica.innerText = "la mediana aritmetica es " + promedioMediana;
    }   else{
        const medianaImpar = listaSort[posicionLista];
        let MedianaAritmetica = document.getElementById("medianaAritmetica");
        MedianaAritmetica.innerText = "la mediana aritmetica es " + medianaImpar;
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
            return nuevoNum[1] -valorSumado[1]
        }
    );

    const moda = listaModa[0];
    let ModaAritmetica = document.getElementById("modaAritmetica");
    ModaAritmetica.innerText = "la moda aritmetica es " + moda[0] + " y se repite " + moda[1] + " veces";
};
