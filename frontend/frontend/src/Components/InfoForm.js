import React from "react"
const InfoForm = () => {
    return (
        <div className="infoForm">
            <form action="">

                <h3>Please fill out the following information to recieve Wedding Invitation regarding Ishani and Sudur's wedding ceremony</h3>
                <h2>The home address entered will be used to deliver the invitation card</h2>
                <table>

                    <tr>
                        <td>
                            <input type="text" placeholder="First Name" />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <input type="text" placeholder="Last Name" />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <input type="text" placeholder="Email" />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <input type="text" placeholder="Phone Number" />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <input type="text" placeholder="Home Address" />
                        </td>
                    </tr>






                </table>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}



export default InfoForm