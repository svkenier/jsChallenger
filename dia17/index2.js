// Escribir una función que tome una matriz de cadenas como argumento
// Agrupa esas cadenas por su primera letra
// Devuelve un objeto que contiene propiedades con claves que representan
//las primeras letras
// Los valores deben ser matrices de cadenas que contengan solo las cadenas
//correspondientes
// Por ejemplo, la matriz ['Alf', 'Alice', 'Ben'] debe transformarse en
// { a: ['Alfa', 'Alicia'], b: ['Ben']}

const groupArrayAlphabetically = (arr) => {
  const obj = {};
  arr.forEach((item,index) =>{
    console.log("iteracion:",index)
 console.log("añadiendo propiedades a mi objeto:",obj)
  return ( 
   obj[item[0].toLowerCase()] = arr.filter(ele => ( 
     ele[0].toLowerCase() === item[0].toLowerCase()
   ))
 )});
  return obj;
};

console.log(groupArrayAlphabetically(["avion", "beso", "ala"]));

/* 
comentario 2: se creo un objeto vacio para luego creer un forEach() para asi 
recorrer un array y asi introducir el primer valor de cada item de el array 
como key del objeto usando los corchetes se uso toLowerCase() para colocarlo
 en minuscula , se filtro el array con la condicion de el item primer caracter 
 de elemento item sea estrictamente igual al ele de el filter retornadndo un 
 array ya filtrado que se coloco como valor de el objeto dando como resultado 
 un objeto con key de una letra y valor un array filtrado por esa letra   
*/

