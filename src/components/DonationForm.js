import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
//import { Link } from "react-router-dom";

export default class DonationForm extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
    amount: 0
  };
  componentDidMount() {
    if (this.props.price) {
      this.setState({ amount: this.props.price });
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (
      nextProps.price &&
      (!this.props.price || nextProps.price !== this.props.price)
    ) {
      this.setState({ amount: nextProps.price });
    }
  }
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
        <br />
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <br />
        <form
          className="donation-form"
          onSubmit={event => this.props.onSubmit(event, this.state)}
        >
          <input
            className="input"
            type="number"
            name="amount"
            placeholder="Insert amount you would like to donate "
            value={this.state.amount}
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            disabled={this.props.price}
            required
          />
          <br />
          <input
            className="input"
            type="tel"
            name="number"
            placeholder="Card Number"
            maxLength={16}
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
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
            maxLength={4}
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
          <button className="submit-button" type="submit">
            DONATE
          </button>
        </form>
      </div>
    );
  }
}
