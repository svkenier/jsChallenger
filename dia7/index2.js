// Escribir una función que tome una matriz como argumento
// Debería devolver verdadero si todos los elementos de la matriz son iguales
// Debería devolver falso de lo contrario

const detectsArraysEqualElements = (arr) => {
  const result = [...new Set(arr)];
  if (result.length === 1) {
    return true;
  } else {
    return false;
  }
};

console.log(detectsArraysEqualElements([1, 1, 1, 1]));

//comentario 2: use el objeto set() retornar un array con elementos unicos
//y la propiedad length para saber cuantos elementos tenia el array si todos
//son iguales la longitud de el array es 1 y gracias a un condicional retorna
//true y si hay elementos distintos en el array la longitud sera distinta a 1
// y retornara false
