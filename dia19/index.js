// Escribe una función que tome dos arreglos (a y b) como argumentos 
// Crear un objeto que tenga propiedades con claves 'a' y valores 
//correspondientes 'b' 
// Devolver el objeto

const twoArrayInAObject = (a, b) => {
    return Object.fromEntries(a.map((value, index) => [value, b[index]]))

}

console.log(twoArrayInAObject(["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5]))

/* 
comentario 1: use el meto map() para meter cada elemento de array en sub array de 
2 posicione cuyo segundo elemnto es cada elemento contenido en el cada posicion de
el indice de la segunda matriz y luego con el metodo de la clase object fromEntries
() lo tranforme en un objeto que fue retornado

*/