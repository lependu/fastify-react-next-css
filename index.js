'use strict'

const fastify = require('fastify')()

fastify
  .register(require('fastify-react'))
  .after(() => {
    fastify.next('/hello')
  })

fastify.listen(3000, err => {
  if (err) throw err
  console.log('Server listenging on http://localhost:3000')
})
