// Template String y Concatenacion

const nombre = "Juan";
const apellido = "Perez";

// Concatenacion: Se utiliza el operador + para concatenar cadenas de texto.
const nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

// Template String: Se utilizan las comillas invertidas (``) para crear una cadena de texto y se pueden incluir variables 
// o expresiones dentro de la cadena utilizando la sintaxis ${}.
const nombreCompleto2 = `${nombre} ${apellido}`;
console.log(nombreCompleto2);

// Template String con funciones: Se pueden utilizar funciones dentro de las plantillas literales para generar contenido dinámico.
function getNombre() {
    return `${nombre} ${apellido}`;
}
console.log(getNombre());
