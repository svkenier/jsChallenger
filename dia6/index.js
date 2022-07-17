// Escribe una función que tome una matriz (a) y un número (b) como argumentos
// Sumar todos los elementos de la matriz con un valor mayor que b
// Devuelve la suma

const sumOfMajors = (a, b) => {
  return a.filter((item) => item > b).reduce((acc, el) => acc + el, 0);
};

console.log(sumOfMajors([1, 2, 3, 4, 5, 6, 7], 2));

//comentario: tenia que sumar los numeros mayores a el valor de el
//segundo parametro de la funcion  use el metodo filter() para
//descartar los no cumplian la condicion u el metodo reduce()
//para sumar los elementos de el nuevo array
