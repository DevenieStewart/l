// Solicitar al usuario ingresar las longitudes de los tres lados del triángulo
let lado1 = parseFloat(prompt("Ingresa la medida del primer lado del triángulo:"));
let lado2 = parseFloat(prompt("Ingresa la medida del segundo lado del triángulo:"));
let lado3 = parseFloat(prompt("Ingresa la medida del tercer lado del triángulo:"));

// Verificar si el triángulo es equilátero, isósceles o escaleno
if (lado1 === lado2 && lado2 === lado3) {
    document.write("El triángulo es equilátero");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    document.write("El triángulo es isósceles");
} else {
    document.write("El triángulo es escaleno");
}
