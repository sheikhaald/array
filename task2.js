function isArrayLengthEven(numbers) {
  if (numbers.length % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isArrayLengthEven([1, 2, 3]));

function isArrayLengthOdd(numbers) {
  if (numbers.length % 2 == 0) {
    return false;
  } else {
    return true;
  }
}
console.log(isArrayLengthOdd([1, 2, 3, 4]));

let instructors = ["Mshary", "Hasan"];
function addLailaToArray(instructors) {
  instructors.push("Laila");
  return instructors;
}
console.log(addLailaToArray(instructors));

let teams = ["Brazil", "Germany", "Italy"];
function eliminateTeam(teams) {
  return teams.pop();
}

console.log(eliminateTeam(teams));

function secondHalfOfArrayIfItIsEven(fruits) {
  // Your code here
  if (fruits.length % 2 == 0) {
    return fruits.splice(fruits.length / 2);
  } else {
    return [];
  }
}
let x = ["apple", "orange", "banana", "kiwi"];
console.log(secondHalfOfArrayIfItIsEven(x));
