import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { Link, useParams } from "react-router-dom";
import { apiUrl, fileUrl } from "../common/http";
import Hero from "../common/Hero";

const ServiceDetails = () => {
  const [service, setService] = useState([]);
  const [services, setServices] = useState([]);
  const params = useParams();

  const fetchService = async () => {
    const response = await fetch(`${apiUrl}get-service/${params.id}`, {
      method: "GET",
    });

    const result = await response.json();
    if (result.status === true) {
      setService(result.data);
      console.log(result);
    } else {
      console.error("Error fetching service details");
    }
  };

  const fetchServices = async () => {
    const response = await fetch(`${apiUrl}get-services`, {
      method: "GET",
    });

    const result = await response.json();
    if (result.status === true) {
      setServices(result.data);
      console.log(result);
    } else {
      console.error("Error fetching service details");
    }
  };

  useEffect(() => {
    fetchService();
    fetchServices();
  }, [params.id]);

  return (
    <>
      <Header />
      <Hero
        subtitle="Quality, integrity, value"
        title={service.title}
        text=""
      />
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <div className="card-header">Featured</div>
                <ul className="list-group list-group-flush">
                  {services &&
                    services.map((service) => {
                      return (
                        <li key={service.id} className="list-group-item">
                          <Link to={`/service/${service.id}`}>
                            {service.title}
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
            <div className="col-md-9">
              <div>
                <img
                  src={`${fileUrl}uploads/services/large/${service.image}`}
                  className="w-100"
                />
              </div>
              <h3>{service.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: service.content }}></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ServiceDetails;
