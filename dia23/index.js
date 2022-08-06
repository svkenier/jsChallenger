//Escriba una función que pueda devolver el valor más pequeño de una matriz o el 
//índice de ese valor. El segundo parámetro de la función dirá si debe devolver el
//valor o el índice. Suponga que el primer parámetro siempre será una matriz con al
//menos 1 número y sin duplicados. Suponga que el segundo parámetro será una cadena
//que contenga uno de dos valores: 'valor' e 'índice'.

const findMinimumValueOrIndex = (arr, toReturn) => {
    toReturn.toLowerCase()
    if (toReturn == "value") {
        return Math.min(...arr)
    }
    else if (toReturn == "index") {
        const value = Math.min(...arr)
        return arr.indexOf(value)
    }
}

console.log(findMinimumValueOrIndex([1, 2, 3, 4, 5], "index"))

/* 
comentario 1: primero use toLowerCase() para  que string de indice o valor fuera 
siempre en minuscula y puse una condicion que dependiendo de el segundo parametro 
se mueste el indice o el valor luego use math.min() junto con el opreador de 
expancion para retornar el numero menor de el array eso en caso de que se requiera
el value y en caso de el index use el mismo metodo pero en conjunto con un indexOf
para retornar el indice de el numero menor
*/