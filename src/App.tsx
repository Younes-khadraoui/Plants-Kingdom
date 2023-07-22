import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Room from "./components/Room";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useRef } from "react";

function App() {
  const ref1 = useRef<any>(null);
  const ref2 = useRef<any>(null);
  const ref3 = useRef<any>(null);
  const ref4 = useRef<any>(null);

  const handleClick1 = (event: any) => {
    event.preventDefault();
    ref1.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClick2 = (event: any) => {
    event.preventDefault();
    ref2.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClick3 = (event: any) => {
    event.preventDefault();
    ref3.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClick4 = (event: any) => {
    event.preventDefault();
    ref4.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="overflow-hidden">
      <Navbar
        handleClick1={handleClick1}
        handleClick2={handleClick2}
        handleClick3={handleClick3}
        handleClick4={handleClick4}
      />
      <Home ref={ref1}/>
      <Shop ref={ref2} />
      <Room ref={ref3}/>
      <Contact ref={ref4}/>
      <Footer />
    </div>
  );
}

export default App;
