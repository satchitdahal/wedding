import React, { useState } from "react"
import "../styles/infoForm.css"
const InfoForm = () => {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [phone_number, setPhone] = useState('')
    const [address, setAddr] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch('http://localhost:5000/info', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ fname, lname, email, phone_number, address })
        }

        )
        if (response.ok) {
            console.log("DONE")
        }
        console.log("WRONG")

    }
    return (
        <div className="infoForm">

            <div className="infoForm_desc">
                <h3>Please fill out the following information to recieve Wedding Invitation regarding Ishani and Sudur's wedding ceremony</h3>
                <h2>The home address entered will be used to deliver the invitation card</h2>
            </div>
            <form onSubmit={handleSubmit} className="info_form">

                <table>

                    <tr>
                        <td>
                            <input type="text"
                                placeholder="First Name"
                                value={fname}
                                onChange={(e) => setFname(e.target.value)} />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <input type="text" placeholder="Last Name"
                                value={lname}
                                onChange={(e) => setLname(e.target.value)} />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <input type="text" placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <input type="text" placeholder="Phone Number"
                                value={phone_number}
                                onChange={(e) => setPhone(e.target.value)} />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <input type="text" placeholder="Home Address"
                                value={address}
                                onChange={(e) => setAddr(e.target.value)} />
                        </td>
                    </tr>






                </table>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}



export default InfoForm