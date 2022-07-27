// Escribe una función que tome un objeto (a) y un número (b) como argumentos 
// Multiplica todos los valores de 'a' por 'b' 
// Devuelve el objeto resultante

const multiplyAllObjectValuesByX = (a, b) => {
    for (let key in a) {
        a[key] *= b;
    }
    return a
}
console.log(multiplyAllObjectValuesByX({ a: "1", b: "2", c: "3" }, "2"))

/* 
comentario 2: use un for in para recorrer las propidades de el objeto y 
multiplique cada valor por el segundo parametro de la funcion
*/