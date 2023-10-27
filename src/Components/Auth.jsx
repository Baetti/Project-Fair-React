import React from "react";
import { Link } from "react-router-dom";
import LoginIcon from "../Assets/Login.png";
function Auth({ register }) {
  const registerForm = register ? true : false;
  return (
    <div
      style={{ width: "100%", height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div className="container w-75">
        <Link
          to={"/"}
          style={{ textDecoration: "none" }}
          className="d-flex align-items-center"
        >
          <h5>
            <i class="fa-solid fa-angle-left me-1"></i>Back to Home
          </h5>
        </Link>
        <div className="card shadow p-5" style={{ backgroundColor: "#F4ECF7" }}>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src={LoginIcon} alt="" className="rounded-start w-100" />
            </div>
            <div className="col-lg-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
