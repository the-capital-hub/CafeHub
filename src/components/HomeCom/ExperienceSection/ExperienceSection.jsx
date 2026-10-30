
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, MoveUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ExperienceSection.css";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    number: "01",
    category: "THE ART OF COFFEE",
    title: "Slow mornings. Rich coffee.",
    description:
      "From bold espresso to silky cappuccino, every cup is made to be savoured.",
    image:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1000&q=85",
    link: "/menu",
  },
  {
    number: "02",
    category: "A TASTE OF COMFORT",
    title: "Chai, just the way you love it.",
    description:
      "A familiar warmth, a little conversation and the perfect cup of chai.",
    image:
      "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=1000&q=85",
    link: "/menu",
  },
  {
    number: "03",
    category: "MADE TO BE SHARED",
    title: "Good food. Better company.",
    description:
      "Discover delicious bites, sweet treats and flavours worth coming back for.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000&q=85",
    link: "/menu",
  },
];

const ExperienceSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(".experience-heading", {
        y: 55,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".experience-intro",
          start: "top 80%",
        },
      });

      gsap.from(".experience-copy", {
        y: 35,
        opacity: 0,
        duration: 0.9,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".experience-intro",
          start: "top 80%",
        },
      });

      gsap.from(".experience-visual", {
        scale: 0.94,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".experience-visual",
          start: "top 82%",
        },
      });

      gsap.from(".experience-card", {
        y: 65,
        opacity: 0,
        duration: 0.9,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".experience-grid",
          start: "top 85%",
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="experience-section" ref={sectionRef}>
      <div className="experience-container">

        {/* INTRO */}
        <div className="experience-intro">

          <div className="experience-copy">
            <span className="experience-eyebrow">
              <span />
              MORE THAN JUST A CAFE
            </span>

            <h2 className="experience-heading">
              Every visit has
              <br />
              a <span>story.</span>
            </h2>

            <p className="experience-description">
              Some places are made for coffee. Some are made
              for conversations, celebrations and little
              moments that become memories.

              <br />
              <br />

              At CafeHub, we bring them all together.
            </p>

            <Link to="/experience" className="experience-link">
              DISCOVER OUR EXPERIENCE
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="experience-visual">
            <img
              src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1400&q=90"
              alt="Warm and inviting CafeHub inspired cafe interior"
              loading="lazy"
            />

            <div className="experience-image-overlay" />

            <div className="experience-image-caption">
              <span>YOUR EVERYDAY ESCAPE</span>
              <strong>A place to slow down.</strong>
            </div>

            <div className="experience-image-index">
              01 / 03
            </div>
          </div>

        </div>

        {/* EXPERIENCE CARDS */}
        <div className="experience-grid">
          {experiences.map((item) => (
            <Link
              to={item.link}
              className="experience-card"
              key={item.number}
            >
              <div className="experience-card-image">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />

                <span className="experience-card-number">
                  {item.number}
                </span>

                <span className="experience-card-arrow">
                  <MoveUpRight size={19} />
                </span>
              </div>

              <div className="experience-card-content">
                <span className="experience-card-category">
                  {item.category}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* BOTTOM SIGNATURE */}
        <div className="experience-bottom">
          <span>GOOD MOMENTS BEGIN HERE</span>
          <span className="experience-bottom-line" />
          <span>CAFEHUB</span>
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
