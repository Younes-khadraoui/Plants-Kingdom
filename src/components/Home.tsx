import { forwardRef } from "react";

interface Props {}

const Home = forwardRef<HTMLDivElement, Props>(({}, ref) => {
  return (
    <div ref={ref}>
      <div className="w-screen h-screen bg-cover bg-left lg:bg-center bg-home-pic shadow-effect">
        <div className="Content absolute top-16 2xl:top-32 -translate-y-50 w-screen content-center px-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl text-center p-5 mb-4 font-playfair-display">
            Home is Where the Plants are
          </h1>
          <p className=" text-xs sm:text-sm lg:text-lg text-center text-slate-800 font-poppins md:text-lg">
            Shop a large selection of indoor and outdoor <br />
            plants and flowers
          </p>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 w-full h-20 "
        style={{ background: "linear-gradient(to bottom, transparent, white)" }}
      ></div>
    </div>
  );
});

export default Home;
