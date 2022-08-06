//grita Gordon Ramsay. Grita y jura. Puede haber algo mal con él. De todos modos,
//se le dará una cadena de cuatro palabras. Tu trabajo es entregarlos al lenguaje 
//Gordon. Normas: Obviamente, las palabras deben ser mayúsculas, cada palabra debe
//terminar con '!!!!', cualquier letra 'a' o 'A' debe convertirse en '@', cualquier
// otra vocal debe convertirse en '*'.

const censorious = (str) => {
    const strMod = str.toUpperCase().replace(/[a]/gi, "@")
    const strSecondMod = strMod.replace(/[e,i,o,u]/ig, "*")
    const arr = strSecondMod.split(" ")
    return arr.map((item) => item + "!!!!").join(" ")
}

console.log(censorious("murcielago raro"))

/* 
comentaio 2: converti el a mayusculas con toUpperCase() despues usando 
regulares y el metodo replace() remplace las vocales por los simbolos
solicitados despues converti el string en un array de palabras y con 
un map() modifique cada elemento concatenado al final los de cada uno
los signos de esclamacion y lugo uni todo el array en un string separado
por espacios entre cada palabra y retorne el resultado  
*/