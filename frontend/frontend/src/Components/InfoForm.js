// import React, { useState } from "react";
// import "../styles/infoForm.css";
// const InfoForm = () => {
//     const [f_name, setFname] = useState('');
//     const [l_name, setLname] = useState('');
//     const [phone_number, setPhone] = useState('');
//     const [street_add, setStreetAdd] = useState('');
//     const [city, setCity] = useState('');
//     const [zipcode, setZipcode] = useState('');
//     const [states, setStates] = useState('');
//     const [submitted, setSubmitted] = useState(false);

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Form validation logic
//         if (!f_name || !l_name || !phone_number || !street_add || !city || !zipcode || !states) {
//             alert('Please fill out all the required fields.');
//             return;
//         }

//         try {
//             const response = await fetch('http://localhost:5000/address', {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     f_name,
//                     l_name,
//                     phone_number,
//                     street_add,
//                     city,
//                     zipcode,
//                     states
//                 }),
//             });

//             if (response.ok) {
//                 setSubmitted(true);
//                 // Clear form fields
//                 setFname('');
//                 setLname('');
//                 setPhone('');
//                 setStreetAdd('');
//                 setCity('');
//                 setZipcode('');
//                 setStates('');
//             } else {
//                 console.error('Failed to submit form. Status:', response.status);
//             }
//         } catch (err) {
//             console.error(err);
//         }
//     };


//     return (
//         <div className="info_container">

//             <h1>ISHANI AND SUDUR</h1>
//             <p>Would like to collect your address infomation for wedding invitations</p>


//             <div className="infoForm">

//                 {submitted ? (


//                     <div className="thankYouMessage">
//                         <h1>Thank you for submitting the form!</h1>
//                         <p>Your information has been received.</p>
//                     </div>
//                 ) : (


//                     <form onSubmit={handleSubmit} className="info_form">
//                         {/* row 1 */}
//                         <div className="row">

//                             <div className="column">
//                                 <label for="First Name">First Name</label>
//                                 <input
//                                     type="text"
//                                     placeholder="First Name"
//                                     value={f_name}
//                                     onChange={(e) => setFname(e.target.value)}
//                                 />
//                             </div>

//                             <div className="column">
//                                 <label for="Last Name">Last Name</label>
//                                 <input
//                                     type="text"
//                                     placeholder="Last Name"
//                                     value={l_name}
//                                     onChange={(e) => setLname(e.target.value)}
//                                 />
//                             </div>
//                         </div>

//                         {/* row 2 */}
//                         <div className="row">

//                             <div className="column">
//                                 <label for="Phone Number">Phone Number</label>
//                                 <input
//                                     type="text"
//                                     placeholder="Phone Number"
//                                     value={phone_number}
//                                     onChange={(e) => setPhone(e.target.value)}
//                                 />
//                             </div>

//                             <div className="column">
//                                 <label for="Street">Street Address</label>
//                                 <input
//                                     type="text"
//                                     placeholder="Street Address"
//                                     value={street_add}
//                                     onChange={(e) => setStreetAdd(e.target.value)}
//                                 />
//                             </div>
//                         </div>
//                         {/* row 3 */}
//                         <div className="row">
//                             <div className="column">
//                                 <label for="City ">City</label>
//                                 <input
//                                     type="text"
//                                     placeholder="City"
//                                     value={city}
//                                     onChange={(e) => setCity(e.target.value)}
//                                 />
//                             </div>

//                             <div className="column">
//                                 <label for="Zipcode">Zipcode</label>
//                                 <input
//                                     type="text"
//                                     placeholder="Zipcode"
//                                     value={zipcode}
//                                     onChange={(e) => setZipcode(e.target.value)}
//                                 />
//                             </div>
//                         </div>
//                         <div className="row">
//                             <div className="column">
//                                 <label for="State">State</label>
//                                 <input
//                                     type="text"
//                                     placeholder="State"
//                                     value={states}
//                                     onChange={(e) => setStates(e.target.value)}
//                                 />
//                             </div>

