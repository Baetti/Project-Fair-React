import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function AddProject() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button
        className="btn btn-success"
        variant="primary"
        onClick={handleShow}
      >
        Add Project
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6 row justify-content-center">
              <label className="text-center" htmlFor="profile">
                <input id="profile" type="file" style={{ display: "none" }} />
                <img
                  style={{ width: "250px", height: "150px" }}
                  className="img-fluid rounded border border-warning mb-3 "
                  src="https://storage.googleapis.com/profit-prod/wp-content/uploads/2022/03/e282fdd4-project-plan.jpg"
                  alt="My profile pic"
                />
              </label>
            </div>
            <div className="col-lg-6">
              <input
                type="text"
                className="form-control mb-1"
                placeholder="Project Name"
              />

              <input
                type="text"
                className="form-control mb-1"
                placeholder="Language Used"
              />
              <input
                type="text"
                className="form-control mb-1"
                placeholder="Github Link"
              />
              <input
                type="text"
                className="form-control mb-2"
                placeholder=" Website Link"
              />
            </div>
          </div>
          <input
            type="text"
            className="form-control mb-1"
            placeholder="Project Overview"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>
      {/* <div className="ms-auto">
        <Button className="btn btn-success">ADD PROJECT</Button>
      </div> */}
    </>
  );
}

export default AddProject;
