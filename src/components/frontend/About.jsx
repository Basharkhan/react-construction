import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { default as AboutNew } from "../common/About";

import Hero from "../common/Hero";
import ShowTestimonial from "../common/ShowTestimonial";
import Team from "../common/Team";

const About = () => {
  return (
    <>
      <Header />
      <main>
        {/* hero */}
        <Hero
          subtitle="Quality, integrity, value"
          title="About Us"
          text="We excel at transforming visions into reality
              <br /> through outatanding craftmanship and knowledge"
        />

        {/* about */}
        <AboutNew />

        {/* team */}
        <Team />

        {/* testimonials */}
        <ShowTestimonial />
      </main>
      <Footer />
    </>
  );
};

export default About;
