import Navbar from "../components/Navbar";
import "./Profile.css";

function Profile() {

  const user =
    JSON.parse(
      localStorage.getItem("virasatUser")
    ) || {
      name: "Heritage Explorer",
      email: "explorer@virasat360.com"
    };

  return (
    <div className="profile-page">

      <Navbar />

      <main className="profile-container">

        <p className="section-label">
          YOUR HERITAGE JOURNEY
        </p>

        <h1>
          Heritage
          <span> Passport</span>
        </h1>

        <div className="profile-card">

          <div className="profile-avatar">
            {user.name?.charAt(0).toUpperCase()}
          </div>

          <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>

        </div>

        <div className="profile-stats">

          <div>
            <strong>01</strong>
            <span>Sites Visited</span>
          </div>

          <div>
            <strong>04/05</strong>
            <span>Quiz Score</span>
          </div>

          <div>
            <strong>01</strong>
            <span>Badge Earned</span>
          </div>

        </div>

        <div className="badge-card">

          <div>
            🏛️
          </div>

          <div>
            <span>BADGE EARNED</span>
            <h2>Odisha Heritage Explorer</h2>
            <p>
              Completed the Konark heritage experience.
            </p>
          </div>

        </div>

      </main>

    </div>
  );
}

export default Profile;