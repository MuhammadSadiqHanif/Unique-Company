import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Logo from "../assets/img/logo.jpeg";

// import CardGroup from 'react-bootstrap/CardGroup'
import styled from "styled-components";
import Demo from "./Icons/Demo";

import first from '../assets/img/one.jpg'
import two from '../assets/img/two.jpg'
import three from '../assets/img/three.jpg'
import four from '../assets/img/four.jpg'
import five from '../assets/img/five.jpg'
import six from '../assets/img/six.jpg'
import seven from '../assets/img/seven.jpg'
import galleryicon from '../assets/galleryicon.png';
import ScrollAnimation from "react-animate-on-scroll";



const Section = styled.section`
  padding: 30px 0 225px;
`;
const SectionTitle = styled.h2`
  font-size: 26px;
  font-weight: 300;
  line-height: normal;
  color: #1b5cce;
  text-align: center;
  margin-bottom: 2px;
`;

const SubTitle = styled.h5`
  font-size: 14px;
  font-weight: normal;
  line-height: normal;
  text-align: center;
  color: #aeaeae;
  margin-bottom: 25px;
  @media (min-width: 992px) {
    margin-bottom: 50px;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 30px;
  &:hover {
    transform: translateY(-5px) !important;
  }

  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`;

const IconWrap = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 150px;
  border: solid 1px #eff2f9;
  background-color: #f8faff;
  margin-bottom: 30px;
  position: relative;
  > svg {
    transition: all 0.3s ease-in;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &:hover {
    > svg {
      transform: translate(-50%, -50%) rotateY(360deg);
    }
  }
`;

const BoxTitle = styled.h4`
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  color: #5273c7;
`;

const Text = styled.p`
  font-size: 14px;
  font-weight: normal;
  line-height: 1.58;
  color: #8f8f8f;
  margin-bottom: 0;
  max-width: 350px;
`;

const Projects = () => {
  const width = window.innerWidth;

  const active = "all";

  return <section id="projects" className="projectMain">
    {/* <div className="container">
      <SectionTitle>Projects</SectionTitle>
      <SubTitle>What we Do?</SubTitle>
      <div className="row">
        <div className="col-lg-4"> */}
    {/* <Box data-aos={width >= 1400 ? "fade-right" : "fade-up"}>
            <IconWrap>
              <Demo />
            </IconWrap>
            <BoxTitle>Web Application</BoxTitle>
            <Text>
              Significantly, we are the best team of experts for
               web designing in Pakistan. We convert your ideas into
                reality based on best marketing strategy.
              </Text>
          </Box> */}
    {/* <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={Logo} width="100%" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
    </Card.Text> */}
    {/* <Button variant="primary">Go somewhere</Button> */}
    {/* </Card.Body>
          </Card>
        </div>
        <div className="col-lg-4"> */}
    {/* <Box data-aos="fade-up">
            <IconWrap>
              <Demo />
            </IconWrap>
            <BoxTitle>Android Application</BoxTitle>
            <Text>
              Indeed, we are best and experienced in Mobile Apps Development
               for all platform like androids, apple, blackberry and windows etc.
              </Text>
          </Box> */}
    {/* <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={Logo} width="100%" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
    </Card.Text> */}
    {/* <Button variant="primary">Go somewhere</Button> */}
    {/* </Card.Body>
          </Card>
        </div>
        <div className="col-lg-4"> */}
    {/* <Box data-aos={width >= 1400 ? "fade-left" : "fade-up"}>
            <IconWrap>
              <Demo />
            </IconWrap>
            <BoxTitle>Graphic Desiging</BoxTitle>
            <Text>
              We specialize in providing cheap logo design services and
             professional logo design service. So, hire graphic designer
              online from us and get the best graphic designing services
              </Text>
          </Box> */}
    {/* <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={Logo} width="100%" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
    </Card.Text> */}
    {/* <Button variant="primary">Go somewhere</Button> */}
    {/* </Card.Body>
          </Card>
        </div>
      </div>
    </div> */}
    <div className="container">
      <h1>Projects</h1>
      <p>What we Do?</p>
      {/* <div className="buttonDiv">
        <div class="buttonDiv">
          <button
            className={`${active === "all" && "active"}`}
          >
            All
          </button>
          <button
            className={`${active === "web" && "active"}`}
          >
            Web Development
          </button>
          <button
            className={`${active === "mobile" && "active"}`}
          >
            Mobile Application
          </button>
          <button
            className={`${active === "social" && "active"}`}
          >
            Social Media
          </button>
        </div>
      </div> */}
      <div className="projectFlexDiv">
        <ScrollAnimation className="imageDiv" animateIn='bounceInLeft'
          animateOut='bounceOutRight' duration={1}
          animateOnce={true}
          style={{ display: "flex", justifyContent: "space-between", width: "100%", flexWrap: "wrap" }}
        >
          <div className="projectDiv" style={{ backgroundImage: `url(${first})` }}>
            <div className="imageOverlay">
              <button>
                <img style={{ height: "80%" }} src={galleryicon} />
              </button>
            </div>
          </div>
          <div className="projectDiv" style={{ backgroundImage: `url(${two})` }}>
            <div className="imageOverlay">
              <button>
                <img style={{ height: "80%" }} src={galleryicon} />
              </button>
            </div>
          </div>
          <div className="projectDiv" style={{ backgroundImage: `url(${three})` }}>
            <div className="imageOverlay">
              <button>
                <img style={{ height: "80%" }} src={galleryicon} />
              </button>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation className="imageDiv" animateIn='bounceInRight'
          animateOut='bounceOutLeft' duration={1}
          animateOnce={true}
          style={{ display: "flex", justifyContent: "space-between", width: "100%", flexWrap: "wrap" }}
        >
          <div className="projectDiv" style={{ backgroundImage: `url(${four})` }}>
            <div className="imageOverlay">
              <button>
                <img style={{ height: "80%" }} src={galleryicon} />
              </button>
            </div>
          </div>
          <div className="projectDiv" style={{ backgroundImage: `url(${five})` }}>
            <div className="imageOverlay">
              <button>
                <img style={{ height: "80%" }} src={galleryicon} />
              </button>
            </div>
          </div>
          <div className="projectDiv" style={{ backgroundImage: `url(${six})` }}>
            <div className="imageOverlay">
              <button>
                <img style={{ height: "80%" }} src={galleryicon} />
              </button>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation className="imageDiv" animateIn='bounceInLeft'
          animateOut='bounceOutRight' duration={1}
          animateOnce={true}
          style={{ display: "flex", justifyContent: "space-between", width: "100%", flexWrap: "wrap" }}
        >
        <div className="projectDiv" style={{ backgroundImage: `url(${seven})` }}>
          <div className="imageOverlay">
            <button>
              <img style={{ height: "80%" }} src={galleryicon} />
            </button>
          </div>
        </div>
        </ScrollAnimation>
      </div>
    </div>

  </section>

    ;
};

export default Projects;