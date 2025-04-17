import React, { useMemo, useRef, useState } from "react";
import Header from "../../common/Header";
import Sidebar from "../../common/Sidebar";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../../common/Footer";
import { apiUrl, token } from "../../common/http";
import { useForm } from "react-hook-form";
import JoditEditor from "jodit-react";
import { toast } from "react-toastify";

const Edit = ({ placeholder }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(false);
  const [imageId, setImageId] = useState(null);
  const [project, setProject] = useState(null);
  const params = useParams();

  const config = useMemo(
    () => ({
      readonly: false, // all options from https://xdsoft.net/jodit/docs/,
      placeholder: placeholder || "",
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
      const res = await fetch(apiUrl + "projects/" + params.id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token()}`,
        },
      });
      const result = await res.json();
      setContent(result.data.content);
      setProject(result.data);
      console.log(result);

      return {
        title: result.data.title,
        slug: result.data.slug,
        short_desc: result.data.short_desc,
        content: result.data.content,
        construction_type: result.data.construction_type,
        sector: result.data.sector,
        location: result.data.location,
        status: result.data.status,
      };
    },
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const newData = { ...data, content: content, imageId: imageId };
    console.log(newData);

    const res = await fetch(apiUrl + "projects/" + params.id, {
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
      navigate("/admin/projects");
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
                      <h5>Projects / Update</h5>
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

                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label htmlFor="" className="form-label">
                              Location
                            </label>
                            <input
                              type="text"
                              className={`form-control`}
                              {...register("location")}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="" className="form-label">
                            Construction Type
                          </label>
                          <select
                            className="form-control"
                            {...register("construction_type")}
                          >
                            <option value="Residential Construction">
                              Residential Construction
                            </option>
                            <option value="Commercial Construction">
                              Commercial Construction
                            </option>
                            <option value="Industrial Construction">
                              Industrial Construction
                            </option>
                            <option value="Infrastucture Construction">
                              Infrastucture Construction
                            </option>
                          </select>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label htmlFor="" className="form-label">
                              Sector
                            </label>
                            <select
                              className="form-control"
                              {...register("sector")}
                            >
                              <option value="Health">Health</option>
                              <option value="Education">Education</option>
                              <option value="Corporate">Corporate</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
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
                      <div>
                        {project?.image && (
                          <img
                            src={
                              fileUrl +
                              "uploads/projects/small/" +
                              project.image
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
