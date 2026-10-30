
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./TestimonialsSection.css";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Coffee Enthusiast",
    initials: "AS",
    rating: 5,
    review:
      "The atmosphere is beautiful, the coffee is incredible and the staff makes you feel welcome. Definitely one of my favourite places to unwind.",
    visit: "A PLACE TO UNWIND",
  },
  {
    id: 2,
    name: "Meera Kapoor",
    role: "Regular Guest",
    initials: "MK",
    rating: 5,
    review:
      "I absolutely love the vibe here. The chai is comforting, the food is delicious and every visit feels like a little break from the busy day.",
    visit: "A LITTLE HAPPY PLACE",
  },
  {
    id: 3,
    name: "Rohan Verma",
    role: "Food Lover",
    initials: "RV",
    rating: 5,
    review:
      "Great food, lovely ambience and a perfect place to catch up with friends. The overall experience makes you want to come back.",
    visit: "GOOD FOOD, GOOD TIMES",
  },
];

const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const activeReview = reviews[activeIndex];

  const previousReview = () => {
    setActiveIndex((current) =>
      current === 0 ? reviews.length - 1 : current - 1
    );
  };

  const nextReview = () => {
    setActiveIndex((current) =>
      current === reviews.length - 1 ? 0 : current + 1
    );
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-heading", {
        y: 45,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".testimonial-header",
          start: "top 85%",
        },
      });

      gsap.from(".testimonial-main", {
        y: 45,
        opacity: 0,
        duration: 1,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".testimonial-main",
          start: "top 85%",
        },
      });

      gsap.from(".testimonial-bottom-stat", {
        y: 25,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".testimonial-bottom",
          start: "top 90%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="testimonial-section" ref={sectionRef}>
      <div className="testimonial-container">

        <div className="testimonial-header">
          <div>
            <span className="testimonial-eyebrow">
              <span />
              KIND WORDS, REAL MOMENTS
            </span>

            <h2 className="testimonial-heading">
              Loved for the
              <br />
              <em>little things.</em>
            </h2>
          </div>

          <p className="testimonial-intro">
            A good cup of coffee makes a moment.
            A beautiful experience makes a memory.
            Here is what our guests have to say.
          </p>
        </div>

        <div className="testimonial-main">

          <div className="testimonial-decoration">
            <Quote size={74} strokeWidth={1} />
          </div>

          <div className="testimonial-review-content" key={activeReview.id}>
            <span className="testimonial-review-label">
              {activeReview.visit}
            </span>

            <div className="testimonial-stars" aria-label={`${activeReview.rating} out of 5 stars`}>
              {Array.from({ length: activeReview.rating }, (_, index) => (
                <Star key={index} size={17} fill="currentColor" />
              ))}
            </div>

            <blockquote>
              “{activeReview.review}”
            </blockquote>

            <div className="testimonial-author">
              <div className="testimonial-avatar">
                {activeReview.initials}
              </div>

              <div>
                <strong>{activeReview.name}</strong>
                <span>{activeReview.role}</span>
              </div>
            </div>
          </div>

          <div className="testimonial-controls">
            <div className="testimonial-pagination">
              <strong>0{activeIndex + 1}</strong>
              <span />
              <span>0{reviews.length}</span>
            </div>

            <div className="testimonial-arrows">
              <button
                type="button"
                onClick={previousReview}
                aria-label="Previous review"
              >
                <ArrowLeft size={19} />
              </button>

              <button
                type="button"
                onClick={nextReview}
                aria-label="Next review"
              >
                <ArrowRight size={19} />
              </button>
            </div>
          </div>

        </div>

        <div className="testimonial-bottom">
          <div className="testimonial-bottom-stat">
            <strong>GOOD</strong>
            <span>FOOD EXPERIENCES</span>
          </div>

          <div className="testimonial-bottom-divider" />

          <div className="testimonial-bottom-stat">
            <strong>GREAT</strong>
            <span>COFFEE MOMENTS</span>
          </div>

          <div className="testimonial-bottom-divider" />

          <div className="testimonial-bottom-stat">
            <strong>WARM</strong>
            <span>HOSPITALITY</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
