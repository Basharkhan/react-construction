import React, { useEffect, useState } from "react";
import Header from "../../common/Header";
import Sidebar from "../../common/Sidebar";
import { Link } from "react-router-dom";
import Footer from "../../common/Footer";
import { apiUrl, token } from "../../common/http";
import { toast } from "react-toastify";

const Show = () => {
  const [projects, setProjects] = useState([]);

  const fetchServices = async () => {
    const res = await fetch(apiUrl + "projects", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token()}`,
      },
    });

    const result = await res.json();
    setProjects(result.data);
    console.log(result);
  };

  const deleteService = async (id) => {
    if (confirm("Delete")) {
      const res = await fetch(apiUrl + "projects/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token()}`,
        },
      });
      const result = await res.json();

      if (result.status == true) {
        const newProjects = projects.filter((project) => project.id !== id);
        setProjects(newProjects);
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    }
  };

  useEffect(() => {
    fetchServices();
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
                      <h5>Projects</h5>
                      <Link
                        to="/admin/projects/create"
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
                          <th>Slug</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {projects &&
                          projects.map((project) => {
                            return (
                              <tr key={project.id}>
                                <td>{project.id}</td>
                                <td>{project.title}</td>
                                <td>{project.slug}</td>
                                <td>
                                  {project.status === 1 ? "Acitve" : "Block"}
                                </td>
                                <td>
                                  <Link
                                    to={`edit/${project.id}`}
                                    className="btn blog-btn"
                                  >
                                    Edit
                                  </Link>
                                  <Link
                                    onClick={() => deleteService(project.id)}
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
