let myArray = ["apple", "banana", "cherry"];

console.log(myArray[0]);
console.log(myArray[2]);
myArray.unshift("mango");
myArray.pop();

let constNumber = [5, 10, 15, 20, 25];
constNumber.splice(2, 2);
console.log(constNumber.sort());

function printLen(array) {
  return array.length;
}

let constTemp = [72, 68, 74, 80, 76];
constTemp.sort();
console.log(constTemp[4]);

if (myArray.includes("banana")) {
  console.log(true);
} else {
  console.log(false);
}
