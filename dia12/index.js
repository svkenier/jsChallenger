// Escribir una función que tome un objeto con dos propiedades y una cadena
//como argumentos Debe devolver el valor de la propiedad con clave igual al
//valor de la cadena 

const showObjectWithSelectedProperty = (obj, key) => {
  return obj[key];
};
console.log(
  showObjectWithSelectedProperty(
    { country: "venezuela", city: "maracibo" },
    "city"
  )
);

//comentario 1: el objeto recibe una variable con el nombre de la propiedad que 
//que la funcion va a retornar  
