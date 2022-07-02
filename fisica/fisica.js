// Derivadas 

function derivar (a,n){
    let valores = [];
    let nuevoA = a*n;
    let nuevoN = n-1;
    valores.push(nuevoA,nuevoN)
    return valores
}

// Integrales
function integrar (a,n) {
    let valores = [];
    let newN = n+1;
    let newA = a/newN;
    valores.push(newA,newN)
    return valores
}