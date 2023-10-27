import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar
      style={{ backgroundColor: "#A569BD", zIndex: "1" }}
      className=" position-fixed w-100 top-0 shadow"
    >
      <Container>
        <Navbar.Brand>
          <Link
            to={"/"}
            style={{
              textDecoration: "none",
              fontSize: "25px",
              color: "#1ABC9C",
            }}
          >
            <i className="fa-solid fa-circle-nodes fa-spin me-2 "></i>
            Project Fair
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
