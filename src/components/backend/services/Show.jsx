import React, { useEffect, useState } from "react";
import Header from "../../common/Header";
import Sidebar from "../../common/Sidebar";
import Footer from "../../common/Footer";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { apiUrl, token } from "../../common/http";

const Show = () => {
  const [services, setServices] = useState([]);

  const fetchServices = async () => {
    const res = await fetch(apiUrl + "services", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token()}`,
      },
    });

    const result = await res.json();
    setServices(result.data);
  };

  const deleteService = async (id) => {
    if (confirm("Delete")) {
      const res = await fetch(apiUrl + "services/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token()}`,
        },
      });
      const result = await res.json();

      if (result.status == true) {
        const newServices = services.filter((service) => service.id !== id);
        setServices(newServices);
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
                      <h5>Services</h5>
                      <Link
                        to="/admin/services/create"
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
                        {services &&
                          services.map((service) => {
                            return (
                              <tr key={service.id}>
                                <td>{service.id}</td>
                                <td>{service.title}</td>
                                <td>{service.slug}</td>
                                <td>
                                  {service.status === 1 ? "Acitve" : "Block"}
                                </td>
                                <td>
                                  <Link
                                    to={`edit/${service.id}`}
                                    className="btn blog-btn"
                                  >
                                    Edit
                                  </Link>
                                  <Link
                                    onClick={() => deleteService(service.id)}
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
