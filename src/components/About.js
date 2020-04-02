import React from "react";

import styled from "styled-components";

import Demo from "./Icons/Demo";
import Logo from "../assets/img/logo.jpeg";
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col'
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
  font-size: 16px;
  font-weight: normal;
  line-height: 1.58;
  color: #8f8f8f;
  margin-bottom: 0;
  max-width: 800px;
`;

const About = () => {
  const width = window.innerWidth;
  return (
    <Section id="about">
      <div className="container">
        <SectionTitle>About US</SectionTitle>
        <SubTitle>Who we Are?</SubTitle>
        <div className="row">
          <div className="col-lg-12">
            <Box data-aos={width >= 1400 ? "fade-right" : "fade-up"}>
              {/* <IconWrap> */}
              {/* <Demo /> */}
              <Col xs={6} md={4}>
                <ScrollAnimation className="imageDiv" animateIn='fadeIn'
                  animateOut='fadeIn' duration={2}
                  animateOnce={true}
                >
                  <Image src={Logo} height="171" width="180" />
                </ScrollAnimation>
              </Col>
              {/* </IconWrap> */}
              <ScrollAnimation className="imageDiv" animateIn='bounceInLeft'
                animateOut='bounceOutRight' duration={2}
                animateOnce={true}
              >
                <BoxTitle>UNIQUE COMPANY</BoxTitle>
              </ScrollAnimation>
                <br />
              <ScrollAnimation className="imageDiv" animateIn='slideInRight'
                  animateOut='slideInRight' duration={1}
                  animateOnce={true}>
                <Text>
                  Unique is a IT Service company having hands on experience providing different IT solution around the globe.
                  Unique is not only a globally recognized IT company but also a family filled with talented experts that help global brands, enterprises, mid-size businesses or even startups with innovative solutions.
                  We offer Unique idea for Web Application, Mobile Application, Graphic Designing with Unique design and business software solutions such as CRM, HRM, Accounting solutions. We help you boost your business through our ready and customized software solutions.
                  We work with total commitment to customer satisfaction and to delivering your project on time and on budget.
              </Text>
              </ScrollAnimation>
            </Box>
          </div>
          {/* <div className="col-lg-4">
            <Box data-aos="fade-up">
              <IconWrap>
                <Demo />
              </IconWrap>
              <BoxTitle>Component-Based</BoxTitle>
              <Text>
                Since component logic is written in JavaScript instead of
                templates, you can easily pass rich data through your app and
                keep state out of the DOM.
              </Text>
            </Box>
          </div> */}
          {/* <div className="col-lg-4">
            <Box data-aos={width >= 1400 ? "fade-left" : "fade-up"}>
              <IconWrap>
                <Demo />
              </IconWrap>
              <BoxTitle>Learn Once, Write Anywhere</BoxTitle>
              <Text>
                We don’t make assumptions about the rest of your technology
                stack, so you can develop new features in React without
                rewriting existing code.
              </Text>
            </Box>
          </div> */}
        </div>
      </div>
    </Section>
  );
};

export default About;
