import { readFileAsync } from '../fileutils.mjs'
export { calculateGame, calculateTotal }

function calculateGame(game) {
  const splitGame = game.split(':')
  let id = Number(splitGame[0].replace(/Game/, ''))
  //   console.log('split ;', splitGame[1].split(';'))
  //   console.log(' join ,', splitGame[1].split(';').join(','))
  const rounds = splitGame[1].split(';').join(',').split(',')
  //   console.log('rounds', rounds)
  let red = []
  let blue = []
  let green = []
  rounds.map((item) => {
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

  //part1
  //   function removeInvalidGames(array, limit) {
  //     array.map((game) => {
  //       if (game > limit) {
  //         id = 0
  //         return
  //       }
  //     })
  //   }

  //   removeInvalidGames(red, 12)
  //   removeInvalidGames(blue, 14)
  //   removeInvalidGames(green, 13)
  //   return id

  const blueHigh = Math.max(...blue)
  const redHigh = Math.max(...red)
  const greenHigh = Math.max(...green)

  return blueHigh * redHigh * greenHigh
}

function calculateTotal(game) {
  const splitGames = game.split('\n')
  //   const gameValues = []
  let total = 0
  splitGames.map((game) => (total += calculateGame(game)))
  //   const total = gameValues.reduce((acc, curr) => acc + curr, 0)
  return total
}
// calculateGame('Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green,')
// readMyFile()

const data = await readFileAsync('./data/day2data.txt')

//data.map((x) => console.log(x))

console.log(calculateTotal(data))
