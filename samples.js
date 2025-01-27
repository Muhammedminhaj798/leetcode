// function person(name){
//     this.name = name

// }

// person.prototype.greet = function(){
//     console.log('Hello, ' + this.name);
// }
//  const minhaj = new person('Minhaj')
//  minhaj.greet()

// function multiply(a){
//     return function(b){
//        return a*b
//     }
// }

// const multiplyBy2 = multiply(2)

// console.log(multiplyBy2(3));

// let hello = [
//   {
//     brand: "Toyota",
//     model: "Corolla",
//     year: 2023,
//   },{
//         brand: "maruthi",
//         model: "marithi",
//         year: 2020,
//   },{
//     brand: "polo",
//     model: "wolkswagen",
//     year: 2019,
//   }
// ];
// const filt = hello.filter((item)=> item.year >= 2020)
// console.log(filt);


const original = { name: "Minhaj", details: { age: 25, city: "Kochi" } };
const shallowCopy = { ...original };

// Change nested property
// shallowCopy.details.city = "Thrissur";
// shallowCopy.name = "aslah"

// console.log(original.details.city); // Output: "Thrissur" (original also changed!)
// console.log(original.name);

// console.log(shallowCopy.details.city); // Output: "Thrissur"
// console.log(shallowCopy.name);

const deepcopy = JSON.parse(JSON.stringify(original))

deepcopy.details.city = "manjeri"

console.log(deepcopy.details.city);
console.log(original.details.city);


