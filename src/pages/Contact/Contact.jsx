
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  Send,
  MessageCircle,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./Contact.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const contactDetails = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 98765 43210",
    link: "tel:+919876543210",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@cafehub.in",
    link: "mailto:hello@cafehub.in",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "Your Cafe Address, India",
    link: "#location",
  },
  {
    icon: Clock,
    title: "Opening Hours",
    value: "Everyday, 10 AM to 11 PM",
    link: "#hours",
  },
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "General Enquiry",
  message: "",
};

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Frontend demo only. Connect this form to your backend later.
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <>
    <Navbar/>
    
    <main className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-image" />

        <div className="contact-hero-overlay" />

        <div className="contact-hero-content">
          <span className="contact-eyebrow">
            WE WOULD LOVE TO HEAR FROM YOU
          </span>

          <h1>
            Let's Start a
            <br />
            <em>Conversation.</em>
          </h1>

          <p>
            Questions, celebrations or simply a little curiosity.
            We are always happy to connect with you.
          </p>

          <a href="#contact-details" className="contact-scroll">
            GET IN TOUCH
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="contact-hero-bottom">
          <span>GOOD COFFEE. GOOD PEOPLE. GOOD MOMENTS.</span>
          <span>EST. WITH LOVE</span>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="contact-details section-padding" id="contact-details">
        <div className="contact-section-heading">
          <span className="contact-eyebrow">SAY HELLO</span>
          <h2>
            Every great experience
            <br />
            <em>begins with a hello.</em>
          </h2>
          <p>
            Reach out to us for reservations, events, feedback or
            anything else. Our team is here to help.
          </p>
        </div>

        <div className="contact-info-grid">
          {contactDetails.map((item, index) => {
            const Icon = item.icon;

            return (
              <a
                href={item.link}
                className="contact-info-card"
                key={index}
              >
                <div className="contact-info-icon">
                  <Icon size={21} strokeWidth={1.5} />
                </div>

                <div>
                  <span>{item.title}</span>
                  <h3>{item.value}</h3>
                </div>

                <ArrowUpRight
                  className="contact-info-arrow"
                  size={18}
                />
              </a>
            );
          })}
        </div>
      </section>

      {/* MESSAGE FORM */}
      <section className="contact-message-section">
        <div className="contact-message-image">
          <img
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1100&q=85"
            alt="Warm cafe coffee experience"
          />

          <div className="contact-image-caption">
            <span>A LITTLE SPACE TO CONNECT</span>
            <h3>Good conversations deserve great coffee.</h3>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <span className="contact-eyebrow">SEND US A MESSAGE</span>

          <h2>
            Tell us what's
            <br />
            <em>on your mind.</em>
          </h2>

          <p className="contact-form-intro">
            Fill in the details below and our team will get back to you.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="contact-name">Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  minLength={2}
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="contact-phone">Phone Number</label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  pattern="[0-9+() ]{10,16}"
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-subject">Subject</label>
                <select
                  id="contact-subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                >
                  <option>General Enquiry</option>
                  <option>Table Reservation</option>
                  <option>Private Events</option>
                  <option>Feedback</option>
                  <option>Business Enquiry</option>
                </select>
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">Your Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell us how we can help..."
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
                minLength={10}
              />
            </div>

            <button type="submit" className="contact-submit">
              SEND MESSAGE
              <Send size={17} />
            </button>

            {submitted && (
              <p className="contact-success" role="status">
                Thank you for reaching out. Your form is ready for
                backend integration.
              </p>
            )}

            <span className="contact-form-note">
              We respect your privacy and your time.
            </span>
          </form>
        </div>
      </section>

      {/* LOCATION */}
      <section className="contact-location" id="location">
        <div className="contact-location-content">
          <span className="contact-eyebrow">COME FIND US</span>
          <h2>
            Your table
            <br />
            <em>is waiting.</em>
          </h2>

          <p>
            Drop by for your favourite coffee, a comforting meal
            or a moment worth remembering.
          </p>

          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noreferrer"
            className="contact-map-link"
          >
            EXPLORE LOCATION
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="contact-location-image">
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&q=85"
            alt="Cafe interior"
          />
        </div>
      </section>

      {/* SOCIAL */}
      <section className="contact-social">
        <span className="contact-eyebrow">FOLLOW OUR JOURNEY</span>
        <h2>
          Stay close.
          <em> Stay connected.</em>
        </h2>

        <div className="contact-social-links">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
        </div>

        <span className="contact-social-handle">@CAFEHUB</span>
      </section>
    </main>
    <Footer/>
    </>
  );
}

export default Contact;
