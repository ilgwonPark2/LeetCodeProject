/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */

const maxProfit = (prices, fee) => {
    let buying = 0, selling = -prices[0]
    
    for (let i = 0; i < prices.length; i++) {
        // buying deserves when price - selling - fee   
        // console.log(i, prices[i],"--", buying, selling)
        buying = Math.max(buying, selling + prices[i] - fee)
        // selling deserves when 
        selling = Math.max(selling, buying - prices[i])
        // console.log(i, prices[i],"--", buying, selling)
        // console.log('--------')
    }
    // console.log(buying, selling)
    return buying
};