const carrito = [
    { nombre:'Laptop', precio: 1000 },
    { nombre:'Mouse', precio: 50},
    { nombre:'Teclado', precio: 80},
    { nombre:'Monitor', precio: 300}
]
carrito.forEach((productos) => {
    console.log(`Producto: ${productos.nombre} - Precio: ${productos.precio}`)
}) //En esta parte quiero que me recuerdes porque no uso this

const nombreProductos = carrito.map((productos) => productos.nombre)
console.log(nombreProductos)

const productosCaros = carrito.filter((productos) => productos.precio > 100)
console.log(productosCaros)

const productoEncontrado = carrito.find((producto) => producto.nombre === 'Teclado')
console.log(productoEncontrado)

let total = 0
carrito.forEach((producto) => {
    total = total + producto.precio
}
)
console.log(total)
