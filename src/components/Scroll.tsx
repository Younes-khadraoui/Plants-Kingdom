import top from "../assets/scroll.png";
import { animateScroll as scroll } from "react-scroll";

const Scroll = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <button className="fixed bottom-2 right-2 w-12" onClick={scrollToTop}>
      <img src={top} alt="scroll to top button" />
    </button>
  );
};

export default Scroll;
