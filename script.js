export function aufgabe01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
    if (currentElement === "e" || currentElement === "E") {
      // mache nichts
      }
      else 
      {
       result.push(currentElement)
      }
    
  }
  return result.join("") 

  }

  export function aufgabe02(args) {
    const input = args
    const result = []

    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      result.push(currentElement.toUpperCase())
      // schreibe den Text in Grossbuchstaben
    }
    
    return result.join("")
  }
  
  export function  aufgabe03(args) {
    const input = args
    const result = []

    let CountE = 0
    // das ist der Counter für das Element E

    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]

      if (currentElement === "e") {
        // zähle dieses e
        CountE = CountE + 1
      } else if (currentElement === "E") {
        //zähle auch dieses Element
        CountE = CountE +1 
      }
      
    }
    return CountE
    //Der output zeigt wie viele E`s im input auftauchen
  }

  
export function aufgabe04(args) {
  const input = args;
  const result = [];

  let CountCurrentElement = 1;

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === " ") {
      CountCurrentElement = CountCurrentElement + 1
      // Wenn das aktuelle Element ein Leerzeichen ist addiere 1 dazu
    }

  }
  return CountCurrentElement
}



 
export function aufgabe05 (args) {
  const input = args
  
  for (let i = 0; i < input.length; i++) {
    const currentAscii = input[i].charCodeAt(0)
   
    if (65 <= currentAscii && currentAscii <=90) return true
    //Wenn
    
  }
return false
} 

export function aufgabe06(args) {
  const input = args

  if (input.length <= 0) return false
  
  for (let i = 0; i < input.length; i++) {
    const ascii = input[i].charCodeAt(0)

    if(0 <= ascii && ascii <=31) return true
    else if (33 <= ascii && ascii <= 47) return true
    else if (58 <= ascii && ascii <= 64) return true
    else if (91 <= ascii && ascii <= 96) return true
    else if (123 <= ascii && ascii <= 127) return true
  
  }
  return false
}
  
    
export function aufgabe07 (args) {
  const input = args
  const result = []
  i
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
      if(currentElement === "u" || input[0] === "U")  {
        if (input[i + 1] === "n")   {
          if (input[i + 2] === "d")   {
            return true
          }
        }
      }
  }
  return false
}



export function aufgabe08(args) {
    const input = args        
    const result = []                     
  
  for (let i = 0; i < input.length; i++) {      
      const currentElement = input[i]        
      if (currentElement === "e") {   
        result.push(3)                                                           
      } else {                                                 
        result.push(currentElement)
      }
    }
    return result.join("")
  }

  export function  aufgabe09 (args) {
    const input = args
    const result = []
    let len = 0
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      len++
    }
    if (len === 6)  {
      return true
    }
    return false
    }
   
export function aufgabe10 (args) {
   const input = args
  
   if(input.length !== 7) return false
   if(input[0] !== "#") return false
   for (let i = 1; i < input.length; i++) {
     const currentElement = input[i]
     const ascii = currentElement.charCodeAt(0)
   
    if(48 <= ascii && ascii <=57) {
         
     } else if (65 <= ascii && ascii <= 70) {
          
     } else {
       return false
     }
   }
    
   return true
}
  
export function  aufgabe11 (args) {
  const input = args

  if(input.length !== 1) return null
    return input[0].charCodeAt(0)
  }

  export function aufgabe12 (args) {
    const input = args
    const result = []
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      if(currentElement == "e"){
        return i
      }
    }
    return -1
  }

  export function aufgabe13 (args) {
    const input = args
    let posE = -1
    for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
      if(currentElement === "e") {
        posE = i
      }
    }
    return posE
   }

   export function aufgabe14 (args) {
    const input = args
    let Count = 0
    let posE= -1 
    for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
  
  
  
      if(currentElement=== "e"){
      Count++
        if (Count === 3) {
        return i
        }
      }
    } 
    return posE
  }
  
  
export function aufgabe19 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
     result.push(currentElement)
     result.push(currentElement)
  }
  return result.join("")
}


export function aufgabe18 (args) {
  const input = args
  const inputName = []
  const inputAge = []
  let readText = true

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
    if (currentElement === " " && readText !== false) {
      readText = false
    } else {
      if (readText === true) {
        inputName.push(currentElement)
      }
      else if (readText === false) {
        inputAge.push(currentElement)
      }
    }
  }
  if (inputName.join("") !== "" && inputAge.join("") !== "") return "Sie heissen " + inputName.join("") + " und sind " + inputAge.join("") + " Jahre alt"
  if (inputName.join("") == "" && inputAge.join("") !== "") return "Sie heissen" + inputName.join("") + " und sind " + inputAge.join("") + " Jahre alt"
  if (inputName.join("") !== "" && inputAge.join("") == "") return "Sie heissen " + inputName.join("") + " und sind " + inputAge.join("") + "Jahre alt"
  if (inputName.join("") == "" && inputAge.join("") == "") return "Sie heissen" + inputName.join("") + " und sind " + inputAge.join("") + "Jahre alt"
}


export function aufgabe20 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === ".") {
      if (input [i+ 1 ]=== " ")   {
        return true
      }
    } 
  }
  return false
}

export function aufgabe22 (args) {
  const input = args
  const result = []
  const firstElement = " "
  const secondElement = "k"
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === " ") {
      result.push("secondElement")
    }
    else {
      result.push(currentElement)
    }
  }
  return result.join("")
}

export function aufgabe23 (args) {
  const input = args
  const result = []
  const firstElement = input[0]
  result.push(firstElement)
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    result.push(currentElement)
  }
  result.push(firstElement)
  return result.join("")
}

export function aufgabe24 (args) {
  const input = args
  const result = []
  if (input.length === 1) return input
  const firstElement = input[0]
  const lastElement = input[input.length -1]

  result.push(lastElement)
  for (let i = 1; i < input.length -1; i++) {
    const currentElement = input[i]
    result.push(currentElement)
  }
  result.push(firstElement)
  return result.join("")
}

export function aufgabe27 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    if (ascii === 48 <= ascii && ascii <= 57) {
      return true
    }
  }
  return false
}

 