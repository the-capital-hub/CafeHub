
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./HeroSection.css";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 120;

const HeroSection = () => {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const progressRef = useRef(null);
  const loadingRef = useRef(null);
  const imagesRef = useRef([]);
  const loadedRef = useRef(false);
  const currentFrame = useRef(0);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;

    if (!section || !canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let destroyed = false;
    let context;

    // FIX: Array.from creates 120 actual array entries
    const images = Array.from({ length: FRAME_COUNT }, () => null);
    imagesRef.current = images;

    const getFramePath = (index) =>
      `/frames/cafe/frame_${String(index + 1).padStart(4, "0")}.webp`;

    const drawFrame = (index) => {
      const safeIndex = Math.max(0, Math.min(index, FRAME_COUNT - 1));
      const image = images[safeIndex];

      if (!image?.complete || !image.naturalWidth) return;

      const scale = Math.max(
        canvas.width / image.naturalWidth,
        canvas.height / image.naturalHeight
      );

      const width = image.naturalWidth * scale;
      const height = image.naturalHeight * scale;

      const x = (canvas.width - width) / 2;
      const y = (canvas.height - height) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image, x, y, width, height);

      currentFrame.current = safeIndex;
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      drawFrame(currentFrame.current);
    };

    resize();
    window.addEventListener("resize", resize);

    const loadFrames = async () => {
      let completed = 0;
      let loaded = 0;

      await Promise.all(
        Array.from({ length: FRAME_COUNT }, (_, index) =>
          new Promise((resolve) => {
            const image = new Image();

            image.onload = () => {
              loaded += 1;
              completed += 1;

              if (progressRef.current) {
                progressRef.current.style.width =
                  `${(completed / FRAME_COUNT) * 100}%`;
              }

              resolve();
            };

            image.onerror = () => {
              completed += 1;

              if (progressRef.current) {
                progressRef.current.style.width =
                  `${(completed / FRAME_COUNT) * 100}%`;
              }

              console.error(`Failed to load frame: ${getFramePath(index)}`);
              resolve();
            };

            images[index] = image;
            image.src = getFramePath(index);
          })
        )
      );

      if (destroyed) return;

      console.log("CafeHub total frames:", FRAME_COUNT);
      console.log("CafeHub loaded frames:", loaded);
      console.log("CafeHub failed frames:", FRAME_COUNT - loaded);

      const firstFrame = images.findIndex(
        (image) => image?.complete && image.naturalWidth > 0
      );

      if (firstFrame < 0) {
        console.error("CafeHub: No frames could be loaded.");
        return;
      }

      loadedRef.current = true;
      drawFrame(firstFrame);

      if (loadingRef.current) {
        gsap.to(loadingRef.current, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            if (loadingRef.current) {
              loadingRef.current.style.display = "none";
            }
          },
        });
      }

      ScrollTrigger.refresh();
    };

    loadFrames();

    context = gsap.context(() => {
      const state = { frame: 0 };

      gsap.to(state, {
        frame: FRAME_COUNT - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.8,
        },
        onUpdate: () => {
          if (loadedRef.current) {
            drawFrame(Math.round(state.frame));
          }
        },
      });

      const intro = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      intro
        .fromTo(
          ".hero-eyebrow",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 }
        )
        .fromTo(
          ".hero-title span",
          { opacity: 0, y: 55 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.13 },
          "-=0.4"
        )
        .fromTo(
          ".hero-description",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          ".hero-actions",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5"
        );

      gsap.to(".hero-editorial", {
        opacity: 0,
        y: -40,
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "40% top",
          scrub: true,
        },
      });
    }, section);

    return () => {
      destroyed = true;
      loadedRef.current = false;

      window.removeEventListener("resize", resize);
      context?.revert();

      images.forEach((image) => {
        if (image) {
          image.onload = null;
          image.onerror = null;
        }
      });
    };
  }, []);

  return (
    <section className="hero-section" ref={sectionRef}>
      <div className="hero-stage">

        <canvas
          ref={canvasRef}
          className="hero-canvas"
          aria-label="Fresh espresso being prepared"
        />

        <div className="hero-image-shade" />
        <div className="hero-grain" />

        <div className="hero-editorial">

          <div className="hero-eyebrow">
            <span />
            A MOMENT WORTH SAVOURING
          </div>

          <h1 className="hero-title">
            <span>A little</span>
            <span className="hero-gold">pause.</span>
            <span>A lot of</span>
            <span className="hero-gold">flavour.</span>
          </h1>

          <p className="hero-description">
            From the comfort of a familiar chai to the
            pleasure of handcrafted coffee and delicious
            food. Find your favourite moment at CafeHub.
          </p>

          <div className="hero-actions">
            <Link to="/menu" className="hero-primary">
              DISCOVER OUR MENU
              <ArrowUpRight size={18} />
            </Link>

            <Link to="/reservation" className="hero-secondary">
              RESERVE A TABLE
            </Link>
          </div>

        </div>

        <div className="hero-image-note">
          <span className="hero-note-number">01</span>
          <span className="hero-note-divider" />
          <div>
            <strong>MADE FOR THE MOMENT</strong>
            <p>Freshly made. Beautifully served.</p>
          </div>
        </div>

        <div className="hero-footer">
          <div className="hero-scroll">
            <ArrowDown size={19} />
            SCROLL TO EXPLORE
          </div>

          <div className="hero-footer-center">
            COFFEE <i /> CHAI <i /> GOOD FOOD
          </div>

          <div className="hero-footer-right">
            YOUR PLACE, YOUR PACE.
          </div>
        </div>

        <div className="hero-loading" ref={loadingRef}>
          <span>PREPARING YOUR EXPERIENCE</span>
          <div className="hero-progress-track">
            <div ref={progressRef} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
