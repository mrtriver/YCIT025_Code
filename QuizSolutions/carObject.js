//Create func within a car object which returns the 
//number of km. that this car travels per year.

const car ={
    brand: "Honda",
    model: "CRV",
    age: 4,
    odometer: 23456,
    kmPerYear: function(){
       return this.odometer /this.age;
    }
};
console.log(car.kmPerYear());
