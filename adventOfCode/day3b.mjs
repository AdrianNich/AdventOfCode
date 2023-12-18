// step1: find a digit
// step2: get index of said digit, push that index into an array
// step3: check if index +1 is also a digit, if so push that index to array, check if that index plus 1 is also a digit, repeat until it is not a digit.
// step4:

// split at \n
// [ 0, 1, 2].map((line, index) => function(line, index))
import { readFileAsync } from '../fileutils.mjs'
export { findAnswer }
const sampleData = `
467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`
const data = await readFileAsync('./data/day3data.txt')

//function to find and add the valid numbers in each line
//still need to address what if index is 0 for prior and next index -1 lines
function getValidNumbers(line, lineIndex, separatedData) {
  const lineArray = line.split('')
  let lineIndexes = []
  const finalLineArray = []
  lineArray.map((char, i) => {
    // if it's a number push to lineIndexes
    if (!isNaN(Number(char))) {
      lineIndexes.push(i)
      //if the next char is not a number, push lineIndexes to finalLineArray and reset lineIndexes to empty array
      if (isNaN(lineArray[i + 1])) {
        finalLineArray.push(lineIndexes)
        lineIndexes = []
      }
    }
  })
  //   return finalLineArray
  const priorLine = separatedData[lineIndex - 1]
  const nextLine = separatedData[lineIndex + 1]
  const validDetails = []
  finalLineArray.map((array) => {
    array.map((index) => {
      if (validDetails.includes(array)) {
        return
      }
      if (lineIndex !== 0) {
        if (validDetails.includes(array)) {
          return
        }
        if (
          priorLine[index - 1] &&
          priorLine[index - 1] === '*' // check for gear
        ) {
          //   console.log(priorLine[index - 1], index, 1)
          const numberDetails = {
            number1IndexArray: array,
            number1Line: lineIndex,
            gearLocation: [[lineIndex - 1], [index + 1]],
          }
          validDetails.push(numberDetails)
          return
        }
        if (priorLine[index] && priorLine[index] === '*') {
          //   console.log(priorLine[index], index, 2)
          const numberDetails = {
            number1IndexArray: array,
            number1Line: lineIndex,
            gearLocation: [[lineIndex - 1], [index]],
          }
          validDetails.push(numberDetails)
          return
        }
        if (priorLine[index + 1] && priorLine[index + 1] === '*') {
          //   console.log(priorLine[index + 1], index)
          const numberDetails = {
            number1IndexArray: array,
            number1Line: lineIndex,
            gearLocation: [[lineIndex - 1], [index + 1]],
          }

          validDetails.push(numberDetails)
          return
        }
      }
      if (nextLine !== undefined) {
        if (nextLine[index - 1] && nextLine[index - 1] === '*') {
          //   console.log(nextLine[index - 1], index, 4)
          const numberDetails = {
            number1IndexArray: array,
            number1Line: lineIndex,
            gearLocation: [[lineIndex + 1], [index - 1]],
          }
          validDetails.push(numberDetails)
          return
        }
        if (nextLine[index] && nextLine[index] === '*') {
          //   console.log(nextLine[index], index, 5)
          const numberDetails = {
            number1IndexArray: array,
            number1Line: lineIndex,
            gearLocation: [[lineIndex + 1], [index]],
          }
          validDetails.push(numberDetails)
          return
        }
        if (nextLine[index + 1] && nextLine[index + 1] === '*') {
          //   console.log(nextLine[index + 1], index, 6)
          const numberDetails = {
            number1IndexArray: array,
            number1Line: lineIndex,
            gearLocation: [[lineIndex + 1], [index + 1]],
          }
          validDetails.push(numberDetails)
          return
        }
        if (lineArray[index - 1] && lineArray[index - 1] === '*') {
          const numberDetails = {
            number1IndexArray: array,
            number1Line: lineIndex,
            gearLocation: [[lineIndex], [index - 1]],
          } //   console.log(lineArray[index - 1], index, 7)

          validDetails.push(numberDetails)
          return
        }
        if (lineArray[index + 1] && lineArray[index + 1] === '*') {
          //   console.log(lineArray[index + 1], index, 8)
          const numberDetails = {
            number1IndexArray: array,
            number1Line: lineIndex,
            gearLocation: [[lineIndex], [index + 1]],
          }
          validDetails.push(numberDetails)
          return
        }
      }
    })
  })
  // const validNumbers = []
  // validIndexes.map((array) => {
  //   let combinedNumber = 0
  //   for (let i = 0; i < array.length; i++) {
  //     combinedNumber += lineArray[array[i]]
  //   }
  //   validNumbers.push(Number(combinedNumber))
  // })
  //   console.log(validNumbers)
  // const numSum = validNumbers.reduce((acc, curr) => (acc += curr), 0)
  return validDetails
}

//function to call other function on the data and add it up
function findAnswer(data) {
  const separatedData = data.split('\n')
  let total = 0
  const numberDetails = []
  separatedData.map((line, index) => {
    numberDetails.push(getValidNumbers(line, index, separatedData))
  })
  console.log(numberDetails[0])
}

// console.log(getIndexes(separatedData[6], 6))

// console.log('answer', findAnswer(sampleData))
