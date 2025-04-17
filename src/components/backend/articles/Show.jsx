import React, { useEffect, useState } from "react";
import Header from "../../common/Header";
import Sidebar from "../../common/Sidebar";
import { Link } from "react-router-dom";
import Footer from "../../common/Footer";
import { apiUrl, token } from "../../common/http";
import { toast } from "react-toastify";

const Show = () => {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    const res = await fetch(apiUrl + "articles", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token()}`,
      },
    });

    const result = await res.json();
    setArticles(result.data);
  };

  const deleteArticle = async (id) => {
    if (confirm("Delete")) {
      const res = await fetch(apiUrl + "articles/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token()}`,
        },
      });
      const result = await res.json();

      if (result.status == true) {
        const newArticles = articles.filter((article) => article.id !== id);
        setArticles(newArticles);
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <>
      <Header />
      <main>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <Sidebar />
              </div>
              <div className="col-md-9 dashboard">
                <div className="card shadow border-0">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between">
                      <h5>Articles</h5>
                      <Link
                        to="/admin/articles/create"
                        className="btn btn-primary"
                      >
                        Create
                      </Link>
                    </div>

                    <hr />

                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Name</th>

                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {articles &&
                          articles.map((article) => {
                            return (
                              <tr key={article.id}>
                                <td>{article.id}</td>
                                <td>{article.title}</td>
                                <td>
                                  {article.status === 1 ? "Acitve" : "Block"}
                                </td>
                                <td>
                                  <Link
                                    to={`edit/${article.id}`}
                                    className="btn blog-btn"
                                  >
                                    Edit
                                  </Link>
                                  <Link
                                    onClick={() => deleteArticle(article.id)}
                                    href="#"
                                    className="ms-2 btn blog-btn"
                                  >
                                    Delete
                                  </Link>
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
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

export default Show;
