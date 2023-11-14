const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const Info = require('./models/info')
const bodyParser = require('body-parser')
const cors = require('cors')


const app = express()
app.use(cors())
app.use(bodyParser.json())
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

app.post('/info', async (req, res) => {
    try {
        const { fname, lname, email, phone_number, address } = req.body
        const add = new Info({ fname, lname, email, phone_number, address })
        await add.save();
        res.status(201).json({ message: "User data added" })

    }
    catch (err) {
        console.error(err)
        res.status(500).json({ error: "error" })

    }
})

const PORT = 5000
app.listen(5000, () => {
    console.log(`APP IS RUNNING on PORT ${PORT}`)
})




