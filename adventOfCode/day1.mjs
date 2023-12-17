import { data } from '../data/day1data.mjs'
export default { calculateValue }

function calculateValue(str) {
  let result = replacer(str)
  function replacer(str) {
    let test = str
    if (test.includes('one')) {
      test = test.replaceAll(/one/g, 'o1e')
    }
    if (test.includes('two')) {
      test = test.replaceAll(/two/g, 't2o')
    }
    if (test.includes('three')) {
      test = test.replaceAll(/three/g, 't3e')
    }
    if (test.includes('four')) {
      test = test.replaceAll(/four/g, 'f4')
    }
    if (test.includes('five')) {
      test = test.replaceAll(/five/g, 'f5e')
    }
    if (test.includes('six')) {
      test = test.replaceAll(/six/g, 's6')
    }
    if (test.includes('seven')) {
      test = test.replaceAll(/seven/g, 's7n')
    }
    if (test.includes('eight')) {
      test = test.replaceAll(/eight/g, 'e8t')
    }
    if (test.includes('nine')) {
      test = test.replaceAll(/nine/g, 'n9e')
    }
    if (test.includes('zero')) {
      test = test.replaceAll(/zero/g, 'z0o')
    }
    // console.log(test)
    return test
  }
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
const test = data.map((x) => calculateValue(x))
// const test = calculateValue(data[0])
const total = test.reduce((acc, curr) => acc + curr, 0)

console.log(total)
