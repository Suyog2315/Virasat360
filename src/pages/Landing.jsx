import React from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";

const heritageSites = [
  {
    name: "Konark Sun Temple",
    location: "Konark, Odisha",
    period: "13th Century",
    description:
      "A masterpiece of Kalinga architecture, shaped as the monumental chariot of the Sun God.",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Konark_Sun_Temple_%2C_Konark_%2C_Odisha_%2C_India.jpg",
  },
  {
    name: "Jagannath Temple",
    location: "Puri, Odisha",
    period: "12th Century",
    description:
      "One of Odisha's most iconic cultural landmarks and an enduring symbol of its living traditions.",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Jagannath_Temple%2C_Puri%2C_Odisha.jpg",
  },
  {
    name: "Mukteshwar Temple",
    location: "Bhubaneswar, Odisha",
    period: "10th Century",
    description:
      "Known for its exquisite carvings, ornate torana and elegant Kalinga architectural details.",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mukteshvara_Temple.jpg",
  },
  {
    name: "Dhauli Shanti Stupa",
    location: "Dhauli, Odisha",
    period: "20th Century",
    description:
      "A serene landmark representing peace, reflection and the historic legacy of Dhauli.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/1f/Shanti_Stupa%2C_Dhauli_01.jpg",
  },
];

