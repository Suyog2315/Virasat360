import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heritageData from "../data/heritageData";
import "./Heritage.css";

function HeritageSites() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(heritageData.map((item) => item.category))
  ];

  const filteredHeritage = heritageData.filter((site) => {
    const matchesSearch =
      site.name.toLowerCase().includes(search.toLowerCase()) ||
      site.location.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || site.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="heritage-page">
      <Navbar />

      <main className="heritage-container">

        <section className="heritage-hero">
          <p className="section-label">DISCOVER INDIA'S HERITAGE</p>

          <h1>
            Explore
            <span> Virasat</span>
          </h1>

          <p>
            Discover India's historic temples, monuments and cultural
            treasures through an immersive digital experience.
          </p>
        </section>

        <section className="heritage-controls">

          <input
            type="text"
            placeholder="Search heritage sites..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="category-buttons">
            {categories.map((item) => (
              <button
                key={item}
                className={category === item ? "active" : ""}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

        </section>

        <section className="heritage-grid">

          {filteredHeritage.map((site) => (
            <article className="heritage-card" key={site.id}>

              <div className="heritage-image">
                <img
                  src={site.image}
                  alt={site.name}
                />

                <span>{site.category}</span>
              </div>

              <div className="heritage-content">

                <p className="heritage-location">
                  📍 {site.location}
                </p>

                <h2>{site.name}</h2>

                <p>{site.shortDescription}</p>

                <div className="heritage-card-footer">

                  <span>{site.year}</span>

                  <Link to={`/heritage/${site.id}`}>
                    Explore →
                  </Link>

                </div>

              </div>

            </article>
          ))}

        </section>

        {filteredHeritage.length === 0 && (
          <div className="empty-state">
            <h2>No heritage sites found</h2>
            <p>Try another search.</p>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}

export default HeritageSites;
