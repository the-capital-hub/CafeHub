
import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  SlidersHorizontal,
  ArrowUpRight,
  X,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Menu.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  "All",
  "Coffee",
  "Chai",
  "Cold Drinks",
  "Food",
  "Desserts",
];

const menuItems = [
  {
    id: 1,
    name: "Signature Cappuccino",
    category: "Coffee",
    description: "Rich espresso topped with silky steamed milk.",
    price: 189,
    vegetarian: true,
    tag: "Bestseller",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=900&q=85",
  },
  {
    id: 2,
    name: "Classic Latte",
    category: "Coffee",
    description: "Smooth espresso blended with creamy milk.",
    price: 199,
    vegetarian: true,
    tag: "",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=900&q=85",
  },
  {
    id: 3,
    name: "Americano",
    category: "Coffee",
    description: "A bold espresso experience with hot water.",
    price: 149,
    vegetarian: true,
    tag: "",
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=900&q=85",
  },
  {
    id: 4,
    name: "Classic Masala Chai",
    category: "Chai",
    description: "Freshly brewed tea with aromatic Indian spices.",
    price: 99,
    vegetarian: true,
    tag: "House Favourite",
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=900&q=85",
  },
  {
    id: 5,
    name: "Kulhad Chai",
    category: "Chai",
    description: "Traditional chai served in an earthy kulhad.",
    price: 119,
    vegetarian: true,
    tag: "",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=900&q=85",
  },
  {
    id: 6,
    name: "Iced Caramel Latte",
    category: "Cold Drinks",
    description: "Chilled espresso with milk and caramel.",
    price: 219,
    vegetarian: true,
    tag: "Popular",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=900&q=85",
  },
  {
    id: 7,
    name: "Classic Cold Coffee",
    category: "Cold Drinks",
    description: "A chilled and creamy coffee favourite.",
    price: 179,
    vegetarian: true,
    tag: "",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=900&q=85",
  },
  {
    id: 8,
    name: "Grilled Paneer Sandwich",
    category: "Food",
    description: "Toasted bread filled with seasoned paneer.",
    price: 229,
    vegetarian: true,
    tag: "Bestseller",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=900&q=85",
  },
  {
    id: 9,
    name: "Classic Cafe Burger",
    category: "Food",
    description: "A hearty burger with fresh toppings and sauce.",
    price: 249,
    vegetarian: true,
    tag: "",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&q=85",
  },
  {
    id: 10,
    name: "Margherita Pizza",
    category: "Food",
    description: "Classic cheese pizza with tomato and basil.",
    price: 299,
    vegetarian: true,
    tag: "",
    image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=900&q=85",
  },
  {
    id: 11,
    name: "Chocolate Brownie",
    category: "Desserts",
    description: "Rich chocolate with a soft and fudgy centre.",
    price: 179,
    vegetarian: true,
    tag: "Sweet Favourite",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=900&q=85",
  },
  {
    id: 12,
    name: "Classic Waffles",
    category: "Desserts",
    description: "Golden waffles with a delicious sweet finish.",
    price: 199,
    vegetarian: true,
    tag: "",
    image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=900&q=85",
  },
];

