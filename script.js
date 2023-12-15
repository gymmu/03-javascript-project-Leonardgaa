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
  }

  
export function aufgabe04(args) {
  const input = args;
  const result = [];

  let CountCurrentElement = 1;

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === " ") {
      CountCurrentElement = CountCurrentElement + 1
    }

  }
  return CountCurrentElement
}



 
export function aufgabe05 (args) {
  const input = args
  
  for (let i = 0; i < input.length; i++) {
    const currentAscii = input[i].charCodeAt(0)
   
    if (65 <= currentAscii && currentAscii <=90) return true
    
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
    const currentElement = input[i]
    if (currentElement === " ") {
      if (input [i+ 1 ]=== ".")   {
        return true
      }
    } 
  }
  return false
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
const list = input.split("")// sorgt dafür das der Code in eine Liste umgewndelt wird, so können die Elemente sortiert werden
for (let i = 0; i < list.length - 1; i++) {
  const currentElement = list[i]
  const nextElement = list[i + 1]
  if (currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
    //Wenn die Anordnung der Elemente nicht korrekt ist, werden die Elemente vertauscht
    const tmp = list[i + 1]
    list[i + 1] = list[i]
    list[i] = tmp
    i = -1// es wird von worne überprüft, ob die Zeichen sortiert sind
  }
}
result = list.join("")
  return result
}

 