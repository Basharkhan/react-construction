import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "../common/Hero";
import BlogImg from "../../assets/img/construction2.jpg";

const Blogs = () => {
  return (
    <>
      <Header />
      <main>
        <Hero
          subtitle="blog"
          title="Our latest blogs"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius pariatur debitis illum qui dolorum eum omnis eligendi suscipit necessitatibus eos?"
        />
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

export default Blogs;
