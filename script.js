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

  export function  aufgabe04 (args) {
    const input = args
    const result = []
    
    let CountCurrentElement = 1 

    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      if (currentElement === " ") {
        CountCurrentElement = CountCurrentElement + 1
      }
      else {
        result.push(currentElement)
      }
    }
    return CountCurrentElement
  }


  







