import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./views/login";
import CreatePdf from "./views/createPDF";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/create" element={<CreatePdf />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
