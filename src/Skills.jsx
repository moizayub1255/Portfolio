import React from "react";

const Skills = () => {
  const skills = [
    { src: "/react.png", alt: "React" },
    { src: "/node.png", alt: "Node.js" },
    { src: "/tailwind.png", alt: "Tailwind CSS" },
    { src: "/bootstrap.png", alt: "Bootstrap" },
    { src: "/express.png", alt: "Express" },
    { src: "/mongo.png", alt: "MongoDB" },
    { src: "/firebase.png", alt: "Firebase" },
    { src: "/next.png", alt: "NextJS" },
    { src: "/Figma.png", alt: "Figma" },
    { src: "/vercel.png", alt: "Vercel" },
  ];

  return (
    <div>
      <section 
      id="skills"
      className="container py-5">
        <h2 className="text-center display-5 text-light fw-bold mb-4 pb-4">My Skills</h2>

        <div className="row g-4 justify-content-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center"
            >
              <div
                className="bg-white rounded-4 p-3 shadow-sm d-flex align-items-center justify-content-center skill-card"
                style={{
                  width: "140px",
                  height: "140px",
                  transition: "transform 0.3s",
                }}
              >
                <img
                  src={skill.src}
                  alt={skill.alt}
                  className="img-fluid"
                  style={{
                    maxWidth: "100px",
                    maxHeight: "100px",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CSS styles can be included here or in your CSS file */}
      <style>{`
        .skill-card:hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
        }
      `}</style>
    </div>
  );
};

export default Skills;
