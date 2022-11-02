import React from "react";

export default function Appointment() {
  return (
    <div className="justify-centered">
      <div className="text-gray-700  hover:text-blue pl-[10px] mt-[40px] mb-[20px]">
        <h3>
          <a href="/Customer">
            <b>Dashboard</b>
          </a>
        </h3>
      </div>
      <form className="fom mt-20 mb-20 ">
        <h4 className="align-items:center">Book for appointment</h4>
        <input name="firstname" type="text" required />
        <span>FIRST NAME</span>

        <input name="lastname" type="text" required />
        <span>LAST NAME</span>
        <input name="phone number" type="number" required />
        <span>PHONE</span>
        <input name="address" type="text" required />
        <span>ADDRESS</span>
        <br />
        <input name="email" type="email" required />
        <span>EMAIL</span>
        <br />

        <div className="loc grid grid-cols-3 gap-4 content:start w-100">
          <input name="vehicle number" type="location" required />
          <span>VEHICLE NUMBER</span>
          <input name="model" type="text" />
          <span>MODEL NAME</span>
          <br />
          <input name="date" type="date" />
          <span>APPOINTENT DATE</span>
        </div>

        <br />

        <div>
          <input
            className="Submit bg-red-700 mx-20 text-3xl h-20 w-60 mt-5"
            type="Submit"
            onClick="handleSubmit"
          />
          BOOK NOW
        </div>
      </form>
    </div>
  );
}
