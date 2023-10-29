import React from "react";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import LoginIcon from "../Assets/Login.png";

function Auth({ register }) {
  const isRegisterForm = register ? true : false;
  return (
    <div
      style={{ width: "100%", height: "100vh" }}
      className="d-flex justify-content-center align-items-center "
    >
      <div className="container w-75">
        <Link
          to={"/"}
          style={{ textDecoration: "none" }}
          className="d-flex align-items-center w-100"
        >
          <h5>
            <i class="fa-solid fa-angle-left me-1"></i>Back to Home
          </h5>
        </Link>
        <div className="card shadow p-5" style={{ backgroundColor: "#A569BD" }}>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src={LoginIcon} alt="" className="rounded-start w-100" />
            </div>
            <div className="col-lg-6">
              <div className="d-flex flex-column">
                <div
                  className="d-flex mb-2 align-items-center justify-content-center w-100"
                  style={{ color: "#1ABC9C" }}
                >
                  <i className="fa-solid fa-circle-nodes  fa-2x me-1 "></i>
                  {""} <span className="h1 fw-bolder mb-0">Project Fair</span>
                </div>
                <h3 className="fw-normal mb-3 text-center">
                  {isRegisterForm
                    ? "Sign Up to Your Account "
                    : "Sign in to your Account"}
                </h3>
                <Form className="w-100">
                  {isRegisterForm && (
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                      <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        style={{ boxShadow: "none" }}
                      />
                    </Form.Group>
                  )}

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      style={{ boxShadow: "none" }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      style={{ boxShadow: "none" }}
                      type="password"
                      placeholder="Enter your password"
                    />
                  </Form.Group>

                  {isRegisterForm ? (
                    <div className="d-flex justify-content-center flex-column align-items-center w-100">
                      <Button
                        variant="success"
                        type="submit"
                        size="lg"
                        className="text-center "
                      >
                        Register
                      </Button>
                      <p style={{ marginTop: "10px", fontSize: "16px" }}>
                        Already have an account ?{" "}
                        <Link
                          to={"/login"}
                          style={{ textDecoration: "none" }}
                          className="btn-link"
                        >
                          Login here
                        </Link>{" "}
                      </p>
                    </div>
                  ) : (
                    <div className="d-flex justify-content-center flex-column align-items-center">
                      <Button
                        variant="success"
                        type="submit"
                        size="lg"
                        className="text-center"
                      >
                        Login
                      </Button>
                      <p style={{ marginTop: "10px", fontSize: "16px" }}>
                        New user ?{" "}
                        <Link
                          className="btn-link"
                          to={"/register"}
                          style={{ textDecoration: "none" }}
                        >
                          Register Here
                        </Link>{" "}
                      </p>
                    </div>
                  )}
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
