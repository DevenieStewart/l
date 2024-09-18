// Solicitar al usuario que ingrese un número N
let N = prompt("ingresa un número N para calcular la suma de los primeros N números naturales:");
//convertir a entero
N = parseInt(N);

// Verificar si el número ingresado es válido
if (N <= 0 || isNaN(N)) {
    document.write("El numero ingresado no es valido");
} else {
    let suma = 0;
    let contador = 1;

    // Calcular la suma de los primeros N 
    while (contador <= N) {
        suma += contador;
        contador++;
    }

    // Mostrar el resultado
    document.write("La suma de los primeros " + N + " numeros naturales es: " + suma + ".");
}
