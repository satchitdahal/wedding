import React, { useState } from "react";
import "../styles/infoForm.css";

const InfoForm = () => {
    const [f_name, setFname] = useState('');
    const [l_name, setLname] = useState('');
    const [phone_number, setPhone] = useState('');
    const [street_add, setStreetAdd] = useState('');
    const [city, setCity] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [states, setStates] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Form validation logic
        if (!f_name || !l_name || !phone_number || !street_add || !city || !zipcode || !states) {
            alert('Please fill out all the required fields.');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/address', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    f_name,
                    l_name,
                    phone_number,
                    street_add,
                    city,
                    zipcode,
                    states
                }),
            });

            if (response.ok) {
                setSubmitted(true);
                // Clear form fields
                setFname('');
                setLname('');
                setPhone('');
                setStreetAdd('');
                setCity('');
                setZipcode('');
                setStates('');
            } else {
                console.error('Failed to submit form. Status:', response.status);
            }
        } catch (err) {
            console.error(err);
        }
    };


    return (
        <div className="infoForm">
            {submitted ? (
                <div className="thankYouMessage">
                    <h3>Thank you for submitting the form!</h3>
                    <p>Your information has been received.</p>
                </div>
            ) : (
                <div>
                    <div className="infoForm_desc">
                        <h3>Please fill out the following information to receive Wedding Invitations regarding Ishani and Sudur's wedding ceremony</h3>
                        <h2>The home address entered will be used to deliver the invitation card</h2>
                    </div>
                    <form onSubmit={handleSubmit} className="info_form">
                        <table>
                            <tr>
                                <td>
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        value={f_name}
                                        onChange={(e) => setFname(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        value={l_name}
                                        onChange={(e) => setLname(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input
                                        type="text"
                                        placeholder="Phone Number"
                                        value={phone_number}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input
                                        type="text"
                                        placeholder="Street Address"
                                        value={street_add}
                                        onChange={(e) => setStreetAdd(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input
                                        type="text"
                                        placeholder="City"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input
                                        type="text"
                                        placeholder="Zipcode"
                                        value={zipcode}
                                        onChange={(e) => setZipcode(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input
                                        type="text"
                                        placeholder="State"
                                        value={states}
                                        onChange={(e) => setStates(e.target.value)}
                                    />
                                </td>
                            </tr>
                        </table>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default InfoForm;
