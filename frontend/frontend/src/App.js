import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InfoForm from "./Components/InfoForm";
import Navigation from "./Components/Navigation";
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<InfoForm />} />
        <Route path='/nav' element={<Navigation />} />
      </Routes>
      {/* <InfoForm /> */}
    </Router>






  )

}

export default App;
