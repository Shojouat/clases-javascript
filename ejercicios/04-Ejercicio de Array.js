const videojuegos = [
    { nombre: "Minecraft", genero: "Sandbox", horas: 500 },
    { nombre: "Counter Strike", genero: "Shooter", horas: 300 },
    { nombre: "Stardew Valley", genero: "Simulación", horas: 150 },
    { nombre: "Terraria", genero: "Sandbox", horas: 250 }
]

videojuegos.forEach((juego) => {
    console.log(`${ juego.nombre } - ${ juego.genero } - ${ juego.horas } horas`)
})

const nombreVideojuegos = videojuegos.map((juego) => juego.nombre)
console.log(nombreVideojuegos)

const juegosSandbox = videojuegos.filter((juego) => juego.genero === 'Sandbox')
console.log(juegosSandbox)

const juegoEncontrado = videojuegos.find((juego) => juego.nombre === 'Terraria')
console.log(juegoEncontrado)

const totalHoras = videojuegos.reduce(
    (acumulador, juego) => acumulador + juego.horas, 
    0
)
console.log(totalHoras)

const videojuegosMayusculas = videojuegos.map((juegos) => juegos.nombre.toUpperCase())
console.log(videojuegosMayusculas)