function Landing() {
  const navigate = useNavigate();

  const scrollToHeritage = () => {
    document
      .getElementById("heritage")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="landing">

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header className="navbar">

        <div
          className="brand"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src="/logo.png"
            alt="Virasat360 - India's Living Heritage"
            className="brand-logo"
          />
        </div>

        <nav className="nav-links">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Home
          </button>

          <button onClick={scrollToHeritage}>
            Heritage
          </button>

          <button onClick={() => navigate("/ar")}>
            AR Experience
          </button>

          <button onClick={() => navigate("/about")}>
            About
          </button>
        </nav>

        <button
          className="login-btn"
          onClick={() => navigate("/login")}
        >
          Sign In
        </button>

      </header>


      {/* =====================================================
          HERO
      ====================================================== */}

      <main>

        <section className="hero">

          <div className="hero-background"></div>

          <div className="hero-overlay"></div>

          <div className="hero-content">

            <div className="eyebrow">
              <span></span>
              DIGITAL PRESERVATION OF INDIA'S HERITAGE
            </div>

            <h1>
              Experience
              <br />
              Heritage.
              <br />
              <em>Beyond Boundaries.</em>
            </h1>

            <p className="hero-description">
              Discover Odisha's timeless heritage through immersive digital
              experiences, intelligent storytelling and augmented reality.
            </p>

            <div className="hero-buttons">

              <button
                className="primary-btn"
                onClick={scrollToHeritage}
              >
                <span>Explore Odisha</span>
                <b>↗</b>
              </button>

              <button
                className="secondary-btn"
                onClick={() => navigate("/login")}
              >
                Begin Your Journey
              </button>

            </div>


            {/* STATS */}

            <div className="hero-stats">

              <div className="stat">
                <strong>05+</strong>
                <span>Heritage Sites</span>
              </div>

              <div className="stat-line"></div>

              <div className="stat">
                <strong>360°</strong>
                <span>Immersive Experience</span>
              </div>

              <div className="stat-line"></div>

              <div className="stat">
                <strong>AI</strong>
                <span>Heritage Guide</span>
              </div>

            </div>

          </div>


          {/* HERO IMAGE */}

          <div className="hero-visual">

            <div className="hero-frame">

              <img
                src={heritageSites[0].image}
                alt="Konark Sun Temple"
              />

              <div className="hero-image-overlay"></div>

              <div className="hero-caption">

                <div>
                  <small>FEATURED HERITAGE</small>
                  <h3>Konark Sun Temple</h3>
                  <p>Konark · Odisha</p>
                </div>

                <span>01 / 04</span>

              </div>

            </div>

            <div className="gold-ring"></div>

            <div className="gold-dot"></div>

          </div>


          <div className="scroll-indicator">
            <span>SCROLL TO EXPLORE</span>
            <div></div>
          </div>

        </section>


        {/* =====================================================
            INTRO
        ====================================================== */}

        <section className="intro-section">

          <div className="section-label">
            <span>✦</span>
            THE VIRASAT360 EXPERIENCE
          </div>

          <div className="intro-grid">

            <div className="intro-heading">

              <h2>
                Where history
                <br />
                becomes
                <br />
                <em>experience.</em>
              </h2>

            </div>

            <div className="intro-content">

              <p>
                India's heritage is more than monuments. It is architecture,
                stories, traditions, craftsmanship and memories passed through
                generations.
              </p>

              <p>
                Virasat360 brings these stories into the digital age through
                immersive exploration, AI-powered storytelling and augmented
                reality.
              </p>

              <button
                className="text-button"
                onClick={scrollToHeritage}
              >
                DISCOVER THE COLLECTION
                <span>→</span>
              </button>

            </div>

          </div>

        </section>


        {/* =====================================================
            HERITAGE COLLECTION
        ====================================================== */}

        <section
          className="heritage-section"
          id="heritage"
        >

          <div className="section-label">
            <span>✦</span>
            ODISHA HERITAGE COLLECTION
          </div>

          <div className="heritage-heading">

            <h2>
              Stories carved
              <br />
              in <em>stone.</em>
            </h2>

            <p>
              Begin your journey through some of Odisha's most remarkable
              cultural landmarks.
            </p>

          </div>


          <div className="heritage-grid">

            {heritageSites.map((site, index) => (

              <article
                className={`heritage-card ${
                  index === 0 ? "featured-card" : ""
                }`}
                key={site.name}
              >

                <img
                  src={site.image}
                  alt={site.name}
                  loading="lazy"
                />

                <div className="card-overlay"></div>

                <div className="card-number">
                  0{index + 1}
                </div>

                <div className="card-content">

                  <span>{site.period}</span>

                  <h3>{site.name}</h3>

                  <p>{site.location}</p>

                  <div className="card-description">
                    {site.description}
                  </div>

                  <button
                    className="card-arrow"
                    onClick={() => navigate("/heritage")}
                  >
                    Explore
                    <span>↗</span>
                  </button>

                </div>

              </article>

            ))}

          </div>


          <button
            className="collection-button"
            onClick={() => navigate("/heritage")}
          >
            VIEW ALL HERITAGE SITES
            <span>→</span>
          </button>

        </section>


        {/* =====================================================
            AR EXPERIENCE
        ====================================================== */}

        <section className="ar-section">

          <div className="ar-background"></div>

          <div className="ar-overlay"></div>

          <div className="ar-content">

            <div className="section-label light">
              <span>✦</span>
              AUGMENTED REALITY
            </div>

            <h2>
              Bring the
              <br />
              past into
              <br />
              <em>your world.</em>
            </h2>

            <p>
              Stand before a monument and discover its stories through
              interactive AR experiences, reconstructed elements and
              intelligent contextual guidance.
            </p>

            <button
              className="ar-button"
              onClick={() => navigate("/ar")}
            >
              ENTER AR EXPERIENCE
              <span>↗</span>
            </button>

          </div>

        </section>


        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <section className="final-section">

          <div className="final-content">

            <div className="section-label center">
              <span>✦</span>
              PRESERVE · EXPERIENCE · DISCOVER
            </div>

            <h2>
              Heritage belongs
              <br />
              to <em>everyone.</em>
            </h2>

            <p>
              Explore India's living heritage — wherever you are.
            </p>

            <button
              className="primary-btn final-button"
              onClick={scrollToHeritage}
            >
              <span>Start Exploring</span>
              <b>↗</b>
            </button>

          </div>

        </section>

      </main>


      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer>

        <div className="footer-brand">

          <img
            src="/logo.png"
            alt="Virasat360"
          />

          <p>INDIA'S LIVING HERITAGE</p>

        </div>

        <div className="footer-copy">
          © 2026 Virasat360 · Digital Preservation of Cultural Heritage
        </div>

      </footer>

    </div>
  );
}

export default Landing;