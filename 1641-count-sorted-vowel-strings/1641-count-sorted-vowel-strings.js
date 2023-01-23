/**
 * @param {number} n
 * @return {number}
 */
const countVowelStrings = function(n) {
    // constraints 1
    if (n < 1 || n > 50 ) return false
    if (n === 1)  return 5 
    
    
    let result = 0
    const vowels = ["a","e","i","o","u"]
    
    const recursiveMatch = (num, lastVowel) => {
        // Finish making 
        if (num === n) return result++
        
        for (let i = vowels.indexOf(lastVowel); i < 5; i++) recursiveMatch(num + 1, vowels[i])    
        
    }
    

     recursiveMatch(1, "a")
     recursiveMatch(1, "e")
     recursiveMatch(1, "i")
     recursiveMatch(1, "o")
     recursiveMatch(1, "u")  
    
    return result
};