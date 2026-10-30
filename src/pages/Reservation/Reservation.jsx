
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CalendarDays,
  Clock3,
  Users,
  User,
  Mail,
  Phone,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Coffee,
  MapPin,
  Sparkles,
} from "lucide-react";
import "./Reservation.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const timeSlots = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
  "08:00 PM",
  "09:00 PM",
  "10:00 PM",
];

const occasions = [
  "Regular Visit",
  "Birthday",
  "Anniversary",
  "Date Night",
  "Family Dinner",
  "Friends Gathering",
  "Other Celebration",
];

const today = new Date();
const localToday = [
  today.getFullYear(),
  String(today.getMonth() + 1).padStart(2, "0"),
  String(today.getDate()).padStart(2, "0"),
].join("-");

const initialForm = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  guests: "2",
  occasion: "Regular Visit",
  requests: "",
};

function Reservation() {
  const [form, setForm] = useState(initialForm);
  const [confirmed, setConfirmed] = useState(false);
  const [bookingId, setBookingId] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.date || !form.time) {
      return;
    }

    const reference = `CH${Date.now().toString().slice(-7)}`;
    setBookingId(reference);
    setConfirmed(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetBooking = () => {
    setForm(initialForm);
    setConfirmed(false);
    setBookingId("");
  };

  return (
    <>
    <Navbar/>
    
    <main className="reservation-page">
      {/* HERO */}
      <section className="reservation-hero">
        <div className="reservation-hero-image" />
        <div className="reservation-hero-overlay" />

        <div className="reservation-hero-content">
          <span className="reservation-eyebrow">
            YOUR TABLE IS WAITING
          </span>

          <h1>
            Make it a
            <br />
            <em>beautiful moment.</em>
          </h1>

          <p>
            From casual coffee dates to special celebrations,
            let us make your time at CafeHub memorable.
          </p>

          <a href="#booking-form" className="reservation-hero-link">
            RESERVE YOUR TABLE
            <ArrowRight size={17} />
          </a>
        </div>

        <div className="reservation-hero-footer">
          <span>GOOD FOOD. GOOD COMPANY.</span>
          <span>CAFEHUB EXPERIENCE</span>
        </div>
      </section>

      {/* BOOKING AREA */}
      <section className="reservation-main" id="booking-form">
        <div className="reservation-intro">
          <span className="reservation-eyebrow">THE PERFECT TABLE</span>

          <h2>
            Your moment.
            <br />
            <em>Your reservation.</em>
          </h2>

          <p>
            Choose your preferred date, time and table size.
            We will be delighted to welcome you.
          </p>

          <div className="reservation-benefits">
            <div>
              <span className="reservation-benefit-icon">
                <Coffee size={19} />
              </span>
              <div>
                <strong>Made for moments</strong>
                <p>Every visit deserves something special.</p>
              </div>
            </div>

            <div>
              <span className="reservation-benefit-icon">
                <Clock3 size={19} />
              </span>
              <div>
                <strong>Easy planning</strong>
                <p>Choose a time that works for you.</p>
              </div>
            </div>

            <div>
              <span className="reservation-benefit-icon">
                <Sparkles size={19} />
              </span>
              <div>
                <strong>Special occasions</strong>
                <p>Tell us what you are celebrating.</p>
              </div>
            </div>
          </div>

          <div className="reservation-side-image">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000&q=85"
              alt="Elegant cafe dining area"
            />
          </div>
        </div>

        <div className="reservation-form-card">
          {!confirmed ? (
            <>
              <div className="reservation-form-heading">
                <span className="reservation-eyebrow">
                  BOOK YOUR EXPERIENCE
                </span>
                <h3>Reserve a table</h3>
                <p>Share a few details to get started.</p>
              </div>

              <form
                className="reservation-form"
                onSubmit={handleSubmit}
              >
                <div className="reservation-form-section-title">
                  <span>01</span>
                  <h4>Your details</h4>
                </div>

                <div className="reservation-fields-grid">
                  <div className="reservation-field">
                    <label htmlFor="reservation-name">
                      Full Name
                    </label>
                    <div className="reservation-input-wrap">
                      <User size={17} />
                      <input
                        id="reservation-name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={handleChange}
                        minLength={2}
                        autoComplete="name"
                        required
                      />
                    </div>
                  </div>

                  <div className="reservation-field">
                    <label htmlFor="reservation-phone">
                      Phone Number
                    </label>
                    <div className="reservation-input-wrap">
                      <Phone size={17} />
                      <input
                        id="reservation-phone"
                        name="phone"
                        type="tel"
                        placeholder="Your phone number"
                        value={form.phone}
                        onChange={handleChange}
                        pattern="[0-9+() ]{10,16}"
                        autoComplete="tel"
                        required
                      />
                    </div>
                  </div>

                  <div className="reservation-field full-width">
                    <label htmlFor="reservation-email">
                      Email Address
                    </label>
                    <div className="reservation-input-wrap">
                      <Mail size={17} />
                      <input
                        id="reservation-email"
                        name="email"
                        type="email"
                        placeholder="Your email address"
                        value={form.email}
                        onChange={handleChange}
                        autoComplete="email"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="reservation-form-divider" />

                <div className="reservation-form-section-title">
                  <span>02</span>
                  <h4>Reservation details</h4>
                </div>

                <div className="reservation-fields-grid">
                  <div className="reservation-field">
                    <label htmlFor="reservation-date">
                      Preferred Date
                    </label>
                    <div className="reservation-input-wrap">
                      <CalendarDays size={17} />
                      <input
                        id="reservation-date"
                        name="date"
                        type="date"
                        min={localToday}
                        value={form.date}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="reservation-field">
                    <label htmlFor="reservation-time">
                      Preferred Time
                    </label>
                    <div className="reservation-input-wrap">
                      <Clock3 size={17} />
                      <select
                        id="reservation-time"
                        name="time"
                        value={form.time}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Choose a time</option>
                        {timeSlots.map((slot) => (
                          <option value={slot} key={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="reservation-field">
                    <label htmlFor="reservation-guests">
                      Number of Guests
                    </label>
                    <div className="reservation-input-wrap">
                      <Users size={17} />
                      <select
                        id="reservation-guests"
                        name="guests"
                        value={form.guests}
                        onChange={handleChange}
                      >
                        {Array.from({ length: 12 }, (_, index) => (
                          <option
                            value={String(index + 1)}
                            key={index + 1}
                          >
                            {index + 1} {index === 0 ? "Guest" : "Guests"}
                          </option>
                        ))}
                        <option value="13">13 or more guests</option>
                      </select>
                    </div>
                  </div>

                  <div className="reservation-field">
                    <label htmlFor="reservation-occasion">
                      Occasion
                    </label>
                    <div className="reservation-input-wrap">
                      <Sparkles size={17} />
                      <select
                        id="reservation-occasion"
                        name="occasion"
                        value={form.occasion}
                        onChange={handleChange}
                      >
                        {occasions.map((occasion) => (
                          <option value={occasion} key={occasion}>
                            {occasion}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="reservation-field full-width">
                    <label htmlFor="reservation-requests">
                      Special Requests
                      <span className="optional-label">OPTIONAL</span>
                    </label>
                    <textarea
                      id="reservation-requests"
                      name="requests"
                      rows="4"
                      placeholder="Any seating preferences or special arrangements?"
                      value={form.requests}
                      onChange={handleChange}
                      maxLength={500}
                    />
                  </div>
                </div>

                <div className="reservation-summary">
                  <div className="reservation-summary-top">
                    <span>YOUR BOOKING</span>
                    <span>CAFEHUB</span>
                  </div>

                  <div className="reservation-summary-details">
                    <div>
                      <CalendarDays size={16} />
                      <span>
                        {form.date || "Select a date"}
                      </span>
                    </div>
                    <div>
                      <Clock3 size={16} />
                      <span>
                        {form.time || "Select a time"}
                      </span>
                    </div>
                    <div>
                      <Users size={16} />
                      <span>{form.guests} Guests</span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="reservation-submit"
                >
                  REQUEST RESERVATION
                  <ArrowRight size={18} />
                </button>

                <p className="reservation-form-note">
                  Your request is a demo until online booking
                  confirmation is connected.
                </p>
              </form>
            </>
          ) : (
            <div className="reservation-confirmation">
              <div className="reservation-confirmation-icon">
                <CheckCircle2 size={42} />
              </div>

              <span className="reservation-eyebrow">
                REQUEST CREATED
              </span>

              <h3>
                Thank you,
                <br />
                <em>{form.name}.</em>
              </h3>

              <p>
                Your reservation request has been prepared.
                Actual table confirmation will be available
                after backend integration.
              </p>

              <div className="reservation-confirmation-ticket">
                <span>REFERENCE NUMBER</span>
                <strong>{bookingId}</strong>
                <div />
                <p>
                  <CalendarDays size={16} />
                  {form.date}
                </p>
                <p>
                  <Clock3 size={16} />
                  {form.time}
                </p>
                <p>
                  <Users size={16} />
                  {form.guests} Guests
                </p>
                <p>
                  <MapPin size={16} />
                  CafeHub
                </p>
              </div>

              <button
                type="button"
                className="reservation-submit"
                onClick={resetBooking}
              >
                MAKE ANOTHER REQUEST
                <ArrowRight size={18} />
              </button>

              <Link to="/" className="reservation-home-link">
                <ArrowLeft size={16} />
                BACK TO HOME
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CLOSING SECTION */}
      <section className="reservation-closing">
        <span className="reservation-eyebrow">
          MORE THAN JUST A TABLE
        </span>

        <h2>
          Come for the coffee.
          <br />
          <em>Stay for the moments.</em>
        </h2>

        <p>
          We look forward to welcoming you at CafeHub.
        </p>

        <Link to="/menu" className="reservation-menu-link">
          EXPLORE OUR MENU
          <ArrowRight size={17} />
        </Link>
      </section>
    </main>
    <Footer/>
    </>
  );
}

export default Reservation;
