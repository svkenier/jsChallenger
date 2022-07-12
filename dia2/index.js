//hacer una funcion que retorne la cantidad de numeros negativos
//que hay dentro de un array

const countNegativeNumbers = (a) => {
  return a.filter((item) => item < 0).length;
 
};

console.log(countNegativeNumbers([1, 3, -5, -6, -8, 7]));

//comentario: una sencilla practica de el metodo filter():que retona 
//un array con los elementos que que cumplen sierta condicion en este
//caso que los numeros negaticos de el array y los y contamos elementos 
//de nuevo array con la propiedad length  