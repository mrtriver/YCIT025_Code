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

console.log(person1.x(4,5));