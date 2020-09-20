let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// NOTE: You can only use reduce method to solve this exercise:

// Find the average grade
persons.reduce((acc, curr) => acc + curr.grade, 0) / persons.length;

// Find the average grade of male
let males = 0;
let maleAverage = persons.reduce((acc, curr) => {
  if (curr.sex === 'M') {
    males++;
    return acc + curr.grade;
  } else {
    return acc;
  }
}, 0) / males;

// Find the average grade of female
let females = 0;
let femaleAverage = persons.reduce((acc, curr) => {
  if (curr.sex === 'F') {
    females++;
    return acc + curr.grade;
  } else {
    return acc;
  }
}, 0) / females;

// Find the highest grade


persons.reduce((prsist, curr) => Math.max(prsist, curr.grade), Number.MIN_VALUE); // Trying to change acc to persist in my head because that makes more sense to me

// Find the highest grade in male
persons.reduce((prsist, curr) => (curr.sex === 'M') ? Math.max(prsist, curr.grade) : prsist, Number.MIN_VALUE); // Trying to change acc to persist in my head because that makes more sense to me

// Find the highest grade in female
persons.reduce((prsist, curr) => (curr.sex === 'F') ? Math.max(prsist, curr.grade) : prsist, Number.MIN_VALUE); // Trying to change acc to persist in my head because that makes more sense to me

// Find the highest grade for people whose name starts with 'J' or 'P'
console.log(persons.reduce((prsist, curr) => (curr.name.startsWith('J') || curr.name.startsWith('P')) ? Math.max(prsist, curr.grade) : prsist, Number.MIN_VALUE));


const fruitBasket = [
  'banana',
  'cherry',
  'orange',
  'apple',
  'cherry',
  'orange',
  'apple',
  'banana',
  'cherry',
  'orange',
  'fig',
];

/*

Use the fruitBasket array to create an object where key will be the fruit and value will be the number of times
that fruit has appeared in the array.

Output:
{banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1}
*/

fruitBasket.reduce((acc, curr) => {
  Object.keys(acc).includes(curr) ? acc[curr] += 1 : acc[curr] = 1;
  return acc;
}, {});

/*

Use the fruitBasket array to create an array of array. Each array will contain two values name of fruit and number of times
that fruit appeared.

Output:

[['banana', 2], ['cherry', 3], ['orange', 3], ['apple', 2], ['fig', 1]]
*/

let answer = fruitBasket.reduce((acc, curr) => {
  Object.keys(acc).includes(curr) ? acc[curr] += 1 : acc[curr] = 1;
  return acc;
}, {});

let answerArray = Object.entries(answer);


// Next question set

const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

// Using reduce flat data array
data.reduce((acc, curr) => acc.concat(curr));

const dataTwo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11], 12],
];

// Using reduce flat dataTwo array
data.reduce((acc, curr) => acc.concat(...curr));

/*

Create these functions which accepts a number value and returns a number value:
  - `increment` adds one to the input value
  - `double` doubles the input value
  - `decrement` decrement 1 from the value
  - `triple` triples the input
  - `half` converts the value to half and return the integer value not decimal (use Math.round(21.5) => 21)
*/

const increment = (num) => {
  return num++;
}
const double = (num) => {
  return num * 2;
}
const decrement = (num) => {
  return num--;
}
const triple = (num) => {
  return num * 3;
}
const half = (num) => {
  return Math.round(num / 2);
}

let pipeline = [
  increment,
  double,
  decrement,
  decrement,
  double,
  triple,
  half,
  increment,
];

/*
Using the pipeline variable that contains the collection of functions, taking the initial value 3 find the output.

NOTE: Initial value will be passed to first function the output of that function will be the input to next function.

EXAMPLE:
  initialValue - 3
  increment(3) - return 4
  double(4) - return 8
  decrement(8) - return 7

  ...
*/

pipeline.reduce((acc, curr) => acc = curr(acc), 3); // Output = 19

// Next set of questions
let pipeline2 = [
  increment,
  half,
  double,
  decrement,
  decrement,
  triple,
  double,
  triple,
  half,
  increment,
  triple,
];

// Find the output using pipeline2 the initial value if 8
pipeline2.reduce((acc, curr) => acc = curr(acc), 3) // Output = 57