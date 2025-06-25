import React, { useState } from "react";
import {
  FaCode,
  FaLaptopCode,
  FaMobileAlt,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaBars,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.css"; // Add this for extra custom styling if needed

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="text-white min-vh-100 bg-gradient grid-overlay">
      {/* Header */}
      <header className="p-3 d-flex justify-content-between align-items-center bg-dark bg-opacity-50 position-relative">
        <h1 className="h3 fw-bold">Moiz Dev</h1>
        <nav className="d-none d-md-flex gap-3">
          <a href="#about" className="text-white text-decoration-none nav-link">
            About
          </a>
          <a
            href="#services"
            className="text-white text-decoration-none nav-link"
          >
            Services
          </a>
          <a
            href="#projects"
            className="text-white text-decoration-none nav-link"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-white text-decoration-none nav-link"
          >
            Contact
          </a>
        </nav>
        <button
          className="btn d-md-none text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars size={24} />
        </button>
        {menuOpen && (
          <div className="position-absolute top-100 start-0 w-100 bg-dark py-3 d-flex flex-column align-items-center gap-2 z-1">
            <a
              href="#about"
              className="text-white text-decoration-none"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#services"
              className="text-white text-decoration-none"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#projects"
              className="text-white text-decoration-none"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-white text-decoration-none"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        className="container d-flex align-items-center pb-3"
        style={{ minHeight: "80vh" }}
      >
        <div className="row align-items-center w-100">
          {/* 👤 Image Column */}
          <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
            <img
              src="/moiz.jpeg"
              alt="Moiz"
              className="rounded-circle img-fluid shadow"
              style={{ width: "250px", height: "250px", objectFit: "cover" }}
            />
          </div>

          {/* ✍️ Text Column */}
          <div className="col-12 col-md-6 text-center text-md-start">
            <h2 className="display-4 fw-bold mb-3">Hi, I'm Moiz</h2>
            <p className="lead text-light">
              A passionate web developer building modern and responsive websites
              that not only look stunning but perform flawlessly.
            </p>
            <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-2 mt-3">
              <a
                href="#contact"
                className="btn btn-info text-dark fw-semibold px-3 py-2"
                style={{ minWidth: "140px" }}
              >
                Hire Me
              </a>
              <a
                href="/Moiz-Resume.pdf"
                className="btn btn-outline-light fw-semibold px-3 py-2"
                style={{ minWidth: "140px" }}
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5 px-3  text-light">
        <div className="container">
          <h3 className="h2 fw-bold mb-3 text-center">About Me</h3>
          <div className="row align-items-center">
            {/* Image Section */}
            <div className="col-md-5 mb-4 mb-md-0 text-center">
              <img
                src="/about.gif"
                alt="Moiz Profile"
                className="img-fluid rounded shadow"
                style={{ maxHeight: "350px", objectFit: "cover" }}
              />
            </div>

            {/* Text Section */}
            <div className="col-md-7">
              <p className="mb-3">
                I'm a self-taught full-stack web developer from Pakistan 🇵🇰,
                passionate about building modern, fast and scalable web
                applications using the MERN stack. I love clean code, great
                UI/UX, and turning creative ideas into reality.
              </p>
              <p className="mb-3">
                With hands-on experience in both frontend and backend, I enjoy
                working on diverse projects — from e-commerce platforms to
                dynamic dashboards. I'm always exploring new tech and improving
                my skills daily.
              </p>
              <p>
                When I’m not coding, you’ll find me exploring tech trends,
                learning something new, or helping others grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-5 text-center bg-dark">
        <h3 className="h2 fw-bold mb-4">Services</h3>
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="bg-secondary p-4 rounded shadow service-card">
                <FaCode className="text-info fs-1 mb-3" />
                <h4 className="h5 fw-semibold">Front-End Development</h4>
                <p>
                  Responsive and visually appealing UI using React.js, Tailwind,
                  and more.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-secondary p-4 rounded shadow  service-card">
                <FaLaptopCode className="text-info fs-1 mb-3" />
                <h4 className="h5 fw-semibold">Back-End Development</h4>
                <p>
                  Scalable server-side apps using Node.js, Express, and MongoDB.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-secondary p-4 rounded shadow  service-card">
                <FaMobileAlt className="text-info fs-1 mb-3" />
                <h4 className="h5 fw-semibold">Responsive Design</h4>
                <p>
                  Mobile-first approach to ensure your website looks great on
                  all devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5 text-center px-3  text-light">
        <h3 className="h2 fw-bold mb-4">Projects</h3>
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="bg-secondary p-4 rounded shadow h-100 d-flex flex-column">
                <img
                  src="/project1.png"
                  alt="Project 1"
                  className="img-fluid rounded mb-3"
                  style={{ height: "180px", objectFit: "cover" }}
                />

                <h4 className="h5 fw-semibold">Capture Mart</h4>
                <p className="text-light mb-3">
                  A full-stack e-commerce website built with the MERN stack
                  featuring cart, admin dashboard, and authentication.
                </p>

                <div className="mt-auto d-flex justify-content-center gap-3 flex-wrap">
                  <a
                    href="https://github.com/moizayub1255/MERN-E-commerce"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-info d-flex align-items-center gap-2"
                    title="GitHub Repo"
                  >
                    <i className="bi bi-github fs-5"></i>
                    GitHub Repo
                  </a>
                  <a
                    href="https://moizkiecommerce.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-info text-white d-flex align-items-center gap-2"
                    title="Live Demo"
                  >
                    <i className="bi bi-box-arrow-up-right fs-5"></i>
                    Live Preview
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="bg-secondary p-4 rounded shadow h-100 d-flex flex-column">
                <img
                  src="/sports.png"
                  alt="Project 1"
                  className="img-fluid rounded mb-3"
                  style={{ height: "180px", objectFit: "cover" }}
                />

                <h4 className="h5 fw-semibold">UCP Sports Website</h4>
                <p className="text-light mb-3">
                  A full-stack sports website built with the MERN stack
                  featuring scorecard, admin dashboard, and authentication.
                </p>

                <div className="mt-auto d-flex justify-content-center gap-3 flex-wrap">
                  <a
                    href="https://github.com/moizayub1255/MERN-E-commerce"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-info d-flex align-items-center gap-2"
                    title="GitHub Repo"
                  >
                    <i className="bi bi-github fs-5"></i>
                    GitHub Repo
                  </a>
                  <a
                    href="https://moizkiecommerce.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-info text-white d-flex align-items-center gap-2"
                    title="Live Demo"
                  >
                    <i className="bi bi-box-arrow-up-right fs-5"></i>
                    Live Preview
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="bg-secondary p-4 rounded shadow h-100 d-flex flex-column">
                <img
                  src="/project1.png"
                  alt="Project 1"
                  className="img-fluid rounded mb-3"
                  style={{ height: "180px", objectFit: "cover" }}
                />

                <h4 className="h5 fw-semibold">Capture Mart</h4>
                <p className="text-light mb-3">
                  A full-stack e-commerce website built with the MERN stack
                  featuring cart, admin dashboard, and authentication.
                </p>

                <div className="mt-auto d-flex justify-content-center gap-3 flex-wrap">
                  <a
                    href="https://github.com/moizayub1255/MERN-E-commerce"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-info d-flex align-items-center gap-2"
                    title="GitHub Repo"
                  >
                    <i className="bi bi-github fs-5"></i>
                    GitHub Repo
                  </a>
                  <a
                    href="https://moizkiecommerce.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-info text-white d-flex align-items-center gap-2"
                    title="Live Demo"
                  >
                    <i className="bi bi-box-arrow-up-right fs-5"></i>
                    Live Preview
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 text-center text-light">
        <div className="container">
          <h3 className="h2 fw-bold mb-4">Contact Me</h3>
          <p className="mb-4">Let's build something amazing together!</p>

          {/* 📬 Contact Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const name = e.target.name.value;
              const email = e.target.email.value;
              const message = e.target.message.value;

              const phoneNumber = "923366190190";
              const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

              window.open(
                `https://wa.me/${phoneNumber}?text=${whatsappMessage}`,
                "_blank"
              );
            }}
            className="mx-auto"
            style={{ maxWidth: "600px" }}
          >
            <div className="mb-3 text-start">
              {/* <label htmlFor="name" className="form-label fw-semibold">
                Name
              </label> */}
              <input
                type="text"
                name="name"
                className="form-control"
                required
                placeholder="Name"
              />
            </div>

            <div className="mb-3 text-start">
              {/* <label htmlFor="email" className="form-label fw-semibold">
                Email
              </label> */}
              <input
                type="email"
                name="email"
                className="form-control"
                required
                placeholder="Email"
              />
            </div>

            <div className="mb-3 text-start">
              {/* <label htmlFor="message" className="form-label fw-semibold">
                Message
              </label> */}
              <textarea
                name="message"
                rows="4"
                className="form-control"
                required
                placeholder="Your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-info text-dark fw-semibold px-4"
            >
              Send via WhatsApp
            </button>
          </form>

          {/* 🔗 Social Icons */}
          <div className="d-flex justify-content-center gap-4 mt-4 fs-4">
            <a href="mailto:moiz@example.com" className="text-info">
              <FaEnvelope />
            </a>
            <a href="https://linkedin.com/in/moiz" className="text-info">
              <FaLinkedin />
            </a>
            <a href="https://github.com/moiz" className="text-info">
              <FaGithub />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-3 bg-dark bg-opacity-50 text-secondary small">
        © {new Date().getFullYear()} Moiz Dev. All rights reserved.
      </footer>
    </div>
  );
}
