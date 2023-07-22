/**
 * @param {number} num
 * @return {string}
 */

const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
const rom = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]

const intToRoman = num => {
    let ans = "";
    
    for (let i = 0; i < val.length; i++)
        while (num >= val[i]) ans += rom[i], num -= val[i];
    
    return ans;
};