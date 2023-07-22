/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = (nums, target) => {
    
    nums.sort((a,b) => a-b);
    // check a difference bewteen two values
    const difference = (a, b) => Math.abs(a - b);
    
    let closeVal = Infinity;
    
    
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1; right = nums.length - 1;
        
        while (left < right) {
            let threeSum = nums[i] + nums[left] + nums[right];
            if (difference(threeSum, target) < difference(closeVal, target)) closeVal = threeSum;
            if (threeSum > target) right--;
            else left++;
        }
    }
    
    return closeVal;
};