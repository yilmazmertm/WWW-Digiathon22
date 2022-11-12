import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DocumentVerify from "./View/DocumentVerify";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<DocumentVerify />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
