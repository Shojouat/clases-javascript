const jugadores = [ 'Lucas', 'Ana', 'Pedro', 'María', 'Carlos', 'Amo']
jugadores.forEach((name) => {
    console.log(name)
})

const jugadoresMayusculas = jugadores.map((name) => name.toUpperCase())
console.log(jugadoresMayusculas)

const jugadoresConA = jugadores.filter((name) => {
    return name.toLowerCase().includes('a')
})
console.log(jugadoresConA)

const jugadorEncontrado = jugadores.find(jugador => jugador === 'Pedro')
console.log(jugadorEncontrado)

console.log(jugadores.length)
