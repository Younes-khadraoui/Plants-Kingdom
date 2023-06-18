const Home = () => {
  return (
    <>
      <div className="w-screen h-screen bg-cover bg-left lg:bg-center bg-home-pic shadow-effect">
        <div className="Content absolute top-32 2xl:top-80 -translate-y-50 w-screen content-center px-2">
          <h1 className="text-4xl p-5 sm:text-6xl text-center mb-4 font-playfair-display">
            Home is Where the Plants are
          </h1>
          <p className="text-sm text-center text-slate-800 font-poppins md:text-lg">
            Shop a large selection of indoor and outdoor <br />
            plants and flowers
          </p>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 w-full h-20 "
        style={{ background: "linear-gradient(to bottom, transparent, white)" }}
      ></div>
    </>
  );
};

export default Home;
