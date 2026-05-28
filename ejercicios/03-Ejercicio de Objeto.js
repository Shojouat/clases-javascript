//Se crea el objeto cuentaBancaria
const cuentaBancaria = {
    titular: "Lucas",
    saldo: 1000,
    tipoCuenta: "Corriente",
    mostrarCuenta() {
        console.log(`El titular ${this.titular}, tiene un saldo ${this.saldo}, en su cuenta ${this.tipoCuenta}`)
    }
}
//Modificamos el saldo
cuentaBancaria.saldo = 1500
console.log(cuentaBancaria.saldo)

cuentaBancaria.mostrarCuenta()

//Agregamos una nueva propiedad
cuentaBancaria.moneda = "Guaranies"
console.log(cuentaBancaria.moneda)
//Creamos una copia de la cuenta
const copiaCuenta = { ...cuentaBancaria }
copiaCuenta.titular = "Alexia"
copiaCuenta.saldo = 2000
console.log(copiaCuenta)
console.log(cuentaBancaria)

Object.freeze(cuentaBancaria)
cuentaBancaria.saldo = 500
cuentaBancaria.nacionalidad = "Argentina"
console.log(cuentaBancaria)

const configuracionBanco = {
    nombreBanco: "Ueno",
    pais: "Paraguay"
}
Object.seal(configuracionBanco)
configuracionBanco.nombreBanco = "Sudameris"
configuracionBanco.saldo = 5000
console.log(configuracionBanco.nombreBanco)
console.log(configuracionBanco.saldo)
