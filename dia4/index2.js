// Escribe una función que tome una matriz (a) y un número (n) como argumentos
// Debería devolver los últimos n elementos de a

const cutArrays = (a, n) => {
  return a.splice(-n);
};

console.log(cutArrays([1, 2, 3, 4, 5], 2));

//comentario 2: uso de el metodo splice() para retornar un array con la 
//cantidad de elementos especificada en el segundo parametro de la 
//funcion empenzando por el final de el array