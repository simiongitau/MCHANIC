import React, { Component } from "react";
import "./contacts.css";
// import Customer from'../Creating/Dashboard/Customer'
import Mechanic from "../Creating/Dashboard/Mechanic";

class Contacts extends Component {
  render() {
    return (
      <div className="contactuss">
        <div classname="infom">
          helps you to position your HTML element. You can put any HTML element
          at whatever location you like. <br />
          You can specify whether you want the element positioned relative
          <br /> to its natural position in the page or absolute based on its
          parent element.
        </div>
        <div className="float-container">
          <div className="float-child">
            <form className="lab">
              <input name="email" type="email" placeholder="email" />
              <br />
              <input
                name="phonenumber"
                type="number"
                placeholder="phone number"
              />
              <br />
              <input name="messages" type="text" placeholder="message" />
              <br />
              <button name="Submit" type="Submit" placeholder="Submit">
                Submit
              </button>
            </form>
          </div>
          <div className="float-chil">
            <h4>
              <b>Our address</b>
            </h4>
            <p>
              <b>email us</b>: priaceauto@gmail.com
              <br />
              kiplagatwise@gmail.com
              <br />
              <b>po,Box</b>: 102.20100
              <br />
              <b>tel:</b>+2547000000
              <br />
              011992300
            </p>
          </div>
        </div>
      </div>

      //    <Mechanic/>
    );
  }
}

export default Contacts;
