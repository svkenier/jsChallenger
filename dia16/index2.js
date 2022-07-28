// Escribe una función que tome dos objetos como argumentos 
// Desafortunadamente, la propiedad 'b' en el segundo objeto 
//tiene la clave incorrecta 
// Debería llamarse 'd' en su lugar 
// Combinar ambos objetos y corregir el nombre de propiedad incorrecto 
// Devuelve el objeto resultante 
// Debe tener las propiedades 'a', 'b', 'c', 'd' y 'e'

const renameAndMargeObject = (x, y) => {
    y["d"] = y["b"]
    delete y.b
    const result = { ...x, ...y }
    return result
}
console.log(renameAndMargeObject({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }))

/* 
comentario 2: le cambio el nombre a la propiedad de el segundo objeto por simple
asignacion luego uso delete mas la selecion de propiedad por medio de el punto para
eleminar con el nombre anterior depues combino los objetos con el operador de 
propagacion y retorno el resultado
*/