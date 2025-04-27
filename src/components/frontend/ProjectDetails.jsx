import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { useParams } from "react-router-dom";
import { apiUrl, fileUrl } from "../common/http";
import Hero from "../common/Hero";

const ProjectDetails = () => {
  const [project, setProject] = useState([]);
  const params = useParams();

  const fetchProject = async () => {
    const response = await fetch(`${apiUrl}get-project/${params.id}`, {
      method: "GET",
    });

    const result = await response.json();
    if (result.status === true) {
      setProject(result.data);
      console.log(result);
    } else {
      console.error("Error fetching project details");
    }
  };

  useEffect(() => {
    fetchProject();
  }, []);

  return (
    <>
      <Header />
      <Hero
        subtitle="Quality, integrity, value"
        title={project.title}
        text=""
      />
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <div className="card-body">
                  <div className="card-title">Insights</div>
                  <ul>
                    {project.location && (
                      <li>
                        <span>Location</span>
                        <p>{project.location}</p>
                      </li>
                    )}
                    {project.construction_type && (
                      <li>
                        <span>Construction Type</span>
                        <p>{project.construction_type}</p>
                      </li>
                    )}
                    {project.sector && (
                      <li>
                        <span>Sector</span>
                        <p>{project.sector}</p>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div>
                <img
                  src={`${fileUrl}uploads/projects/large/${project.image}`}
                  className="w-100"
                />
              </div>
              <h3>{project.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: project.content }}></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProjectDetails;
