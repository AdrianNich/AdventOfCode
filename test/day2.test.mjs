import { describe, test, expect } from 'vitest'
import { calculateGame, calculateTotal } from '../adventOfCode/day2.mjs'

const game1 = 'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green'
const game2 = 'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue'
const game3 =
  'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red'
const game4 =
  'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red'
const fullSample = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`

describe('Correctly calculates day 2 part one game lines', () => {
  test('calculateValue works out value of Game1', () => {
    const game1Value = calculateGame(game1)
    expect(game1Value).toBe(1)
  })
  test('calculateValue works out value of Game2', () => {
    const game1Value = calculateGame(game2)
    expect(game1Value).toBe(2)
  })
  test('calculateValue works out value of Game3', () => {
    const game1Value = calculateGame(game3)
    expect(game1Value).toBe(0)
  })
  test('calculateValue works out value of Game4', () => {
    const game1Value = calculateGame(game4)
    expect(game1Value).toBe(0)
  })
})

describe('CalculateSum works out the total', () => {
  test('Use calculateSum to work out sum', () => {
    const sampleValue = calculateTotal(fullSample)
    expect(sampleValue).toBe(8)
  })
})
