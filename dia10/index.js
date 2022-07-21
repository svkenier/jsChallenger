// Escribir una función que tome una matriz de objetos como argumento
// Ordenar la matriz por propiedad b en orden ascendente
// Devuelve la matriz ordenada

function sortObjectsByProperty(arr) {
  return arr.sort((a, b) => a.b - b.b);
}
console.log(
  sortObjectsByProperty([
    { a: "5", b: "8" },
    { a: "9", b: "3" },
  ])
);

//comentario 1: use el metodo sort() para ordenar las propiedades b decada
//objeto de el Array
