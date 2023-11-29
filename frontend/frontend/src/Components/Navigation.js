import React from "react";
import { Link } from 'react-router-dom'
import "../styles/nav.css"

const Navigation = () => {
    return (
        //div that is the nav
        <nav className="navbar">
            <div className="nav-item_home">
                <Link to="/">Home</Link>
            </div>
            <div className="nav-item_contacts">
                <Link to="/contacts">Contacts</Link>
            </div>
            <div className="nav-item_address">
                <Link to="/address">Address</Link>
            </div>
            <div className="nav-item_rsvp">
                <Link to="/rsvp">RSVP</Link>
            </div>

        </nav>
    )
}

export default Navigation