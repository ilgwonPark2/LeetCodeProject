/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
const wateringPlants = function(plants, capacity) {
    let currentCapacity = capacity;
    let count = 1;
    
    for (let i = 0; i < plants.length; i++) {
        currentCapacity -= plants[i];
        // console.log(i, count);
        if (currentCapacity < plants[i+1]) {
            // console.log(count)
            count += (i - (-1)) * 2 +1;
            // console.log(count)
            currentCapacity = capacity;
        } else {
            if (i !== plants.length -1) count++;
        }
        // console.log(i, count);
    }
    return count
};