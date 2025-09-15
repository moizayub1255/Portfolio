import React, { useState, useEffect } from "react";
import {
  FaCode,
  FaLaptopCode,
  FaMobileAlt,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.css";
import "./animations.css";
import HeroSection from "./HeroSection";
import Header from "./Header";
import Skills from "./Skills";
import Projects from "./Projects";

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="text-white min-vh-100 bg-gradient grid-overlay">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section
        id="about"
        className="py-5 px-3  text-light animate-on-scroll delay-3"
      >
        <div className="container">
          <h1 className="h2 fw-bold display-5 mb-5 text-center">About Me</h1>
          <div className="row align-items-center">
            {/* Image Section */}
            <div className="col-md-5 mb-4 mb-md-0 text-center ">
              <img
                src="/about.gif"
                alt="Moiz Profile"
                className="img-fluid rounded shadow"
                style={{ maxHeight: "350px", objectFit: "cover" }}
              />
            </div>

            {/* Text Section */}
            <div className="col-md-7 delay-2">
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

      <Skills />

      {/* Services Section */}
      <section
        id="services"
        className="py-5 text-center bg-dark animate-on-scroll delay-3"
      >
        <h3 className="h2 fw-bold mb-4 display-5 pb-4 delay-3">Services</h3>
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="bg-secondary p-4 rounded shadow service- delay-3">
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
                <FaLaptopCode className="text-info fs-1 mb-3 delay-3" />
                <h4 className="h5 fw-semibold">Back-End Development</h4>
                <p>
                  Scalable server-side apps using Node.js, Express, and MongoDB.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-secondary p-4 rounded shadow  service-card">
                <FaMobileAlt className="text-info fs-1 mb-3 delay-3" />
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
      <Projects />

      {/* Contact Section */}
      <section
        id="contact"
        className="py-5 text-center text-light animate-on-scroll delay-3"
      >
        <div className="container">
          <h3 className="h2 display-5 fw-bold mb-4">Contact Me</h3>
          <p className="mb-4">Let's build something amazing together!</p>

          {/* 📬 Contact Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const name = e.target.name.value;
              const email = e.target.email.value;
              const message = e.target.message.value;

              const phoneNumber = "923058666266";
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
              className="btn fw-semibold text-white px-4 rounded-pill"
              style={{
                minWidth: "160px",
                backgroundColor: "#7b2cbf", // Royal Purple
                border: "none",
                transition: "0.3s ease",
              }}
            >
              Send via WhatsApp
            </button>
          </form>

          {/* 🔗 Social Icons */}
          <div className="d-flex justify-content-center gap-4 mt-4 fs-4">
  <a
    href="mailto:moizayub401@gmail.com"
    className="text-purple"
    style={{ color: "#9d4edd", transition: "0.3s" }}
  >
    <FaEnvelope />
  </a>
  <a
    href="https://linkedin.com/in/moiz-ayub-7b9828323"
    className="text-purple"
    style={{ color: "#9d4edd", transition: "0.3s" }}
  >
    <FaLinkedin />
  </a>
  <a
    href="https://github.com/moizayub1255"
    className="text-purple"
    style={{ color: "#9d4edd", transition: "0.3s" }}
  >
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
