import React, { useEffect, useState } from "react";
import { apiUrl, fileUrl } from "../common/http";

const LatestServices = () => {
  const [services, setServices] = useState([]);

  const fetchLatestServices = async () => {
    const res = await fetch(apiUrl + "get-latest-services?limit=4", {
      method: "GET",
    });
    const result = await res.json();
    setServices(result.data);
    console.log(result);
  };

  useEffect(() => {
    fetchLatestServices();
  }, []);

  return (
    <section className="section-3 bg-light py-5">
      <div className="container-fluid py-5">
        <div className="section-header text-center">
          <span>our services</span>
          <h2>Our construction services</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            illo, impedit nulla facere ipsa quae! Repudiandae delectus
            voluptatibus quasi minima?
          </p>
        </div>
        <div className="row">
          {services &&
            services.map((service) => {
              return (
                <div className="col-md-3 col-lg-3" key={service.id}>
                  <div className="item">
                    <div className="service-image">
                      <img
                        src={`${fileUrl}uploads/services/small/${service.image}`}
                        className="w-100"
                      />
                    </div>
                    <div className="service-body">
                      <div className="service-title">
                        <h3>{service.title}</h3>
                      </div>
                      <div className="service-content">
                        {service.short_desc}
                      </div>
                      <a href="#" className="btn btn-primary">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default LatestServices;
