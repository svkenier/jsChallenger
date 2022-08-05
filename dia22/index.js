//hacer una funcion que reciba un string como parametro y retonar un array
//con sub-arrays donde el primer elemento sea cada caracter de el string y
//y el segundo elemento se un numero igual a la cantida de veces que ese 
//caracter se repite en el string  


const orderedCount = (text) => {
    // Implement me!
    const splitStr = text.split('');
    const str = [...new Set(splitStr)];
    
    let resultArr = [];
    
    for (let i = 0; i <= str.length-1; i ++ ) {
      resultArr.push([str[i], splitStr.filter((item) => item === str[i]).length]);
    }
    
    return resultArr;
  }

  console.log(orderedCount("abracadabra"))

  /* 
  comentario 1: comverti el string de el parametro de la funcion en un array
  con el metodo split() luego elimine los elementos repetidos de ese array 
  con un set(),cree una variable con un array vacio luego use un for() para 
  recorrerlo y en cada iteracion introduje cada elemento array de elemntos
  unicos por medio de la variable i de el for() de igul forma en cada 
  iterracion le aplique filter a los elemento de el array de letras para
  saber si erran igual a cada elento de la variable i de el for() y retorne
  un numero que con la cantidad de elementos repetidos por medio de un length
  el cual se introdujo como segundo elemento de cada sub-array en cada interacion
   y por ultimo se retorna un array con sub-arrays
  */