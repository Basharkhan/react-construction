import React, { useEffect, useState } from "react";
import ProjectImage1 from "../../assets/img/construction2.jpg";
import { apiUrl, fileUrl } from "./http";
import { Link } from "react-router-dom";

const LatestProjects = () => {
  const [projects, setProjects] = useState([]);

  const fetchLatestProjects = async () => {
    const res = await fetch(apiUrl + "get-latest-projects?limit=4", {
      method: "GET",
    });
    const result = await res.json();
    setProjects(result.data);
    console.log(result);
  };

  useEffect(() => {
    fetchLatestProjects();
  }, []);

  return (
    <>
      <section className="section-3 bg-light py-5">
        <div className="container-fluid py-5">
          <div className="section-header text-center">
            <span>our projects</span>
            <h2>Our projects</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae illo, impedit nulla facere ipsa quae! Repudiandae
              delectus voluptatibus quasi minima?
            </p>
          </div>
          <div className="row">
            {projects &&
              projects.map((project) => {
                return (
                  <div className="col-md-3 col-lg-3" key={project.id}>
                    <div className="item">
                      <div className="service-image">
                        <img
                          src={`${fileUrl}uploads/projects/small/${project.image}`}
                          className="w-100"
                        />
                      </div>
                      <div className="service-body">
                        <div className="service-title">
                          <h3>{project.title}</h3>
                        </div>
                        <div className="service-content">
                          {project.short_desc}
                        </div>
                        <Link
                          to={`/project/${project.id}`}
                          className="btn btn-primary"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestProjects;
