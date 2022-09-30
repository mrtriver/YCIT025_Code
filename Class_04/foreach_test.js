let BreakException = {};
let mystring = "";

try {
  [1, 2, 3, 4, 5].forEach(function (el) {
    //console.log(el);
    mystring += el;

    if (el === 3) throw BreakException;
  });
} catch (e) {
  if (e !== BreakException) throw e;
}

console.log(mystring);
