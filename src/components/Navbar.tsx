import { motion } from "framer-motion";
import top from "../assets/scroll.png";
// @ts-ignore
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const navStyle =
    "text-[#2F5128] text-xl font-poppins 2xl:text-6xl 2xl:mx-10 || lg:text-2xl cursor-pointer";

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
      <nav className="flex justify-center absolute top-0 left-0 w-screen h-10 z-10">
        <ul className="p-4 flex gap-4 justify-between ">
          <motion.li
            className={navStyle}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              activeClass="active font-bold"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </motion.li>

          <motion.li
            className={navStyle}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              activeClass="active font-bold"
              to="shop"
              spy={true}
              smooth={true}
              duration={500}
            >
              Shop
            </Link>
          </motion.li>

          <motion.li
            className={navStyle}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              activeClass="active font-bold"
              to="rooms"
              spy={true}
              smooth={true}
              duration={500}
            >
              Rooms
            </Link>
          </motion.li>

          <motion.li
            className={navStyle}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              activeClass="active font-bold"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </motion.li>
        </ul>
      </nav>
      <button className="fixed bottom-2 right-2 w-12" onClick={scrollToTop}>
        <img src={top} alt="scroll to top button" />
      </button>
    </div>
  );
};

export default Navbar;
