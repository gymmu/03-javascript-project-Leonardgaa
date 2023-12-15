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
    // wenn das erste oder letzte Element ein Leerzeichen ist, wird das count um eins vermindert
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i];
  
      if (currentElement === " " && input[i-1] !== " ") {
        count++
        // wenn das Element ein Leerzeichen ist, und das vorherige nicht ein Leerzeichen ist, wird der count um eins erhöht
      }
    }
    return count;
  }



 
export function aufgabe05 (args) {
  const input = args
  
  for (let i = 0; i < input.length; i++) {
    const currentAscii = input[i].charCodeAt(0)
    // Das Zeichen wird in einen Ascii-Wert umgewandelt
   
    if (65 <= currentAscii && currentAscii <=90) return true
    //Wenn das Zeichen einen Ascii-Wert zwischen 65 und 90 besitzt, wird true zurückgegeben
    
  }
return false
} 

export function aufgabe06(args) {
  const input = args

  if (input.length <= 0) return false
  // Wenn die Eingabe leer ist, wird false zurückgegeben
  
  for (let i = 0; i < input.length; i++) {
    const ascii = input[i].charCodeAt(0)
    // Das Zeichen wird in einen Ascii-Wert verarbeitet

    if(0 <= ascii && ascii <=31) return true
    else if (33 <= ascii && ascii <= 47) return true
    else if (58 <= ascii && ascii <= 64) return true
    else if (91 <= ascii && ascii <= 96) return true
    else if (123 <= ascii && ascii <= 127) return true
    //Wenn das Ascii-Wert zwischen 0 und 31, 33 und 47, 58 und 64, 91 und 96, 123 und 127 besitzt, wird true zurückgegeben
  
  }
  return false
}
  
    
export function aufgabe07 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
      if(currentElement === "u")  { //Wenn das Element 'u' ist und die darauffolgenden Element n und d sind wird true zurückgegeben
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
        result.push(3)  // Das Element 'e' werden mit 3 ersetzt                                                         
      } else {                                                 
        result.push(currentElement) // Die anderen Elemente werden nicht ersetzt
      }
    }
    return result.join("")
  }

  export function  aufgabe09 (args) {
    const input = args
    const result = []
    let len = 0 // Zahl der Elemente
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      len++ // zähle Elemente
    }
    if (len === 6)  {
      return true // Wenn die Anzahl der Elemente 6 ist, wird true zurückgegeben
    }
    return false
    }
   
export function aufgabe10 (args) {
   const input = args
  
   if(input.length !== 7) return false // Wenn die Anzahl der Elemente nicht 7 ist, wird false übergegeben
   if(input[0] !== "#") return false// Wenn das erste Element nicht # ist, wird false zurückgegeben
   for (let i = 1; i < input.length; i++) {
     const currentElement = input[i]
     const ascii = currentElement.charCodeAt(0) // Das aktuelle Element wird in einen Ascii code verwandelt
   
    if(48 <= ascii && ascii <=57) { // Wenn der Ascii code zwischen 48 und 57 ist, wird true zurückgegeben
         
     } else if (65 <= ascii && ascii <= 70) {// Wenn der Ascii code zwischen 65 und 70 ist, wird true zurückgegeben
          
     } else {
       return false // Wenn der Ascii code nicht zwischen 48 und 57 oder 65 und 70 ist, wird false zurückgegeben
     }
   }
    
   return true
}
  
