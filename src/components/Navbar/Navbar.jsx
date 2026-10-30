
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import {
  ArrowUpRight,
  Menu,
  X,
  Coffee,
  UserRound,
} from "lucide-react";

import { FaInstagram } from "react-icons/fa6";

import "./navbar.css";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Our Story", path: "/about" },
  { name: "Our Menu", path: "/menu" },
  { name: "Experience", path: "/experience" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 45);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* MAIN NAVBAR */}

      <header
        className={`navbar ${scrolled ? "scrolled" : ""} ${
          menuOpen ? "menu-active" : ""
        }`}
      >
        <div className="navbar-container">

          {/* BRAND */}

          <Link
            to="/"
            className="navbar-brand"
            onClick={closeMenu}
          >
            <div className="brand-mark">
              C<span>.</span>
            </div>

            <div className="brand-information">
              <span className="brand-name">CafeHub</span>

              <span className="brand-caption">
                COFFEE · FOOD · MOMENTS
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}

          <nav className="desktop-navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `navigation-link ${
                    isActive ? "navigation-active" : ""
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>

                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="navigation-indicator"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* NAVBAR ACTIONS */}

          <div className="navbar-actions">

            <Link
              to="/login"
              className="navbar-login"
            >
              <UserRound size={16} />
              <span>Login</span>
            </Link>

            <Link
              to="/reservation"
              className="navbar-booking"
            >
              <span>Reserve a Table</span>
              <ArrowUpRight size={17} />
            </Link>

            {/* MOBILE MENU BUTTON */}

            <button
              className="mobile-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={
                menuOpen ? "Close navigation" : "Open navigation"
              }
              aria-expanded={menuOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={menuOpen ? "close" : "open"}
                  initial={{
                    opacity: 0,
                    rotate: -45,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 45,
                    scale: 0.7,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {menuOpen ? (
                    <X size={25} />
                  ) : (
                    <Menu size={25} />
                  )}
                </motion.span>
              </AnimatePresence>
            </button>

          </div>
        </div>
      </header>

      {/* MOBILE NAVIGATION */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mobile-navigation-inner">

              <div className="mobile-navigation-heading">
                <span>DISCOVER CAFEHUB</span>
                <Coffee size={22} />
              </div>

              {/* MOBILE LINKS */}

              <nav className="mobile-navigation-links">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.4,
                    }}
                  >
                    <NavLink
                      to={link.path}
                      end={link.path === "/"}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `mobile-navigation-link ${
                          isActive ? "mobile-active" : ""
                        }`
                      }
                    >
                      <span className="mobile-link-number">
                        0{index + 1}
                      </span>

                      <span className="mobile-link-name">
                        {link.name}
                      </span>

                      <ArrowUpRight size={21} />
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              {/* MOBILE ACCOUNT ACTIONS */}

              <div className="mobile-account-actions">

                <Link
                  to="/login"
                  className="mobile-login-button"
                  onClick={closeMenu}
                >
                  <UserRound size={19} />
                  <span>Login to CafeHub</span>
                  <ArrowUpRight size={18} />
                </Link>

                <Link
                  to="/reservation"
                  className="mobile-reservation-button"
                  onClick={closeMenu}
                >
                  <Coffee size={19} />
                  <span>Reserve Your Table</span>
                  <ArrowUpRight size={19} />
                </Link>

              </div>

              {/* MOBILE FOOTER */}

              <div className="mobile-navigation-footer">

                <div className="mobile-footer-copy">
                  <span>GOOD COFFEE.</span>
                  <span>GOOD COMPANY.</span>
                </div>

                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="CafeHub Instagram"
                  className="mobile-social-link"
                >
                  <FaInstagram />
                </a>

              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
