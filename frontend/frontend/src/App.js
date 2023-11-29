import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home"
import Contacts from "./Components/Contacts";
import Address from "./Components/Address";
import Rsvp from "./Components/Rsvp";

import "./styles/app.css"
import InfoForm from "./Components/InfoForm";
function App() {
  return (
    <Router>
      <div className="container">
        <div className="row">
          <Navigation />

          <div className="container-fluid">

            <Routes>

              <Route path='/' element={<Home />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/address' element={<Address />} />
              <Route path='/rsvp' element={<Rsvp />} />
              <Route path="/info" element={<InfoForm />} />
            </Routes>
          </div>
        </div>
      </div>
      {/* <InfoForm /> */}
    </Router>






  )

}

export default App;
