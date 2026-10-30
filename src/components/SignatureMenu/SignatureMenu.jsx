
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./SignatureMenu.css";

gsap.registerPlugin(ScrollTrigger);

const categories = ["All", "Coffee", "Chai", "Food", "Desserts"];

const menuItems = [
  {
    id: 1,
    name: "Signature Cappuccino",
    category: "Coffee",
    description: "Rich espresso, velvety milk and a beautifully balanced finish.",
    price: 189,
    tag: "BESTSELLER",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=900&q=85",
  },
  {
    id: 2,
    name: "Classic Masala Chai",
    category: "Chai",
    description: "A comforting blend of aromatic spices and freshly brewed tea.",
    price: 99,
    tag: "HOUSE FAVOURITE",
    image:
      "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=900&q=85",
  },
  {
    id: 3,
    name: "Grilled Paneer Sandwich",
    category: "Food",
    description: "Golden toasted bread layered with paneer and signature seasoning.",
    price: 229,
    tag: "POPULAR",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=900&q=85",
  },
  {
    id: 4,
    name: "Iced Caramel Latte",
    category: "Coffee",
    description: "Chilled espresso, creamy milk and a smooth caramel finish.",
    price: 219,
    tag: "",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=900&q=85",
  },
  {
    id: 5,
    name: "Cafe Style Burger",
    category: "Food",
    description: "A juicy, flavourful burger with fresh toppings and creamy sauce.",
    price: 249,
    tag: "",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&q=85",
  },
  {
    id: 6,
    name: "Chocolate Brownie",
    category: "Desserts",
    description: "A rich chocolate indulgence with a soft, fudgy centre.",
    price: 179,
    tag: "SWEET FAVOURITE",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=900&q=85",
  },
];

const SignatureMenu = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".signature-menu-heading", {
        y: 55,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".signature-menu-header",
          start: "top 85%",
        },
      });

      gsap.from(".signature-menu-subtitle", {
        y: 25,
        opacity: 0,
        duration: 0.9,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".signature-menu-header",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!gridRef.current) return;

    const animation = gsap.fromTo(
      gridRef.current.querySelectorAll(".signature-menu-card"),
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        stagger: 0.08,
        ease: "power3.out",
        clearProps: "transform,opacity",
        onComplete: () => ScrollTrigger.refresh(),
      }
    );

    return () => animation.kill();
  }, [activeCategory]);

  return (
    <section className="signature-menu-section" ref={sectionRef}>
      <div className="signature-menu-container">

        <div className="signature-menu-topline">
          <span>THE CAFEHUB SELECTION</span>
          <span>CRAFTED WITH CARE</span>
        </div>

        <div className="signature-menu-header">
          <div>
            <div className="signature-menu-eyebrow">
              <span />
              DISCOVER OUR FAVOURITES
            </div>

            <h2 className="signature-menu-heading">
              A menu worth
              <br />
              <em>coming back for.</em>
            </h2>
          </div>

          <p className="signature-menu-subtitle">
            Familiar comforts. New favourites. From your first
            morning chai to that last bite of dessert, every
            craving deserves something special.
          </p>
        </div>

        <div className="signature-menu-toolbar">
          <div className="signature-menu-filters" role="group" aria-label="Filter menu items">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                className={`signature-menu-filter ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>

          <span className="signature-menu-count">
            {String(filteredItems.length).padStart(2, "0")} SELECTIONS
          </span>
        </div>

        <div className="signature-menu-grid" ref={gridRef}>
          {filteredItems.map((item) => (
            <article className="signature-menu-card" key={item.id}>
              <div className="signature-menu-image">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                />

                {item.tag && (
                  <span className="signature-menu-tag">
                    {item.tag}
                  </span>
                )}

                <span className="signature-menu-image-icon">
                  <ArrowUpRight size={20} />
                </span>
              </div>

              <div className="signature-menu-card-info">
                <div className="signature-menu-card-meta">
                  <span>{item.category.toUpperCase()}</span>
                  <span>CAFEHUB SIGNATURE</span>
                </div>

                <div className="signature-menu-name-row">
                  <h3>{item.name}</h3>
                  <strong>₹{item.price}</strong>
                </div>

                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="signature-menu-bottom">
          <div className="signature-menu-bottom-copy">
            <span>THERE IS MORE TO EXPLORE</span>
            <p>Your next favourite is waiting.</p>
          </div>

          <Link to="/menu" className="signature-menu-cta">
            EXPLORE FULL MENU
            <ArrowRight size={19} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default SignatureMenu;
