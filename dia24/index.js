//Se le dará una lista de cadenas. Debe ordenarlo alfabéticamente 
//(distingue entre mayúsculas y minúsculas y según los valores ASCII
//de los caracteres) y luego devolver el primer valor. El valor devuelto 
//debe ser una cadena y tener "***" entre cada una de sus letras. No debe 
//eliminar ni agregar elementos de/a la matriz.

const twoSort = (arr) => {
    const arrSort = arr.sort()
    const arrLetters = arrSort[0].split("")
    const result = arrLetters.map((item, index, array) =>
        index != array.length - 1 ? item + "***" : item)
    return result.join("")
}
console.log(twoSort(["casa", "perro", "avion"]))

/* 
comentario 1:ordene el array con un sort() converti el primer elemento en otro
array con un split() lo recorri con un map() y usando un operador ternario 
indique que si index era distinto a el ultimo elemento de el array le concatene
3 asteriscos (...) de lo contrario deje el item intacto y luego lo volvi un 
string sin espacioscon join("") para al final ser retornado

Nota solucion simple: arr.sort().join("***")  
*/