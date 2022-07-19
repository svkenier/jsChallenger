// Escribir una función que tome argumentos en un número arbitrario de arreglos
// Debería devolver una matriz que contenga los valores de todas las matrices

const MergeAnArbitraryNumberOfArrays = (...arr) => {
  return arr.flat();
};

console.log(MergeAnArbitraryNumberOfArrays([2, , 4], [5, 7], [8, 9, 1]));

//comentrio 1: use el metodo flat() para retonar un nuevo array con los elementos
//de un conjunto de sub-array contenidad en una matriz principal, el metodo
//tambien elimina los espacios vacios de una matriz y use el operador de
//expansion para para darle un numero de parametros indefinidos la funcion
