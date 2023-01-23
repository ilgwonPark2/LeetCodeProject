/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// const groupAnagrams = (strs) => {
//     const checkAnagram = (word, comparingWord) => {
//         const arrangedWord = word.split("").sort().join("")
//         const arrangedComparingWord = comparingWord.split("").sort().join("")
//         return arrangedWord === arrangedComparingWord
//     }
    
//     return strs.reduce((acc,  cur) => {
//         let tmp = acc
//         if (acc.length === 0) {
//             tmp.push([cur])
//         } else {
            
//             Loop1: for (let i = 0; i < tmp.length; i++) {
//                 const isAnagram = checkAnagram(tmp[i][0], cur)
//                 if (isAnagram) {
//                     tmp[i].push(cur)
//                     break Loop1
//                 } else if (i === tmp.length -1) {
//                     tmp.push([cur])
//                     break Loop1
//                 }
//             }
//         }
//         return tmp
//     }, [])
    
//     // return answer
    
// };

const groupAnagrams = (strs) => {
    let map = new Map();
    
    for (let s of strs){
        let tmp = s.split('').sort().join('')
        if (map.has(tmp)) map.get(tmp).push(s)
        else map.set(tmp,[s])
    }
    

    return [...map.values()]

};