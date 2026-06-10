// Declaracion de una funcion
function saludar() {
    console.log("Hola, bienvenido a JavaScript!")
}
saludar() // Llamada a la funcion

// Funcion con parametros
function sumar(a, b) {// a y b son parametros
    return a + b
}
let resultado = sumar(5, 3) // 5 y 3 son argumentos
console.log("El resultado de la suma es: " + resultado)

// Funcion con parametros por defecto
function multiplicar(a, b = 2) { // b tiene un valor por defecto de 2
    return a * b
}
console.log("El resultado de la multiplicacion es: " + multiplicar(5)) // Solo se pasa el argumento a, b tomara el valor por defecto

// Funcion Expression: Una funcion anonima asignada a una variable
const dividir = function(a, b) {
    return a / b
}
console.log("El resultado de la division es: " + dividir(10, 2))

// Arrow Function: Sintaxis mas corta para funciones anonimas, solo se pueden utilizar con funciones expresion y una sola linea de codigo
const restar = (a, b) => a - b
console.log("El resultado de la resta es: " + restar(10, 5))

// Funciones con un solo parametro pueden omitir los parentesis
const cuadrado = x => x * x
console.log("El cuadrado de 4 es: " + cuadrado(4))

//Funciones que retornan valores: 
const sumar = function(a, b) {
    return a + b
}
let resultadoSuma = sumar(7, 3)
console.log("El resultado de la suma es: " + resultadoSuma)

const dividir = (a, b) => a / b // En una sola linea, el return es implicito pero si ponemos llaves, el return es obligatorio
let resultadoDivision = dividir(10, 2)
console.log("El resultado de la division es: " + resultadoDivision)
