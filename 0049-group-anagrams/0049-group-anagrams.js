/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const groupAnagrams = (strs) => {
    let map = new Map();
    
    for (let s of strs){
        let tmp = s.split('').sort().join('')
        if (map.has(tmp)) map.get(tmp).push(s)
        else map.set(tmp,[s])
    }

    return [...map.values()]

};