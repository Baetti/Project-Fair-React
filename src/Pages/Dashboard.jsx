import React, { useEffect, useState } from "react";
import { Button, Col, Container, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import MyProjectsDash from "../Components/MyProjectsDash";
import MyProfileDash from "../Components/MyProfileDash";
import Header from "../Components/Header";

function Dashboard() {
  const [username, setUsername] = useState("");
  useEffect(() => {
    if (localStorage.getItem("existingUser")) {
      setUsername(JSON.parse(localStorage.getItem("existingUser")).username);
    }
  }, []);
  return (
    // Navigation Bar
    <>
      <Header insideDashboard={true} />
      <Row style={{ marginTop: "100px" }} className="w-100">
        <Col sm={12} md={8}>
          <h2 className="text-center mb-3">
            Welcome <span className="text-success-emphasis">{username}</span>
          </h2>
          {/* My project section */}
          <MyProjectsDash />
        </Col>
        <Col sm={12} md={4}>
          {/* my profile section */}
          <MyProfileDash />
        </Col>
      </Row>
    </>
  );
}

export default Dashboard;
