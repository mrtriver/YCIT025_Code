/*Filter the records having a GPA over 3 and are graduate
stds. (type G). Write a code that sets a variable "goodStanding"
to the results of the records that match the criteria
*/

const studentGPAs = [
    { studentNumber: 1, gpa: 3.0, type: "G" },
    { studentNumber: 2, gpa: 3.4, type: "U" },
    { studentNumber: 3, gpa: 2.9, type: "G" },
    { studentNumber: 4, gpa: 3.2, type: "U" },
  ];
  
  const goodStanding = studentGPAs.filter( a => a.type == "G" && a.gpa >= 3.0);
  
  console.log(goodStanding);
  
  function printResult(s)
  {
      console.log(`Graduate student number: ${s.studentNumber} haveing a GPA of ${s.gpa}`)
  }
  
  goodStanding.forEach(printResult);