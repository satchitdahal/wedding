import React, { useState } from "react";
import { Link } from 'react-router-dom'
import "../styles/nav.css"

const Navigation = () => {
    return (
        <div className="navbar">
            <div className="nav-item"><Link to="/">Home</Link></div>
            <div className="nav-item"><Link to="/contacts">Contacts</Link></div>
            <div className="nav-item"><Link to="/address">Address</Link></div>
            <div className="nav-item"><Link to="/rsvp">RSVP</Link></div>
        </div>
    )
}

export default Navigation