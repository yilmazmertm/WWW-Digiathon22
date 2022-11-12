import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/home";
import Informations from "./views/informations";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Informations />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
