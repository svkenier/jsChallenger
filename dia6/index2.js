// Escribir una función que tome una matriz de números como argumento
// Debería devolver el promedio de los números

const averageNumbers = (arr) => {
  const divider = arr.length;
  return arr.reduce((acc, el) => acc + el, 0) / divider;
};
console.log(averageNumbers([5,6,8,7,9,11]))

//comentario 2: uso de el metodo reduce() para sumar todos los elementos
//de un array y lugo se divide por su logitud para sacar el promedio de
// de el total de la suma
