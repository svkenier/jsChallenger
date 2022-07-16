// Escribir una función que tome una matriz (a) como argumento
// Extraer los últimos 3 elementos de un
// Devuelve la matriz resultante

const extractLastThreeElements = (a) => {
  return a.splice(-3);
};

console.log(extractLastThreeElements([1, 2, 3, 4, 5, 6]));

//comentario: uso de el metodo splice() para extrae en un nuevo array los 
// tres ultimos elementos de un array