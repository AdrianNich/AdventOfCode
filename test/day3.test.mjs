import { test, expect } from 'vitest'
import { findAnswer } from '../adventOfCode/day3.mjs'

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

test('it finds the correct sum', () => {
  const answer = findAnswer(sampleData)
  expect(answer).toBe(4361)
})
