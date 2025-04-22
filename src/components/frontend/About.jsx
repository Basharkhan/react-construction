import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { default as AboutNew } from "../common/About";
import TeamImg1 from "../../assets/img/team1.jpg";
import { FaLinkedin } from "react-icons/fa";
import Hero from "../common/Hero";
import ShowTestimonial from "../common/ShowTestimonial";

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
        <section className="section-8 bg-light">
          <div className="container py-5">
            <div className="section-header text-center">
              <span>Team</span>
              <h2>Meet our team</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae illo, impedit nulla facere ipsa quae! Repudiandae
                delectus voluptatibus quasi minima?
              </p>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="card shadow border-0">
                  <div className="card-img-top">
                    <img src={TeamImg1} className="w-100" />
                  </div>
                  <div className="card-body">
                    <div className="card-title">John Doe</div>
                    <div className="card-subtitle">Web developer</div>
                    <div className="socials">
                      <a href="#">
                        <FaLinkedin />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card shadow border-0">
                  <div className="card-img-top">
                    <img src={TeamImg1} className="w-100" />
                  </div>
                  <div className="card-body">
                    <div className="card-title">John Doe</div>
                    <div className="card-subtitle">Web developer</div>
                    <div className="socials">
                      <a href="#">
                        <FaLinkedin />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card shadow border-0">
                  <div className="card-img-top">
                    <img src={TeamImg1} className="w-100" />
                  </div>
                  <div className="card-body">
                    <div className="card-title">John Doe</div>
                    <div className="card-subtitle">Web developer</div>
                    <div className="socials">
                      <a href="#">
                        <FaLinkedin />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card shadow border-0">
                  <div className="card-img-top">
                    <img src={TeamImg1} className="w-100" />
                  </div>
                  <div className="card-body">
                    <div className="card-title">John Doe</div>
                    <div className="card-subtitle">Web developer</div>
                    <div className="socials">
                      <a href="#">
                        <FaLinkedin />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* testimonials */}
        <ShowTestimonial />
      </main>
      <Footer />
    </>
  );
};

export default About;
