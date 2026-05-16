// Objetos: son estructuras de datos que permiten almacenar información relacionada en forma de pares clave-valor.
// Un objeto puede contener propiedades (datos) y métodos (funciones) que operan sobre esos datos.
// Creación de un objeto literal
const persona = {
    nombre: "Ana", // Propiedad: clave "nombre" con valor "Ana"
    edad: 30, // Propiedad: clave "edad" con valor 30
    profesion: "Desarrolladora", // Propiedad: clave "profesion" con valor "Desarrolladora"
    saludar: function() {
        console.log(`Hola, mi nombre es ${this.nombre} y soy ${this.profesion}.`);
    } // Método: función que utiliza las propiedades del objeto para saludar
}
console.log(persona) // Imprime el objeto completo
console.log(persona.nombre) // Accede a la propiedad "nombre" del objeto
persona.saludar() // Llama al método "saludar" del objeto

// Desestructuración de objetos: permite extraer propiedades de un objeto y asignarlas a variables de forma más sencilla
const { nombre, edad } = persona // Extrae las propiedades "nombre" y "edad" del objeto "persona" y las asigna a variables
console.log(nombre) // Imprime el valor de la variable "nombre"
console.log(edad) // Imprime el valor de la variable "edad"

// Object Literal Enhancement: permite crear objetos de forma más concisa cuando las claves y los valores tienen el mismo nombre
const nombre2 = "Carlos"
const edad2 = 25
const profesion2 = "Diseñador"
const persona2 = { nombre2, edad2, profesion2 } // Crea un objeto utilizando las variables como claves y valores
console.log(persona2) // Imprime el nuevo objeto creado con Object Literal Enhancement 

// Manipulación de objetos: se pueden agregar, modificar o eliminar propiedades y métodos de un objeto después de su creación
persona.apellido = "García" // Agrega una nueva propiedad "apellido" al objeto "persona"
console.log(persona) // Imprime el objeto actualizado con la nueva propiedad

persona.edad = 31 // Modifica el valor de la propiedad "edad" del objeto "persona"
console.log(persona) // Imprime el objeto actualizado con la edad modificada

delete persona.profesion // Elimina la propiedad "profesion" del objeto "persona"
console.log(persona) // Imprime el objeto actualizado sin la propiedad "profesion"

Object.freeze(persona) // Congela el objeto "persona", impidiendo cualquier modificación futura
persona.nombre = "María" // Intenta modificar la propiedad "nombre" del objeto congelado (no tendrá efecto)
console.log(persona) // Imprime el objeto congelado, sin cambios en la propiedad "nombre"

Object.seal(persona2) // Sella el objeto "persona2", permitiendo modificar propiedades existentes pero no agregar nuevas
persona2.edad2 = 26 // Modifica el valor de la propiedad "edad2" del objeto "persona2"
console.log(persona2) // Imprime el objeto actualizado con la edad modificada
persona2.nacionalidad = "Mexicana" // Intenta agregar una nueva propiedad "nacionalidad" al objeto sellado (no tendrá efecto)
console.log(persona2) // Imprime el objeto sellado, sin la nueva propiedad "nacionalidad"

//Destructuracion de objetos: permite extraer propiedades de un objeto y asignarlas a variables de forma más sencilla
const { nombre: nombre3, edad: edad3 } = persona // Extrae las propiedades "nombre" y "edad" del objeto "persona" y las asigna a variables con nombres diferentes
console.log(nombre3) // Imprime el valor de la variable "nombre3"
console.log(edad3) // Imprime el valor de la variable "edad3"

//Destructuración de objetos anidados: permite extraer propiedades de objetos que están dentro de otros objetos
const empresa = {
    nombre: "Tech Solutions",
    ubicacion: "Ciudad de México",
    empleados: {
        gerente: "Laura",
        desarrollador: "Miguel"
    }
}
const { empleados: { gerente, desarrollador } } = empresa // Extrae las propiedades "gerente" y "desarrollador" del objeto anidado "empleados" dentro del objeto "empresa"
console.log(gerente) // Imprime el valor de la variable "gerente"
console.log(desarrollador) // Imprime el valor de la variable "desarrollador"

//Unir objetos: se pueden combinar dos o más objetos utilizando el operador de propagación (spread operator) o el método Object.assign()
const objeto1 = { a: 1, b: 2 }
const objeto2 = { c: 3, d: 4 }
const objetoUnido = { ...objeto1, ...objeto2 } // Combina los objetos utilizando el operador de propagación
console.log(objetoUnido) // Imprime el nuevo objeto combinado

const objetoUnido2 = Object.assign({}, objeto1, objeto2) // Combina los objetos utilizando el método Object.assign()
console.log(objetoUnido2) // Imprime el nuevo objeto combinado creado con Object.assign()
