import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "../common/Hero";
import { apiUrl, fileUrl } from "../common/http";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    const res = await fetch(apiUrl + "get-articles", {
      method: "GET",
    });
    const result = await res.json();
    setArticles(result.data);
    console.log(result);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

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
              {articles &&
                articles.map((article) => {
                  return (
                    <div className="col-md-4" key={article.id}>
                      <div className="card shadow border-0">
                        <div className="card-img-top">
                          <img
                            src={`${fileUrl}uploads/articles/small/${article.image}`}
                            className="w-100"
                          />
                        </div>
                        <div className="card-body p-5">
                          <div>
                            <a href="#" className="title">
                              {article.title}
                            </a>
                          </div>
                          <Link
                            to={`/article/${article.id}`}
                            className="btn blog-btn"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blogs;
