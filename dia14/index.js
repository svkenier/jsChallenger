// Escribir una función que tome un objeto (a) como argumento 
// Devolver una matriz con todas las claves de objeto

const keyArrayMaker = (a) => {
  const arr = Object.entries(a).flat();
  return arr.filter((value, index) => index % 2 == 0);
};

console.log(keyArrayMaker({ a: 1, b: 2, c: 3 }))

/* 
comentario 1: use el metodo Object.entries(a) para convertir el objeto en un 
array con sub-arrays de dos posiciones una es la clave y la otra es el valor 
de cada elemento de el objeto use el meto flat() para eliminar los sub-arrays 
y retornar un solo array en el las posiciones de indice impar son las claves 
y las pares los valores y por ultimo filtre el array para retornar otro con 
solo los elementos de indice inpar ose las claves  
*/