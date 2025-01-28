/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    x = "";
    for(let k of words){
        x += k[0]
    }
    if(x === s){
        return true
    }else{
        return false
    }
};