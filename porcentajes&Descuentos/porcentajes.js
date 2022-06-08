//funcion de descuento
function precioConDescuento (precio,descuento){
    let precioConDesc = precio*(100-descuento)/100;
    return precioConDesc;
};

//implementando la funcion
function precioDescuento(){
    const precio = document.getElementById("precioOriginal");
    const valor = Number(precio.value);
    const descuento = document.getElementById("descuento");
    const valorDesc =Number(descuento.value);

    const descontado = precioConDescuento(valor,valorDesc);
    const precioFinal = document.getElementById("PrecioFinal");
    precioFinal.innerText = "el precio con descuento es $" + descontado;
};