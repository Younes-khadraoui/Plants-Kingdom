import { forwardRef } from "react";
import bedroom1 from "../assets/bedroom1.png"
import enter from "../assets/enter.png"
import bedroom3 from "../assets/bedroom3.png"
import bedroom2 from "../assets/bedroom2.png"

interface Props {}

const Room = forwardRef<HTMLDivElement, Props>(({},ref) => {
  return (
    <div ref={ref} className="p-5 ">
      <div className="text-center p-10">
        <h2 className="text-4xl pb-5 font-bold font-poppins">Shop by Room</h2>
        <p className="text-sm text-[#828282] font-poppins">
          Turn every room of your home into a jungle
        </p>
      </div>
      <div className="grid justify-center lg:grid-cols-2 gap-10 p-10 ">
        <div className="image-1 cursor-pointer relative  transition-all duration-300 hover:grayscale-[70%]">
          <img
            className=" z-10 w-full h-full object-cover rounded-3xl cursor-pointer  "
            src={bedroom1}
            alt="A room with plants"
            loading="lazy"
          />
          <div className="text-white absolute z-10 w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100">
            <div>
              <p className="text-lg">Shop</p>
              <h2 className="text-2xl font-bold">Bedroom</h2>
              <div className="flex flex-col items-center">
                <img
                  className="w-8 filter brightness-0 invert cursor-pointer"
                  src={enter}
                  alt="enter button image"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="image-2 cursor-pointer row-span-2 relative  transition-all duration-300 hover:grayscale-[70%]">
          <img
            className=" z-10 w-full h-full object-cover rounded-3xl cursor-pointer  "
            src={bedroom3}
            alt="A room with plants"
            loading="lazy"
          />
          <div className="text-white absolute z-10 w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100">
            <div>
              <p className="text-lg">Shop</p>
              <h2 className="text-2xl font-bold">Bedroom</h2>
              <div className="flex flex-col items-center">
                <img
                  className="w-8 filter brightness-0 invert cursor-pointer"
                  src={enter}
                  alt="enter button image"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="image-3 cursor-pointer relative  transition-all duration-300 hover:grayscale-[70%]">
          <img
            className=" z-10 w-full h-full object-cover rounded-3xl cursor-pointer  "
            src={bedroom2}
            alt="A room with plants"
            loading="lazy"
          />
          <div className="text-white absolute z-10 w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100">
            <div>
              <p className="text-lg">Shop</p>
              <h2 className="text-2xl font-bold">Bedroom</h2>
              <div className="flex flex-col items-center">
                <img
                  className="w-8 filter brightness-0 invert cursor-pointer"
                  src={enter}
                  alt="enter button image"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Room;
