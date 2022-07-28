// Escribir una función que tome un objeto como argumento 
// Debería devolver un objeto con todas las propiedades del objeto original 
// excepto por la propiedad con clave 'b'

const removePropertyobject = (obj) => {
    delete obj.b
    return obj
}
console.log(removePropertyobject({ a: 1, b: 7, c: 3 }))

/* 
comentario 1: uso de delete mas las selecion de la propiedad por metodologia 
de punto para eliminar la propiedad
*/