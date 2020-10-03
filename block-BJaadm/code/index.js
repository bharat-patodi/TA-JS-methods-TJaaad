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

// Create an array peopleName and store value of sex key from persons array
let peopleName = persons.map(val => val.name);
// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = persons.map(val => val.grade);
// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = persons.map(val => val.sex);
// Log the filtered names of people in peopleName that starts with 'J' or 'P'
console.log(peopleName.filter((val) => val.includes('J') || val.includes('P')));
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
console.log(peopleName.filter((val) => {
  return val.includes('A') || val.includes('C');
}))
// Log all the filtered male ('M') in persons array
console.log(persons.filter(val => val.sex === 'M'));
// Log all the filtered female ('F') in persons array
console.log(persons.filter(val => val.sex === 'F'));
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
console.log(persons.filter((val) => {
  return (val.sex === 'F') && (val.name.startsWith('C') || val.name.startsWith('J'));
}))
// Log all the even numbers from peopleGrade array
console.log(peopleGrade.filter(val => val % 2 === 0));
// Find the first name that starts with 'J' in persons array and log the object
console.log(persons.find((val) => val.name.startsWith('J')));
// Find the first name that starts with 'P' in persons array and log the object
console.log(persons.find(val => val.name.startsWith('P')));
// Find the first name that starts with 'J', grade is greater than 10 and is a female
console.log(persons.find((val) => {
  return (val.name.startsWith('J') && val.grade > 10 && val.sex === 'F');
}));
// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter((val) => val.sex === 'F');

// Filter all the male from persons array and store in malePersons array
let malePersons = persons.filter((val) => val.sex === 'M');

// Find the sum of all grades and store in gradeTotal
let gradeTotal = persons.map((val) => val.grade).reduce((acc, curr) => acc + curr);

// Find the average grade
(persons.map((val) => val.grade).reduce((acc, curr) => acc + curr)) / persons.length;

// Find the average grade of male
persons.filter(val => val.sex === 'M').map((val) => val.grade).reduce((acc, curr) => acc + curr);

// Find the average grade of female
persons.filter((val) => val.sex === 'F').map((val) => val.grade).reduce((acc, curr) => acc + curr) / persons.filter((val) => val.sex === 'F').length;

// Find the highest grade
persons.map((val) => val.grade).sort((a, b) => a - b)[persons.length - 1];

// Find the highest grade in male
let m = persons.filter((val) => val.sex === 'M');
console.log(m.map((val) => val.grade).sort((a, b) => a - b)[m.length - 1]);

// Find the highest grade in female
let f = persons.filter((val) => val.sex === 'F');
console.log(f.map((val) => val.grade).sort((a, b) => a - b)[f.length - 1]);

// Find the highest grade for people whose name starts with 'J' or 'P'
let jOrP = persons.filter((val) => {
  return val.name.startsWith('J') || val.name.startsWith('P');
})
console.log(jOrP.map((val) => val.grade).sort((a, b) => a - b)[jOrP.length - 1]);

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
console.log(peopleGrade);
console.log(peopleGrade.sort((a, b) => a - b));
console.log("There is no change in the array elements and rightly so.");

// Sort the peopleGrade in descending order
peopleGrade.sort((a, b) => b - a);

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
peopleGrade = persons.map(val => val.grade); // For reverting to original
[...peopleGrade].sort((a, b) => a - b);; // shallow cloning

// Sort the array peopelName in ascending `ABCD..Za....z`
peopleName.sort();

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
[...peopleName].sort();