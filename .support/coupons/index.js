'use strict'

const Express = require('express')
const Coupons = require('./coupons')
const App = Express()

App.get('/discount-coupons', (req, res) => {
    const idx = Math.floor(Math.random() * Math.floor(3))

    if (idx === 2) {
        const dt = Date.now() + 5000

        while (Date.now() < dt) {
        }

        return res.json(Coupons)
    }

    return res.json(Coupons)
})

App.listen(process.env.PORT || 3001)
