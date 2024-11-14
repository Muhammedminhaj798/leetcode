/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = x.toString();
    let rstr = str.split("").reverse().join("");
    if (str == rstr){
        return true
    }else{
        return false
    }
};