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
    let input = args.replace(/[^a-zA-Z0-9 ]/g, "");
  //entfernt alle Sonderzeichen aus dem Text
    let count = 1;
    if (input.lastIndexOf(' ') == input.length - 1) count--
    if (input[0] == " ") count--
  
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i];
  
      if (currentElement === " " && input[i-1] !== " ") {
        count++
      }
    }
    return count;
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
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
      if(currentElement === "u")  {
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

  export function aufgabe15(args) {
    const input = args
    const result = []
    lastElement = input[input.length-1]
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      if (currentElement === " ") {
      break
      }
      else {
        result.push(currentElement)
      }
      if (lastElement === " "){
        break
      }
    }
    return result.join("")
  }

  export function aufgabe16 (args) {
    const input = args
    const result1 = []
    const result2 = []
    let readText = true
  
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      
      if (currentElement === "$" && readText !== false) {
        readText = false
      } else {
        if (readText === true) {
          result1.push(currentElement)
        }
        else if (readText === false) {
          result2.push(currentElement)
        }
      }
    }
    if (result2.join("") !== "") {
    return result1.join("") + "," + result2.join("")
    } else {
      return result1.join("")
    }
  }
  export function aufgabe17 (args) {
    const input = args
    const result = []
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      
    }
    return result.join("")
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

export function aufgabe21 (args) {
  const input = args
  const result = []
  
for (let i = 0; i < input.length; i++) {

  result.push(input[input.length - 1 - i])
  //Dreht den Text um und gibt ihn so wider. 
}

  return result.join("")
}

export function aufgabe22 (args) {
  const input = args
  const result = []
  let condition = false
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
    if (currentElement === "k") {
      condition = true
    }
    
    if (condition === true) {
      result.push(currentElement)
    } else {
      result.push("_")
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

export function bubbleSort(args) {
  const input = args
  let result = []
const list = input.split("") // Damit wandeln wir den Text in eine Liste um, das brauchen wir wenn wir Elemente vertauschen möchten.
for (let i = 0; i < list.length - 1; i++) {
  const currentElement = list[i]
  const nextElement = list[i + 1]
  if (currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
    // Reihenfolge stimmt nicht, Elemente müssen getauscht werden.
    const tmp = list[i + 1]
    list[i + 1] = list[i]
    list[i] = tmp
    i = -1 // starte von vorne wenn etwas vertauscht wurde.
  }
}
result = list.join("")
  return result
}

 