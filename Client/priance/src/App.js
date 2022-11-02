import React from "react";
import "./App.css";
// import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";

// import Service from "./components/Services/Service";
// import About from './components/About/About';
import Login from "./components/Creating/Login/Login";
import Signup from "./components/Creating/Signup/Signup";
import Contacts from "./components/Contacts/Contacts";
import Service from "./components/Services/Service";
import Products from "./components/Products/Products";
import Mechanic from "./components/Creating/Dashboard/Mechanic";
import Customer from "./components/Creating/Dashboard/Customer";
import Admin from "./components/Creating/Dashboard/Admin";
import Appointment from "./components/Creating/Dashboard/Dash/Appointment";
function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}

      <Routes>
        <Route path="/" exact element={<Home />} />
        {/* <Route path='/About' element={<About/>}/> */}
        <Route path="/Products" element={<Products />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Contact" element={<Contacts />} />
        <Route path="/Mechanic" element={<Mechanic />} />
        <Route path="/Customer" element={<Customer />} />
        <Route path="/Admin" element={<Admin />} />,
        <Route path="/Service" element={<Service />} />
        <Route path="/appointment" element={<Appointment />} />,
      </Routes>

      <div className="bottom-0">
        <Footer />
      </div>
    </div>
  );
}

export default App;
