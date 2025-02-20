// /**
//  * @param {Array} arr
//  * @param {number} size
//  * @return {Array}
//  */
// var chunk = function(arr, size) {
//     const chunkArray = [];

//     for (let i = 0; i < arr.length; i, i += size) {
//         chunkArray.push(arr.slice(i, i + size));
//     }

//     return chunkArray;
// };

const add = (num) => num + 5;
const multiple = (num) => num * 2;

const result = multiple(add(3))
console.log(result);
