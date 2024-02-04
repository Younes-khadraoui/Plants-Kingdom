import "./App.css";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Plants from "./pages/Plants/Plants";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plants" element={<Plants />} />
    </Routes>
  );
}

export default App;
