import React from "react";

import Header from "../common/Header";
import Footer from "../common/Footer";
import ServiceImage1 from "../../assets/img/construction1.jpg";
import ProjectImage1 from "../../assets/img/construction2.jpg";
import Icon1 from "../../assets/img/icon-1.svg";
import Icon2 from "../../assets/img/icon-2.svg";
import Icon3 from "../../assets/img/icon-3.svg";
import AvatarImg from "../../assets/img/author-2.jpg";
import BlogImg from "../../assets/img/construction2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import About from "../common/About";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        {/* hero section */}
        <section className="section-1">
          <div className="hero d-flex align-items-center">
            <div className="container-fluid">
              <div className="text-center">
                <span>Welcome to amazing constructions</span>
                <h1>
                  Crafting dreams with <br /> precision and excelence
                </h1>
                <p>
                  We excel at transforming visions into reality through
                  outatanding craftmanship and knowledge
                </p>
                <div className="mt-4">
                  <a href="#" className="btn btn-primary">
                    Contact Now
                  </a>
                  <a href="#" className="btn btn-secondary ms-2">
                    View Projects
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* about us section */}
        <About />

        {/* service section */}
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
              <div className="col-md-3 col-lg-3">
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
              <div className="col-md-3 col-lg-3">
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
              <div className="col-md-3 col-lg-3">
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
              <div className="col-md-3 col-lg-3">
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

        {/* why choose us */}
        <section className="section-4 py-5">
          <div className="container py-5">
            <div className="section-header text-center">
              <span>why choose us</span>
              <h2>Discover our wide variety of projects</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae illo, impedit nulla facere ipsa quae! Repudiandae
                delectus voluptatibus quasi minima?
              </p>
            </div>
            <div className="row pt-4">
              <div className="col-md-4">
                <div className="card shadow border-0 p-4">
                  <div className="card-icon">
                    <img src={Icon1} />
                  </div>
                  <div className="card-title mt-3">
                    <h3>Cutting Edge Solutions</h3>
                  </div>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi, iure!
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow border-0 p-4">
                  <div className="card-icon">
                    <img src={Icon2} />
                  </div>
                  <div className="card-title mt-3">
                    <h3>Cutting Edge Solutions</h3>
                  </div>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi, iure!
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow border-0 p-4">
                  <div className="card-icon">
                    <img src={Icon3} />
                  </div>
                  <div className="card-title mt-3">
                    <h3>Cutting Edge Solutions</h3>
                  </div>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi, iure!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* projects section */}
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
              <div className="col-md-3 col-lg-3">
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
              <div className="col-md-3 col-lg-3">
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
              <div className="col-md-3 col-lg-3">
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
              <div className="col-md-3 col-lg-3">
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

        {/* testimonial section */}
        <section className="section-5">
          <div className="container">
            <div className="section-header text-center">
              <span>testimonials</span>
              <h2>What people say about us</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae illo, impedit nulla facere ipsa quae! Repudiandae
                delectus voluptatibus quasi minima?
              </p>
            </div>
            <Swiper
              modules={[Pagination]}
              spaceBetween={50}
              slidesPerView={3}
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <div className="card shadow border-0">
                  <div className="card-body p-4">
                    <div className="rating">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <div className="content py-4">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugit, ex. Debitis eveniet delectus sint asperiores
                        rerum vitae, harum repellat a?
                      </p>
                    </div>
                    <hr />
                    <div className="meta">
                      <div>
                        <img src={AvatarImg} width={50} />
                      </div>
                      <div>
                        <div className="name">John Doe</div>
                        <div>CTO</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card shadow border-0">
                  <div className="card-body p-4">
                    <div className="rating">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <div className="content py-4">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugit, ex. Debitis eveniet delectus sint asperiores
                        rerum vitae, harum repellat a?
                      </p>
                    </div>
                    <hr />
                    <div className="meta">
                      <div>
                        <img src={AvatarImg} width={50} />
                      </div>
                      <div>
                        <div className="name">John Doe</div>
                        <div>CTO</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card shadow border-0">
                  <div className="card-body p-4">
                    <div className="rating">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <div className="content py-4">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugit, ex. Debitis eveniet delectus sint asperiores
                        rerum vitae, harum repellat a?
                      </p>
                    </div>
                    <hr />
                    <div className="meta">
                      <div>
                        <img src={AvatarImg} width={50} />
                      </div>
                      <div>
                        <div className="name">John Doe</div>
                        <div>CTO</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card shadow border-0">
                  <div className="card-body p-4">
                    <div className="rating">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <div className="content py-4">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugit, ex. Debitis eveniet delectus sint asperiores
                        rerum vitae, harum repellat a?
                      </p>
                    </div>
                    <hr />
                    <div className="meta">
                      <div>
                        <img src={AvatarImg} width={50} />
                      </div>
                      <div>
                        <div className="name">John Doe</div>
                        <div>CTO</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        {/* blog section */}
        <section className="section-6 bg-light">
          <div className="container py-5">
            <div className="section-header text-center">
              <span>Blog & News</span>
              <h2>Articles and blog posts</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae illo, impedit nulla facere ipsa quae! Repudiandae
                delectus voluptatibus quasi minima?
              </p>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="card shadow border-0">
                  <div className="card-img-top">
                    <img src={BlogImg} className="w-100" />
                  </div>
                  <div className="card-body p-5">
                    <div>
                      <a href="#" className="title">
                        Dummy blog title
                      </a>
                    </div>
                    <a href="#" className="btn blog-btn">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow border-0">
                  <div className="card-img-top">
                    <img src={BlogImg} className="w-100" />
                  </div>
                  <div className="card-body p-5">
                    <div>
                      <a href="#" className="title">
                        Dummy blog title
                      </a>
                    </div>
                    <a href="#" className="btn blog-btn">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow border-0">
                  <div className="card-img-top">
                    <img src={BlogImg} className="w-100" />
                  </div>
                  <div className="card-body p-5">
                    <div>
                      <a href="#" className="title">
                        Dummy blog title
                      </a>
                    </div>
                    <a href="#" className="btn blog-btn">
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

export default Home;
