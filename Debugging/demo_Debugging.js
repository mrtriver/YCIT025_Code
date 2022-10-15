let a = 15;
let b = 3;

 

function something() {
    a = 5 * a;
}

 

b = 16;
if (a > b) {
    something();
}
    
console.log(a);