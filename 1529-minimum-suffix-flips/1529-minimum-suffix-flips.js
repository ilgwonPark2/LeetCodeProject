/**
 * @param {string} target
 * @return {number}
 */
const minFlips = (target) => {
    let count = 0; 
    let target2 = target.replace(/^0+/, '');
    
    for(let i = 0; i < target2.length; i++) {
        if(target2[i] !== target2[i+1]) {
            console.log(target2[i], target2[i+1])
            count++;
        }
    }
    return count;
};