const Menu = () => {
  const pageRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [vegetarianOnly, setVegetarianOnly] = useState(false);

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;

      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesVegetarian =
        !vegetarianOnly || item.vegetarian;

      return matchesCategory && matchesSearch && matchesVegetarian;
    });
  }, [activeCategory, searchTerm, vegetarianOnly]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".menu-hero-content > *", {
        y: 35,
        opacity: 0,
        duration: 0.85,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.from(".menu-toolbar", {
        y: 25,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".menu-toolbar",
          start: "top 90%",
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!pageRef.current) return;

    const cards = pageRef.current.querySelectorAll(".menu-product-card");

    const animation = gsap.fromTo(
      cards,
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.055,
        ease: "power3.out",
        clearProps: "transform,opacity",
        onComplete: () => ScrollTrigger.refresh(),
      }
    );

    return () => animation.kill();
  }, [filteredItems]);

  return (
    <>
    <Navbar/>
    
    <main className="menu-page" ref={pageRef}>

      {/* MENU HERO */}

      <section className="menu-hero">
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=2000&q=90"
          alt="Freshly prepared coffee at CafeHub"
          className="menu-hero-image"
        />

        <div className="menu-hero-overlay" />

        <div className="menu-hero-content">
          <span className="menu-eyebrow">
            <span />
            GOOD TASTE STARTS HERE
          </span>

          <h1>
            Explore our
            <br />
            <em>menu.</em>
          </h1>

          <p>
            From comforting chai and handcrafted coffee
            to delicious food and little sweet pleasures.
            Find something you will love.
          </p>

          <a href="#full-menu" className="menu-hero-button">
            EXPLORE THE MENU
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="menu-hero-bottom">
          <span>MADE FRESH</span>
          <span>SERVED WITH LOVE</span>
        </div>
      </section>

      {/* FULL MENU */}

      <section className="menu-catalog" id="full-menu">
        <div className="menu-catalog-container">

          <div className="menu-catalog-heading">
            <div>
              <span className="menu-eyebrow">
                <span />
                THE CAFEHUB COLLECTION
              </span>

              <h2>
                Find your
                <br />
                <em>favourite.</em>
              </h2>
            </div>

            <p>
              A little something for every mood,
              every craving and every moment.
            </p>
          </div>

          {/* FILTER TOOLBAR */}

          <div className="menu-toolbar">

            <div className="menu-category-list">
              {categories.map((category) => (
                <button
                  type="button"
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={
                    activeCategory === category
                      ? "menu-category-button active"
                      : "menu-category-button"
                  }
                  aria-pressed={activeCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="menu-search">
              <Search size={17} />

              <input
                type="search"
                placeholder="Search your favourite..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                aria-label="Search menu"
              />

              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>

          <div className="menu-extra-filters">
            <label className="menu-veg-filter">
              <input
                type="checkbox"
                checked={vegetarianOnly}
                onChange={(event) => setVegetarianOnly(event.target.checked)}
              />
              <span />
              Vegetarian only
            </label>

            <div className="menu-result-count">
              <SlidersHorizontal size={15} />
              {filteredItems.length} ITEMS FOUND
            </div>
          </div>

          {/* PRODUCT GRID */}

          {filteredItems.length > 0 ? (
            <div className="menu-product-grid">
              {filteredItems.map((item) => (
                <article className="menu-product-card" key={item.id}>
                  <div className="menu-product-image">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                    />

                    {item.tag && (
                      <span className="menu-product-tag">
                        {item.tag}
                      </span>
                    )}

                    {item.vegetarian && (
                      <span
                        className="menu-veg-indicator"
                        title="Vegetarian"
                        aria-label="Vegetarian"
                      >
                        <span />
                      </span>
                    )}
                  </div>

                  <div className="menu-product-info">
                    <div className="menu-product-meta">
                      <span>{item.category.toUpperCase()}</span>
                      <span>CAFEHUB</span>
                    </div>

                    <div className="menu-product-title">
                      <h3>{item.name}</h3>
                      <strong>₹{item.price}</strong>
                    </div>

                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="menu-empty-state">
              <Search size={30} />
              <h3>No items found</h3>
              <p>Try another search or explore a different category.</p>

              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("All");
                  setVegetarianOnly(false);
                }}
              >
                CLEAR ALL FILTERS
              </button>
            </div>
          )}

        </div>
      </section>

      {/* FINAL CTA */}

      <section className="menu-bottom-cta">
        <div className="menu-bottom-cta-inner">
          <span className="menu-eyebrow">
            <span />
            YOUR NEXT FAVOURITE IS WAITING
          </span>

          <h2>
            Good food.
            <br />
            <em>Better moments.</em>
          </h2>

          <p>
            Make time for the little things.
            We would love to welcome you.
          </p>

          <Link to="/reservation" className="menu-hero-button">
            RESERVE YOUR TABLE
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

    </main>

    <Footer/>
    </>


  );
};

export default Menu;
