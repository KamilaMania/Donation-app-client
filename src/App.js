import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
//import Footer from "./components/Footer";
import Camp from "./components/Camp";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Navbar /> */}
        <div className="header">
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/camp/:id" exact component={Camp} />
          </Switch>
        </div>
        {/* <div>
          <Footer />
        </div> */}
      </div>
    );
  }
}

export default App;
