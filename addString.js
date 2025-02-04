// Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.`

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let k = BigInt(num1);
    let j = BigInt(num2);
    let sum = k + j
    let m = String(sum);
    return m
};