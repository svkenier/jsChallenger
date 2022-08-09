//Tome 2 cadenas s1 y s2 que incluyan solo letras de la a a la z.
// Devuelve una nueva cadena ordenada, la más larga posible, que 
//contiene letras distintas, cada una tomada solo una vez, 
//provenientes de s1 o s2.

function longest(str1, str2) {
    const arr = [...new Set(str1+str2)]
    return  arr.sort().join("")
   }
   
   console.log(longest("aretheyhere", "yestheyarehere"))

 /* 
 comentario 2: concatene los 2 string y  con el set() lo converti en un array 
 sin elementos repetidos y luego lo ordene usando con un sort() y use un join("")
 para unirlo de nuevo en un string sin espacios y retorne el resultado   
 */