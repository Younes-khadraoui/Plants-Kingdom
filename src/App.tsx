import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Room from "./pages/Room";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Home />
      <Shop />
      <Room />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
