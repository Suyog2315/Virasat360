import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heritageData from "../data/heritageData";
import "./Heritage.css";

function HeritageDetails() {
  const { id } = useParams();

  const site = heritageData.find(
    (item) => item.id === id
  );

  if (!site) {
    return (
      <>
        <Navbar />

        <main className="not-found">
          <h1>Heritage Site Not Found</h1>
          <p>The heritage site you're looking for doesn't exist.</p>

          <Link to="/heritage-sites">
            ← Back to Heritage Sites
          </Link>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <div className="heritage-details-page">

      <Navbar />

      <main>

        <section className="details-hero">

          <img
            src={site.image}
            alt={site.name}
          />

          <div className="details-overlay">

            <p className="section-label">
              {site.category}
            </p>

            <h1>{site.name}</h1>

            <p>
              📍 {site.location}
            </p>

          </div>

        </section>

        <section className="details-container">

          <div className="details-main">

            <p className="section-label">
              ABOUT THE SITE
            </p>

            <h2>History & Heritage</h2>

            <p className="details-description">
              {site.description}
            </p>

            <h2>Heritage Highlights</h2>

            <div className="highlight-grid">

              {site.highlights.map((highlight, index) => (
                <div
                  className="highlight-card"
                  key={index}
                >
                  <span>✦</span>
                  <p>{highlight}</p>
                </div>
              ))}

            </div>

          </div>

          <aside className="details-sidebar">

            <div className="info-card">

              <h3>Site Information</h3>

              <div>
                <span>Location</span>
                <strong>{site.location}</strong>
              </div>

              <div>
                <span>Period</span>
                <strong>{site.year}</strong>
              </div>

              <div>
                <span>Category</span>
                <strong>{site.category}</strong>
              </div>

            </div>

            <Link
              to={`/ar/${site.id}`}
              className="primary-btn"
            >
              Experience in AR →
            </Link>

            <Link
              to="/quiz"
              className="secondary-btn"
            >
              Test Your Knowledge
            </Link>

          </aside>

        </section>

      </main>

      <Footer />

    </div>
  );
}

export default HeritageDetails;
