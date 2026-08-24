import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HeritageSites from "./pages/HeritageSites";
import HeritageDetails from "./pages/HeritageDetails";
import ARExperience from "./pages/ARExperience";
import Chatbot from "./pages/Chatbot";
import Quiz from "./pages/Quiz";
import Permissions from "./pages/Permissions";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Landing */}
        <Route
          path="/"
          element={<Landing />}
        />

        {/* Authentication */}
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* Permissions */}
        <Route
          path="/permissions"
          element={<Permissions />}
        />

        {/* Heritage */}
        <Route
          path="/heritage-sites"
          element={<HeritageSites />}
        />

        <Route
          path="/heritage/:id"
          element={<HeritageDetails />}
        />

        {/* AR */}
        <Route
          path="/ar/:id"
          element={<ARExperience />}
        />

        {/* AI / Interaction */}
        <Route
          path="/chatbot"
          element={<Chatbot />}
        />

        <Route
          path="/quiz"
          element={<Quiz />}
        />

        {/* Fallback */}
        <Route
          path="*"
          element={<Landing />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
