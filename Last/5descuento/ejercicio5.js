function calcularDescuento(monto) {
    if (monto >= 1000) {
        return monto * 0.10;
    } else {
        return 0;
    }
}

var montoCompra = parseFloat(prompt("Ingrese el monto total de la compra:"));
var descuento = calcularDescuento(montoCompra);

document.write("El descuento aplicable es: " + descuento.toFixed(2));
