import React, { useEffect, useState } from "react";
import TeamImg1 from "../../assets/img/team1.jpg";
import { FaLinkedin } from "react-icons/fa";
import { apiUrl, fileUrl } from "./http";

const Team = () => {
  const [members, setMembers] = useState([]);

  const fetchMembers = async () => {
    const res = await fetch(apiUrl + "get-members", {
      method: "GET",
    });
    const result = await res.json();
    setMembers(result.data);
    console.log(result);
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  return (
    <section className="section-8 bg-light">
      <div className="container py-5">
        <div className="section-header text-center">
          <span>Team</span>
          <h2>Meet our team</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            illo, impedit nulla facere ipsa quae! Repudiandae delectus
            voluptatibus quasi minima?
          </p>
        </div>
        <div className="row">
          {members &&
            members.map((member) => {
              return (
                <div className="col-md-3 col-lg-3" key={member.id}>
                  <div className="card shadow border-0">
                    <div className="card-img-top">
                      <img
                        src={`${fileUrl}uploads/members/${member.image}`}
                        className="w-100"
                      />
                    </div>
                    <div className="card-body">
                      <div className="card-title">{member.name}</div>
                      <div className="card-subtitle">{member.job_title}</div>
                      {member.linkin_url && (
                        <div className="socials">
                          <a
                            href={member.linkin_url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaLinkedin />
                          </a>
                        </div>
                      )}
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

export default Team;
