// server.js
const next = require('next')
const routes = require('./routes')
const app = next({dir: './app', dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app)
const express = require('express')


// const handler = routes.getRequestHandler(app, ({req, res, route, query}) => {
//   app.render(req, res, route.page, query)
// })

app.prepare().then(() => {
  express().use(handler).listen(3000)
})
