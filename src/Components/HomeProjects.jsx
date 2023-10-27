import React from "react";

import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

function HomeProjects() {
  return (
    <>
      <h1 className="text-center mb-5">Explore Our Projects</h1>
      <marquee scrollAmount={25}>
        <Row className="d-flex justify-content-between ">
          <Col sm={12} md={6} lg={4}>
            <ProjectCard />
          </Col>
          <Col sm={12} md={6} lg={4}>
            <ProjectCard />
          </Col>
          <Col sm={12} md={6} lg={4}>
            <ProjectCard />
          </Col>
        </Row>
      </marquee>
      <div className="text-center mt-5 fs-5">
        <Link to={"/projects"} style={{ textDecoration: "none" }}>
          View More Projects
        </Link>
      </div>
    </>
  );
}

export default HomeProjects;
