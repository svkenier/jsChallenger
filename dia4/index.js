// Escribir una función que tome una matriz de números como argumento
// Debería devolver una matriz con los números ordenados en orden descendente

const sortArraysFalling = (arr) => {
  return arr.sort((a, b) => b - a);
};

console.log(sortArraysFalling([4, 5, 3, 8, 9, 1, 7, 6, 2]));


//comentario: uso de el metodo sort() para clasificar un array numerico de 
//forma decendente