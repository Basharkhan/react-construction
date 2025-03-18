import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-3">
              <h3 className="mb-3">UrbanEdge Construction</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                et distinctio voluptas officia possimus adipisci magni at vel
                deleniti perferendis.
              </p>
            </div>
            <div className="col-md-3">
              <h3 className="mb-3">Our Services</h3>
              <ul>
                <li>
                  <a href="#">Speciality Conatruction</a>
                </li>
                <li>
                  <a href="#">Civil Construction</a>
                </li>
                <li>
                  <a href="#">Residential Construction</a>
                </li>
                <li>
                  <a href="#">Corporate Construction</a>
                </li>
                <li>
                  <a href="#">Building Construction</a>
                </li>
                <li>
                  <a href="#">Industrial Construction</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h3 className="mb-3">Quick Links</h3>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Projects</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h3 className="mb-3">Contact Us</h3>
              <ul>
                <li>
                  <a href="#">(888-000-000)</a>
                </li>
                <li>
                  <a href="#">info@example.com</a>
                </li>
              </ul>
              <p>
                1480/8 West Monipur
                <br />
                Mirpur Dhaka <br />
                0122547850
              </p>
            </div>
          </div>
          <hr />
          <div className="text-center pt-4">
            Copyright @2025 UrbanEdge Constructions. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
