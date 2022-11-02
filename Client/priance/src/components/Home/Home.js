import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
// import About from '../About/About'
import img1 from "../images/mbaimbe.jpeg";

class Home extends Component {
  render() {
    return (
      <div className="mt-100">
        <div className="mb-50">
          <Navbar />
        </div>

        <div className="clusive max-w-md mx-auto bg-none rounded-xl shadow-md overflow-hidden md:max-w-full ">
          <img
            className="h-full w-full opacity-40 md:h-full md:w-full"
            src={img1}
            alt="clusive"
            width="100%"
          />
          <div className="exclusive position-relative pt-200 ">
            <div className="abou absolute pt-200 top-[150px] mx-20 text-3xl font-bold">
              <h4>About Us</h4>
              <span className="">
                {" "}
                The state of art, equipment and expertise used in the world of
                technology is being developed and improved in each and every day
                in order for one to succeed in this business he must be dynamic
                able to cope par with the changing technologies.
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
