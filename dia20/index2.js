//Dada una matriz bidimensional de enteros, devuelva la 
//versión aplanada de la matriz con todos los enteros en 
//orden ordenado (ascendente).

const flattenAndSort = (array) => {
    const result = array.flat(Infinity)
     return result.sort((a,b)=>a-b)
   }
   
   console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]))

   /* 
   comentario 2: use el metodo flat() pasando le un valor unumerico infinito
   para que sin importar cuantos sub-arrays tenga la matreiz principal simpre 
   quede 1 y ordene los elemento con el metodo sort() y retorne el resultado  
   */