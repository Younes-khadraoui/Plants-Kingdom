const Landing = () => {
  return (
    <div id="home">
      <div className="Title bg-cover bg-left bg-home-pic shadow-effect Content pt-20 z-10 h-screen || lg:bg-center ">
        <h1 className="text-4xl font-bold  text-center p-5  || lg:text-4xl ">
          Home is Where the Plants are
        </h1>
        <p className="text-lg  text-center text-slate-800 px-2 || lg:text-xl ">
          Shop a large selection of indoor and outdoor
          <span className="lg:block">plants and flowers</span>
        </p>
      </div>
      <div
        className="absolute bg-red-500 w-full h-20 bottom-0 z-30"
        style={{
          background: "linear-gradient(to bottom, transparent, white)",
        }}
      ></div>
    </div>
  );
};

export default Landing;
