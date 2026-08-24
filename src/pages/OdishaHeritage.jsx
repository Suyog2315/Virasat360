import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeritageCard from "../components/HeritageCard";
import LowBandwidthToggle from "../components/LowBandwidthToggle";
import LanguageSelector from "../components/LanguageSelector";
import odishaHeritage from "../data/odishaHeritage";
import "./Heritage.css";

function OdishaHeritage() {
  return (
    <div className="heritage-page">

      <Navbar />

      <main>

        <section className="heritage-header">

          <div>
            <p className="section-label">
              ODISHA • HERITAGE DISCOVERY
            </p>

            <h1>
              Explore
              <br />
              <span>Odisha's Heritage.</span>
            </h1>

            <p>
              Discover temples, caves, forts and stories
              that have shaped Odisha's cultural identity.
            </p>
          </div>

          <div className="heritage-controls">

            <LanguageSelector />

            <LowBandwidthToggle />

          </div>

        </section>

        <section className="heritage-grid">

          {odishaHeritage.map(site => (
            <HeritageCard
              key={site.id}
              site={site}
            />
          ))}

        </section>

      </main>

      <Footer />

    </div>
  );
}

export default OdishaHeritage;