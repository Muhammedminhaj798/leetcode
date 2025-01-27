const number = [1,2,3,4,5];
const num = number.filter((item)=>item%2==0).map((item) => item * item)
console.log(num);