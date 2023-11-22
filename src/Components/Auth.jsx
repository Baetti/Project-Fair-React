import React, { useState } from "react";
import { Link, json, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import LoginIcon from "../Assets/Login.png";
import { loginAPI, registerAPI } from "../services/allApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Auth({ register }) {
  const isRegisterForm = register ? true : false;
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  // console.log(userData);
  const handleRegister = async (e) => {
    e.preventDefault();
    const { username, email, password } = userData;
    if (!username || !email || !password) {
      toast.error("Please fill the form completely");
    } else {
      // api call
      const res = await registerAPI(userData);
      // console.log(res);
      if (res.status === 200) {
        toast.success(`${res.data.username} has successfully registered`);
        // reset state
        setUserData({
          username: "",
          email: "",
          password: "",
        });
        navigate("/login");
      } else {
        toast.warning(res.response.data);
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = userData;
    if (!email || !password) {
      toast.error("Please fill the form completely");
    } else {
      // api call
      const res = await loginAPI({ email, password });
      console.log(res);
      if (res.status === 200) {
        //save res
        localStorage.setItem(
          "existingUser",
          JSON.stringify(res.data.existingUser)
        );
        localStorage.setItem("Role", res.data.role);
        sessionStorage.setItem("token", res.data.token);
        // reset state
        setUserData({
          email: "",
          password: "",
        });
        navigate("/");
      } else {
        toast.warning(res.response.data);
      }
    }
  };

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
                        value={userData.username}
                        onChange={(e) =>
                          setUserData({ ...userData, username: e.target.value })
                        }
                        type="text"
                        placeholder="Enter your name"
                        style={{ boxShadow: "none" }}
                      />
                    </Form.Group>
                  )}

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      value={userData.email}
                      onChange={(e) =>
                        setUserData({ ...userData, email: e.target.value })
                      }
                      type="email"
                      placeholder="Enter your email"
                      style={{ boxShadow: "none" }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      value={userData.password}
                      onChange={(e) =>
                        setUserData({ ...userData, password: e.target.value })
                      }
                      style={{ boxShadow: "none" }}
                      type="password"
                      placeholder="Enter your password"
                    />
                  </Form.Group>

                  {isRegisterForm ? (
                    <div className="d-flex justify-content-center flex-column align-items-center w-100">
                      <Button
                        onClick={handleRegister}
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
                        onClick={handleLogin}
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
      <ToastContainer position="top-right" autoclose={2000} theme="colored" />
    </div>
  );
}

export default Auth;
