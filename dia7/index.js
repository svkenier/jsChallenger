// Escribir una función que tome una matriz de cadenas como argumento
// Devuelve la cadena más larga

const longestChain = (arr) => {
  const result = arr.sort((a, b) => b.length - a.length);
  return result[0];
};
console.log(longestChain(["html", "css", "javascript"]));

//comentario 1 : clasifique elementos de el array por su longitud con la
//propiedad length de forma decendente con el metodo sort() y luego retorne
// el primer elemento de el array
