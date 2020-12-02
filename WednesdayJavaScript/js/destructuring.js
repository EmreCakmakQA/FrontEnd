const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [a, b, ...rest] = myArray;
console.log(a); // 1
console.log(typeof (a)); // number
console.log(b); // 2
console.log(rest); // [3,4,5,6,7,8,9,10]
console.log(typeof (rest)) // object

// skip values const[a,,b,...rest] = myArray;
// a = 1, b = 3, rest = [4,5,6,7,8,9,10]