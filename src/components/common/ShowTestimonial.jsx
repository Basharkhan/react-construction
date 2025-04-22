import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import { apiUrl, fileUrl } from "./http";

const ShowTestimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  const fetchTestimonials = async () => {
    const res = await fetch(apiUrl + "get-testimonials", {
      method: "GET",
    });
    const result = await res.json();
    setTestimonials(result.data);
    console.log(result);
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <section className="section-5">
      <div className="container">
        <div className="section-header text-center">
          <span>testimonials</span>
          <h2>What people say about us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            illo, impedit nulla facere ipsa quae! Repudiandae delectus
            voluptatibus quasi minima?
          </p>
        </div>
        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={3}
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials &&
            testimonials.map((testimonial) => {
              return (
                <SwiperSlide key={testimonial.id}>
                  <div className="card shadow border-0">
                    <div className="card-body p-4">
                      <div className="rating">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                      <div className="content py-4">
                        <p>{testimonial.testimonial}</p>
                      </div>
                      <hr />
                      <div className="meta">
                        <div>
                          <img
                            src={`${fileUrl}uploads/testimonials/${testimonial.image}`}
                            width={50}
                          />
                        </div>
                        <div>
                          <div className="name">{testimonial.citation}</div>
                          <div>{testimonial.designation}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </section>
  );
};

export default ShowTestimonial;
