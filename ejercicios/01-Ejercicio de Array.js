const frutas = ['manzana', 'banana', 'uva', 'pera']
frutas.push('mango')
console.log(frutas)

const frutas2 = ['anana', ...frutas]
console.log(frutas2)
console.log(frutas)

frutas.pop()
console.log(frutas)

const frutasSinBanana = frutas.filter((fruta) => fruta !== 'banana')
console.log(frutasSinBanana)

const frutasModificadas = frutas.map(fruta => fruta === 'uva' ? 'sandía' : fruta)
console.log(frutasModificadas) // este tuve que buscar en internet porque no me salia el ejercicio

const frutaBuscada = frutas.find((fruta) => fruta === 'pera')
console.log(frutaBuscada)
