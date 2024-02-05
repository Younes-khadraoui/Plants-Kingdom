import { Link } from "react-scroll";

const Navbar = () => {
  const navStyle =
    "text-[#2F5128] text-xl font-poppins 2xl:text-3xl 2xl:mx-5 || lg:text-2xl cursor-pointer hover:scale-110 transform transition duration-300 ease-in-out hover:text-[#2F5128] hover:font-bold";

  return (
    <div>
      <nav className="flex justify-center absolute top-0 left-0 w-screen h-10 z-10">
        <ul className="p-4 flex gap-4 justify-between ">
          <li className={navStyle}>
            <Link to="home" spy={true} smooth={true} duration={500}>
              Home
            </Link>
          </li>

          <li className={navStyle}>
            <Link to="shop" spy={true} smooth={true} duration={500}>
              Shop
            </Link>
          </li>

          <li className={navStyle}>
            <Link to="rooms" spy={true} smooth={true} duration={500}>
              Rooms
            </Link>
          </li>

          <li className={navStyle}>
            <Link to="contact" spy={true} smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
