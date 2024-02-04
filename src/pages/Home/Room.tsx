import bedroom1 from "./assets/bedroom1.png";
import enter from "./assets/enter.png";
import bedroom3 from "./assets/bedroom3.png";
import bedroom2 from "./assets/bedroom2.png";

const Room = () => {
  return (
    <div className="p-5 " id="rooms">
      <div className="Title text-center p-10">
        <h2 className="text-4xl pb-5 font-bold ">Shop by Room</h2>
        <p className="text-sm text-[#828282] ">
          Turn every room of your home into a jungle
        </p>
      </div>
      <div className="Images grid justify-center lg:grid-cols-2 gap-10 p-10 ">
        <div className="image-1 relative">
          <img
            className="w-full h-full object-cover  rounded-3xl"
            src={bedroom1}
            alt="A room with plants"
          />
          <div className="content text-white bg-black bg-opacity-20 rounded-3xl  shadow-xl absolute z-10 w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center gap-5 items-center">
            <div>
              <p className="text-lg">Shop</p>
              <h2 className="text-2xl font-bold">Bedroom</h2>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="w-8 filter brightness-0 invert cursor-pointer"
                src={enter}
                alt="enter button image"
              />
            </div>
          </div>
        </div>

        <div className="image-2 row-span-2 relative  ">
          <img
            className=" z-10 w-full h-full object-cover "
            src={bedroom3}
            alt="A room with plants"
          />
          <div className="content shadow-xl text-white opacity-0 hover:opacity-100 bg-black bg-opacity-30 rounded-3xl lg:rounded-[47px] absolute z-10 w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center gap-5 items-center">
            <div>
              <p className="text-lg">Shop</p>
              <h2 className="text-2xl font-bold">Living room</h2>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="w-8 filter brightness-0 invert cursor-pointer"
                src={enter}
                alt="enter button image"
              />
            </div>
          </div>
        </div>

        <div className="image-3 relative ">
          <img
            className=" z-10 w-full h-full object-cover rounded-3xl"
            src={bedroom2}
            alt="A room with plants"
          />
          <div className="content shadow-xl opacity-0 hover:opacity-100 text-white bg-black bg-opacity-20 rounded-3xl absolute z-10 w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center gap-5 items-center">
            <div>
              <p className="text-lg">Shop</p>
              <h2 className="text-2xl font-bold">Balcony</h2>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="w-8 filter brightness-0 invert cursor-pointer"
                src={enter}
                alt="enter button image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
