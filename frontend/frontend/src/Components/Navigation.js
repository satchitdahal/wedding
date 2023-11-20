import React, { useState } from "react";
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className="nav_container">
            <nav className="nav">
                <ul>

                    <li>
                        <Link to="/">Home</Link>

                    </li>

                    <li>
                        <Link to="/info">Info</Link>

                    </li>

                    <li>
                        <Link to="/">Settings</Link>

                    </li>


                </ul>
            </nav>
        </div>
    )
}

export default Navigation