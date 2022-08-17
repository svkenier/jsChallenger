//En el criptoanálisis, los patrones de palabras pueden ser una herramienta útil 
//para descifrar cifrados simples. Un patrón de palabra es una descripción de los
//patrones de letras que aparecen en una palabra, donde a cada letra se le asigna 
//un código entero en orden de aparición. Entonces, a la primera letra se le 
//asigna el código 0, y a la segunda se le asigna 1 si es diferente a la primera
//letra o 0 en caso contrario, y así sucesivamente. Como ejemplo, la palabra "hola"
//se convertiría en "0.1.2.2.3". Para esta tarea, se ignora la distinción entre
//mayúsculas y minúsculas, por lo que "hola", "hola" y "hola" devolverán el mismo
//patrón de palabras. Su tarea es devolver el patrón de palabras para una palabra
//dada. Todas las palabras proporcionadas serán cadenas no vacías de caracteres
//alfabéticos únicamente, es decir, coincidirán con la expresión regular "[a-zA-Z]+".


const validatePangram = (stringToValidate) => {
    const unique = [...new Set(stringToValidate)]
    const obj = Object.assign({}, unique)
    let result = [];

    stringToValidate.split('').forEach((item) => {
        for (const property in obj) {
            if (obj[property] === item)
                result.push(property)
        }
    })
    return result.join('.')
}
console.log(validatePangram("hello"))

/* 
comentario 2: converti el estring de el parametro de la funcion en un array sin 
elementos duplicados con un set() y con object.assin() lo volvi un objetos para 
luego declarar una variable como un array vacio , y con un split() genere un array
con los caracteres de string de el parametro de la funcion para usar recorrelo con 
forEach()  y junto con for(in) y una codicional decimos que si la propiedad de el
objeto es estrictamente igual al item del forEach() con un push() empujamos la 
propiedad dentro de el array vacio anterior mente creado   
*/