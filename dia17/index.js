// Escribir una función que tome una matriz (arr) y un valor (num) como argumentos 
// Guardar cada n-ésimo elemento en una nueva matriz 
// Devuelve la nueva matriz

function getEveryNthElementOfArray (arr, num){
return arr.filter((_,index)=> {
    console.log("mi numero es:",num)
    console.log("mi indice es:", index)
    console.log("resultado del resto:",index%num)
    console.log("lo compaara con:",num-1)
    return index%num === num -1 });
}

console.log(getEveryNthElementOfArray([1,2,3,4,5,6,7,8],4))

/*
 comentario 1: se  filtro el aaray por el indice luego se comprobo que el reciduo 
 de la division de el valor de index en cada iteracion por el numero introdicido 
 en el segundo parametro fueran estrictamente iguales a el valor de mum -1 y se 
 regreso un array con los elementos que cumplian la condicion 
*/