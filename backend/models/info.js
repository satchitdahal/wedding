const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const InfoSchema = new Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone_number: {
        type: Number,
        required: true
    }
})

const Info = mongoose.model('Info', InfoSchema)
module.exports = Info