interface Props {
  handleClick1: (event:any) => void;
  handleClick2: (event:any) => void;
  handleClick3: (event:any) => void;
  handleClick4: (event:any) => void;
}

const Navbar = ({handleClick1,handleClick2,handleClick3,handleClick4}:Props) => {
  const navStyle =
    "text-[#2F5128] text-lg font-poppins transition ease-in-out duration-500 hover:font-bold 2xl:text-6xl 2xl:mx-10 ";

  return (
    <nav className="flex justify-center absolute top-0 left-0 w-screen h-10 z-10 cursor-pointer">
      <ul className="p-4 flex gap-4 justify-between ">
        <li onClick={handleClick1} className={navStyle}>
          Home
        </li>
        <li onClick={handleClick2} className={navStyle}>
          Shop
        </li>
        <li onClick={handleClick3} className={navStyle}>
          Rooms
        </li>
        <li onClick={handleClick4} className={navStyle}>
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
