import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["about", "skills", "services", "projects", "contact"];

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <header className="p-3 d-flex justify-content-between align-items-center bg-dark bg-opacity-90 fixed-top w-100 z-3 shadow-lg">
        <h1 className="h3 fw-bold text-white m-0">
          <span className="gradient-text">Moiz</span>
        </h1>

        {/* Desktop Nav */}
        <nav className="d-none d-md-flex gap-5">
          {navItems.map((item) => (
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
          className="btn d-md-none text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div 
          className={`mobile-menu-overlay ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(false)}
        ></div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-header d-flex justify-content-end align-items-center p-3">
            
            <button 
              className="btn text-white p-1"
              onClick={() => setMenuOpen(false)}
            >
              <FaTimes size={20} />
            </button>
          </div>
          
          <div className="mobile-menu-content d-flex flex-column justify-content-start gap-4 p-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-white text-decoration-none fs-4 fw-semibold mobile-nav-link"
                onClick={handleNavClick}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </header>

      <style>{`
        .gradient-text {
          background: linear-gradient(45deg, #00ffff, #0080ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .custom-nav-link {
          position: relative;
          transition: color 0.3s ease;
          padding: 5px 0;
        }

        .custom-nav-link::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0%;
          height: 2px;
          background: linear-gradient(45deg, #00ffff, #0080ff);
          transition: width 0.3s ease;
        }

        .custom-nav-link:hover::after {
          width: 100%;
        }

        .custom-nav-link:hover {
          color: #00ffff !important;
        }

        /* Mobile Menu Styles */
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          z-index: 998;
        }

        .mobile-menu-overlay.active {
          opacity: 1;
          visibility: visible;
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 80%;
          max-width: 300px;
          height: 100vh;
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          box-shadow: -5px 0 15px rgba(0, 0, 0, 0.3);
          transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 999;
          display: flex;
          flex-direction: column;
        }

        .mobile-menu.active {
          right: 0;
        }

        .mobile-menu-header {
          border-bottom: 1px solid #333;
          background: rgba(0, 0, 0, 0.3);
        }

        .mobile-menu-content {
          flex: 1;
          justify-content: center;
        }

        .mobile-nav-link {
          position: relative;
          transition: all 0.3s ease;
          padding: 10px 15px;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .mobile-nav-link::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 0;
          background: linear-gradient(45deg, #00ffff, #0080ff);
          border-radius: 8px;
          transition: width 0.3s ease;
          z-index: -1;
        }

        .mobile-nav-link:hover {
          transform: translateX(10px);
          color: #000 !important;
        }

        .mobile-nav-link:hover::before {
          width: 100%;
        }

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Header background blur effect */
        header {
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
      `}</style>
    </div>
  );
};

export default Header;
