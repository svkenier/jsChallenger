// Escribir una función que tome una matriz (a) y un valor (n) como argumento
// Devuelve el n-ésimo elemento de 'a'

const locateItemByIndex = (a, n) => {
  return a[n - 1];
};

console.log(locateItemByIndex([1, 4, 8, 6, 5], 4));

//comentario: se retorna el elemento ubicado en la pocicion expresada en el 
//segundo parametro de la funcion se resta 1 para el conteo de indice sea 
//desde 1 y no desde 0