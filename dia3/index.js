//hacer una funcion que reciba un array como parameto y retorne el 
//mismo array excluyendo los 3 primeros elementos 

const excludeFirstThree =(arr)=>{
    return arr.slice(3)
}

console.log(excludeFirstThree([1,2,3,4,5,6]))

//comentario: uso de el metodo slice() para excluir los tres primeros elementos
//de un array 