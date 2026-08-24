import Navbar from "../components/Navbar";
import HeritageCard from "../components/HeritageCard";
import odishaHeritage from "../data/odishaHeritage";
import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {

  const featured =
    odishaHeritage.find(site => site.featured);

  return (
    <div className="dashboard">

      <Navbar />

      <main>

        <section className="dashboard-welcome">

          <p className="section-label">
            WELCOME TO VIRASAT360
          </p>

          <h1>
            Explore
            <span> Odisha.</span>
          </h1>

          <p>
            Discover the stories, architecture and
            cultural legacy of Odisha.
          </p>

        </section>

        <section className="featured-dashboard">

          <img
            src={featured.image}
            alt={featured.name}
          />

          <div>

            <p className="section-label">
              FEATURED EXPERIENCE
            </p>

            <h2>
              {featured.name}
            </h2>

            <p>
              {featured.shortDescription}
            </p>

            <Link
              to={`/heritage/${featured.id}`}
              className="primary-btn"
            >
              Begin Experience →
            </Link>

          </div>

        </section>

        <section className="dashboard-sites">

          <div className="dashboard-heading">

            <div>
              <p className="section-label">
                ODISHA
              </p>

              <h2>
                Heritage Sites
              </h2>
            </div>

            <Link to="/heritage">
              View All →
            </Link>

          </div>

          <div className="dashboard-grid">

            {odishaHeritage
              .slice(0, 4)
              .map(site => (
                <HeritageCard
                  key={site.id}
                  site={site}
                />
              ))}

          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;