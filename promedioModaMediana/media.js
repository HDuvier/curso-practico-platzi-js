//se crea un ciclo para evaluar array de entrada 

/*function mediaAritmetica (lista){
let sumaLista = 0
for (let i = 0; i < lista.length; i++){
    sumaLista = sumaLista + lista[i];
};
const promedio = sumaLista / lista.length 
return promedio
};*/

//Segunda opcion para resolverlo 

lista =[1,2,3,4,1,1,2,3,4,2,2,3,4]

function mediaAritmetica (lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado =0, nuevoValor){
           return valorAcumulado + nuevoValor;
        }
    )
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


function mediana (lista){

    const posicion = lista.length /2;
    const posicionLista = parseInt(posicion);

    if (esPar(lista.length)){
        let element1 = lista[posicionLista -1];
        let element2 = lista[posicionLista];

        const promedioMediana = mediaAritmetica([element1,element2]);
        return promedioMediana;
    }   else{
        const medianaImpar = lista[posicionLista];
        return medianaImpar;
    } 

}

let cantidadVeces = {};

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
        return valorSumado[1] - nuevoNum[1]
    }
);

const moda = listaModa[listaModa.length -1];


