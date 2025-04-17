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
import { default as ShowServices } from "./components/backend/services/Show";
import { default as CreateService } from "./components/backend/services/Create";
import { default as EditService } from "./components/backend/services/Edit";

import { default as ShowProjects } from "./components/backend/projects/Show";
import { default as CreateProject } from "./components/backend/projects/Create";
import { default as EditProject } from "./components/backend/projects/Edit";

import { default as ShowArticles } from "./components/backend/articles/Show";
import { default as CreateArticle } from "./components/backend/articles/Create";
import { default as EditArticle } from "./components/backend/articles/Edit";

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

          <Route
            path="/admin/projects"
            element={
              <RequiredAuth>
                <ShowProjects />
              </RequiredAuth>
            }
          />

          <Route
            path="/admin/projects/create"
            element={
              <RequiredAuth>
                <CreateProject />
              </RequiredAuth>
            }
          />

          <Route
            path="/admin/projects/edit/:id"
            element={
              <RequiredAuth>
                <EditProject />
              </RequiredAuth>
            }
          />

          <Route
            path="/admin/articles"
            element={
              <RequiredAuth>
                <ShowArticles />
              </RequiredAuth>
            }
          />

          <Route
            path="/admin/articles/create"
            element={
              <RequiredAuth>
                <CreateArticle />
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
