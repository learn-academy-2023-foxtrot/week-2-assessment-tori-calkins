// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// Pseudo code:

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

// Test
// describe("evenlyDiv", () => {
//     it("returns if the number inside it is evenly divisible by three or not.", () => {
//         const object1 = { number: 15 }
// // Expected output: "15 is divisible by three"
//         const object2 = { number: 0 }
// // Expected output: "0 is divisible by three"
//         const object3 = { number: -7 }
// // Expected output: "-7 is not divisible by three"
//         expect(evenlyDiv(object1)).toEqual("15 is divisible by three")
//         expect(evenlyDiv(object3)).toEqual("-7 is not divisible by three")
//         expect(evenlyDiv(object2)).toEqual("0 is divisible by three")
//     })
// })
// // output:  Good Failure ReferenceError: evenlyDiv is not defined


// const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
// const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
// const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"


// b) Create the function that makes the test pass.

// Pseudo code:
// function name: evenlyDiv
// input: a object
// output: strings either "is divisible by three" "is not by three"
// process: make a function, take the object as an argument, then use string interpulation

const evenlyDiv = (object) => {
    if(object.number % 3 === 0) {
        return `${object.number} is divisible by three`
    } else if(object.number % 3 !== 0) {
        return `${object.number} is not divisible by three`
    }
}

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

// Test 
// describe("capArray", () => {
//     it("an array with all the words capitalized", () => {
//         const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
//         const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
//         expect(capArray(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
//         expect(capArray(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
//     })
// })
// Output: good failure ReferenceError: capArray is not defined

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

// Pseudo code:
// function name: capArray
// input: an array of strings
// output: new array of values but capitalized
// process: make a function, use iteration ,.toUpperCase method to capitalize the first letters of each word, maybe use the .map()to create an empty array for the new array to use

const capArray = (array) => {
    let newArray = []
    for(let i = 0; i < array.length; i++){
        return array.map((value) => {
            return value[0].toUpperCase() + value.substring(1)
        })
    }
}
// to make sure output was correct, I used this console.log: console.log(capArray(randomNouns1)) 

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

// describe("vowelIndex", () => {
//     it("logs the index of the first vowel", () => {
//         const vowelTester1 = "learn"
//         // Expected output: 1
//         const vowelTester2 = "academy"
//         // Expected output: 0
//         const vowelTester3 = "challenges"
//         // Expected output: 2
//         expect(vowelIndex(vowelTester1)).toEqual(1)
//         expect(vowelIndex(vowelTester2)).toEqual(0)
//         expect(vowelIndex(vowelTester3)).toEqual(2)
//     })
// })
//output: good failure ReferenceError: vowelIndex is not defined

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.

// Pseudo code:
// function name: vowelIndex
// Input: a string
// Output: a number of the index
// process: make a function, use either .indexOf or .index and .includes to collect the index of the vowel of the string

const vowelIndex = (number, index) => {
    for(let i = 0; i < number.length; i++){
        return number.indexOf("a", "e", "i", "o", "u") 
    }
}
        

console.log(vowelIndex(vowelTester1))