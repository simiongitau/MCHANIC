// import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { useState } from "react";
import img from "../../images/control.png";

const Admin = () => {
  // [Data, setData] = useState([]);
  //  fetchData = async () => {
  //   await axios
  //     .get(`http://localhost:8000/user/getCompany`)
  //     .then((response) => {
  //       console.log(response.data.c);
  //       setData(response.data.c);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // const [open, setOpen] = useState(true);

  return (
    <div classsName="grid grid-cols-6 ">
      <div className="max-w-[20%]  h-screen bg-blue-600 p-6 border-b-2 border-gray-200 float-left">
        {/* <img
          src={img}
          className="absolute cursor-pointer rounded-full-right-3 top-9 w-7 border-2 border-blue-600"
          alt="control"
        /> */}

        <a href="/#" className="font-bold text-2xl text-gray-800 uppercase">
          dashboard
        </a>
      </div>
      <div className=" col-span-5 bg-white">
        <div className="h-[15%] bg-gray-700  mt-[50px]  ">
          <Link to="//user/getAdmin">
            <button className="bg-green-300 p-[1.2em] uppercase ">
              system users
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-2 m-[20px] gap-[30px] ">
          <div className="h-80 bg-green-700 ml-[20px]">
            table new appointments
          </div>
          <div className="h-80 bg-pink-700 ">table available mechanics</div>
        </div>

        <div className="m-10%">
          <div>
            <form className="min-h-120 gap-8">
              <h3>Assign mechanic</h3>
              <input className="book " type="ID" placeholder="Booking ID" />
              <br />
              <input
                className="mechanic ID"
                type="ID"
                placeholder="mechanic ID"
              />
              <br />
              <input className="w-25 h-12 " type="submit" placeholder="BOOK" />
              {/* <button
              className="bg-blue-600 w-30 h-12"
              type="submit"
              placeholder="book"
            >
              BOOK
            </button> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
