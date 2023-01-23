/**
* @param {object} memoObj {string} pointer
* @return 
*/ 
// const combinationHelper = (, pointer) => {
//     if (pointer)
    
// } 

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {
    //
    if (digits.length === 0) return [];
    
    // digitMap
    const digitMap = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"],
    };
    
    // store all possible cases
    let answerCases = digitMap[digits[0]];
    
    // linear traversal to check
    for (let i = 1; i < digits.length; i++) {
        const currentNum = digits[i];
        
        const digitList = digitMap[digits[i]];
        const addedCases = digitList.map(digitItem => {
          return answerCases.map(answerItem => answerItem + digitItem)
        }).flat()
        
        answerCases = addedCases
        // combinationHelper(memo, currentNum);
    }
    
    return answerCases;
};