import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Hero.css"

const Hero = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6 hero-left-container">
          <h1>
            Transform Your Online Presence with <br /> Professional Website
            Development by <b>TechSams</b>
          </h1>
          <p>
            Our tailored web development solutions are designed to elevate your
            brand and enhance user experience. Partner with TechSams for a
            seamless and impactful online presence.
          </p>
          <button>
           Get Started
          </button>
        </div>
        <div className="col-md-6 hero-right-container">
          <img
            src={require("../../Assests/Images/HeroImage.jpg")}
            width={"100%"}
            height={"100%"}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
