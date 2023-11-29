import React from "react";
import { Link } from 'react-router-dom'
import "../styles/nav.css"

const Navigation = () => {
    return (
        <div className="navbar">


            <div className="nav-item_home"><Link to="/">Home</Link></div>
            <div className="nav-item_contacts"><Link to="/contacts">Contacts</Link></div>
            <div className="nav-item_address"><Link to="/address">Address</Link></div>
            <div className="nav-item_rsvp"><Link to="/rsvp">RSVP</Link></div>

        </div>
    )
}

export default Navigation