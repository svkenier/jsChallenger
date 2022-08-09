//Dada una lista de dígitos, devuelva el número más pequeño que podría 
//formarse a partir de estos dígitos, usando los dígitos solo una vez 
//(ignore los duplicados).

//Notas: Solo se pasarán enteros positivos a la función (> 0), no negativos ni ceros.


const minValue = (values) => {
    values.sort()
    const arr = [...new Set(values)]
    const result = arr.join("")
    return Number(result)
}
console.log(minValue([4, 7, 5, 7]))

/* 
comentario 2: ordene los valores de la matriz de el parametro con un sort()
elimine los valores duplicados con un set() lo converti en estrin con un join()
para luego volverlo un valor numerico con Number() y retornar el resultado
*/