/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    
    let calculatedTriangle = triangle.reduce((acc, itemList, listIdx) => {
    
        if (itemList.length === 1) return [itemList]

        let calculatedList = itemList.map((item, itemIdx)=> {
            if (itemIdx === 0 ) return item + acc[listIdx-1][itemIdx]
            if (itemIdx === itemList.length - 1) return item + acc[listIdx-1][itemIdx-1]
            return Math.min(acc[listIdx-1][itemIdx-1], acc[listIdx-1][itemIdx]) + item
        },)

        acc.push(calculatedList)
    
        return acc
    }, [])

    return Math.min(...calculatedTriangle[calculatedTriangle.length-1])
};