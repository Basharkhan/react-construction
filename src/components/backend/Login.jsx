import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await fetch("http://127.0.0.1:8000/api/authenticate", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (result.status === false) {
      toast.error(result.message);
    } else {
      const userInfo = {
        id: result.id,
        token: result.token,
      };
      localStorage.setItem("userInfo", JSON.stringify(userInfo));

      navigate("/admin/dashboard");
    }
  };

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
                      className={`form-control ${errors.email && "is-invalid"}`}
                      {...register("email", {
                        required: "This field is required",
                      })}
                    />
                    {errors.email && (
                      <p className="invalid-feedback">{errors.email.message}</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className={`form-control ${
                        errors.password && "is-invalid"
                      }`}
                      {...register("password", {
                        required: "This field is required",
                      })}
                    />
                    {errors.password && (
                      <p className="invalid-feedback">
                        {errors.password.message}
                      </p>
                    )}
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
