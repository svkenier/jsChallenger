// Escribir una función que tome una matriz (a) y un valor (b) como argumento
// La función debe limpiar a de todas las apariciones de b
// Devuelve la matriz filtrada

const cleanArrays = (a, b) => {
  return a.filter((item) => item !== b);
};

console.log(cleanArrays([1, 2, "2"], "2"));

//comentario: uso de el metodo filter() para limpiar un array de un 
//elemento especificado en el segundo argumento de funcion