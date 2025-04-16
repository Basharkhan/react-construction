import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "../common/Hero";
import ServiceImage1 from "../../assets/img/construction1.jpg";
import { apiUrl, fileUrl } from "../common/http";

const Services = () => {
  const [services, setServices] = useState([]);

  const fetchAllServices = async () => {
    const res = await fetch(apiUrl + "get-services", {
      method: "GET",
    });
    const result = await res.json();
    setServices(result.data);
    console.log(result);
  };

  useEffect(() => {
    fetchAllServices();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero
          subtitle="service"
          title="Our service is best"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius pariatur debitis illum qui dolorum eum omnis eligendi suscipit necessitatibus eos?"
        />
        <section className="section-3 bg-light py-5">
          <div className="container-fluid py-5">
            <div className="section-header text-center">
              <span>our services</span>
              <h2>Our construction services</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae illo, impedit nulla facere ipsa quae! Repudiandae
                delectus voluptatibus quasi minima?
              </p>
            </div>
            <div className="row">
              {services &&
                services.map((service) => {
                  return (
                    <div className="col-md-4 col-lg-4" key={service.id}>
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
      </main>
      <Footer />
    </>
  );
};

export default Services;
