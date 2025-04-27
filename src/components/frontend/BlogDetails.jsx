import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { apiUrl, fileUrl } from "../common/http";
import Header from "../common/Header";
import Hero from "../common/Hero";
import Footer from "../common/Footer";

const BlogDetails = () => {
  const [article, setArticle] = useState([]);
  const [articles, setArticles] = useState([]);
  const params = useParams();

  const fetchService = async () => {
    const response = await fetch(`${apiUrl}get-article/${params.id}`, {
      method: "GET",
    });

    const result = await response.json();
    if (result.status === true) {
      setArticle(result.data);
      console.log(result);
    } else {
      console.error("Error fetching article details");
    }
  };

  const fetchServices = async () => {
    const response = await fetch(`${apiUrl}get-articles`, {
      method: "GET",
    });

    const result = await response.json();
    if (result.status === true) {
      setArticles(result.data);
      console.log(result);
    } else {
      console.error("Error fetching article details");
    }
  };

  useEffect(() => {
    fetchService();
    fetchServices();
  }, [params.id]);

  return (
    <>
      <Header />
      <Hero
        subtitle="Quality, integrity, value"
        title={article.title}
        text=""
      />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-header">Featured</div>
              <ul className="list-group list-group-flush">
                {articles &&
                  articles.map((article) => {
                    return (
                      <li key={article.id} className="list-group-item">
                        <Link to={`/article/${article.id}`}>
                          {article.title}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
          <div className="col-md-9">
            <div>
              <img
                src={`${fileUrl}uploads/articles/large/${article.image}`}
                className="w-100"
              />
            </div>
            <h3>{article.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetails;
