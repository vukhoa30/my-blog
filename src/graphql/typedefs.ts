import { resolve } from 'path'
import { readFileSync } from 'fs'

export default readFileSync(resolve(__dirname, 'schema.gql'), { encoding: 'utf8' })