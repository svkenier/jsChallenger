// Escribe una función que tome dos números (mínimo y máximo) como argumentos
// Devuelve una matriz de números en el rango min a max

const arraysRageMinAndMax = (min, max) => {
  const arr = [];
  for (let i = min; i <= max; i++) {
    arr.push(i);
  }
  return arr;
};
console.log(arraysRageMinAndMax(2, 8));

//comentario 1: se creo un bucle for() donde se indico que la variable i 
//iniciara con el valor del parametro min  y se fuera incrementando a un
//valor no mayor valor de max y en cada vuelta de el bucle incrementara 1 
//y se enpujaria dentro del array para luego ser retornado