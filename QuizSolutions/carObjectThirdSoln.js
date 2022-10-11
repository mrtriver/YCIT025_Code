const car ={
    brand: "Honda",
    model: "CRV",
    age: 4,
    odometer: 23456
}

//Here is the arrow function located outside of the object.

const kmPerYear = () => {
    return car.odometer/car.age;
}
console.log(kmPerYear());