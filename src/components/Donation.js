import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { connect } from "react-redux";
import { createDonation } from "../store/donations/actions";
import { Link } from "react-router-dom";
import { toastr } from "react-redux-toastr";

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

  onSubmit = event => {
    event.preventDefault();
    const donationInfo = {
      amount: this.state.amount,
      name: this.state.name,
      campId: this.props.match.params.id
    };

    this.props.createDonation(donationInfo);
    this.props.history.push("/");
    toastr.success(
      "Transaction is successfully completed",
      "Thank you for supporting us! We wish you a lovely day."
    );
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
        <form
          className="donation-form"
          onSubmit={event => this.onSubmit(event)}
        >
          <input
            className="input"
            type="decimal"
            name="amount"
            placeholder="Insert amount you would like to donate "
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
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
          <button
            className="submit-button"
            type="submit"
            component={Link}
            to={"/"}
          >
            DONATE
          </button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    createDonation: donation => dispatch(createDonation(donation))
  };
};

const mapStateToProps = state => ({
  camp: state.camp
});
export default connect(mapStateToProps, mapDispatchToProps)(Donation);
