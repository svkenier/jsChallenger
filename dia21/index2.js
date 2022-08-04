//¡Por cada buena idea de kata parece haber bastantes malas!

//En este kata, debe verificar la matriz proporcionada (x) para obtener 
//buenas ideas 'buenas' y malas ideas 'malas'. Si hay una o dos buenas 
//ideas, devuelve '¡Publicar!', si hay más de 2 devuelve '¡Huelo una serie!'.
//Si no hay buenas ideas, como suele ser el caso, devuelva 'Fail!'.

const ideaFilter = (ideas) =>{
    const counter = ideas.filter((item)=> item == "good").length
    if(counter == 0){
       return "Fail!"
       }
    else if(counter < 3){
      return "Publish!"
    }
    else if(counter >= 3){
      return "I smell a series!"
    }
  }

  console.log(ideaFilter(['good', 'bad', 'bad', 'bad', 'bad']))
  
  /* 
  comentario 2: use un filter junto con un length para crear un contador de 
  resultados positivo y luego una condicional para retornar lo solicitado segun
  sea el caso

  */