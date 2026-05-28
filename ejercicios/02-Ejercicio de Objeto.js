//Creamos el objeto inventario
const inventario = {
    personaje: "Alexia",
    oro: 100,
    equipamiento: {
        arma: "Espada",
        armadura: "Cuero",
        accesorio: "Anillos"
    },
        //Agregamos el metodo para ver nuestro inventario
    mostrarInventario() {
            console.log(`El personaje ${this.personaje} tiene ${this.oro} de oro.
                Equipamiento:
                - Arma: ${this.equipamiento.arma}
                - Armadura: ${this.equipamiento.armadura}
                - Accesorio: ${this.equipamiento.accesorio}`)}
}
//modificamos el valor del oro
inventario.oro = 50
//modificamos el arma dentro del equipamiento
inventario.equipamiento.arma = "Dagas"
//Desestrucuramos personaje y oro
const { personaje: personajeInicial, oro: oroInicial } = inventario
console.log(personajeInicial)
console.log(oroInicial)
//Desestructuramos los objetos de equipamiento
const { equipamiento: { arma, armadura, accesorio } } = inventario
console.log(arma)
console.log(armadura)
console.log(accesorio)
//Mostramos el metodo
inventario.mostrarInventario()
