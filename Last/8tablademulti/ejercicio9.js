//Declare variables
let numero = parseInt(prompt("Ingrese un número multiplicar: "));
let resultado = "";

//Process
for (let i = 1; i <= 10; i++) {
    resultado += `${numero} x ${i} = ${numero * i}\n`;
}
//Result
document.write(resultado);