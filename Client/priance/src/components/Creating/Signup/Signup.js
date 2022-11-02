import React, { Component } from "react";
import "../common.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
// const [message, setMg] = useState("");

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      phonenumber: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { firstname, lastname, email, phonenumber, password } = this.state;
    console.log(firstname, lastname, email, phonenumber, password);
    axios
      ?.post("http://localhost:5000/user/createadmin", {
        firstname,
        lastname,
        email,
        phonenumber,
        password,
      })
      .then(function (response) {
        toast.success("🦄 successfully registered!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          width: "20px",
          height: "30px",
        });
        const navigate = useNavigate();
        navigate("/login");
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    
  }
  render() {
    return (
      <>
        <div>
          <form onSubmit={this.handleSubmit}>
            <h3>SIGNUP</h3>
            <input
              className="neo"
              name="firstname"
              type="text"
              placeholder="first name"
              onChange={(e) => this.setState({ firstname: e.target.value })}
              required
            />
            <input
              className="neo"
              name="lastname"
              type="text"
              placeholder="last name"
              onChange={(e) => this.setState({ lastname: e.target.value })}
            />
            <br />
            <input
              name="email"
              type="email"
              placeholder="email"
              onChange={(e) => this.setState({ email: e.target.value })}
              required
            />
            <br />
            <input
              name="phone number"
              type="tel"
              placeholder="phone number"
              onChange={(e) => this.setState({ phonenumber: e.target.value })}
              required
            />
            <br />
            <input
              name="password"
              type="password"
              placeholder="password"
              onChange={(e) => this.setState({ password: e.target.value })}
              required
            />
            <br />
            {/* <input name='confirm password' type='confirm password' placeholder='confirm password' required/><br/> */}
            <button type="submit" name="submit">
              Create
            </button>
            <br />
            <span>already have an account </span>
            <br />
            <a href="Login">click here to login</a>
          </form>
        </div>
        <ToastContainer />
      </>
    );
  }
}
