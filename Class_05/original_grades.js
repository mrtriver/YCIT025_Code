const CREDIT = 4;
const gradePointValue = {
    "A+": 4.3,
    A: 4.0,
    "A-": 3.7,
    "B+": 3.3,
    B: 3.0,
    "B-": 2.7,
    C: 2.0,
    F: 0,
};

let courseQualityValue = (grade, gradePointValue) =>
    gradePointValue[grade] * CREDIT;

let course1QualityValue = courseQualityValue("A+", gradePointValue);
console.log("course 1 quality Value is: " + course1QualityValue);

let course2QualityValue = courseQualityValue("B+", gradePointValue);
console.log("course 2 quality Value is: " + course2QualityValue);

let course3QualityValue = courseQualityValue("A", gradePointValue);
console.log("course 3 quality Value is: " + course3QualityValue);

let course4QualityValue = courseQualityValue("F", gradePointValue);
console.log("course 4 quality Value is: " + course4QualityValue);

const COURSENUMBER = 4;
let totalCredit = CREDIT * COURSENUMBER;
console.log("Total credit for this term is: " + totalCredit);

let QualityValue = parseFloat(
    (
        course1QualityValue +
        course2QualityValue +
        course3QualityValue +
        course4QualityValue
    ).toFixed(2)
);
console.log("Total the quality points for the term is: " + QualityValue);

let GPA = parseFloat((QualityValue / totalCredit).toFixed(2));

console.log("GPA for this term is: " + GPA);
