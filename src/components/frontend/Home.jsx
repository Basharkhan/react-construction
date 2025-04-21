import React, { useEffect, useState } from "react";

import Header from "../common/Header";
import Footer from "../common/Footer";
import Icon1 from "../../assets/img/icon-1.svg";
import Icon2 from "../../assets/img/icon-2.svg";
import Icon3 from "../../assets/img/icon-3.svg";
import AvatarImg from "../../assets/img/author-2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import LatestServices from "../common/LatestServices";
import "swiper/css";
import "swiper/css/pagination";
import About from "../common/About";
import LatestProjects from "../common/LatestProjects";
import LatestArticles from "../common/LatestArticles";

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
        <LatestServices />

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
        <LatestProjects />

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
        <LatestArticles />
      </main>
      <Footer />
    </>
  );
};

export default Home;
