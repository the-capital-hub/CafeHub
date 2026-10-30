
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  Coffee,
} from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

import "./footer.css";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Our Story", path: "/about" },
    { name: "Our Menu", path: "/menu" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ];

  const menuLinks = [
    { name: "Coffee & Tea", path: "/menu" },
    { name: "Indian Favourites", path: "/menu" },
    { name: "Burgers & Sandwiches", path: "/menu" },
    { name: "Desserts & Waffles", path: "/menu" },
    { name: "Coolers & Shakes", path: "/menu" },
  ];

  return (
    <footer className="cafe-footer">
      <div className="footer-main container">

        {/* Brand Section */}
        <div className="footer-brand-section">
          <Link to="/" className="footer-brand">
            <span className="footer-brand-icon">C</span>

            <span className="footer-brand-name">
              Cafe<span>Hub</span>
            </span>
          </Link>

          <p className="footer-brand-description">
            More than just a cafe. A place where beautiful moments,
            soulful conversations and unforgettable flavours come together.
          </p>

          <div className="footer-socials">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Explore</h3>

          {quickLinks.map((link) => (
            <Link to={link.path} key={link.name}>
              {link.name}
              <ArrowUpRight size={13} />
            </Link>
          ))}
        </div>

        {/* Menu Links */}
        <div className="footer-column">
          <h3>Our Menu</h3>

          {menuLinks.map((link) => (
            <Link to={link.path} key={link.name}>
              {link.name}
              <ArrowUpRight size={13} />
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div className="footer-column footer-contact">
          <h3>Visit Our Cafe</h3>

          <div className="footer-contact-item">
            <MapPin size={17} />
            <p>Your Cafe Address, City, India</p>
          </div>

          <div className="footer-contact-item">
            <Phone size={17} />
            <a href="tel:+910000000000">+91 00000 00000</a>
          </div>

          <div className="footer-contact-item">
            <Mail size={17} />
            <a href="mailto:hello@cafehub.com">
              hello@cafehub.com
            </a>
          </div>

          <div className="footer-contact-item">
            <Clock size={17} />
            <p>Every Day, 10 AM to 11 PM</p>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="footer-newsletter container">
        <div className="newsletter-content">
          <span className="newsletter-eyebrow">A LITTLE SOMETHING SPECIAL</span>
          <h2>Good Things Are Brewing.</h2>
          <p>
            Get cafe updates, special offers and a little inspiration
            delivered to your inbox.
          </p>
        </div>

        <form
          className="newsletter-form"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your email address"
            aria-label="Email address"
            required
          />

          <button type="submit" aria-label="Subscribe">
            Subscribe <ArrowUpRight size={17} />
          </button>
        </form>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} CafeHub. All rights reserved.</p>

          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
          </div>

          <p className="footer-made">
            Made with <Coffee size={14} /> and passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
