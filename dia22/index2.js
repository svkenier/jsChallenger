//Dada una cadena formada por las letras a, b y/o c, 
//cambia la posición de las letras a y b (cambia a por b y viceversa).
//Deje cualquier incidencia de c intacta. 
//Ejemplo: 'acb' --> 'bca' 'aabacbaa' --> 'bbabcabb'

const changeCharacters = (str)=>{
    const arr = str.split("")
    const clear = arr.map((item)=>item.replace("a","x"))
    const add = clear.map((item)=>item.replace("b","a"))
    return add.map((item)=>item.replace("x","b")).join("")
    }
    
    console.log(changeCharacters("aaaccbbb"))

    /* 
   cmentario 2: comverti el el string en un array de letras lugo use map() para 
   recorrer el array y remplazar todos los elementos "a" por una "x" despues y 
   se lo mismo con el array resultante para cambiar los elementos "b" por "a" y
   al final repeti el proceso para cambiar elentos "x" por "b" para luego aplicar
   un join() con un string vacio para unir todo en un estring sin espacios
    */