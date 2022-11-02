import React from "react";
import { Link } from "react-router-dom";
import Contacts from "../Contacts/Contacts";
import logo from "../images/logo1.jpg";
// import "./navbar.css"
// import toyota from '../Products/toyota';

export default function Navbar() {
  return (
    <nav className="px-2  border-gray-200   p-2">
      {/* image div */}
      <div className="flex justify-between items-center px-40 p-4 text-2xl font-bold bg-gray-400">
        <img src={logo} alt="priance" className="h-20 w-20 rounded-full" />
        <span>PRIANCE AUTO</span>
      </div>

      <ul className="flex flex-col p-4 mt-4 bg-green-800 text-black  border border-gray-100 md:flex-row md:space-x-8 md:mt-0  md:font-medium md:border-0  dark:border-gray-700  text-2xl">
        <li
          className="block py-2 pr-4 pl-3 bg-blue-700 rounded md:bg-transparent  md:p-0 md:dark:bg-transparent"
          aria-current="page"
        >
          <Link to="./" className="links">
            Home
          </Link>
        </li>

        <li>
          <div className="dropdown-menu">
            <button className="menu-link text-white font-bold text-3xl mx-10">
              Products
              {/* <i className='fa fa-caret-down'></i> */}
            </button>
            <div className="menu-content">
              <ul
                className="py-1 text-sm text-gray-700 dark:text-gray-400"
                aria-labelledby="dropdownLargeButton"
              >
                <li>
                  {" "}
                  <Link to="toyota block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Toyota
                  </Link>
                  <br />
                </li>
                <li>
                  <Link to="mercedes benz block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Mercedes benz
                  </Link>
                  <br />
                </li>
                <li>
                  <Link to="landrover block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Landrover
                  </Link>
                  <br />
                </li>
                <li>
                  <Link to="jeep block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Jeep
                  </Link>
                  <br />
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          {" "}
          <div className="dropdown-menu mx-10">
            <button className="menu-link text-white font-bold text-3xl px-10">
              Services
              {/* <i className='fa fa-caret-down'></i> */}
            </button>
            <div className="menu-content">
              <ul
                className="py-1 text-sm text-gray-700 dark:text-gray-400"
                aria-labelledby="dropdownLargeButton"
              >
                <li>
                  {" "}
                  <Link to="spare block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    spare parts
                  </Link>
                </li>
                <li>
                  <Link to="body block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    bodyworks
                  </Link>
                </li>
                <li>
                  <Link to="turbo block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    turbo charge
                  </Link>
                </li>
                <li>
                  <Link to="tyre block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Tyres allignment
                  </Link>
                </li>
                <li>
                  <Link to="tow block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Tow truck
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <Link
            to="./Login"
            className="links block py-2 pr-4 pl-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            to="./Signup"
            className="links block py-2 pr-4 pl-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Signup
          </Link>
        </li>
        <li>
          <Link
            to="./Contact"
            className="links block py-2 pr-4 pl-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
