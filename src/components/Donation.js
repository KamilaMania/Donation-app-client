import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { connect } from "react-redux";

class Donation extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: ""
  };

  handleInputFocus = e => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div id="PaymentForm">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <br />
        <form className="donation-form">
          <input
            className="input"
            type="tel"
            name="number"
            placeholder="Card Number"
            maxLength={16}
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            //className="amex identified"
            required
          />
          <br />
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Card Holder Name "
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            required
          />
          <br />
          <input
            className="input"
            type="tel"
            name="expiry"
            placeholder="Expiration date"
            maxLength={6}
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            required
          />
          <br />
          <input
            className="input"
            type="tel"
            name="cvc"
            maxLength={3}
            placeholder="CVC"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            required
          />
          <br />
          <button className="submit-button">DONATE</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  camp: state.camp
});
export default connect(mapStateToProps)(Donation);
