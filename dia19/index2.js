// Escribir una función que tome un objeto como argumento 
// Algunos de los valores de propiedad contienen cadenas vacías 
// Reemplazar cadenas vacías y cadenas que contienen solo espacios 
//en blanco con valores nulos // Devuelve el objeto resultante

const declaringNullValuesOfObjects = (obj) =>{
for(let key in obj){
    if(obj[key].trim() ===""){
        obj[key]=null
    }
}
return obj
}
console.log(declaringNullValuesOfObjects({a:"a b",b:"b",c:""}))

/* 
comentario 2: recorri el objeto con un for(in) le aplique el meto trim() para 
eliminar los espacios use una condisional para que si alguna propiedad de el 
objeto es igual a un strim vacio la cambia a null y retorne el objeto modificado
*/