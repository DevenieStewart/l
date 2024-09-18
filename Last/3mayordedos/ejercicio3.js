// Solicitar al usuario ingresar dos números
var num1 = parseFloat(prompt("Ingresa el primer número:"));
var num2 = parseFloat(prompt("Ingresa el segundo número:"));

// Determinar cuál de los dos números es mayor
if(num1 > num2) {
    document.write("El primer número (" + num1 + ") es mayor que el segundo número (" + num2 + ").");
} else if(num2 > num1) {
    document.write("El segundo número (" + num2 + ") es mayor que el primer número (" + num1 + ").");
} else {
    document.write("Los dos números son iguales (" + num1 + ").");
}
