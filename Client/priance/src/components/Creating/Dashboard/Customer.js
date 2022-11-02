import React from "react";
// import { Link } from "react-router-dom";

export default function Customer() {
  return (
    <div className="grid grid-cols-6">
      <div className="max-w-60 h-screen bg-blue-700 bg-border-lightblue ">
        {/* sidebar
        <ul>
          <li>
            <a href="/appointment">Bookings</a>
          </li>
          <li>
            <a href="/service">Service</a>
          </li>
        </ul> */}
        <div className="text-gray-900  pl-[10px] mt-[40px] mb-[20px]">
          <h3>
            <b>Dashboard</b>
          </h3>
        </div>
        <div className="hover:text-white mb-[20px] pl-[10%]">
          <a href="/appointment">Bookings</a>
        </div>
        <div className="hover:text-white mb-[20px] pl-[10%]">
          <a href="/service">Service</a>
        </div>
        <div className="pl-[30%]">
          <a href="/#">
            <b>LOG OUT</b>
          </a>
        </div>
      </div>

      <div className="bg-green-600 col-span-5">
        <div className=" h-[10%] bg-white">navbar page</div>
        <div className="grid grid-cols-3">
          <div className="bg-purple-500 h-[200px] col-span-2">divv2</div>
          <div className="bg-red-500 h-[200px]">divv1</div>
        </div>
        <div className="grid grid-cols-2">
          <div className="bg-violet-500 h-[200px]">divv3</div>
          <div>divv4</div>
        </div>
      </div>
    </div>
  );
}
