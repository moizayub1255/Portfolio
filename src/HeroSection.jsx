import React from "react";

const HeroSection = () => {
  return (
    <div>
      <section
        className="container d-flex align-items-center "
        style={{ minHeight: "90vh" }}
      >
        <div className="row align-items-center w-100">
          {/* 👤 Image Column */}
          <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
            <img
              src="/moiz.jpeg"
              alt="Moiz"
              className="rounded-circle img-fluid"
              style={{
                width: "250px",
                height: "250px",
                objectFit: "cover",
                boxShadow:
                  "0 0 30px #8a2be2, 0 0 60px #8a2be2, 0 0 100px #8a2be2",
              }}
            />
          </div>

          {/* ✍️ Text Column */}
          <div className="col-12 col-md-6 text-center text-md-start">
            <h2 className="display-4 fw-bold mb-3 text-light">Hi, I'm Moiz</h2>
            <p className="lead text-light">
              A passionate web developer building modern and responsive websites
              that not only look stunning but also perform flawlessly.
            </p>

            {/* 💻 Skills - Desktop Only */}
            <div className="d-none d-md-flex flex-wrap gap-2 mb-4">
              {["React.js", "Node.js", "MongoDB", "Express", "Bootstrap"].map(
                (skill, idx) => (
                  <span
                    key={idx}
                    className="badge rounded-pill bg-light text-dark px-3 py-2 fw-semibold shadow-sm"
                    style={{ fontSize: "0.9rem" }}
                  >
                    {skill}
                  </span>
                )
              )}
            </div>

            {/* 📦 Buttons */}
            <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-3 mt-2">
              <a
                href="#contact"
                className="btn text-white fw-semibold px-4 py-2 rounded-pill shadow"
                style={{
                  minWidth: "140px",
                  backgroundColor: "#7b2cbf", // Royal Purple
                  border: "none",
                }}
              >
                Hire Me
              </a>

              <a
                href="/Moiz.pdf"
                className="btn btn-outline-light fw-semibold px-4 py-2 rounded-pill shadow"
                style={{ minWidth: "140px" }}
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>

            {/* 🌐 Social Icons */}
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-4">
              <a
                href="https://github.com/moizayub1255"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light rounded-circle shadow"
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#333",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.1)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <i className="bi bi-github fs-3"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/moiz-ayub-7b9828323/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light rounded-circle shadow"
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#0A66C2",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.1)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <i className="bi bi-linkedin fs-3"></i>
              </a>
              <a
                href="https://www.instagram.com/moizayub_1255"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light rounded-circle shadow"
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#C13584",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.1)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <i className="bi bi-instagram fs-3"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
