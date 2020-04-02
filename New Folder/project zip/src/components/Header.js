import React from "react";

import { Link, animateScroll as scroll } from "react-scroll";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Logo from "../assets/img/logo.jpeg";
import styled from "styled-components";



const Header = () => {
  const scrollTo = id => e => {
    e.preventDefault();
    scroll.scrollTo({
      duration: 1500,
      delay: 100,
      smooth: "easeInOutQuint",
      containerId: id
    });
  };

  return (
    <header>
      <Navbar bg="none" expand="lg" fixed="top">
        <Container>
          <span>

            {/* <img src={Logo} height="50px" width="50px" /> */}
            <Navbar.Brand
              href="#home"
              onClick={scrollTo("home")}
              aria-label="Logo"
            >
              <span style={{
                fontSize: "37px",
                fontFamily: "auto",
                fontWeight: "bolder",
                color: "darkgoldenrod",
              }}>U<span style={{
                fontSize: "20px",
                fontFamily: "serif",
                fontWeight: "100",

              }}
              >NIQUE COMPANY</span></span>
            </Navbar.Brand>
          </span>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span />
            <span />
            <span />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Link
                href="#"
                className="nav-link"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={400}
              >
                Home
              </Link>
              <Link
                href="#"
                className="nav-link"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-50}
                duration={400}
              >
                About
              </Link>
              <Link
                href="#"
                className="nav-link"
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-50}
                duration={400}
              >
                Services
              </Link>
              <Link
                href="#"
                className="nav-link"
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-50}
                duration={400}
              >
                Projects
              </Link>
              <Link
                href="#"
                className="nav-link"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={400}
              >
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
