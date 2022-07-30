// Escribir una función que tome un objeto como argumento 
// De alguna manera, las propiedades y claves del objeto se mezclaron 
// Intercambiar la clave del objeto Javascript con sus valores y devolver el objeto resultante

const swapPropertyObject =(obj)=>{

    const objResult ={}
    for(let key in obj){
        objResult[obj[key]]= key
        
    }   
    return objResult
}

console.log(swapPropertyObject({a:1,b:2,c:3}))
/* 

comentario 2: cree un objeto vacio y recorri el objeto de dodo por el parametro
 de la funcion con un for(in) y iguale la clave de el objeto vacia a la propiedad
de el objeto de el parametro y la propiedad de el objeto vacio a la key de de el
objero iteradoy luego retorne el ojeto resultante
*/