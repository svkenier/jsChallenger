// Escribir una función que tome una matriz de números como argumento
// Convierte la matriz en un objeto
// Debe tener una clave para cada valor único de la matriz
// El valor del objeto correspondiente debe ser el número de veces
//la clave ocurre dentro de la matriz

const counterElementArray = (a) => {
    let counter = 1
    const arrCounter = []

    a.sort((a,b)=>a-b)
    const one = [...new Set(a)]

    for (let i = 0; i < a.length; i++) {
        if (a[i + 1] === a[i]) {
            counter++
        }
        else {
            arrCounter.push(counter);
            counter = 1
        }
    }
    
    const result = 
    Object.fromEntries(one.map((value, index) => [value, arrCounter[index]]))

    return result
}

console.log(counterElementArray([1, 3, 3, 3, 5, 1, 3,100]))

/* 
comentario 1:comense creando una variable contador una constante array de contadores
 ordene el array de el parametro de la funcion con sort() luego use el objeto set()
para crear un array sin elementos repetidos tambien recorri el array array de el 
parametro de la funcion comparandolo el elmento sigiente con el actual y aumentado
la variable contador cada vez que la conparcion fuera cierta y de lo contrario 
guardaba elcontador en el array de contador y reiniciaba el contador onteniendo asi 
un array con de numeros equivalente a la cantidad de veces que se repite el numero 
de en la misma posicion de array retornado por el set() y use el meto map() para 
meter cada elemento de array en sub array de 2 posicione cuyo segundo elemnto es 
cada elemento contenido en el cada posicion de el indice de la segunda matriz y 
luego con el metodo de la clase object fromEntries () lo tranforme en un objeto 
que fue retornado
*/