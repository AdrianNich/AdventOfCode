export default { calculateValue }
import { readFileAsync } from '../fileutils.mjs'

function calculateValue(str) {
  let result = str
    .replace(/one/g, 'o1e')
    .replace(/two/g, 't2o')
    .replace(/three/g, 't3e')
    .replace(/four/g, 'f4r')
    .replace(/five/g, 'f5e')
    .replace(/six/g, 's6x')
    .replace(/seven/g, 's7n')
    .replace(/eight/g, 'e8t')
    .replace(/nine/g, 'n9e')
    .replace(/zero/g, 'z0o')

  const num = findNumbers(result)

  const separateNum = num.toString().split('')
  const value = Number(separateNum[0] + separateNum[separateNum.length - 1])
  // console.log(value)
  return value
}

function findNumbers(str) {
  const list = str.replace(/\D+/g, '')
  return list
}

const testData = [
  'two1nine',
  'eightwothree',
  'abcone2threexyz',
  'xtwone3four',
  '4nineeightseven2',
  'zoneight234',
  '7pqrstsixteen',
]
let data = await readFileAsync('./data/day1data.txt')
data = data.split('\n')
// console.log(data)
const test = data.map((x) => calculateValue(x))
// const test = calculateValue(data[0])
const total = test.reduce((acc, curr) => acc + curr, 0)

console.log(total)
