import Shop from "./Shop";
import Room from "./Room";
import Contact from "./Contact";
import Landing from "./Landing";
import Navbar from "./components/Navbar";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Landing />
      <Shop />
      <Room />
      <Contact />
    </div>
  );
};

export default Home;
