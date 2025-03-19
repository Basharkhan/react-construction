import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { useForm, SubmitHandler } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Header />
      <main>
        <section className="login-form">
          <div className="container my-5">
            <div className="card border-0 shadow">
              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <h4 className="mb-4">Login here</h4>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="john@emample.com"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <button className="btn btn-primary">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Login;
