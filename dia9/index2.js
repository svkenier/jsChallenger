// Escribir una función que tome un objeto con dos propiedades como argumento
// Debería devolver el valor de la propiedad con clave 'prop-2'
// Sugerencia: es posible que desee utilizar el acceso a la propiedad de
//corchetes

const displaySpecificPropertyOfAnObject = (obj) => {
  return obj["prop-2"];
};
console.log(
  displaySpecificPropertyOfAnObject({ "prop-2": "two", prop: "test" })
);

//comentario 2: uso de corchetes para acceder a una propiedad especifica
//de un objeto
