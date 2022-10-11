const password = "5141238899";
const containsNumber = /(\d{3})\d+/;

let passwordIsComplex = containsNumber.exec(password);

console.log(passwordIsComplex);

let areaCode = passwordIsComplex[1];

console.log(areaCode);

