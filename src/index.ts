import { createServer, ServerOptions } from 'spdy'
import { resolve } from 'path'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import compression from 'compression'
import exitHook from 'async-exit-hook'

import { enableGraphql, enableGraphiql } from './graphql'

(async () => {
  const app = express()
  let opts: ServerOptions = {
    spdy: {
      plain: true
    }
  }
  const server = createServer(opts, app)
  
  exitHook(async done => {
    done()
  })
  
  app.use(cors({
    origin: ['']
  }))
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use(compression())
  
  enableGraphiql('/graphiql', app, {
    endpoint: `/graphql`
  })

  app.use('/', (req, res, next) => {
    next()
  })

  app.use('/', express.static(resolve(__dirname, 'public'), {
    maxAge: '1y'
  }))

  enableGraphql('/graphql', app)

  server.listen(3003, () => {
    console.log('Listening at port 3003')
  })
})()