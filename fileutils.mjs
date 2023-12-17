import { promises } from 'fs'
import { join } from 'path'

async function readFileAsync(filePath) {
  try {
    const fullPath = join(process.cwd(), filePath)
    const fileContent = await promises.readFile(fullPath, 'utf8')
    return fileContent
  } catch (err) {
    console.error('Error reading file')
    return undefined
  }
}

export { readFileAsync }
