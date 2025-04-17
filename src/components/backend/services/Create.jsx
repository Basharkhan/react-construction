import Header from "../../common/Header";
import Sidebar from "../../common/Sidebar";
import Footer from "../../common/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { apiUrl, token } from "../../common/http";
import { toast } from "react-toastify";
import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";

const Create = ({ placeholder }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(false);
  const [imageId, setImageId] = useState(null);

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
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const newData = { ...data, content: content, imageId: imageId };
    console.log(newData);

    const res = await fetch(apiUrl + "services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token()}`,
      },
      body: JSON.stringify(newData),
    });
    const result = await res.json();

    if (result.status == true) {
      navigate("/admin/services");
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  };

  const handleFile = async (e) => {
    setIsSubmitButtonDisabled(true);
    const formData = new FormData();
    const file = e.target.files[0];
    formData.append("image", file);

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
        setIsSubmitButtonDisabled(false);
        if (result.status == false) {
          toast.error(result.errors.image[0]);
        } else {
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
                      <h5>Services / Create</h5>
                      <Link to="/admin/services" className="btn btn-primary">
                        Back
                      </Link>
                    </div>

                    <hr />

                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="mb-3">
                        <label htmlFor="" className="form-label">
                          Title
                        </label>
                        <input
                          type="text"
                          className={`form-control ${
                            errors.title && "is-invalid"
                          }`}
                          {...register("title", {
                            required: "The title field is required",
                          })}
                        />
                        {errors.title && (
                          <p className="invalid-feedback">
                            {errors.title.message}
                          </p>
                        )}
                      </div>

                      <div className="mb-3">
                        <label htmlFor="" className="form-label">
                          Slug
                        </label>
                        <input
                          type="text"
                          className={`form-control ${
                            errors.slug && "is-invalid"
                          }`}
                          {...register("slug", {
                            required: "The slug field is required",
                          })}
                        />
                        {errors.slug && (
                          <p className="invalid-feedback">
                            {errors.slug.message}
                          </p>
                        )}
                      </div>

                      <div className="mb-3">
                        <label htmlFor="" className="form-label">
                          Short Description
                        </label>
                        <textarea
                          className="form-control"
                          row={5}
                          {...register("short_desc")}
                        ></textarea>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="" className="form-label">
                          Content
                        </label>
                        <JoditEditor
                          ref={editor}
                          value={content}
                          config={config}
                          tabIndex={1} // tabIndex of textarea
                          onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                          onChange={(newContent) => {}}
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
                        Submit
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

export default Create;
