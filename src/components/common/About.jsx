import React from "react";
import AboutImg from "../../assets/img/about-us.jpg";

const About = () => {
  return (
    <>
      <section className="section-2 py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6">
              <img src={AboutImg} className="w-100" />
            </div>
            <div className="col-md-6">
              <span>about us</span>
              <h2>Crafting structures that last a lifetime</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
                at nemo omnis incidunt autem odio facilis magni excepturi
                laudantium consequuntur.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                obcaecati modi optio consequatur reiciendis itaque odio
                doloribus quaerat. Officiis, nemo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
