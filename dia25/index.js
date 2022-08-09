//devuelve el número (recuento) de vocales en la cadena dada.
//Consideraremos a, e, i, o, u como vocales para este Kata 
//(pero no y). La cadena de entrada solo constará de letras
//minúsculasy/o espacios.

function getCount(str) {
   const regEX = /[a,e,i,o,u]/ig
    return str.replace(regEX,"*").split("").filter((item)=> item === "*" ).length
  }

  console.log(getCount("abracadabra"))

  /* 
  use una exprecion regular junto con replace() para cmbiar todas las vocales por 
  asteriscos (*) lo volvi una matriz de caracteres usando un split("") para luego
  filtrar en oto array los asteriscos (*) y asi retornar la logitud de esa matriz
  con un length 
  */