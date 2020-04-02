import React from "react";
import Card from 'react-bootstrap/Card'
import Logo from "../assets/img/logo.jpeg";

// import CardGroup from 'react-bootstrap/CardGroup'
import styled from "styled-components";
import messageBox from '../assets/img/letter.svg'
import ScrollAnimation from 'react-animate-on-scroll';

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


const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        {/* <SectionTitle>Contact Us</SectionTitle> */}
        {/* <SubTitle>What we Do?</SubTitle> */}
        <h1>Have Some Question ?</h1>
        <ScrollAnimation animateIn='fadeIn'
          animateOut='fadeIn' duration={2}
          animateOnce={true}
        >
          <div className="contactUsFlex">
            <ScrollAnimation className="imageDiv" animateIn='bounceInLeft'
              animateOut='bounceOutRight' duration={2}
              animateOnce={true}
            >
              <img src={messageBox} />
            </ScrollAnimation>

            <ScrollAnimation className="formDiv" animateIn='bounceInRight'
              animateOut='bounceOutRight' duration={2}
              animateOnce={true}
            >
              <form>
                <input placeholder="your name" />
                <input placeholder="your email" />
                <input
                  placeholder="your phone"
                  type="number"
                />
                <textarea placeholder="your massage" rows="5" />
                <button className="buttonfx slideleft">
                  Send Message
              </button>
              </form>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
      </div>
    </section>);
};

export default Contact;