export function  aufgabe11 (args) {
  const input = args

  if(input.length !== 1) return null // Wenn die Länge der Elemente nicht 1 ist, wird null zurückgegeben
    return input[0].charCodeAt(0)// das erste Element wird in einen Asciicode verwandelt
  }

  export function aufgabe12 (args) {
    const input = args
    const result = []
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      if(currentElement == "e"){
        return i// Wenn das Element 'e' ist, wird der Index zurückgegeben
      }
    }
    return -1
  }

  export function aufgabe13 (args) {
    const input = args
    let posE = -1//Die Postionen des 'e's ist -1
    for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
      if(currentElement === "e") {
        posE = i//Wenn das aktuelle Element ein 'e' ist, ist seine Position der Index
      }
    }
    return posE // Die Position des 'E's wird zurückgegeben
   }

   export function aufgabe14 (args) {
    const input = args
    let Count = 0
    let posE= -1 
    for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
  
  
  
      if(currentElement=== "e"){
      Count++ // Wenn das aktuelle Element ein e ist, erhöhe den Counter
        if (Count === 3) {
        return i// Wenn der Counter 3 erreicht hat, wird der Index zurückgegeben
        }
      }
    } 
    return posE
  }

  export function aufgabe15(args) {
    const input = args
    const result = []
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      if (currentElement === " ") {
      break// Wenn das aktuelle Element ein ' ' ist, wird der output widergegeben
      }
        else {
          result.push(currentElement)
          // ansonsten gebe das aktuelle Element zurück
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
        readText = false// Wenn das aktuelle Element ein '$' ist und readText nicht false ist, wird readText auf false gesetzt
      } else {
        if (readText === true) {
          result1.push(currentElement)// Wenn das aktuelle Element ein '$' ist und readText nicht false ist, wird readText auf false gesetzt
        }
        else if (readText === false) {
          result2.push(currentElement)// Wenn das aktuelle Element ein '$' ist und readText nicht false ist, wird readText auf false gesetzt
        }
      }
    }
    if (result2.join("") !== "") {// Wenn das 2. Resultat nicht der input ist, gebe das 1. und das 2. Resultat zurück
    return result1.join("") + "," + result2.join("")
    } else {
      return result1.join("")
    }
  }
  
  export function aufgabe17 (args) {
    const input = args
    const result = []
    let countDot = 0
    let list1 = []// Variable für 1. Liste
    let list2 = []// Variable für 2. Liste
    let list3 = []// Variable für 3. Liste
    
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      if (currentElement === ".") {
        countDotcurrentElement = countDotcurrentElement +1// Wenn das aktuelle Element ein '.' ist, erhöhe den CountDot um 1
      }
      else if(countDot === 0) {
        list1.push(currentElement)// Wenn das CountDot 0 ist, gebe das aktuelle Element in die 1. Liste ein
      }
      else if(countDot === 1) {
        list2.push(currentElement)// Wenn das CountDot 1 ist, gebe das aktuelle Element in die 2. Liste ein
      }
      else if(countDot === 2) {
        list3.push(currentElement)// Wenn das CountDot 2 ist, gebe das aktuelle Element in die 3. Liste ein
      }
        
    }
    return list1.join("") + list2.join("") + list3.join("")// Die 1. , 2. und 3. Liste werden hintereinander zurückgegebenen
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
        inputName.push(currentElement)// 
      }
      else if (readText === false) {
        inputAge.push(currentElement)// 
      }
    }
  }
  if (inputName.join("") !== "" && inputAge.join("") !== "") return "Sie heissen " + inputName.join("") + " und sind " + inputAge.join("") + " Jahre alt"
  if (inputName.join("") == "" && inputAge.join("") !== "") return "Sie heissen" + inputName.join("") + " und sind " + inputAge.join("") + " Jahre alt"
  if (inputName.join("") !== "" && inputAge.join("") == "") return "Sie heissen " + inputName.join("") + " und sind " + inputAge.join("") + "Jahre alt"
  if (inputName.join("") == "" && inputAge.join("") == "") return "Sie heissen" + inputName.join("") + " und sind " + inputAge.join("") + "Jahre alt" 
  // Umgeht einen Fehler, wenn die Eingabe leer ist

}
export function aufgabe19 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
     result.push(currentElement)
     result.push(currentElement)// Das aktuelle Element wird zweimal zurückgegeben
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
        return true// Wenn das Element nach einem Punkt ein Leerzeichen ist, wird true zurückgegeben
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
      condition = true// Wenn das aktuelle Element ein k ist, ist die Bedingung true
    }
    
    if (condition === true) {
      result.push(currentElement)// Wenn die Bedingung true ist, gebe das aktuelle Element zurück
    } else {
      result.push("_")// Wenn die Bedingung nicht true ist, gebe ein "_" zurück
    }
  }
  return result.join("")
}


export function aufgabe23 (args) {
  const input = args
  const result = []
  const firstElement = input[0]
  result.push(firstElement)// Das erstes Element wird hinzugefügt
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    result.push(currentElement)
  }
  result.push(firstElement)//Das erste Element wird nochmal hinzugefügt
  return result.join("")
}

export function aufgabe24 (args) {
  const input = args
  const result = []
  if (input.length === 1) return input
  const firstElement = input[0]
  const lastElement = input[input.length -1]

  result.push(lastElement)//Das letzte Element wird an den Anfang eingesetzt
  for (let i = 1; i < input.length -1; i++) {
    const currentElement = input[i]
    result.push(currentElement)
  }
  result.push(firstElement)//Das erste Element wird am Ende eingesetzt
  return result.join("")
}


export function aufgabe27 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    if (ascii === 48 <= ascii && ascii <= 57) {
      return true//Wenn der Ascii-Wert zwischen 48 und 57 ist, wird true zurückgegeben
    }
  }
  return false
}

export function bubbleSort(args) {
  const input = args
  let result = []
const list = input.split("") // so wird der Text in eine Liste umgewandelt
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
result = list.join("")// Die Liste wird wieder in einen Text umgewandelt
  return result
}

 