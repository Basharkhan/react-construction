import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "../common/Hero";
import ServiceImage1 from "../../assets/img/construction1.jpg";

const Services = () => {
  return (
    <>
      <Header />
      <main>
        <Hero
          subtitle="service"
          title="Our service is best"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius pariatur debitis illum qui dolorum eum omnis eligendi suscipit necessitatibus eos?"
        />
        <section className="section-3 bg-light py-5">
          <div className="container-fluid py-5">
            <div className="section-header text-center">
              <span>our services</span>
              <h2>Our construction services</h2>
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
                    <img src={ServiceImage1} className="w-100" />
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
                    <img src={ServiceImage1} className="w-100" />
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
                    <img src={ServiceImage1} className="w-100" />
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
                    <img src={ServiceImage1} className="w-100" />
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
                    <img src={ServiceImage1} className="w-100" />
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
                    <img src={ServiceImage1} className="w-100" />
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

export default Services;
