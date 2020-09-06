// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ["This", "is", "a", "collection", "of", "words"];

// - Find the index of `101` in numbers
numbers.indexOf(101); // 8
// - Find the last index of `9` in numbers
numbers.lastIndexOf(9); // 11
// - Convert value of strings array into a sentance like "This is a collection of words"
strings.join(" ");
// - Add two new words in the strings array "called" and "sentance"
strings.concat("called", "sentence");
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
strings.join(" ");
// - Remove the first word in the array (strings)
strings.shift();
// - Find all the words that contain 'is' use string method 'includes'
var strings = ["This", "is", "a", "collection", "of", "words"]; // re-initializing because we changed it in the steps above
console.log(
  strings.filter((val) => {
    return val.includes("is");
  })
);
// - Find all the words that contain 'is' use string method 'indexOf'
console.log(
  strings.filter((val) => {
    if (val.indexOf("is") >= 0) {
      return true;
    } else {
      return false;
    }
  })
);
// - Check if all the numbers in numbers array are divisible by three use array method (every)
console.log(
  numbers.every((val) => {
    return val % 3 === 0;
  })
);
// -  Sort Array from smallest to largest
numbers.sort((a, b) => {
  return a - b;
});
// - Remove the last word in strings
strings.pop();
// - Find largest number in numbers
numbers.sort((a, b) => a - b);
console.log(numbers[numbers.length - 1]);
// - Find longest string in strings
let longestStr = strings.reduce((acc, curr) =>
  acc.length < curr.length ? curr : acc
);

// - Find all the even numbers
console.log(
  numbers.filter((val) => {
    return val % 2 === 0;
  })
);
// - Find all the odd numbers
console.log(
  numbers.filter((val) => {
    return val % 2 !== 0;
  })
);
// - Place a new word at the start of the array use (upshift)
strings.unshift("Hi");
// - Make a subset of numbers array [18,9,7,11]
numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
console.log(numbers.slice(3, 7));
// - Make a subset of strings array ['a','collection']
strings = ["This", "is", "a", "collection", "of", "words"];
console.log(strings.slice(2, 4));
// - Replace 12 & 18 with 1221 and 1881
numbers[numbers.indexOf(12)] = 1221;
numbers[numbers.indexOf(18)] = 1881;
// - Replace words in strings array with the length of the word
console.log(
  strings.map((val) => {
    return val.length;
  })
);
// - Find the sum of the length of words using above question
console.log(strings.reduce((acc, curr) => acc + curr).length);
// - Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" },
];
// - Find all customers whose firstname starts with 'J'

let jArr = customers.filter((val) => {
  return val.firstname[0] === "J";
});
console.log(jArr);

// - Create new array with only first name
console.log(customers.map((val) => val.firstname));
// - Create new array with all the full names (ex: "Joe Blogs")
let fullNames = customers.map((val) => `${val.firstname} ${val.lastname}`);
console.log(fullNames);
// - Sort the array created above alphabetically
console.log(fullNames.sort());
// - Create a new array that contains only user who has at least one vowel in the firstname.
let vowelArr = customers.filter(
  (val) =>
    val.firstname.includes("a") ||
    val.firstname.includes("e") ||
    val.firstname.includes("i") ||
    val.firstname.includes("o") ||
    val.firstname.includes("u")
);
