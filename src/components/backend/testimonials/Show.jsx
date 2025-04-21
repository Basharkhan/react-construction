import React, { useEffect, useState } from "react";
import { apiUrl, token } from "../../common/http";
import { Link } from "react-router-dom";
import Header from "../../common/Header";
import Sidebar from "../../common/Sidebar";
import Footer from "../../common/Footer";
import { toast } from "react-toastify";

const Show = () => {
  const [testimonials, setTestimonials] = useState([]);

  const fetchTestimonials = async () => {
    const res = await fetch(apiUrl + "testimonials", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token()}`,
      },
    });

    const result = await res.json();
    setTestimonials(result.data);
  };

  const deleteTestimonial = async (id) => {
    if (confirm("Delete")) {
      const res = await fetch(apiUrl + "testimonials/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token()}`,
        },
      });
      const result = await res.json();

      if (result.status == true) {
        const newTestimonials = testimonials.filter(
          (testimonial) => testimonial.id !== id
        );
        setTestimonials(newTestimonials);
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    }
  };

  useEffect(() => {
    fetchTestimonials();
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
                      <h5>Testimonials</h5>
                      <Link
                        to="/admin/testimonials/create"
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
                          <th>Testimonial</th>
                          <th>Citation</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {testimonials &&
                          testimonials.map((testimonial) => {
                            return (
                              <tr key={testimonial.id}>
                                <td>{testimonial.id}</td>
                                <td>{testimonial.testimonial}</td>
                                <td>{testimonial.citation}</td>
                                <td>
                                  {testimonial.status === 1
                                    ? "Acitve"
                                    : "Block"}
                                </td>
                                <td>
                                  <Link
                                    to={`edit/${testimonial.id}`}
                                    className="btn blog-btn"
                                  >
                                    Edit
                                  </Link>
                                  <Link
                                    onClick={() =>
                                      deleteTestimonial(testimonial.id)
                                    }
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
