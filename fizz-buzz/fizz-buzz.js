/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var result = [];
    for(var i = 1; i <= n; i++) {
      i % 15 === 0 ? result.push("FizzBuzz")
        : i % 3 === 0 ? result.push("Fizz")
        : i % 5 === 0 ? result.push("Buzz")
        : result.push(String(i))
    }
    return result;
};