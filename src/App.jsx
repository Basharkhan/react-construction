import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/frontend/Home";
import About from "./components/frontend/About";
import "./assets/css/style.scss";
import Services from "./components/frontend/Services";
import Projects from "./components/frontend/Projects";
import Blogs from "./components/frontend/Blogs";
import ContactUs from "./components/frontend/ContactUs";
import Login from "./components/backend/Login";
import { ToastContainer, toast } from "react-toastify";
import Dashboard from "./components/backend/Dashboard";
import RequiredAuth from "./components/frontend/RequiredAuth";
import { default as ShowServices } from "./components/services/Show";
import { default as CreateService } from "./components/services/Create";
import { default as EditService } from "./components/services/Edit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/admin/login" element={<Login />} />

          <Route
            path="/admin/dashboard"
            element={
              <RequiredAuth>
                <Dashboard />
              </RequiredAuth>
            }
          />
          <Route
            path="/admin/services"
            element={
              <RequiredAuth>
                <ShowServices />
              </RequiredAuth>
            }
          />

          <Route
            path="/admin/services/create"
            element={
              <RequiredAuth>
                <CreateService />
              </RequiredAuth>
            }
          />

          <Route
            path="/admin/services/edit/:id"
            element={
              <RequiredAuth>
                <EditService />
              </RequiredAuth>
            }
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
