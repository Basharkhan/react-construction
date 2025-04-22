import Header from "../../common/Header";
import Sidebar from "../../common/Sidebar";
import Footer from "../../common/Footer";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { apiUrl, fileUrl, token } from "../../common/http";
import { toast } from "react-toastify";
import React, { useState, useRef, useMemo } from "react";

const Edit = ({ placeholder }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(false);
  const [imageId, setImageId] = useState(null);
  const [testimonial, setTestimonial] = useState(null);
  const params = useParams();

  const config = useMemo(
    () => ({
      readonly: false, // all options from https://xdsoft.net/jodit/docs/,
      placeholder: placeholder || "Content",
    }),
    [placeholder]
  );

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: async () => {
      const res = await fetch(apiUrl + "testimonials/" + params.id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token()}`,
        },
      });
      const result = await res.json();
      setContent(result.data.content);
      setTestimonial(result.data);
      console.log(result);

      return {
        testimonial: result.data.testimonial,
        citation: result.data.citation,
        designation: result.data.designation,
        status: result.data.status,
      };
    },
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const newData = { ...data, content: content, imageId: imageId };
    console.log(newData);

    const res = await fetch(apiUrl + "testimonial/" + params.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token()}`,
      },
      body: JSON.stringify(newData),
    });
    const result = await res.json();

    if (result.status == true) {
      navigate("/admin/testimonial");
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  };

  const handleFile = async (e) => {
    const formData = new FormData();
    const file = e.target.files[0];
    formData.append("image", file);

    console.log(formData);

    await fetch(apiUrl + "temp-images", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token()}`,
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.status == false) {
          toast.error(result.errors.image[0]);
        } else {
          console.log(result.data.id);

          setImageId(result.data.id);
          toast.success(result.message);
        }
      });
  };

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
                      <h5>Testimonials / Update</h5>
                      <Link
                        to="/admin/testimonials"
                        className="btn btn-primary"
                      >
                        Back
                      </Link>
                    </div>

                    <hr />

                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="mb-3">
                        <label htmlFor="" className="form-label">
                          Testimonial
                        </label>
                        <textarea
                          className={`form-control ${
                            errors.testimonial && "is-invalid"
                          }`}
                          row={5}
                          {...register("testimonial", {
                            required: "The testimonial field is required",
                          })}
                        ></textarea>
                        {errors.citation && (
                          <p className="invalid-feedback">
                            {errors.testimonial.message}
                          </p>
                        )}
                      </div>

                      <div className="mb-3">
                        <label htmlFor="" className="form-label">
                          Citation
                        </label>
                        <input
                          type="text"
                          className={`form-control ${
                            errors.citation && "is-invalid"
                          }`}
                          {...register("citation", {
                            required: "The citation field is required",
                          })}
                        />
                        {errors.citation && (
                          <p className="invalid-feedback">
                            {errors.citation.message}
                          </p>
                        )}
                      </div>

                      <div className="mb-3">
                        <label htmlFor="" className="form-label">
                          Designation
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          {...register("designation")}
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="" className="form-label">
                          Image
                        </label>
                        <input
                          onChange={handleFile}
                          type="file"
                          className="form-control"
                        />
                      </div>
                      <div>
                        {testimonial?.image && (
                          <img
                            src={
                              fileUrl +
                              "uploads/testimonials/" +
                              testimonial.image
                            }
                          />
                        )}
                      </div>

                      <div className="mb-3">
                        <label htmlFor="" className="form-label">
                          Status
                        </label>
                        <select
                          className="form-control"
                          {...register("status")}
                        >
                          <option value="1">Active</option>
                          <option value="0">Block</option>
                        </select>
                      </div>

                      <button
                        disabled={isSubmitButtonDisabled}
                        className="btn btn-primary"
                      >
                        Update
                      </button>
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

export default Edit;
