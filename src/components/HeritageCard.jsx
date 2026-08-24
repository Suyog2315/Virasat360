import { Link } from "react-router-dom";

function HeritageCard({ site }) {
  return (
    <div className="heritage-card">

      <div className="card-image">
        <img
          src={site.image}
          alt={site.name}
        />

        {site.arAvailable && (
          <span className="ar-badge">
            AR AVAILABLE
          </span>
        )}
      </div>

      <div className="card-content">

        <span className="card-category">
          {site.category}
        </span>

        <h3>{site.name}</h3>

        <p className="location">
          📍 {site.location}
        </p>

        <p>
          {site.shortDescription}
        </p>

        <Link
          to={`/heritage/${site.id}`}
          className="card-button"
        >
          Explore →
        </Link>

      </div>

    </div>
  );
}

export default HeritageCard;