import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Sidebar from "../frontend/Sidebar";

const Dashboard = () => {
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
                  <div className="card-body">
                    <h3>Dashboard</h3>
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

export default Dashboard;
