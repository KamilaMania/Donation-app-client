import React from "react";
import "./Footer.css";

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer>
          <div className="footer-banner">
            <h5>
              {" "}
              CONTACT: Naritaweg 187, Amsterdam <br /> PHONE: 0-634-345-234
            </h5>
          </div>
        </footer>
      </div>
    );
  }
}
