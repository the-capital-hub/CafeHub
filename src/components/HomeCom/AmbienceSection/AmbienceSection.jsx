
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, MoveUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AmbienceSection.css";

gsap.registerPlugin(ScrollTrigger);

const moments = [
  {
    number: "01",
    title: "Coffee dates",
    subtitle: "A little time, just for two.",
    image:
      "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=900&q=85",
  },
  {
    number: "02",
    title: "Friends & laughter",
    subtitle: "The best conversations happen here.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=85",
  },
  {
    number: "03",
    title: "Little celebrations",
    subtitle: "Make ordinary days memorable.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&q=85",
  },
  {
    number: "04",
    title: "Your quiet corner",
    subtitle: "A peaceful pause in a busy day.",
    image:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=900&q=85",
  },
];

const AmbienceSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".ambience-heading", {
        y: 55,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".ambience-intro",
          start: "top 82%",
        },
      });

      gsap.from(".ambience-intro-copy", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".ambience-intro",
          start: "top 82%",
        },
      });

      gsap.from(".ambience-main-image", {
        clipPath: "inset(0 0 100% 0)",
        duration: 1.3,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".ambience-gallery",
          start: "top 78%",
        },
      });

      gsap.from(".ambience-side-card", {
        y: 45,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".ambience-side-grid",
          start: "top 85%",
        },
      });

      gsap.from(".ambience-moment", {
        y: 45,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".ambience-moments",
          start: "top 85%",
        },
      });

      gsap.to(".ambience-main-image img", {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: ".ambience-main-image",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="ambience-section" ref={sectionRef}>
      <div className="ambience-container">

        {/* INTRO */}

        <div className="ambience-intro">
          <div>
            <div className="ambience-eyebrow">
              <span />
              THE CAFEHUB ATMOSPHERE
            </div>

            <h2 className="ambience-heading">
              A space for
              <br />
              every little <em>moment.</em>
            </h2>
          </div>

          <p className="ambience-intro-copy">
            Come for the coffee. Stay for the feeling.
            Whether it is a catch up with friends or a
            little time for yourself, there is always
            a place waiting for you.
          </p>
        </div>

        {/* MAIN GALLERY */}

        <div className="ambience-gallery">

          <div className="ambience-main-image">
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1600&q=90"
              alt="Beautiful warm cafe interior"
              loading="lazy"
            />

            <div className="ambience-image-shade" />

            <div className="ambience-main-caption">
              <span>WELCOME TO YOUR HAPPY PLACE</span>
              <h3>Feel at home.<br />Every single time.</h3>
            </div>

            <span className="ambience-image-count">01 / 04</span>
          </div>

          <div className="ambience-side-grid">

            <div className="ambience-side-card">
              <img
                src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=900&q=85"
                alt="Cafe seating and coffee experience"
                loading="lazy"
              />
              <div className="ambience-side-overlay" />
              <span>THE PERFECT CORNER</span>
            </div>

            <div className="ambience-side-card">
              <img
                src="https://images.unsplash.com/photo-1515003197210-e0cd7184f8b5?w=900&q=85"
                alt="Beautifully served cafe food"
                loading="lazy"
              />
              <div className="ambience-side-overlay" />
              <span>MADE FOR SHARING</span>
            </div>

          </div>
        </div>

        {/* MOMENTS */}

        <div className="ambience-moments-header">
          <div>
            <span className="ambience-eyebrow">
              <span />
              FIND YOUR MOMENT
            </span>

            <h3>There is a place for <em>everyone.</em></h3>
          </div>

          <Link to="/reservation" className="ambience-reserve-link">
            PLAN YOUR VISIT
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="ambience-moments">
          {moments.map((moment) => (
            <div className="ambience-moment" key={moment.number}>
              <div className="ambience-moment-image">
                <img
                  src={moment.image}
                  alt={moment.title}
                  loading="lazy"
                />

                <span>{moment.number}</span>

                <div className="ambience-moment-arrow">
                  <MoveUpRight size={19} />
                </div>
              </div>

              <div className="ambience-moment-content">
                <h4>{moment.title}</h4>
                <p>{moment.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM */}

        <div className="ambience-bottom">
          <span>NOT JUST A PLACE. A FEELING.</span>
          <div />
          <span>CAFEHUB</span>
        </div>

      </div>
    </section>
  );
};

export default AmbienceSection;
