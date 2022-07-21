// Escribe una función que tome una matriz con elementos arbitrarios y un número
//como argumentos
// Devuelve una nueva matriz, el primer elemento debe ser el mismo número dado
// o cero si el número es menor que 6
// Los otros elementos deben ser los elementos de la matriz original
// Intenta no mutar la matriz original

const insertVariantElementAtStart = (arr, num) => {
  if (num < 6) {
    arr.unshift(0);
    return arr;
  } else {
    arr.unshift(num);
    return arr;
  }
};
console.log(insertVariantElementAtStart([1,6,5,4],2));

//comentario 2: use un condicional para dependiendo de si se cumple la condicion
//o no insetar un elemento al frente de la matriz usando el metodo unshift() sin
//mutar algun otro elemnto de el array
