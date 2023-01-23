/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {    
    return points.sort((prev, next) => 
        (Math.pow(prev[0] - 0, 2) + Math.pow(prev[1] - 0, 2)) -                      
        (Math.pow(next[0] - 0, 2) + Math.pow(next[1] - 0, 2))
    ).slice(0, k)
};