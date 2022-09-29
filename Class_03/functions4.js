let a = 10;

function calculate()
{
    a = 20;
}


calculate();

console.log(a);

let x = new Function("a", "b", "return a + b;")

console.log(x(1,2))
