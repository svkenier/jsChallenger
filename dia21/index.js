//Simple, elimine los espacios de la cadena 
//y luego devuelva la cadena resultante.

const noSpace =(str)=>{
    return str.replace(/ /g, "")

}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))

/* 
comentario 1: use el metodo replace() para remplasar los espacios de un string 
por medio de una expresion regular por un estring vacio lo cual da el resultado 
esperado

*/