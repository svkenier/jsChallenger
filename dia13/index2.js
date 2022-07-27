// Escribir una función que tome un objeto (a) y una cadena (b) como argumento
// Devuelve verdadero si el objeto tiene una propiedad con la clave 'b', pero
//solo si tiene un valor verdadero
// En otras palabras, no debe ser nulo, indefinido o falso
// Devuelve falso en caso contrario

const objectPropertyChecker = (a, b) => {
  return new Boolean(a[b]);
};
console.log(objectPropertyChecker({ a: 1, b: null, c: 3 }, "b"));

/* 
comentario 2: uso de la metodologia de corchetes para validar que la clave b 
exita en el objeto a y use contructor Boolean() para que en lugar de retornar 
el valor de b retone solo verdadero o falso y tambien retornara falso si el 
valor es nulo o indefinido
 */
