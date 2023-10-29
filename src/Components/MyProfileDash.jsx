import React from "react";

import { Link } from "react-router-dom";

function MyProfileDash() {
  return (
    <>
      <div className="card shadow rounded mb-5 bg-primary-subtle m-2">
        <div className="d-flex justify-content-between p-2 w-100 mt-2+">
          <h3>My Profile</h3>
          <button className="btn btn-outline-success">
            <i className="fa-solid fa-check text-primary fa-2x"></i>
          </button>
        </div>
        <div className="d-flex justify-content-center mb-3 w-100">
          {/* picture */}
          <label className="text-center" htmlFor="profile">
            <input id="profile" type="file" style={{ display: "none" }} />
            <img
              style={{ width: "100px", height: "100px" }}
              className="img-fluid  border border-warning rounded-circle "
              src="https://cdn1.iconfinder.com/data/icons/instagram-ui-colored/48/JD-18-512.png"
              alt="My profile pic"
            />
          </label>
        </div>

        <div className=" p-3 align-items-center w-100 ">
          <input
            type="text"
            className="form-control w-100"
            placeholder="Username"
          />
        </div>
        <div className=" p-3 align-items-center w-100 ">
          <input
            type="text"
            className="form-control w-100"
            placeholder="Github"
          />
        </div>
        <div className=" p-3 align-items-center w-100 ">
          <input
            type="text"
            className="form-control w-100"
            placeholder="Title"
          />
        </div>
        <div className=" p-3 align-items-center w-100 mb-3">
          <input
            type="text"
            className="form-control w-100"
            placeholder="LinkedIn"
          />
        </div>
      </div>
    </>
  );
}

export default MyProfileDash;
