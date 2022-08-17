//Tarea Dada una matriz/lista [] de enteros, construya una matriz de productos 
//del mismo tamaño tal que prod[i] sea igual al producto de todos los elementos
//de Arr[] excepto Arr[i].
//Notas: El tamaño de la matriz/lista es al menos 2 . Los números de matriz/lista 
//serán solo positivos Podría ocurrir la repetición de números en la matriz/lista.

function productArray(numbers) {
    const result = []
    for (let i = 0; i < numbers.length; i++) {
        const arrFilter = numbers.filter((item) => item !== numbers[i])
        const res = arrFilter.reduce((a, b) => a * b, 1)
        result.push(res)
    }
    return result
}

console.log(productArray([4, 16, 10, 10, 56, 4]))

/* 
comentario 1: use un for() para recorrer el array de el parametro de la funcion
luego filtre todos los elementos que fueran distintos a [i] para despues aplicar
un reduce() al array resultante indicando que el valor que retorna el reduce() 
comiense en 1 para que no afecte la multiplicacion y introduje el resultado de 
el reduce() en un array vacio para luego retonarlo 
*/