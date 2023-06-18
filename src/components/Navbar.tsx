const Navbar = () => {
  const navStyle =
    "text-[#656565] text-lg font-poppins transition ease-in-out duration-500 hover:font-bold 2xl:text-7xl 2xl:mx-10 ";

  const handleClick = (event:any) => {
    event.preventDefault();
  }
  return (
    <nav className="flex justify-center absolute top-0 left-0 w-screen h-10 z-10 cursor-pointer">
      <ul className="p-4 flex gap-4 justify-between ">
        <li onClick={handleClick} className={navStyle}>Home</li>
        <li onClick={handleClick} className={navStyle}>Shop</li>
        <li onClick={handleClick} className={navStyle}>Rooms</li>
        <li onClick={handleClick} className={navStyle}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
