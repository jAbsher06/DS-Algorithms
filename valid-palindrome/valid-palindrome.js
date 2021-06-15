/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  var newString = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  var result = newString.split("").reverse().join("");
  return result === newString;
};