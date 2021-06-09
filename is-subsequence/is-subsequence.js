/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  var i = 0;
  var j = 0;
  if (!s) {
    return true;
  }
  while(j < t.length) {
    if (t[j] === s[i]) {
      i++
    }
    if (i === s.length) {
      return true;
    }
    j++
  }
  return false;
};