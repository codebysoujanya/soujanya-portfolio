import { useState } from "react";
import {
  FiMenu,
  FiX,
  FiDownload,
} from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  const handleNavigation = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-inner">

        {/* Logo */}
        <button
          className="logo"
          onClick={() => handleNavigation("home")}
        >
          <span>&lt;</span>
          SG
          <span>/&gt;</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavigation(link.id)}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Resume */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button"
        >
          <FiDownload />
          Resume
        </a>

        {/* Mobile Menu */}
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open navigation menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="mobile-nav">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavigation(link.id)}
            >
              {link.name}
            </button>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-resume"
          >
            <FiDownload />
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;