import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { ApiContextProvider } from "./context/api.context";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import CharacterDetails from "./pages/Details";

const App: React.FC = () => {
  return (
    <Router>
      <ApiContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/character/:id" element={<CharacterDetails />} />
        </Routes>
      </ApiContextProvider>
    </Router>
  );
};

export default App;
