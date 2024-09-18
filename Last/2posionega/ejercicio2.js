//Intearct with user
var numero = parseFloat(prompt("Ingresa un número:"));

// Result
if(numero > 0) {
    document.write("El número " + numero + " es positivo.");
} else if(numero < 0) {
    document.write("El número " + numero + " es negativo.");
} else {
    document.write("El número ingresado es cero.");
}
