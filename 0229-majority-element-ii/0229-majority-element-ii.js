/**
 * @param {number[]} nums
 * @return {number[]}
 */
const majorityElement = (nums) => {
    let tmpObj = {}
    const threshold = nums.length/3
    
    nums.forEach(item => {
        if(tmpObj[item]) tmpObj[item]++
        else tmpObj[item] = 1
    })

    return Object.entries(tmpObj)
        .filter((item) => item[1] > threshold)
        .map(item => Number(item[0]))
};