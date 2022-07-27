// Escribir una función que tome un objeto (a) como argumento
// Devuelve la suma de todos los valores de los objetos

const objectValueSum = (a) => {
  const arr = Object.entries(a).flat();
  return arr
    .filter((value, index) => index % 2 != 0)
    .reduce((a, b) => a + b, 0);
};
console.log(objectValueSum({ a: 1, b: 2, c: 3 }));

/* 
comentario 1: use el metodo object.entries() para convertir un objeto en
array con sub-arrays cada uno de dos posiciones que son la clave y valor
de cada elemento de el objeto, con el metodo flat() elimine los sub array 
retornando un solo array en el cual los elementos con indice inpar  eran 
la clave y los par el valor luego hice un filter() para retornar un array
con su indice  par  osea  solo  los valores y por ultimo le aplique el 
metodo reduce() para sumar todos los valores  
 */
