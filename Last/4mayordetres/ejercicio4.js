// Solicitar al usuario ingresar tres números
var num1 = parseFloat(prompt("Ingresa el primer número:"));
var num2 = parseFloat(prompt("Ingresa el segundo número:"));
var num3 = parseFloat(prompt("Ingresa el tercer número:"));

// Determinar cuál de los tres números es el mayor
if (num1 > num2 && num1 > num3) {
    document.write("El primer número (" + num1 + ") es el mayor.");
} else if (num2 > num1 && num2 > num3) {
    document.write("El segundo número (" + num2 + ") es el mayor.");
} else if (num3 > num1 && num3 > num2) {
    document.write("El tercer número (" + num3 + ") es el mayor.");
} else {
    document.write("Hay dos o más números iguales, no hay un número mayor.");
}
