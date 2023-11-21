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

    let CountcurrentElement = 0

    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      if (currentElement === currentElement.toUpperCase()){ 
        CountcurrentElement = CountcurrentElement + 1
      } 
      }      
      return CountcurrentElement
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
  
  if (input.length !== 7) return false
  if (input[0] !== "#") return false
  for (let i = 1; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAT(0)

    if ( 48 <= ascii && ascii <= 57) {

    }
     else if ( 65 <= ascii && ascii <= 70){

     }
     else {
    return false
    }
    
  }
  return true
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
  







