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

  const fetchArticle = async () => {
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

  const fetchLatestArticles = async () => {
    const response = await fetch(`${apiUrl}get-latest-articles`, {
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
    fetchArticle();
    fetchLatestArticles();
  }, [params.id]);

  return (
    <>
      <Header />
      <Hero
        subtitle="Quality, integrity, value"
        title={article.title}
        text=""
      />
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2>{article.title}</h2>
              <div className="pb-3">
                by <strong>{article.author}</strong> on {article.created_at}
              </div>
              <div className="pe-md-5 pb-3">
                <img
                  src={`${fileUrl}uploads/articles/large/${article.image}`}
                  className="w-100"
                />
              </div>
              <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
            </div>
            <div className="col-md-4">
              <div className="card shadow border-0">
                <div className="card-body p-4">
                  <h3 className="mt-2 mb-3">Latest Blogs</h3>
                  {articles &&
                    articles.map((article) => {
                      return (
                        <div className="d-flex" key={article.id}>
                          <div className="pe-3 pb-2">
                            <img
                              src={`${fileUrl}uploads/articles/small/${article.image}`}
                              className="article-thumbnail"
                            />
                          </div>
                          <Link to={`/article/${article.id}`}>
                            {article.title}
                          </Link>
                          <hr />
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogDetails;
