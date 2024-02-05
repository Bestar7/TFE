import express, { Express, Router } from "express"
const app: Express = express()

const usersRouter : Router = require('./users/usersRouter')
const itemsRouter : Router = require('./items/itemsRouter')
const indexRouter : Router = require('./indexRouter')

app.use('/users', usersRouter )
app.use('/items', itemsRouter )
app.use('/', indexRouter )

module.exports = app;