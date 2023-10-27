import React from "react";
import { Col, Row } from "react-bootstrap";
import Projecticon from "../Assets/projecticon.png";
import HomeProjects from "../Components/HomeProjects";

function PFHome() {
  return (
    <>
      {/* Landing Section */}
      <div
        className="container-fluid rounded"
        style={{ width: "100%", height: "100vh", backgroundColor: "#F4ECF7" }}
      >
        <Row className="align-items-center p-5 ">
          <Col sm={12} md={6} className="">
            <h1 className="" style={{ fontSize: "65px", color: "#1ABC9C" }}>
              {" "}
              <i className="fa-solid fa-circle-nodes fa-spin me-2"></i>PROJECT
              FAIR
            </h1>
            <h3 className="ms-5">Our team is the key to creativity...</h3>
            <h4 className="ms-5">Think,Plan,Do...</h4>
            <button
              className="btn btn-warning mt-3 ms-5 "
              style={{ color: "black" }}
            >
              {" "}
              Get Started<i className="fa-solid fa-dice-five fa-spin ms-2"></i>
              <i className="ms-2 fa-solid fa-arrow-right fa-beat"></i>
            </button>
          </Col>
          <Col sm={12} md={6}>
            <img
              style={{ marginTop: "100px", width: "60%" }}
              className="img-fluid ms-5"
              src={Projecticon}
              alt="project fair"
            />
          </Col>
        </Row>
      </div>

      {/* Glimpse of all projects */}
      <div className="all-projects mt-3" style={{ backgroundColor: "#F5EEF8" }}>
        <HomeProjects />
      </div>
    </>
  );
}

export default PFHome;
