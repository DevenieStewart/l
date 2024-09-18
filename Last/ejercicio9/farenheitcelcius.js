// Solicitar al usuario ingresar una temperatura
let temperatura = parseFloat(prompt("Ingresa la temperatura:"));

// Solicitar al usuario ingresar la unidad de medida (Celsius o Fahrenheit)
let unidad = prompt("Ingresa la unidad de medida (Celsius (cel) o Fahrenheit (far)):").toLowerCase();

// Convertir la temperatura a la otra unidad de medida
let temperaturaConvertida;
let unidadConvertida;

if (unidad === "cel") {
    // Convertir de Celsius a Fahrenheit
    temperaturaConvertida = (temperatura * 9/5) + 32;
    unidadConvertida = "Fahrenheit";
} else if (unidad === "far") {
    // Convertir de Fahrenheit a Celsius
    temperaturaConvertida = (temperatura - 32) * 5/9;
    unidadConvertida = "Celsius";
} else {
    // En caso de que la unidad ingresada no sea válida
    alert("ingrese la medida solicitada.");
}

// Mostrar la temperatura convertida
if (temperaturaConvertida !== undefined && unidadConvertida !== undefined) {
    alert("La temperatura convertida es: " + temperaturaConvertida.toFixed(2) + " " + unidadConvertida);
}
