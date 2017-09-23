// let average = function(...args) {
//     let result = 0
//     for (let number of args) {
//         result += number;
//     }
//     return result / args.length;
// };

// let average = (...args) => {
//     let result = 0;
//     for (let number of args) {
//         result += number;
//     }
//     return result / args.length;
// };

// let average = (...args) => {
//     let sum = args.reduce(function(acu, number) {
//         return acu += number;
//     });
//     return sum / args.length;
// };

let average = (...args) => {
  return args.reduce((sum, number) => sum += number) / args.length;
};

console.log(average(3,4,4));
