// REDUCE

const r1 = [1,5,3];

let total = r1.reduce((acc, val) => { return acc + val; }, 0);
console.log(total);

// let largest = r1.reduce((acc, val) => {
//     if (acc > val) {
//         return acc ;} 
//         else {
//             return val;}
//         }, r1[0] )

//largest = r1.reduce((acc, val) => {return Math.max(acc, val)}); 

let largest = r1.reduce((acc, val) => acc > val ? acc : val );

console.log(largest);

// FILTER

const inputSet = [6,7,3,67,20,4];
const smallerThanTen = inputSet.filter(w => w < 10);



const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(x => x.length > 6);
console.log(result);


