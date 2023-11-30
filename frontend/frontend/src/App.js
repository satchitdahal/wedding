import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import Contacts from "./Components/Contacts";
import Address from "./Components/Address";
import Rsvp from "./Components/Rsvp";
import Login from "./Components/Login";
import InfoForm from "./Components/InfoForm";
import "./styles/app.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const PrivateRoute = ({ element, ...rest }) => {
    return isLoggedIn ? (
      element
    ) : (
      <Navigate to="/" replace state={{ from: rest.location }} />
    );
  };


  return (
    <Router>
      <div className="container">
        {/* Show Navigation only when logged in */}
        {isLoggedIn && <Navigation />}

        <div className="container-fluid">
          <Routes>
            {/* Public Route for Login */}
            <Route path="/login" element={<Login onLogin={handleLogin} />} />

            {/* Redirect to Login if not logged in */}
            <Route path="/" element={<Navigate to="/login" />} />

            {/* Private Routes, accessible only when logged in */}
            <Route path="/home" element={<PrivateRoute element={<Home />} />} />
            <Route path="/contacts" element={<PrivateRoute element={<Contacts />} />} />
            <Route path="/address" element={<PrivateRoute element={<Address />} />} />
            <Route path="/rsvp" element={<PrivateRoute element={<Rsvp />} />} />
            <Route path="/info" element={<InfoForm />} />
            <Route path="*" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
