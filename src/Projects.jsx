import React, { useState, useEffect } from "react";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768); // md se choti screen ko mobile maan lo
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Array of projects for easy mapping
  const projects = [
    {
      title: "Rivaz Stores",
      img: "/rivaz.png",
      desc: "A full-stack e-commerce website built with the MERN stack featuring cart, admin dashboard, and authentication.",
      github: "https://github.com/moizayub1255/MERN-E-commerce",
      live: "https://moizkiecommerce.vercel.app/",
    },
    {
      title: "UCP Sports Website",
      img: "/ucp.png",
      desc: "A full-stack sports website built with the MERN stack featuring scorecard, admin dashboard, and authentication.",
      github: "https://github.com/moizayub1255/MERN-UCP-SPORTS",
      live: "https://moizkiucp.vercel.app/",
    },
    {
      title: "Talaash",
      img: "/talash.png",
      desc: "Talaash is a platform that helps students discover internships, jobs, and scholarships with ease.",
      github: "https://github.com/moizayub1255/Talaash",
      live: "https://talaash-ucp.vercel.app/",
    },
    {
      title: "Car Rental",
      img: "/car.png",
      desc: "Car Rental is a platform that helps people rent their cars and get cars on rent.",
      github: "https://github.com/moizayub1255/MERN-CAR-2",
      live: "https://moizkicars.vercel.app/",
    },
    {
      title: "AI Fitness Trainer",
      img: "/trainerai.png",
      desc: "CodeFlex AI is a platform that helps people to train their body with the help of AI.",
      github: "https://github.com/moizayub1255/Fit-Mentor",
      live: "https://fit-mentor-tau.vercel.app/",
    },
    {
      title: "GYM Website",
      img: "/gym.png",
      desc: "Fit4Fight is a platform that helps people to train their body and manage their fitness.",
      github: "https://github.com/moizayub1255/MERN-GYM",
      live: "https://moizkagym.vercel.app/",
    },
    {
      title: "Restaurent Website",
      img: "/resturant.png",
      desc: "It is a platform that helps people to see menu and order the food they want to eat.",
      github: "https://github.com/moizayub1255/Restaurent.git",
      live: "https://moizkarestaurent.vercel.app/",
    },
    {
      title: "Travel Website",
      img: "/travel.png",
      desc: "TravelWithUs is a platform that helps people to see different places to visit.",
      github: "https://github.com/moizayub1255/Travel-Website.git",
      live: "https://travelwithus12.netlify.app/",
    },
    {
      title: "Ecommerce Website",
      img: "/ecom.png",
      desc: "A full-stack e-commerce website built with the MERN stack featuring cart, admin dashboard, and authentication.",
      github: "https://github.com/moizayub1255/MERN-ECOM.git",
      live: "https://moizkiecommerce.vercel.app/",
    },
  ];

  // Mobile pe sirf 3 projects initially
  const visibleProjects =
    isMobile && !showAll ? projects.slice(0, 3) : projects;

  return (
    <div>
      <section
        id="projects"
        className="py-5 text-center px-3 text-light animate-on-scroll delay-3"
      >
        <h3 className="h2 fw-bold display-5 mb-4">Projects</h3>
        <div className="container">
          <div className="row g-4">
            {visibleProjects.map((project, index) => (
              <div key={index} className="col-md-4">
                <div className="bg-white text-dark p-4 rounded shadow h-100 d-flex flex-column">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="img-fluid rounded mb-3"
                    style={{ height: "180px", objectFit: "cover" }}
                  />
                  <h4 className="h5 fw-semibold">{project.title}</h4>
                  <p className="text-muted mb-3">{project.desc}</p>
                  <div className="mt-auto d-flex justify-content-center gap-3 flex-wrap">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-purple d-flex align-items-center gap-2"
                      style={{
                        border: "2px solid #9d4edd",
                        color: "#9d4edd",
                      }}
                    >
                      <i className="bi bi-github fs-5"></i>
                      GitHub Repo
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn d-flex align-items-center gap-2"
                      style={{
                        backgroundColor: "#7b2cbf",
                        color: "white",
                      }}
                    >
                      <i className="bi bi-box-arrow-up-right fs-5"></i>
                      Live Preview
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile pe load more button */}
          {isMobile && !showAll && (
            <div className="mt-4">
              <button
                className="btn"
                style={{
                        backgroundColor: "#7b2cbf",
                        color: "white",
                      }}
                onClick={() => setShowAll(true)}
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
