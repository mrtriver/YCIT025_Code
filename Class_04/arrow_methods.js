// this is a dictionary primarily
const a = { "ON": "Ontario", "QC": "Quebec" }; 


const animal1 = { name: "Fido", colour: "Brown"};

const person1 = { 
    firstName: 'Brendan',
    lastName: 'Wood', 
    age: 20,
    x: (a, b) => a + b,
    y: function(a,b) { return this.age + a + b },
    fullName: function() { return `${this.firstName} ${this.lastName}`; }
};

console.log(person1.firstName +":"+ person1.x(4,5));
console.log(person1.fullName());
console.log(person1.y(2,4));