//                         </div>
//                         {/* <table>
//                             <tr>
//                                 <td>
//                                     <input
//                                         type="text"
//                                         placeholder="First Name"
//                                         value={f_name}
//                                         onChange={(e) => setFname(e.target.value)}
//                                     />
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     <input
//                                         type="text"
//                                         placeholder="Last Name"
//                                         value={l_name}
//                                         onChange={(e) => setLname(e.target.value)}
//                                     />
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     <input
//                                         type="text"
//                                         placeholder="Phone Number"
//                                         value={phone_number}
//                                         onChange={(e) => setPhone(e.target.value)}
//                                     />
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     <input
//                                         type="text"
//                                         placeholder="Street Address"
//                                         value={street_add}
//                                         onChange={(e) => setStreetAdd(e.target.value)}
//                                     />
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     <input
//                                         type="text"
//                                         placeholder="City"
//                                         value={city}
//                                         onChange={(e) => setCity(e.target.value)}
//                                     />
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     <input
//                                         type="text"
//                                         placeholder="Zipcode"
//                                         value={zipcode}
//                                         onChange={(e) => setZipcode(e.target.value)}
//                                     />
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td>
//                                     <input
//                                         type="text"
//                                         placeholder="State"
//                                         value={states}
//                                         onChange={(e) => setStates(e.target.value)}
//                                     />
//                                 </td>
//                             </tr>
//                         </table> */}
//                         <button type="submit">Submit</button>
//                     </form>

//                 )}
//             </div>

//         </div >
//     );
// };

// export default InfoForm;
import React, { useState } from "react";
import "../styles/infoForm.css";
// import rose from "../styles/pictures/rose.jpg";

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
        <div className="info_container">
            {submitted ? (
                <div className="thankYouMessage">
                    <h1>Thank you for submitting the form!</h1>
                    <p>Your information has been received.</p>
                </div>
            ) : (
                <div className="infoForm">
                    <h1>ISHANI AND SUDUR</h1>
                    <p>Would like to collect your address information for wedding invitations</p>
                    <form onSubmit={handleSubmit} className="info_form">
                        {/* row 1 */}
                        <div className="row">
                            <div className="column">
                                <label htmlFor="f_name">First Name</label>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    value={f_name}
                                    onChange={(e) => setFname(e.target.value)}
                                />
                            </div>
                            <div className="column">
                                <label htmlFor="l_name">Last Name</label>
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    value={l_name}
                                    onChange={(e) => setLname(e.target.value)}
                                />
                            </div>
                        </div>
                        {/* row 2 */}
                        <div className="row">
                            <div className="column">
                                <label htmlFor="phone_number">Phone Number</label>
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    value={phone_number}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <div className="column">
                                <label htmlFor="street_add">Street Address</label>
                                <input
                                    type="text"
                                    placeholder="Street Address"
                                    value={street_add}
                                    onChange={(e) => setStreetAdd(e.target.value)}
                                />
                            </div>
                        </div>
                        {/* row 3 */}
                        <div className="row">
                            <div className="column">
                                <label htmlFor="city">City</label>
                                <input
                                    type="text"
                                    placeholder="City"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </div>
                            <div className="column">
                                <label htmlFor="zipcode">Zipcode</label>
                                <input
                                    type="text"
                                    placeholder="Zipcode"
                                    value={zipcode}
                                    onChange={(e) => setZipcode(e.target.value)}
                                />
                            </div>
                        </div>
                        {/* row 4 */}
                        <div className="row">
                            <div className="column">
                                <label htmlFor="states">State</label>
                                <input
                                    type="text"
                                    placeholder="State"
                                    value={states}
                                    onChange={(e) => setStates(e.target.value)}
                                />
                            </div>
                        </div>
                        {/* Submit button */}
                        <button type="submit">Submit</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default InfoForm;
