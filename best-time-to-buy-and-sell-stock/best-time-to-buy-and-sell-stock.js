/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let buyingPrice = prices[0];
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    // determine lowest buying price
    if(prices[i] < buyingPrice) {
      buyingPrice = prices[i];
    }
    // determine max profit
    let profit = prices[i] - buyingPrice;
    if ( profit > maxProfit) {
      maxProfit = profit;
    } 
    
  }
  return maxProfit;
};