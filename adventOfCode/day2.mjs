import { readFileAsync } from '../fileutils.mjs'

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
  const id = splitGame[0].replace(/Game/, '')
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

  console.log(blue, green, red)
}

calculateGame('Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green,')
// readMyFile()
