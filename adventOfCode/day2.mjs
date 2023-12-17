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

function calculateGame(game) {}

readMyFile()
