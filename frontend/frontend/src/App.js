import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import InfoForm from "./Components/InfoForm";
import Navigation from "./Components/Navigation";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/info" Component={InfoForm} />
        <Navigation />

      </Switch>
      {/* <InfoForm /> */}
    </Router>






  )

}

export default App;
