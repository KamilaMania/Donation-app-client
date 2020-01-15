import React from "react";
import "react-credit-cards/es/styles-compiled.css";
import { connect } from "react-redux";
import { createDonation } from "../store/donations/actions";
import DonationForm from "./DonationForm";

class Donation extends React.Component {
  onSubmit = (event, obj) => {
    event.preventDefault();
    console.log(obj);
    const donationInfo = {
      amount: obj.amount,
      name: obj.name,
      campId: this.props.match.params.id
    };
    this.props.createDonation(donationInfo);
  };

  render() {
    return <DonationForm onSubmit={this.onSubmit}></DonationForm>;
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
