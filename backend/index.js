const express = require('express')
const path = require('path')
const app = express()
const cors = require("cors")
const pool = require("./db")

//middleware
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("hello")
})

//ROUTES FOR CONTACTS START

//create a contact
app.post("/contacts", async (req, res) => {
    try {
        const { f_name, l_name, phone_number } = req.body
        const new_contact = await pool.query("INSERT INTO contacts (f_name, l_name, phone_number) VALUES($1,$2,$3) RETURNING *",
            [f_name, l_name, phone_number])
        res.json(new_contact.rows[0])
    } catch (err) {
        console.error(err.message)
        res.status(500).json("Server error")
    }
})
//get all contacts
app.get("/contacts", async (req, res) => {
    try {
        const all_contacts = await pool.query("SELECT * FROM contacts")
        res.json(all_contacts.rows)
    } catch (err) {
        console.error(err.message)
        res.status(500).json("Server error")
    }
})

//get contact/id
app.get("/contacts/:id", async (req, res) => {
    try {
        const { id } = req.params
        const contact = await pool.query("SELECT * FROM CONTACTS WHERE id = $1", [id])
        res.json(contact.rows)
    } catch (err) {
        console.error(err.message)
        res.status(500).json("Server error")
    }
})
//edit a contact
app.put("/contacts/:id", async (req, res) => {
    try {
        const { id } = req.params
        const { f_name, l_name, phone_number } = req.body
        const update_contact = await pool.query("UPDATE CONTACTS SET f_name =$1, l_name = $2, phone_number = $3 WHERE id =$4",
            [f_name, l_name, phone_number, id])
        res.json("TODO was updated successfully")
    } catch (err) {
        console.error(err.message)
        res.status(500).json("Server error")
    }
})
//delete a contact
app.delete("/contacts/:id", async (req, res) => {
    try {
        const { id } = req.params
        const del_contact = await pool.query("DELETE FROM CONTACTS WHERE id = $1", [id])
        res.send("DELETED FROM DB")
    } catch (err) {
        console.error(err.message)
    }
})


//ROUTES FOR CONTACTS END


const PORT = 5000
app.listen(5000, () => {
    console.log(`APP IS RUNNING on PORT ${PORT}`)
})




