// analisis salarial 

const salarioCol = colombia.map(
    function (persona) {
        return persona.salary;
    }
);

const salarioColSorted = salarioCol.sort(
    function (salaryA , salaryB) {
        return salaryA - salaryB;
    }
);

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


function medianaSalary (lista){
    const mitad = parseInt (lista.length /2);

    if (esPar(lista.length)){
        const PersonaMitad1 = lista[mitad-1];
        const PersonaMitad2 = lista[mitad];

        const mediana = mediaAritmetica ([PersonaMitad1, PersonaMitad2]);
        return mediana;
    } else {
        const PersonaMitad = lista[mitad];
        return PersonaMitad
    }
};

console.log(
    medianaSalary(salarioColSorted)
);