'use strict'

const { graphql, buildSchema } = require('graphql')
const express = require('express')

const app = express()
const port = process.env.port || 3000

const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

const root = {
  hello: () => {
    return 'Hello World'
  }
}

app.listen(port, () => {
  console.log(`Server started http://localhost:${port}`)
})

graphql(schema, '{ hello }', root).then(data => {
  console.log(data)
})