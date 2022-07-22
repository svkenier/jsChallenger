// Escribe una función que tome dos cadenas (a y b) como argumentos
// Crear un objeto que tenga una propiedad con la clave 'a' y un valor de 'b'
// Devolver el objeto

const objectMaker = (a, b) => {
    const obj = {};
    obj[a] = b;
    return obj;
  };
  console.log(objectMaker("color", "rojo"));
  
  //comentario 1: cree una una funcion cuyos 2 parametros fueran la clave y el 
  //valor de un objeto cree el ojeto vacio y le agrege la propiedad y el valor 
  //con la metodologia de los corchetes dado que la de el punto tiene retriciones
  //que no iniciar con un numero o con espacios y dado que usaremos parametros aun
  //no definidos se busca ser lo mas flexible posible para luego retornar el objeto