
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Coffee,
  Heart,
  Sparkles,
  Users,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: Coffee,
    number: "01",
    title: "Made with care",
    description:
      "From a perfectly brewed cup to a thoughtfully prepared meal, every detail deserves attention.",
  },
  {
    icon: Heart,
    number: "02",
    title: "Warm hospitality",
    description:
      "We believe a great cafe experience begins with making every guest feel welcome.",
  },
  {
    icon: Users,
    number: "03",
    title: "Togetherness",
    description:
      "A place for conversations, celebrations, friendships and all the moments in between.",
  },
  {
    icon: Sparkles,
    number: "04",
    title: "Little details",
    description:
      "The ambience, the presentation and the little touches that make a visit memorable.",
  },
];

const About = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-hero-content > *", {
        y: 35,
        opacity: 0,
        duration: 0.9,
        stagger: 0.13,
        ease: "power3.out",
      });

      gsap.utils.toArray(".about-reveal").forEach((element) => {
        gsap.from(element, {
          y: 45,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
          },
        });
      });

      gsap.from(".about-value-card", {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-values-grid",
          start: "top 85%",
        },
      });

      gsap.to(".about-story-image img", {
        yPercent: 7,
        ease: "none",
        scrollTrigger: {
          trigger: ".about-story-image",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
    <Navbar/>
    
    <main className="about-page" ref={pageRef}>

      {/* HERO */}

      <section className="about-hero">
        <img
          className="about-hero-image"
          src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=2000&q=90"
          alt="Warm and inviting cafe interior"
        />

        <div className="about-hero-overlay" />

        <div className="about-hero-content">
          <span className="about-eyebrow">
            <span />
            A LITTLE ABOUT US
          </span>

          <h1>
            More than coffee.
            <br />
            <em>A feeling.</em>
          </h1>

          <p>
            A place where good food, familiar flavours
            and meaningful moments come together.
            Welcome to CafeHub.
          </p>

          <Link to="/menu" className="about-hero-button">
            EXPLORE OUR MENU
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="about-hero-bottom">
          <span>OUR STORY</span>
          <span>MADE FOR EVERY MOMENT</span>
        </div>
      </section>

      {/* STORY */}

      <section className="about-story">
        <div className="about-story-container">

          <div className="about-story-copy about-reveal">
            <span className="about-eyebrow">
              <span />
              THE STORY OF CAFEHUB
            </span>

            <h2>
              It starts with
              <br />
              a simple <em>idea.</em>
            </h2>

            <p>
              We believe the best moments often happen
              around a table. A cup of chai shared with
              a friend, coffee during a quiet morning,
              or a meal that brings everyone together.
            </p>

            <p>
              CafeHub is built around this simple thought.
              A welcoming space where you can slow down,
              enjoy your favourites and create moments
              worth remembering.
            </p>

            <div className="about-story-signature">
              <span>THE CAFEHUB WAY</span>
              <div />
              <span>EST. WITH LOVE</span>
            </div>
          </div>

          <div className="about-story-image about-reveal">
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1400&q=90"
              alt="Beautiful cafe space with warm natural lighting"
              loading="lazy"
            />

            <div className="about-story-image-caption">
              <span>YOUR EVERYDAY ESCAPE</span>
              <strong>Stay a little longer.</strong>
            </div>
          </div>

        </div>
      </section>

      {/* PHILOSOPHY */}

      <section className="about-philosophy">
        <div className="about-philosophy-inner about-reveal">
          <span className="about-eyebrow">
            <span />
            WHAT WE BELIEVE
          </span>

          <h2>
            Great experiences are made
            <br />
            of <em>little things.</em>
          </h2>

          <p>
            The first sip of coffee. The aroma of fresh chai.
            A table full of laughter. We bring these simple
            pleasures together to make every visit special.
          </p>

          <div className="about-philosophy-line" />
          <span className="about-philosophy-footer">
            GOOD FOOD. GOOD COMPANY. GOOD MOMENTS.
          </span>
        </div>
      </section>

      {/* VALUES */}

      <section className="about-values">
        <div className="about-values-container">

          <div className="about-values-heading about-reveal">
            <div>
              <span className="about-eyebrow">
                <span />
                THE THINGS THAT MATTER
              </span>

              <h2>
                Our values.
                <br />
                <em>Our promise.</em>
              </h2>
            </div>

            <p>
              Everything we do comes back to one idea:
              making people feel good, one visit at a time.
            </p>
          </div>

          <div className="about-values-grid">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article className="about-value-card" key={value.number}>
                  <div className="about-value-top">
                    <span>{value.number}</span>
                    <Icon size={25} strokeWidth={1.3} />
                  </div>

                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* EXPERIENCE */}

      <section className="about-experience">
        <div className="about-experience-image">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1800&q=90"
            alt="Cafe dining space ready to welcome guests"
            loading="lazy"
          />
          <div />
        </div>

        <div className="about-experience-content about-reveal">
          <span className="about-eyebrow">
            <span />
            YOUR PLACE AT CAFEHUB
          </span>

          <h2>
            Come as you are.
            <br />
            <em>Leave with a smile.</em>
          </h2>

          <p>
            Whether it is your morning coffee, an evening
            with friends or a celebration worth remembering,
            we would love to be part of your story.
          </p>

          <div className="about-experience-actions">
            <Link to="/reservation" className="about-hero-button">
              RESERVE YOUR TABLE
              <ArrowUpRight size={18} />
            </Link>

            <Link to="/contact" className="about-text-link">
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </section>

    </main>
    <Footer/>
    </>
  );
};

export default About;
