import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center w-100  "
      style={{ width: "100%", height: "400px", backgroundColor: "#A569BD" }}
    >
      <div className="footer d-flex justify-content-evenly w-100">
        <div style={{ width: "400px" }} className="website">
          <h4>
            <i class="fa-solid fa-circle-nodes fa-spin"></i>
            {""} Project Fair
          </h4>
          <h6 style={{ color: "white" }}>
            Designed and built with all the love in the world by the Baetti team
            with the help of our contributers.
          </h6>
          <h6 style={{ color: "white" }}>
            Code licensed Baetti, docs CC BY 3.0.
          </h6>
          <p style={{ color: "white" }}>currently v7.3.2</p>
        </div>

        <div className="links d-flex flex-column">
          <h4>Links</h4>
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
            Landing Page
          </Link>
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
            Home Page
          </Link>
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
            Watch History
          </Link>
        </div>

        <div className="guides d-flex flex-column">
          <h4>Guides</h4>
          <Link
            to={"https://react.dev/"}
            style={{ textDecoration: "none", color: "white" }}
          >
            React
          </Link>
          <Link
            to={"https://react-bootstrap.github.io/"}
            style={{ textDecoration: "none", color: "white" }}
          >
            React Bootstrap
          </Link>
          <Link
            to={"https://www.w3schools.com/react/react_router.asp"}
            style={{ textDecoration: "none", color: "white" }}
          >
            Routing
          </Link>
        </div>

        <div className="contact-us">
          <h4>Contact Us</h4>
          <div className="sub d-flex mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Email"
            />
            <button className="btn btn-warning ms-2">
              {" "}
              <i className="fa-solid fa-arrow-right fa-beat"></i>
            </button>
          </div>
          <div className="d-flex justify-content-evenly mt-3">
            <Link
              to={"https://twitter.com/"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <i class="fa-brands fa-twitter"></i>
            </Link>
            <Link
              to={"https://www.instagram.com/"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <i class="fa-brands fa-instagram"></i>
            </Link>
            <Link
              to={"https://www.facebook.com/"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <i class="fa-brands fa-facebook"></i>
            </Link>
            <Link
              to={"https://www.whatsapp.com/"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <i class="fa-brands fa-whatsapp"></i>
            </Link>
            <Link
              to={"https://www.google.com/intl/en_in/gmail/about/"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <i class="fa-solid fa-envelope"></i>
            </Link>
          </div>
        </div>
      </div>
      <p className="mt-4">
        Copyright &copy; 2023 Project Fair. Built with React.
      </p>
    </div>
  );
}

export default Footer;
