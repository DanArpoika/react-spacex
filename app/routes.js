const routes = module.exports = require('next-routes')()

routes
  .add('index', '/')
  .add('launch', '/launch/:launch' )
  .add('site', '/site/:site' )
