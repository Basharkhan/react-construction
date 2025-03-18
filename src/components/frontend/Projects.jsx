import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "../common/Hero";
import ProjectImage1 from "../../assets/img/construction2.jpg";

const Projects = () => {
  return (
    <>
      <Header />
      <main>
        <Hero
          subtitle="projects"
          title="Our Latest projects"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum reprehenderit voluptate voluptatem temporibus itaque voluptates asperiores, pariatur officiis fuga magnam?"
        />
        <section className="section-3 bg-light py-5">
          <div className="container-fluid py-5">
            <div className="section-header text-center">
              <span>our projects</span>
              <h2>Our projects</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae illo, impedit nulla facere ipsa quae! Repudiandae
                delectus voluptatibus quasi minima?
              </p>
            </div>
            <div className="row">
              <div className="col-md-4 col-lg-4">
                <div className="item">
                  <div className="service-image">
                    <img src={ProjectImage1} className="w-100" />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Titan Construction</h3>
                    </div>
                    <div className="service-content">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sapiente ullam placeat, molestiae adipisci vitae minus
                      expedita autem libero suscipit molestias.
                    </div>
                    <a href="#" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="item">
                  <div className="service-image">
                    <img src={ProjectImage1} className="w-100" />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Titan Construction</h3>
                    </div>
                    <div className="service-content">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sapiente ullam placeat, molestiae adipisci vitae minus
                      expedita autem libero suscipit molestias.
                    </div>
                    <a href="#" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="item">
                  <div className="service-image">
                    <img src={ProjectImage1} className="w-100" />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Titan Construction</h3>
                    </div>
                    <div className="service-content">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sapiente ullam placeat, molestiae adipisci vitae minus
                      expedita autem libero suscipit molestias.
                    </div>
                    <a href="#" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="item">
                  <div className="service-image">
                    <img src={ProjectImage1} className="w-100" />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Titan Construction</h3>
                    </div>
                    <div className="service-content">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sapiente ullam placeat, molestiae adipisci vitae minus
                      expedita autem libero suscipit molestias.
                    </div>
                    <a href="#" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="item">
                  <div className="service-image">
                    <img src={ProjectImage1} className="w-100" />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Titan Construction</h3>
                    </div>
                    <div className="service-content">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sapiente ullam placeat, molestiae adipisci vitae minus
                      expedita autem libero suscipit molestias.
                    </div>
                    <a href="#" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="item">
                  <div className="service-image">
                    <img src={ProjectImage1} className="w-100" />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Titan Construction</h3>
                    </div>
                    <div className="service-content">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sapiente ullam placeat, molestiae adipisci vitae minus
                      expedita autem libero suscipit molestias.
                    </div>
                    <a href="#" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Projects;
