import React, { useEffect, Fragment } from "react";
import AOS from "aos";
import $ from "jquery";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Projects from "./components/Projects";

import "aos/dist/aos.css";
import "./assets/styles/main.scss";
import "animate.css/animate.min.css";

const App = () => {
  useEffect(() => {
    AOS.init({ once: true });

    let navElement = $("nav");

    $(function () {
      $(window).scrollTop() > navElement.innerHeight()
        ? navElement.addClass("sticky")
        : navElement.removeClass("sticky");
    });
    $(window).on("scroll", function () {
      $(window).scrollTop() > navElement.innerHeight()
        ? navElement.addClass("sticky")
        : navElement.removeClass("sticky");
    });
  });

  return (
    <Fragment>
      <Header />
      <main>
        <Home />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
    </Fragment>
  );
};

export default App;
