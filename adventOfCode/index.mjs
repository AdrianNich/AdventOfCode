import { readFileAsync } from '../fileutils'
import { getGameArray, possibleGames, sumIds, sumOfPowers } from './day02'

// SOLUTION PART ONE

async function solution() {
  let result = 0
  const fileContent = await readFileAsync('./src/day02/day02.input.txt')
  if (fileContent !== undefined) {
    const gameArray = getGameArray(fileContent)
    const successfulGames = possibleGames(gameArray)
    result = sumIds(successfulGames)
  } else {
    console.error('Error: fileContent is undefined.')
  }

  return result
}

// OUTPUT
solution()
  .then((result) => console.log('Final Result Part 1:', result))
  .catch((error) => console.error('Error in solution:', error))

// SOLUTION PART TWO

async function solutionPartTwo() {
  let result = 0
  const fileContent = await readFileAsync('./src/day02/day02.input.txt')
  if (fileContent !== undefined) {
    const gameArray = getGameArray(fileContent)
    result = sumOfPowers(gameArray)
  } else {
    console.error('Error: fileContent is undefined.')
  }

  return result
}

// OUTPUT
solutionPartTwo()
  .then((result) => console.log('Final Result Part 2:', result))
  .catch((error) => console.error('Error in solution:', error))
