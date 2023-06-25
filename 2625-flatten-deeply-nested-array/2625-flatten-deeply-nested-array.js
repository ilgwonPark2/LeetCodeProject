/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
const flat = function (arr, n) {
    // return if n equals zero;
    if (n === 0) return arr;

    let result = []
    const recursiveFunc = (target, count, result) => {
        // console.log('++++',target, count, n);
        
        if (count - 1 === n) return target;
        
        target.forEach(targetItem => {
            if (Array.isArray(targetItem)) {
                const recursiveResult = recursiveFunc(targetItem, count + 1, result);
                if (recursiveResult !== undefined) result.push(recursiveResult)
            } else {
                // console.log(targetItem)
                result.push(targetItem)
            }
        })
    
    }
    
    recursiveFunc(arr, 0, result)
    return result

};