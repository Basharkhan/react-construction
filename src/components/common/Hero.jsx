import React from "react";

const Hero = ({ subtitle, title, text }) => {
  return (
    <section className="section-7">
      <div className="hero d-flex align-items-center">
        <div className="container">
          <div className="text-left">
            <span>{subtitle}</span>
            <h1>{title}</h1>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
