// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "Foxtrot 2023"
console.log(cohort.split(""))

// a) Your answer: "F","o","x","t","r","o","t" "2","0","2","3"
// b) Verify and explain:
// [
//   'F', 'o', 'x', 't',
//   'r', 'o', 't', ' ',
//   '2', '0', '2', '3'
// ]
// This was the actual answer, I believe I had the right idea, that the string would break off into separate strings. I wasn't fully sure if it was going to be double or single quotes so I just went with double. I am seeing though, in the final answer, that it is put into square brackets which would make it an array of all the seperated/split up charaters as the values.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: Hello, LEARN Student! 
// b) Verify and explain: Undefined was the actual answer. This is because there wasn't a return statement added and functions will be marked undefined if no return is stated.

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: [8, 10, 12, 14, 16] was the correct answer! This is because .map was used to create a new array while also using a higher order function to destribute the multiplication of 2 across the original array.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: [11, 13, 15] was the actual answer! In this case, .filter was used in the higher order function to create a subset array of the odd values only. .filter went through each value and did the function on each element of the array and the ones that were true, got put in the subset array. 

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: JavaScript
// b) Verify and explain: JavaScript was the right answer! The console.log was asking to log the value of the key:value pair, with the 0 index of the key,languages, which was JavaScript in this case.

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Echo"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: "George", "echo", 2023
// b) Verify and explain: Learn { student: 'George', cohort: 'Echo', year: 2023 } is the right answer. I believe I had the right idea, but looking at the real answer, it makes sense why it would log that. The class name is "Learn" followed by who the student is, the cohort their in, and the year by using the this. method to reference the object its needing the value for.
