import React from "react";

import AddProject from "./AddProject";
import { Button } from "react-bootstrap";

function MyProjectsDash() {
  return (
    <>
      <div className="card d-flex shadow rounded mb-5 flex-column m-2">
        <div className="d-flex mt-2 p-3 justify-content-between w-100">
          <h3>My Projects</h3>
          <AddProject />
        </div>
        {/*display user projects */}
        <div className="m-2">
          <div className="d-flex p-3 w-100 align-items-center border rounded">
            <div className="">
              <h4 className="">Project Title</h4>
            </div>
            <div className="icons ms-auto me-1">
              <Button className="btn">
                <i className="fa-brands fa-github "></i>
              </Button>
              <Button className="btn">
                <i className="fa-solid fa-trash  "></i>
              </Button>
              <Button>
                <i className="fa-solid fa-pen-to-square "></i>
              </Button>
            </div>
          </div>
        </div>
        <p className="text-danger fs-3 m-2">No project Uploaded!!!</p>
      </div>
    </>
  );
}

export default MyProjectsDash;
