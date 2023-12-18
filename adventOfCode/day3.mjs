// step1: find a digit
// step2: get index of said digit, push that index into an array
// step3: check if index +1 is also a digit, if so push that index to array, check if that index plus 1 is also a digit, repeat until it is not a digit.
// step4:

// split at \n
// [ 0, 1, 2].map((line, index) => function(line, index))

const sampleData = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`

const separatedData = sampleData.split('\n')

function getIndexes(line, lineIndex) {
  const lineArray = line.split('')
  let lineIndexes = []
  const finalLineArray = []
  lineArray.map((char, i) => {
    if (!isNaN(Number(char))) {
      lineIndexes.push(i)
      if (isNaN(lineArray[i + 1])) {
        finalLineArray.push(lineIndexes)
        lineIndexes = []
      }
    }
  })
  //   return finalLineArray
  const priorLine = separatedData[lineIndex - 1]
  const nextLine = separatedData[lineIndex + 1]

  finalLineArray.map((array) => {
    array.map((index) => {
      if (
        priorLine[index - 1] &&
        priorLine[index - 1] !== '.' &&
        isNaN(priorLine[index - 1])
      ) {
        return true
      }
    })
  })
}

// console.log(getAnswer(separatedData[0], 0))
