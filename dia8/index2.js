// Escribe una función que tome dos arreglos como argumentos
// Combinar ambas matrices y eliminar valores duplicados
// Ordenar el resultado de la combinación en orden ascendente
// Devuelve la matriz resultante

const mergeCleanSortArrays = (a, b) => {
  const concatArr = [...a, ...b];
  const arr = [...new Set(concatArr)];
  return arr.sort((a, b) => a - b);
};

console.log(mergeCleanSortArrays([1, 2, 3], [3, 4, 5]));

//comentario 2: combine los dos arrays en uno con el operador de expasion ,
//elimine los elementos repetidos con el objeto set() y por ultimo lo ordene
//con el metodo sort()
