import React, { useEffect, useState } from "react";
import BlogImg from "../../assets/img/construction2.jpg";
import { apiUrl, fileUrl } from "./http";

const LatestArticles = () => {
  const [articles, setArticles] = useState([]);

  const fetchLatestArticles = async () => {
    const res = await fetch(apiUrl + "get-latest-articles?limit=4", {
      method: "GET",
    });
    const result = await res.json();
    setArticles(result.data);
    console.log(result);
  };

  useEffect(() => {
    fetchLatestArticles();
  }, []);

  return (
    <>
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
                  <div className="col-md-3 col-lg-3" key={article.id}>
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
                        <a href="#" className="btn blog-btn">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestArticles;
