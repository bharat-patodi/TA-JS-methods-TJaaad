let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word
// from the array. (Use above array "words" to test it). If there are 2 with the same length,
// it should return the first occurrence.
const findLongestWord = (arr) => {
  let newArr = arr.map(val => val.length);
  let sortNewArr = [...newArr].sort((a, b) => a - b);
  let longestVal = sortNewArr[sortNewArr.length - 1];
  return arr[newArr.indexOf(longestVal)];
}
console.log(findLongestWord(words));
// - Convert the above array "words" into an array of length of word instead of word.
let wordLength = words.map((val) => val.length);
// - Create a new array that only contains word with atleast one vowel.
let vowelWords = words.filter((val) => val.includes('a') || val.includes('e') || val.includes('i') || val.includes('o') || val.includes('u'));
// - Find the index of the word "rhythm"
console.log(words.indexOf('rhythm'));
// - Create a new array that contians words not starting with vowel.
let noVowelBeginnings = words.filter((val) => !(val.startsWith('a') || val.startsWith('e') || val.startsWith('i') || val.startsWith('o') || val.startsWith('u')));
// - Create a new array that contianse words not ending with vowel
let noVowelEndings = words.filter((val) => !(val.endsWith('a') || val.endsWith('e') || val.endsWith('i') || val.endsWith('o') || val.endsWith('u')));

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
const sumArray = (arr) => {
  return arr.reduce((acc, curr) => acc + curr);
}
sumArray(numbers);
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
numbers.filter(val => val % 3 === 0);
// - Create a new array that contains only even numbers
numbers.filter(val => val % 2 === 0);
// - Create  a new array that contains only odd numbers.
numbers.filter(val => val % 2 !== 0);
// - Create a new array that should have true for even number and false for odd numbers.
numbers.map((val) => {
  if (val % 2 === 0) {
    return true;
  } else {
    return false;
  }
})
// - Sort the above number in assending order.
numbers.sort((a, b) => a - b);
console.log(numbers);
// - Does sort mutate the original array?
// Yes. The array will be sorted in place and no copy will be made.
// - Find the sum of the numbers in the array.
numbers.reduce((acc, curr) => acc + curr);
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
const averageNumbers = (arr) => {
  return arr.reduce((acc, curr) => acc + curr) / arr.length;
};

let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
const averageWordLength = (arr) => {
  let newArr = arr.map(val => val.length);
  let sum = newArr.reduce((acc, curr) => acc + curr);
  return sum / newArr.length;
}