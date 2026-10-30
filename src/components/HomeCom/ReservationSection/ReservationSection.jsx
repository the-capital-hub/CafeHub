
import { useState } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Users,
  MapPin,
} from "lucide-react";
import "./ReservationSection.css";

const ReservationSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
  });

  const [submitted, setSubmitted] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Frontend demo only. Backend integration is pending.
    setSubmitted(true);
  };

  return (
    <section className="reservation-section">
      <div className="reservation-background">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1800&q=90"
          alt="Warm and elegant cafe dining atmosphere"
          loading="lazy"
        />
      </div>

      <div className="reservation-overlay" />

      <div className="reservation-container">

        <div className="reservation-content">

          <div className="reservation-eyebrow">
            <span />
            YOUR TABLE IS WAITING
          </div>

          <h2>
            Make room for
            <br />
            <em>good moments.</em>
          </h2>

          <p className="reservation-description">
            A coffee date, a family gathering or simply
            some time for yourself. Make your next visit
            a little more special at CafeHub.
          </p>

          <div className="reservation-location">
            <MapPin size={18} />
            <span>YOUR FAVOURITE PLACE TO UNWIND</span>
          </div>

          <div className="reservation-decoration">
            <span>CAFEHUB</span>
            <div />
            <span>GOOD TIMES AHEAD</span>
          </div>

        </div>

        <div className="reservation-form-card">

          <div className="reservation-form-heading">
            <span>LET US SAVE YOU A SEAT</span>
            <h3>Reserve your table.</h3>
            <p>Share your details and plan your visit.</p>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="reservation-field">
              <label htmlFor="reservation-name">YOUR NAME</label>
              <input
                id="reservation-name"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={updateField}
                autoComplete="name"
                required
              />
            </div>

            <div className="reservation-field">
              <label htmlFor="reservation-phone">PHONE NUMBER</label>
              <input
                id="reservation-phone"
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={updateField}
                autoComplete="tel"
                pattern="[0-9+\s]{10,15}"
                title="Please enter a valid phone number"
                required
              />
            </div>

            <div className="reservation-form-row">

              <div className="reservation-field">
                <label htmlFor="reservation-date">
                  <CalendarDays size={14} />
                  DATE
                </label>
                <input
                  id="reservation-date"
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={updateField}
                  required
                />
              </div>

              <div className="reservation-field">
                <label htmlFor="reservation-time">
                  <Clock3 size={14} />
                  TIME
                </label>
                <select
                  id="reservation-time"
                  name="time"
                  value={formData.time}
                  onChange={updateField}
                  required
                >
                  <option value="">Select time</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="01:00 PM">01:00 PM</option>
                  <option value="02:00 PM">02:00 PM</option>
                  <option value="03:00 PM">03:00 PM</option>
                  <option value="04:00 PM">04:00 PM</option>
                  <option value="05:00 PM">05:00 PM</option>
                  <option value="06:00 PM">06:00 PM</option>
                  <option value="07:00 PM">07:00 PM</option>
                  <option value="08:00 PM">08:00 PM</option>
                  <option value="09:00 PM">09:00 PM</option>
                </select>
              </div>

            </div>

            <div className="reservation-field">
              <label htmlFor="reservation-guests">
                <Users size={14} />
                NUMBER OF GUESTS
              </label>

              <select
                id="reservation-guests"
                name="guests"
                value={formData.guests}
                onChange={updateField}
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
                <option value="6">6 Guests</option>
                <option value="7">7 Guests</option>
                <option value="8">8 Guests</option>
              </select>
            </div>

            <button type="submit" className="reservation-submit">
              REQUEST A TABLE
              <ArrowUpRight size={19} />
            </button>

            {submitted && (
              <div className="reservation-success" role="status">
                Your details are ready! Online booking
                confirmation will be available after backend integration.
              </div>
            )}

            <p className="reservation-form-note">
              We look forward to welcoming you.
            </p>

          </form>
        </div>

      </div>
    </section>
  );
};

export default ReservationSection;
