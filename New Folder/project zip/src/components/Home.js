import React from "react";

import styled from "styled-components";

import bgImg from "../assets/img/bg-home.jpg";
import downArrow from '../assets/downArrow.png';
import { Link, animateScroll as scroll } from "react-scroll";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const Section = styled.section`
  position: relative;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  &:after,
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    display: block;
    border-bottom: 10px solid #fff;
    z-index: 1;
  }

  &:before {
    left: 50%;
    right: 0px;
    border-left: 11px solid transparent;
  }

  &:after {
    right: 50%;
    left: 0px;
    border-right: 11px solid transparent;
  }

  @media (min-width: 992px) {
    // padding-left: 110px;
    // padding-right: 110px;
    // padding-top: 279px;
    // padding-bottom: 111px;
  }

  .container {
    z-index: 1;
    user-select: none;
    cursor: default;
  }
`;

// background: linear-gradient(33deg, #8400ff, #413bff);

const BgOverlay = styled.div`
  background: linear-gradient(33deg, #2b2b2b00, #623bff2e);
  opacity: 0.9;
  position: absolute;
  height: 100%;
  width: 100%;
  right: 0;
  bottom: 0;
  left: 0;
  top: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 1;

  @media (min-width: 992px) {
    background-image: linear-gradient(62deg, #2b2b2b00, #623bff2e);
  }
`;

const HomeTitle = styled.h1`
  font-weight: 300;
  text-align: center;
  color: #fff;
  font-size: 22px;
  line-height: 1.55;
  margin-bottom: 23px;

  @media (min-width: 992px) {
    font-size: 38px;
    line-height: 1.39;
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0;
  }
`;

const SubTitle = styled.h5`
  font-size: 14px;
  font-weight: normal;
  line-height: 1.83;
  text-align: center;
  color: #ffffff;

  @media (min-width: 992px) {
    max-width: 385px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 49px;
  }
`;

const Home = () => {

  function secondSlide() {
    document.getElementsByClassName("home1")[0].style.transition = "0.5s"
    document.getElementsByClassName("home1")[0].style.opacity = "0"
    setTimeout(() => {
      document.getElementsByClassName("home1")[0].style.display = "none"
      document.getElementsByClassName("home2")[0].style.display = "block"
      document.getElementsByClassName("home2")[0].style.transition = "0.5s"
    }, 500)
    setTimeout(() => {
    }, 500)
    setTimeout(() => {
      document.getElementsByClassName("home2")[0].style.opacity = "1"
    }, 1000)

  }

  return (
    <>
      {/* <Section id="home" className="home1" style={{ backgroundImage: `url(${bgImg}`, opacity: 1 }}>
        <BgOverlay />
        <div className="container homeDiv">
          <HomeTitle data-aos="zoom-in">
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout.
        </HomeTitle>
          <SubTitle
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-delay="400"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
        </SubTitle>
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

            <img className="downArrow" src={downArrow} />
          </Link>
          <div className="left">
            <img className="leftArrow" src={downArrow} />
          </div>

          <div className="right">
            <img onClick={secondSlide} className="rightArrow" src={downArrow} />
          </div>
        </div>
      </Section>
      <Section id="home" className="home2" style={{ backgroundImage: `url(${bgImg})`, opacity: 1, display: "block", position: "absolute", top: 0, left: "1 00%" }}>
        <BgOverlay />
        <div className="container homeDiv">
          <HomeTitle data-aos="zoom-in">
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout.
        </HomeTitle>
          <SubTitle
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-delay="400"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
        </SubTitle>
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

            <img className="downArrow" src={downArrow} />
          </Link>
          <div className="left">
            <img className="leftArrow" src={downArrow} />
          </div>

          <div className="right">
            <img className="rightArrow" src={downArrow} />
          </div>
        </div>
      </Section> */}
      <Section id="home" className="home1">
        <BgOverlay />
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
          <img className="downArrow" src={downArrow} />
        </Link>

        <Carousel style={{ height: "100%" }}>
          <Carousel.Item style={{ height: "100%" }}>
            <img
              className="d-block w-100"
              src={bgImg}
              alt="First slide"
              style={{ height: "100%" }}
            />
            <Carousel.Caption>
              <h3>It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout.</h3>
              <p> Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "100%" }}>
            <img
              className="d-block w-100"
              src={bgImg}
              alt="Third slide"
              style={{ height: "100%" }}
            />

            <Carousel.Caption>
              <h3>It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout.</h3>
              <p> Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "100%" }}>
            <img
              className="d-block w-100"
              src={bgImg}
              alt="Third slide"
              style={{ height: "100%" }}
            />

            <Carousel.Caption>
              <h3>It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout.</h3>
              <p> Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Section>
    </>
  );
};

export default Home;
