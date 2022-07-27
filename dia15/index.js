// Escribe una función que tome una matriz de objetos y una cadena como argumentos 
// Agrega una propiedad con clave 'continente' y valor igual a la cadena a cada uno 
//de los objetos  Devuelve la nueva matriz de objetos 
// Consejo: trate de no mutar la matriz original

const addPropertyObject = (arr, str) => {
    arr.map((item) => item["continent"] = str)
    return arr
}
console.log(addPropertyObject([{ city: 'Tokyo', country: 'Japan' },
{ city: 'Bangkok', country: 'Thailand' }], "asia"))

/*
 comentario 1: realice el mapeo de un array de objetos y acada elemento 
 de una nueva propiedad con un valor igual al string que solicita el 
 segundo parametro de la funcion
 */


