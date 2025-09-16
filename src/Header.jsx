import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <header className="p-3 d-flex justify-content-between align-items-center bg-dark bg-opacity-50 fixed-top w-100 z-3 shadow">
        <h1 className="h3 fw-bold text-white m-0">Moiz </h1>

        {/* Desktop Nav */}
        <nav className="d-none d-md-flex gap-4">
          {["about", "skills", "services", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-white text-decoration-none fw-semibold nav-link fs-5 custom-nav-link"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </nav>

        {/* Hamburger Button */}
        <button
          className="btn d-md-none text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars size={24} />
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="position-absolute top-100 start-0 w-100 bg-dark py-3 d-flex flex-column align-items-center gap-3 z-1">
            {["about", "skills", "services", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-white text-decoration-none fs-5 fw-semibold"
                onClick={() => setMenuOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
        )}

      </header>

      {/* 👇 Inline CSS or put it in your App.css */}
      <style>{`
        .custom-nav-link {
          position: relative;
          transition: color 0.3s;
        }

        .custom-nav-link::after {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0%;
          height: 2px;
          background-color: cyan;
          transition: width 0.3s;
        }

        .custom-nav-link:hover::after {
          width: 100%;
        }

        .custom-nav-link:hover {
          color: cyan !important;
        }
      `}</style>
    </div>
  );
};

export default Header;
