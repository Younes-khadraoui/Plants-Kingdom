import { motion } from "framer-motion";
import enter from "../assets/enter.png";
import StarRating from "./StarRating";

interface Props {
  link: string;
  name: string;
  price: number;
  rating: number;
}
const Plant = ({ link, name, price, rating }: Props) => {
  return (
    <div className="plant1 bg-[#e5e7e6] rounded-3xl grid grid-rows-2 shadow-xl">
      <motion.img
        className="w-60 row-span-2"
        src={link}
        alt="Alocasia Plant"
        initial={{ y: 0 }}
        animate={{ y: [0, -50, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
      <div className="Descreption bg-white rounded-3xl py-5 px-2 v gap-5">
        <div className="name+rating p-5 flex flex-col gap-2 items-center">
          <p className="font-bold text-xl">{name}</p>
          <div className="flex justify-evenly gap-2">
            <div className="flex items-center">
              <StarRating rating={rating} />
            </div>
          </div>
        </div>

        <div className="Price+link flex justify-between items-center px-5">
          <p className="text-sm font-bold">${price}</p>
          <img className="w-6 cursor-pointer" src={enter} alt="enter button" />
        </div>
      </div>
    </div>
  );
};

export default Plant;
