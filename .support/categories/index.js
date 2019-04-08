'use strict'

const Express = require('express')
const Categories = require('./categories')
const App = Express()

App.get('/categories', (req, res) => res.json(Categories))

App.listen(process.env.PORT || 3000)
