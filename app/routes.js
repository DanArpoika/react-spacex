const routes = module.exports = require('next-routes')()

routes
  .add('index', '/')
  .add('launch', '/launch/:launch' )
  .add('pad', '/launchpad/:site' )
  .add('rocket', '/rockets/:rocket')
