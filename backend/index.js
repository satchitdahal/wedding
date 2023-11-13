const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const Info = require('./models/info')

const app = express()
mongoose.connect('mongodb://localhost:27017/weddingApp',
    {
        useNewUrlParser: true,
        // useCreateIndex: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("***CONNECTION TO DATABASE SUCCESSFULL***")

    })
    .catch(err => {
        console.log("ERROR CONNECTING TO DB")
        console.log(err)
    })
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/add', async (req, res) => {
    const add = new Info({
        fname: "Satchit",
        lname: "Dahal",
        email: "satchit_dahal@hotmail.com",
        address: "22809",
        phone_number: "2064713787"
    })
    await add.save();
    res.send(add)
})

const PORT = 5000
app.listen(5000, () => {
    console.log(`APP IS RUNNING on PORT ${PORT}`)
})




