import React from "react";

import styled from "styled-components";

import Demo from "./Icons/Demo";

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

const Services = () => {
  const width = window.innerWidth;
  return (
    <Section id="services" className="servicesMain">
      {/* <div className="container">
        <SectionTitle>Services</SectionTitle>
        <SubTitle>What we Do?</SubTitle>
        <div className="row">
          <div className="col-lg-4">
            <Box data-aos={width >= 1400 ? "fade-right" : "fade-up"}>
              <IconWrap>
                <Demo />
              </IconWrap>
              <BoxTitle>Web Application</BoxTitle>
              <Text>
                Significantly, we are the best team of experts for
                 web designing in Pakistan. We convert your ideas into
                  reality based on best marketing strategy.
              </Text>
            </Box>
          </div>
          <div className="col-lg-4">
            <Box data-aos="fade-up">
              <IconWrap>
                <Demo />
              </IconWrap>
              <BoxTitle>Android Application</BoxTitle>
              <Text>
                Indeed, we are best and experienced in Mobile Apps Development
                 for all platform like androids, apple, blackberry and windows etc.
              </Text>
            </Box>
          </div>
          <div className="col-lg-4">
            <Box data-aos={width >= 1400 ? "fade-left" : "fade-up"}>
              <IconWrap>
                <Demo />
              </IconWrap>
              <BoxTitle>Graphic Desiging</BoxTitle>
              <Text>
                We specialize in providing cheap logo design services and
               professional logo design service. So, hire graphic designer
                online from us and get the best graphic designing services
              </Text>
            </Box>
          </div>
        </div>
      </div> */}

      <div className="container">
        <h1>Services</h1>
        <p>What we Do?</p>
        <div className="servicesFlexDiv">
          <div className="servicesDiv">
            <div className="servicesDivInside">
              <Demo />
              <h1>Web Development</h1>
              <p>
                We provides the best custom software, websites with clean and flawless search engine friendly codes.
              </p>
              <div className="hoverDiv"></div>
            </div>
          </div>
          <div className="servicesDiv">
            <div className="servicesDivInside">
              <Demo />
              <h1>Web Design</h1>
              <p>
                We provide all devices responsive web designs for your website. Our team is perfect to visualize your ideas into colors.
              </p>
              <div className="hoverDiv"></div>
            </div>
          </div>
          <div className="servicesDiv">
            <div className="servicesDivInside">
              <Demo />
              <h1>SEO Services</h1>
              <p>
                We provide best SEO services in Lahore Pakistan, our experts can rank your website in days.
              </p>
              <div className="hoverDiv"></div>
            </div>
          </div>
          <div className="servicesDiv">
            <div className="servicesDivInside">
              <Demo />
              <h1>Mobile Application</h1>
              <p>
                Mobile Application Development services for both Android & IOS platforms at very cost-effective rates.
              </p>
              <div className="hoverDiv"></div>
            </div>
          </div>
          <div className="servicesDiv">
            <div className="servicesDivInside">
              <Demo />
              <h1>Social Media Marketing</h1>
              <p>
                We is the best Social Media Marketing Company in Pakistan having best Social Media experts in the team
              </p>
              <div className="hoverDiv"></div>
            </div>
          </div>
          <div className="servicesDiv">
            <div className="servicesDivInside">
              <Demo />
              <h1>Video Production</h1>
              <p>
                We are specialized in Video Production & Video Marketing, providing video production services since 10 years.
              </p>
              <div className="hoverDiv"></div>
            </div>
          </div>
        </div>
      </div>

    </Section>
  );
};

export default Services;
