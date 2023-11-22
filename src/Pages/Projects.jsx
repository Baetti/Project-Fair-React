import React, { useEffect } from "react";
import Header from "../Components/Header";
import { Col, Row } from "react-bootstrap";
import ProjectCard from "../Components/ProjectCard";

function Projects() {
  return (
    <>
      {/* Navigation bar */}
      <Header />
      {/* all projects */}
      <div className="text-center" style={{ marginTop: "100px" }}>
        <h1 className="mt-2"> All Projects</h1>
        <div className="d-flex mb-5 justify-content-center w-100">
          <div className="d-flex align-items-center w-50 p-3">
            <input
              className="form-control rounded "
              placeholder="Search Projects by Technologies"
            />
            <i
              style={{ marginLeft: "-50px" }}
              className="fa-brands fa-searchengin"
            ></i>
          </div>
        </div>
        <div className="container-fluid">
          <Row>
            <Col sm={12} md={6} lg={4}>
              <ProjectCard />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Projects;
