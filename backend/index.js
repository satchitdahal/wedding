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
//**********************************************************************************
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
//********************************************************************************** */
//ROUTES FOR ADDRESS
//post an address
app.post("/address", async (req, res) => {
    try {
        const { f_name, l_name, phone_number, street_add, city, zipcode, states } = req.body;

        // // Verify that the phone_number exists in Contacts table
        // const existingContact = await pool.query('SELECT * FROM Contacts WHERE phone_number = $1', [phone_number]);

        // if (existingContact.rows.length === 0) {
        //     return res.status(400).json({ error: 'Contact with provided phone_number does not exist.' });
        // }

        const addAddrQuery = `
            INSERT INTO Address (f_name, l_name, phone_number, street_add, city, zipcode, states)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING *`;

        const addedAddress = await pool.query(addAddrQuery, [f_name, l_name, phone_number, street_add, city, zipcode, states]);

        res.json(addedAddress.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Endpoint to get all addresses
app.get("/address", async (req, res) => {
    try {
        const addresses = await pool.query('SELECT * FROM Address');
        res.json(addresses.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//edit an address
//delete an address

//ROUTES FOR RSVP

const PORT = 5000
app.listen(5000, () => {
    console.log(`APP IS RUNNING on PORT ${PORT}`)
})




