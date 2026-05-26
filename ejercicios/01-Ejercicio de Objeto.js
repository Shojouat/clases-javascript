//Se crea un Objeto denominado Personaje
const personaje = {
    nombre: "Alexia",
    vida: 100,
    nivel: 18,
    clase: "Bruja",
    mostrarInfo() {
        console.log(`El personaje ${this.nombre} es un ${this.clase} de nivel ${this.nivel} y tiene ${this.vida} de vida`)
    }
}
//Agregamos una nueva propiedad arma
personaje.arma = "Bastón"
//Modificamos la propiedad vida
personaje.vida = 50
//Usamos el metodo creado
personaje.mostrarInfo()
//Desestructuramos la propiedad nombre y clase
const { nombre: nombrePersonaje, clase: clasePersonaje } = personaje
console.log(nombrePersonaje)
console.log(clasePersonaje)
//Creamos una copia del objeto utilizando Spread Operator
const copiaPersonaje = { ...personaje }
//Modificamos el nombre del objeto copiado
copiaPersonaje.nombre = "Lucas"
//Imprimimos ambos nombre para verificar que ambos objetos conservan su nombre
console.log(copiaPersonaje.nombre)
console.log(personaje.nombre)
