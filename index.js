'use strict'

const { buildSchema } = require('graphql')
const express = require('express')
const graphql = require('express-graphql')
// required to read files and schema:
const fs = require('fs')
const path = require('path')

const app = express()
const port = process.env.port || 3000

// building a schema from another file
const schemaCode = fs.readFileSync(path.join(__dirname, 'lib', 'schema.graphql'), 'utf8')

const messages = [
  {
    id: '1',
    text: 'This is a message',
    author: 'F Thot Fitzgerald',
    comment: 'Whatever'
  },
  {
    id: '2',
    text: 'This is another message',
    author: 'Hulk Hogan',
    comment: 'Brother'
  },
  {
    id: '3',
    text: 'This is yet a third message',
    author: 'Steve Tide Pods',
    comment: 'Whatever'
  }
]

// Define schema
const schema = buildSchema(schemaCode)

// Create resolvers
const root = {
  getAllMessages: () => {
    return messages
  },
  getMessage: ({id}) => {
    const message = messages.find(message => message.id === id)
    console.log(messages, id.id)
    if (!message) {
      throw new Error('This message does not exist')
    }
    else {
      return message
    }
  }
}

// Put graphql in the end point
app.use('/api', graphql({
  schema: schema,
  rootValue: root,
  graphiql: true
}))

app.listen(port, () => {
  console.log(`Server started http://localhost:${port}/api`)
})