

if (process.env.NODE_ENV !== 'production') {
require('dotenv').config()
}
const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY
console.log(stripeSecretKey)
console.log(stripePublicKey)
const express = require('express')
const app = express()
const fs = require('fs')

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.listen(3000)


app.get('/store', function(req, res) {
    fs.readFile('items.json', function(error, data) {
        if (error) {
            res.status(500).end() 
        } else {
            res.render('store.ejs', {
                items: JSON.parse(data)
            })
        }
    })
}
)


