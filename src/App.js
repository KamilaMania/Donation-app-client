import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
//import Map from "./components/Map";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="header">
          <Switch>
            <Route></Route>
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
