import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addProjectAPI } from "../services/allApi";

function AddProject() {
  const [show, setShow] = useState(false);
  const [token, setToken] = useState("");
  const [projectDetails, setProjectDetails] = useState({
    title: "",
    languages: "",
    github: "",
    website: "",
    overview: "",
    image: "",
    userId: "",
  });
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (
      localStorage.getItem("existingUser") &&
      sessionStorage.getItem("token")
    ) {
      setProjectDetails({
        ...projectDetails,
        userId: JSON.parse(localStorage.getItem("existingUser"))._id,
      });
      setToken(sessionStorage.getItem("token"));
    }
  }, []);

  useEffect(() => {
    if (projectDetails.image) {
      setPreview(URL.createObjectURL(projectDetails.image));
    }
  }, [projectDetails.image]);
  // console.log(projectDetails);
  // console.log(projectDetails.userId);

  const handleClose = () => {
    setShow(false);
    setPreview("");
    setProjectDetails({
      title: "",
      languages: "",
      github: "",
      website: "",
      overview: "",
      image: "",
      userId: "",
    });
  };
  const handleShow = () => setShow(true);

  const handleSave = async (e) => {
    e.preventDefault();
    const { title, languages, github, website, overview, image, userId } =
      projectDetails;
    if (
      !title ||
      !languages ||
      !github ||
      !website ||
      !overview ||
      !image ||
      !userId
    ) {
      toast.error("Please fill the form completely");
    } else {
      const reqBody = new FormData();
      reqBody.append("title", title);
      reqBody.append("languages", languages);
      reqBody.append("github", github);
      reqBody.append("website", website);
      reqBody.append("overview", overview);
      reqBody.append("projectImage", image);
      reqBody.append("userId", userId);
      const reqHeader = {
        "Content-Type": "multipart/form-data",
        " Authorization": `Bearer ${token}`,
      };
      const result = await addProjectAPI(reqBody, reqHeader);
      // console.log(result);
      if (result.status === 200) {
        toast.success(`Project ${result.data.title} Added Successfully...`);
        setProjectDetails({
          title: "",
          languages: "",
          github: "",
          website: "",
          overview: "",
          image: "",
        });
        handleClose();
      } else {
        toast.warning(result.response.data);
        // console.log(result);
      }
    }
  };

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
              <label className="text-center" htmlFor="projectpic">
                <input
                  id="projectpic"
                  type="file"
                  style={{ display: "none" }}
                  onChange={(e) =>
                    setProjectDetails({
                      ...projectDetails,
                      image: e.target.files[0],
                    })
                  }
                />
                <img
                  style={{ width: "250px", height: "150px" }}
                  className="img-fluid rounded border border-warning mb-3 "
                  src={
                    preview
                      ? preview
                      : "https://static.thenounproject.com/png/212328-200.png"
                  }
                  alt="My project pic"
                />
              </label>
            </div>
            <div className="col-lg-6">
              <input
                value={projectDetails.title}
                onChange={(e) =>
                  setProjectDetails({
                    ...projectDetails,
                    title: e.target.value,
                  })
                }
                type="text"
                className="form-control mb-1"
                placeholder="Project Name"
              />

              <input
                value={projectDetails.languages}
                onChange={(e) =>
                  setProjectDetails({
                    ...projectDetails,
                    languages: e.target.value,
                  })
                }
                type="text"
                className="form-control mb-1"
                placeholder="Language Used"
              />
              <input
                value={projectDetails.github}
                onChange={(e) =>
                  setProjectDetails({
                    ...projectDetails,
                    github: e.target.value,
                  })
                }
                type="text"
                className="form-control mb-1"
                placeholder="Github Link"
              />
              <input
                value={projectDetails.website}
                onChange={(e) =>
                  setProjectDetails({
                    ...projectDetails,
                    website: e.target.value,
                  })
                }
                type="text"
                className="form-control mb-2"
                placeholder=" Website Link"
              />
            </div>
          </div>
          <input
            value={projectDetails.overview}
            onChange={(e) =>
              setProjectDetails({ ...projectDetails, overview: e.target.value })
            }
            type="text"
            className="form-control mb-1"
            placeholder="Project Overview"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button className="shadow" variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleSave} className="shadow" variant="primary">
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      {/* <div className="ms-auto">
        <Button className="btn btn-success">ADD PROJECT</Button>
      </div> */}
      <ToastContainer position="top-right" autoclose={2000} theme="colored" />
    </>
  );
}

export default AddProject;
