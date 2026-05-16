//Tipos de datos
// String o Cadenas de Texto: representa texto, se define entre comillas simples o dobles
let nombre = "Juan"
console.log(nombre)
console.log(typeof nombre)

// Number o Números: representa valores numéricos, pueden ser enteros o decimales
let edad = 30
let edad1 = 30.5
let edad2 = -5
console.log(edad)
console.log(typeof edad)
console.log(edad1)
console.log(typeof edad1)
console.log(edad2)
console.log(typeof edad2)

// BigInt: representa números enteros muy grandes, se define con la letra "n" al final del número
let numeroGrande = 9007199254740991n
let numeroGrande1 = BigInt(9007199254740991)
console.log(numeroGrande)
console.log(typeof numeroGrande)
console.log(numeroGrande1)
console.log(typeof numeroGrande1)

// Boolean o Booleanos: representa valores de verdad, pueden ser true (verdadero) o false (falso)
let esMayorDeEdad = true
let esMenorDeEdad = false
console.log(esMayorDeEdad)
console.log(typeof esMayorDeEdad)
console.log(esMenorDeEdad)
console.log(typeof esMenorDeEdad)

// Null: representa la ausencia de valor, se define con la palabra clave null
let valorNulo = null
console.log(valorNulo)
console.log(typeof valorNulo)

// Undefined: representa una variable que ha sido declarada pero no asignada, se define con la palabra clave undefined
let valorIndefinido
console.log(valorIndefinido)
console.log(typeof valorIndefinido)

// Symbol: representa un valor único e inmutable, se define con la función Symbol()
let simbolo1 = Symbol("simbolo")
let simbolo2 = Symbol("simbolo")
console.log(simbolo1)
console.log(typeof simbolo1)
console.log(simbolo2)
console.log(typeof simbolo2)
console.log(simbolo1 === simbolo2) // false, cada símbolo es único