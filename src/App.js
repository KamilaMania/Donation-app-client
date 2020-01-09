import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Navbar /> */}
        <div className="header">
          <Switch>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </div>
        <div>
          {/* {" "} */}
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
