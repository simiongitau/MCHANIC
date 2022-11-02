import React from "react";
// import "./Dash/mechanic.css";

export default function Mechanic() {
  return (
    <div className="grid grid-cols-6">
      <div className="max-w-60 h-screen bg-blue-700 bg-border-lightblue ">
        <div className="text-gray-900  pl-[10px] mt-[40px] mb-[20px]">
          <a href="/#" className="font-large text-gray-900 hover:text-white">
            Dashboard
          </a>
        </div>
      </div>
      <div className="bg-white col-span-5">
        <div className="navvv h-[10%] bg-gray-700">
          <nav className=" mr-[10%] ml-[10%] pt-[10px]">
            <input name="search" type="search" />
            <button name="search" type="button">
              Search
            </button>
          </nav>
          {/* <div className="iconn"></div> */}
        </div>
        <div className="tas flex grid grid-cols-4 mt-[30px] pl-[20px] gap-[10px] pr-[20px] h-[40%]">
          <div className="tas1 bg-pink-400 border-b  dark:bg-gray-800  dark:border-gray-700">
            <h3>EARNINGS(MONTHLY)</h3>
            <br />
          </div>
          <div className="tas2 bg-yellow-400">
            <h3>EARNINGS(ANNUAL)</h3>
            <br />
          </div>
          <div className="tas2 bg-purple-400">
            <h3>TASKS</h3>
            <br />
          </div>
          <div className="tas2 bg-indigo-400">
            <h3>ASSIGNED JOBS</h3>
            <br />
          </div>
        </div>
        <div className="par grid grid-cols-2 m-[3%]">
          <div className="part ">
            <form className="parts">
              <h3 className="pb-[15px] align-centered">PARTS USED</h3>
              <p>
                Booking ID
                <br />
              </p>
              <input name="Booking ID" type="text" />
              <br />
              <div className="part1 flex g-10px">
                <div>
                  {" "}
                  <p>
                    Car part
                    <br />
                  </p>
                  <input name="carpart" type="text" />
                </div>
                <div>
                  <p>
                    Quantity
                    <br />
                  </p>
                  <input name="quantity" type="reset" />
                </div>
              </div>
              <button
                className="w-20 h-10 bg-gray-600"
                type="submit"
                placeholder="ADD"
              >
                ADD
              </button>
            </form>
          </div>
          <div className="summ bg-blue-300 m-[5%]">
            <h3>SUMMARY</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
