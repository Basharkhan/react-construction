import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "../common/Hero";
import { useForm } from "react-hook-form";
import { apiUrl } from "../common/http";
import { toast } from "react-toastify";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await fetch(apiUrl + "contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();

    if (result.status == true) {
      toast.success(result.message);
      reset();
    } else {
      toast.error(result.message);
    }
  };

  return (
    <>
      <Header />
      <main>
        <Hero
          subtitle=""
          title="Contact Us"
          text="We excel at transforming visions into reality
               through outatanding craftmanship and knowledge"
        />

        <section className="section-9 py-5">
          <div className="container">
            <div className="section-header text-center">
              <h2>Contact Us</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae illo, impedit nulla facere ipsa quae! Repudiandae
                delectus voluptatibus quasi minima?
              </p>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="card shadow border-0">
                  <div className="card-body p-4">
                    <h3>Call Us</h3>
                    <div>
                      <a href="#">(000)-555-555</a>
                    </div>
                    <div>
                      <a href="#">(000)-555-555</a>
                    </div>

                    <h3 className="mt-4">You can write us</h3>
                    <div>
                      <a href="#">info@example.com</a>
                    </div>
                    <div>
                      <a href="#">info2@example.com</a>
                    </div>

                    <h3 className="mt-4">Address</h3>
                    <p>
                      1800/2 West Monipur <br />
                      Mirpur, Dhaka
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="card shadow border-0">
                  <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="name" className="form-label">
                            Name
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              errors.name && "is-invalid"
                            }`}
                            id="name"
                            placeholder="John Doe"
                            {...register("name", {
                              required: "The name field is required",
                            })}
                          />
                          {errors.name && (
                            <p className="invalid-feedback">
                              {errors.name.message}
                            </p>
                          )}
                        </div>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                          <input
                            type="email"
                            className={`form-control ${
                              errors.email && "is-invalid"
                            }`}
                            id="email"
                            placeholder="john@example.com"
                            {...register("email", {
                              required: "The email field is required",
                            })}
                          />
                          {errors.email && (
                            <p className="invalid-feedback">
                              {errors.email.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="name" className="form-label">
                            Phone
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="phone"
                            placeholder="(000-555-000)"
                            {...register("phone")}
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="subject" className="form-label">
                            Subject
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="subject"
                            placeholder="Greetings"
                            {...register("subject")}
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div>
                          <label htmlFor="message" className="form-label">
                            Message
                          </label>
                          <textarea
                            className={`form-control ${
                              errors.message && "is-invalid"
                            }`}
                            id="message"
                            rows="6"
                            {...register("message", {
                              required: "The message field is required",
                            })}
                          ></textarea>
                          {errors.message && (
                            <p className="invalid-feedback">
                              {errors.message.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div>
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </form>
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

export default ContactUs;
