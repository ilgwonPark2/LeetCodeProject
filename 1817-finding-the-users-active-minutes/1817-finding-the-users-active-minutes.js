/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function(logs, k) {
    let result = Array(k).fill(0)
    
    let uam = logs.reduce((acc, cur) => {
        const [uId, uAction] = cur
        
        if (!acc[uId]) acc[uId] = new Set([uAction])
        else acc[uId].add(uAction)
        return acc
    }, {})
    
    
    Object.values(uam).forEach(uamItem => {
        uniqSize = uamItem.size
        result[uniqSize-1]++
    })
    
    return result
};


