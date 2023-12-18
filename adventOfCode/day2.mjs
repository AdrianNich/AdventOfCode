import { readFileAsync } from '../fileutils.mjs'
export { calculateGame, calculateTotal }

async function readMyFile() {
  const filePath = './data/day2data.txt' // Replace with your file path
  const fileContent = await readFileAsync(filePath)

  if (fileContent !== undefined) {
    // File content has been read successfully
    console.log(fileContent)
    // Do something with the file content
  } else {
    // Error occurred while reading the file
    console.log('Failed to read the file.')
  }
}

function calculateGame(game) {
  const splitGame = game.split(':')
  let id = Number(splitGame[0].replace(/Game/, ''))
  const rounds = splitGame[1].split(';')
  const combinedList = rounds.join(',').split(',')
  let red = []
  let blue = []
  let green = []
  combinedList.map((item) => {
    if (item.includes('blue')) {
      const num = Number(item.replace(/\D/g, ''))
      blue.push(num)
    }
    if (item.includes('red')) {
      const num = Number(item.replace(/\D/g, ''))
      red.push(num)
    }
    if (item.includes('green')) {
      const num = Number(item.replace(/\D/g, ''))
      green.push(num)
    }
  })
  red.map((x) => {
    if (x > 12) {
      id = 0
      return
    }
  })
  blue.map((x) => {
    if (x > 14) {
      id = 0
      return
    }
  })
  green.map((x) => {
    if (x > 13) {
      id = 0
      return
    }
  })
  return id
}

function calculateTotal(game) {
  const splitGames = game.split('\n')
  const gameValues = []
  splitGames.map((game) => gameValues.push(calculateGame(game)))
  const total = gameValues.reduce((acc, curr) => acc + curr, 0)
  return total
}
calculateGame('Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green,')
// readMyFile()
