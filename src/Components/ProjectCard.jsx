import React, { useState } from "react";
import { Card, Col, Modal, Row } from "react-bootstrap";
import Projectimg from "../Assets/mediaplayer.png";

function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card className="shadow p-3 mb-5 btn" onClick={handleShow}>
        <Card.Img className="img-fluid" variant="top" src={Projectimg} />
        <Card.Body>
          <Card.Title>Project Title</Card.Title>
        </Card.Body>
      </Card>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>PROJECT DETAILS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <img
                style={{ height: "200px" }}
                className="img-fluid"
                src={Projectimg}
                alt="Single Project"
              />
            </Col>
            <Col>
              <h2>Project Title</h2>
              <p>Project Overview</p>
              <p>
                Languages Used:{" "}
                <span className="ms-2 fw-bolder">HTML,CSS,JAVASCRIPT</span>
              </p>
            </Col>
          </Row>

          <div className="text-center mt-3">
            <a
              href="https://github.com/Baetti/Mediaplayer.git"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://media-playernetlify.netlify.app"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              <i className="fa-solid fa-link"></i>
            </a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProjectCard;
