/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const eachAmt = Array(amount + 1).fill(Infinity);
    eachAmt[0] = 0;
    
    for (curCoin of coins){
        for(let i = curCoin; i <= amount; i++) {
            eachAmt[i] = Math.min(eachAmt[i], eachAmt[i - curCoin] + 1)
        }
    }
    return eachAmt[amount] === Infinity ? -1 : eachAmt[amount];
};