const car ={
    brand: "Honda",
    model: "CRV",
    age: 4,
    odometer: 23456
}
function kmPerYear(){
    return car.odometer/car.age;
}
console.log(kmPerYear());