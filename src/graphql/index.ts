import { makeExecutableSchema } from 'graphql-tools'
import { Express, RequestHandler } from 'express'
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express'
import { execute, subscribe } from 'graphql'
import { SubscriptionServer } from 'subscriptions-transport-ws'

import { Root, rootValue } from './root'
import resolvers from './resolvers'
import typeDefs from './typedefs'

export { Root }

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  allowUndefinedInResolve: false
})

export function enableGraphql(at: string, app: Express) {
  app.use(at, graphqlExpress(() => (
    {
      rootValue,
      schema
    }
  )) as RequestHandler)
}

export function enableGraphiql(at: string, app: Express, opts: {
  endpoint: string,
  subscription?: string
}) {
  app.use(at, graphiqlExpress({
    endpointURL: opts.endpoint,
    subscriptionsEndpoint: opts.subscription,
    // passHeader: '"Authorization": `bearer ${JSON.parse(localStorage["qas.login"]).token}`,\
    // "x-qtest-url": JSON.parse(localStorage["qas.login"]).url'
  }) as RequestHandler)
}