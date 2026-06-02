// Arrays o Arreglos: son estructuras de datos que permiten almacenar múltiples valores en una sola variable.
// Se pueden acceder a los elementos de un array utilizando su índice (posición).
// Creación de un array
const frutas = ["manzana", "banana", "uva", "pera"] // Array con cuatro elementos
console.log(frutas) // Imprime el array completo
console.log(frutas[0]) // Accede al primer elemento del array (índice 0)
console.log(frutas[1]) // Accede al segundo elemento del array (índice 1)
console.log(frutas[2]) // Accede al tercer elemento del array (índice 2)
console.log(frutas[3]) // Accede al cuarto elemento del array (índice 3)
console.table(frutas) // Imprime el array en formato de tabla para una mejor visualización

// Manipulación de arrays: se pueden agregar, modificar o eliminar elementos de un array después de su creación
frutas.push("pera") // Agrega un nuevo elemento al final del array
console.log(frutas) // Imprime el array actualizado con el nuevo elemento

const nuevaFruta = ["...frutas", "mango"] // Crea un nuevo array combinando el array original con un nuevo elemento utilizando el operador de propagación
//El operador de propagacion no muta el array original, sino que crea un nuevo array con los elementos del array original y el nuevo elemento agregado al final.
//Se recomienda utilizar ese operador para usar React, ya que React se basa en la inmutabilidad de los datos para optimizar el rendimiento y evitar efectos secundarios no deseados.    
console.log(nuevaFruta) // Imprime el nuevo array combinado
console.table(nuevaFruta) // Imprime el nuevo array combinado en formato de tabla para una mejor visualización

const nuevaFruta2 = ["anana",  ...frutas] // Crea un nuevo array combinando un nuevo elemento con el array original utilizando el operador de propagación
//al inicio del array, el nuevo elemento se agrega al principio del array combinado.
console.log(nuevaFruta2) // Imprime el nuevo array combinado con el nuevo elemento al inicio
console.table(nuevaFruta2) // Imprime el nuevo array combinado en formato de tabla para una mejor visualización  

frutas[0] = "naranja" // Modifica el valor del primer elemento del array (índice 0)
console.log(frutas) // Imprime el array actualizado con el valor modificado

frutas.pop() // Elimina el último elemento del array
console.log(frutas) // Imprime el array actualizado sin el último elemento
frutas.shift() // Elimina el primer elemento del array
console.log(frutas) // Imprime el array actualizado sin el primer elemento

const frutas4 = frutas.filter((frutas) => frutas !== "banana") // Crea un nuevo array filtrando los elementos que no son "banana"
console.log(frutas4) // Imprime el nuevo array filtrado sin "banana"

const frutas5 = frutas.map(function (fruta) {
    if (fruta === "banana") {
        return "uva"
    } else {
        return fruta
    }
})
console.log(frutas5) // Imprime el nuevo array con "banana" reemplazada por "uva"

// Métodos útiles para manipular arrays
const numeros = [1, 2, 3, 4, 5]
console.log(numeros.length) // Imprime la longitud del array (número de elementos)

const frutas2 = ["manzana", "banana", "uva"]
const frutas3 = ["pera", "mango"]
const todasLasFrutas = [...frutas2, ...frutas3] // Combina los arrays utilizando el operador de propagación
console.log(todasLasFrutas) // Imprime el nuevo array combinado

const frutaBuscada = frutas2.find((fruta) => fruta === "banana") // Busca un elemento específico en el array
console.log(frutaBuscada) // Imprime la fruta encontrada o undefined si no se encuentra

//Destructuración de arrays: permite extraer valores de un array y asignarlos a variables individuales
//Ejemplo 1
const [primeraFruta, segundaFruta, terceraFruta] = frutas2 // Extrae los primeros tres elementos del array y los asigna a variables individuales, segun su posición en el array
console.log(primeraFruta) // Imprime la primera fruta extraída segun su posición en el array
console.log(segundaFruta) // Imprime la segunda fruta extraída segun su posición en el array
//Ejemplo 2 - Mas usado
const terceraFruta2 = frutas2[2] // Extrae el tercer elemento del array utilizando su índice (índice 2)
console.log(terceraFruta2) // Imprime la tercera fruta extraída utilizando su índice
//Ejemplo 3
const [ , , terceraFruta3] = frutas2 // Extrae el tercer elemento del array utilizando la sintaxis de destructuración, dejando espacios vacíos para los elementos que no se desean extraer
console.log(terceraFruta3) // Imprime la tercera fruta extraída utilizando la sintaxis de destructuración

//Arrays con for: se pueden utilizar bucles for para iterar sobre los elementos de un array y realizar operaciones con ellos
for (let i = 0; i < frutas2.length; i++) { //consta de tres partes: la inicialización (let i = 0), la condición (i < frutas2.length) y el incremento (i++)
    console.log(frutas2[i]) // Imprime cada fruta del array utilizando su índice en el bucle for
}

//Arrays con forEach: se puede utilizar el método forEach para iterar sobre los elementos de un array de manera más concisa y no genera un nuevo array
frutas2.forEach((fruta) => {//consta de una función de callback que se ejecuta para cada elemento del array, donde "fruta" representa el elemento actual en cada iteración
    console.log(fruta) // Imprime cada fruta del array utilizando el método forEach
})

//Arrays con map: se puede utilizar el método map para crear un nuevo array a partir de los elementos de un array existente, aplicando una función a cada elemento
const frutasEnMayusculas = frutas2.map((fruta) => fruta.toUpperCase()) // Crea un nuevo array con las frutas en mayúsculas utilizando el método map
console.log(frutasEnMayusculas) // Imprime el nuevo array con las frutas en mayúsculas

//Arrays con for...of: se puede utilizar el bucle for...of para iterar sobre los elementos de un array de manera más sencilla y legible
for (const fruta of frutas2) { //consta de la palabra clave "for", seguida de una variable (fruta) que representa el elemento actual en cada iteración, la palabra clave "of" y el array que se desea iterar (frutas2)
    console.log(fruta) // Imprime cada fruta del array utilizando el bucle for...of
}