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
    const currentElement = input[i];
    if (currentElement === " ") {
      CountCurrentElement = CountCurrentElement + 1;
    }

  }
  return CountCurrentElement;
}

  export function aufgabe05 (args) {
    const input = args
    const result = []

    let CountCurrentElement = 0

    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      if (currentElement === currentElement.toUpperCase()){ 
        CountCurrentElement = CountCurrentElement + 1
      } 
      }

    }
    
    return result.join("")
  


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
    
  
export function  aufgabe11 (args) {
  const input = args
  const result = []

  if (input.length > 1) {
    return null
  }
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    return currentElement.charCodeAT(0)
  }
return null  
}
  







