import React from "react";
import "./Services.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WebIcon from "@mui/icons-material/Web";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";

const Services = () => {
  return (
    <div className="container services p-5">
      <h2 className="services-heading">Our Services</h2>
      <p className="services-para">
        TechSams offers comprehensive web development, graphic design, and SEO
        services to empower your digital strategy and drive business growth.
      </p>
      <div className="row py-5">
        <div className="col-md-4 services-card-1">
          <WebIcon className="card-icon" />
          <h2>Web Design and Development</h2>
          <p>
            Professional web development services to create robust, responsive,
            and visually stunning websites that elevate your online presence.
          </p>
        </div>
        <div className="col-md-4 services-card-2">
          {" "}
          <AutoGraphIcon className="card-icon" />
          <h2>Graphic <br /> Designing</h2>
          <p>
            Creative graphic design solutions to captivate your audience and
            enhance your brand identity with visually compelling designs
          </p>
        </div>
        <div className="col-md-4 services-card-3">
          <ScreenSearchDesktopIcon className="card-icon" />
          <h2>Search Engine <br /> Optimization</h2>
          <p>
            Expert SEO strategies to boost your website's visibility, drive
            organic traffic, and improve search engine rankings for sustainable
            growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
