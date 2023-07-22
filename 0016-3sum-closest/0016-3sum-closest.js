/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = (nums, target) => {
    
    nums.sort((a,b) => a-b);
    let closeVal = Infinity;
    
    // check a difference bewteen two values
    const difference = (a, b) => Math.abs(a - b);
    
    for (let i = 0; i < nums.length - 2; i++) {
        
//         while ()
        // const threeSum = nums[i] + nums[i + 1] + nums[i + 2];
    
//         // console.log('if', difference(target, threeSum),  threeSum, closeVal);
//         if (difference(target, threeSum) < difference(target, closeVal)) closeVal = threeSum;
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