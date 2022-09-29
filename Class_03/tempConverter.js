// function tempConverter (temperature, unit) {

//     let convertedTemp = 0

//     if (unit === "C"){
//         convertedTemp = (5/9 * temperature)+32
//     }

//     if (unit === "F") {
//         convertedTemp=5/9*(temperature - 32)
//     }

//     return convertedTemp
// }

// console.log(tempConverter(35,"F"))

const validUnits = ["C", "F"];

function convertTemp(value, unit) {
  if (!validUnits.includes(unit)) {
    console.log("Unit is not recognized.");
    return null;
  }

  // if (isNaN(value))
  // {
  //     console.log("Value must be a number.");
  //     return NaN;
  // }

  let tempResult = 0.0;

  switch (unit) {
    case "C":
      tempResult = convertCF(value);
      break;
    case "F":
      tempResult = convertFC(value);
      break;
    default:
      // Wrong unit
      return NaN;
  }

  return tempResult;
}

function convertCF(value) {
  return (9 / 5) * value + 32;
}

function convertFC(value) {
  return (5 / 9) * (value - 32);
}

console.log(convertTemp("123", "X"));
