Cypress.io for testing end-to-end js frameworks 

Queries are analog to REST Get calls except we can specify exactly what we get
Mutators are POST, PUT DELETE to modify data
Resolvers are external functions mapped to schema to process data

Always `use strict`

1. Use buildSchema and graphql from graphql
2. Use a resolver to  send data to the root
3. Create a server to listen on a port