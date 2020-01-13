import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import Camp from "./components/Camp";
import Donation from "./components/Donation";
import ShoppingList from "./components/ShoppingList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="header">
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/camp/:id" exact component={Camp} />
            <Route path="/donation/:id" exact component={Donation} />
            <Route path="/shoppinglist/" exact component={ShoppingList} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
