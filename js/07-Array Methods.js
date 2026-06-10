const tecnologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
const numbers = [1, 2, 3, 4, 5]

// Metodo Filter: Crea un nuevo array con los elementos que cumplen una condicion
const nuevoArray = tecnologies.filter( (tech) => tech === 'HTML' ) // El nuevo array solo contendra el elemento 'HTML' que cumple la condicion del filtro
console.log(nuevoArray) // ['HTML']

const nuevoArray2 = tecnologies.filter(function(tech) { //usando una funcion tradicional
    if (tech === 'HTML') {
        return tech 
    }
})//Ambas formas son validas, la primera es mas corta y moderna, la segunda es mas tradicional
console.log(nuevoArray2) // ['HTML']

// Metodo Includes: Devuelve true si el array contiene un elemento especifico, de lo contrario devuelve false
const existe = tecnologies.includes('React') // Devuelve true porque 'React' esta en el array
console.log(existe) // true

const noExiste = tecnologies.includes('Vue') // Devuelve false porque 'Vue' no esta en el array
console.log(noExiste) // false

// Metodo Map: Crea un nuevo array con los resultados de la llamada a una funcion proporcionada aplicada a cada elemento del array original
const nuevoArray3 = numbers.map( (number) => number * 2 ) // El nuevo array contendra los numeros multiplicados por 2
console.log(nuevoArray3) // [2, 4, 6, 8, 10]

// Metodo Some: Devuelve true si al menos un elemento del array cumple con la condicion especificada, de lo contrario devuelve false
const existeMayorQue3 = numbers.some( (number) => number > 3 ) // Devuelve true porque hay numeros mayores que 3 en el array
console.log(existeMayorQue3) // true

const existeMayorQue5 = numbers.some( (number) => number > 5 ) // Devuelve false porque no hay numeros mayores que 5 en el array
console.log(existeMayorQue5) // false

// Metodo Every: Devuelve true si todos los elementos del array cumplen con la condicion especificada, de lo contrario devuelve false
const todosMayorQue0 = numbers.every( (number) => number > 0 ) // Devuelve true porque todos los numeros son mayores que 0
console.log(todosMayorQue0) // true

const todosMayorQue3 = numbers.every( (number) => number > 3 ) // Devuelve false porque no todos los numeros son mayores que 3
console.log(todosMayorQue3) // false

// Metodo find: Devuelve el primer elemento del array que cumple con la condicion especificada, de lo contrario devuelve undefined
const primerMayorQue3 = numbers.find( (number) => number > 3 ) // Devuelve el primer numero mayor que 3, que es 4
console.log(primerMayorQue3) // 4

const primerMayorQue5 = numbers.find( (number) => number > 5 ) // Devuelve undefined porque no hay numeros mayores que 5 en el array
console.log(primerMayorQue5) // undefined

// Metodo Reduce: Aplica una funcion a un acumulador y a cada valor del array (de izquierda a derecha) para reducirlo a un unico valor
const suma = numbers.reduce( (acumulador, number) => acumulador + number, 0 ) // El acumulador empieza en 0 y se le van sumando los numeros del array
console.log(suma) // 15

const producto = numbers.reduce( (acumulador, number) => acumulador * number, 1 ) // El acumulador empieza en 1 y se le van multiplicando los numeros del array
console.log(producto) // 120