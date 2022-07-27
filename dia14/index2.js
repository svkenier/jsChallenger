// Escribir una función que tome un objeto (a) y una cadena (b) como argumento 
// Devuelve verdadero si el objeto tiene una propiedad con la clave 'b' 
// Devuelve falso en caso contrario  Consejo: el caso de prueba 3 es 
//un poco complicado porque el valor de la propiedad 'z' no está definido 
// Pero la propiedad en sí existe


const ssss = (a, b) => {
    const arr = Object.keys(a)
    return arr.includes(b)
};

console.log(ssss({ a: 1, b: 2, c: 3 }, "a"))

/* 
comentario 2: use el Object.keys() para generar un array con todas las claves 
de el objeto y el metodo includes() para verifica si b esya entre las claves 
de ser asi retorne true si no lo encuentra retorna false
*/