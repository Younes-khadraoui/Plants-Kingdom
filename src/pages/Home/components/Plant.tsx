import { ChevronRightCircle } from "lucide-react";
import StarRating from "./StarRating";

interface Props {
  link: string;
  name: string;
  price: number;
  rating: number;
}
const Plant = ({ link, name, price, rating }: Props) => {
  return (
    <div className="bg-[#e5e7e6] rounded-3xl grid grid-rows-[1fr, auto] shadow-xl">
      <div className="flex justify-center items-center">
        <img className="w-60 animate-bounce" src={link} alt="Alocasia Plant" />
      </div>
      <div className="bg-white rounded-b-3xl p-5">
        <div className="name+rating flex flex-col gap-2 items-center">
          <p className="font-bold text-xl">{name}</p>
          <div className="flex justify-evenly gap-2">
            <div className="flex items-center">
              <StarRating rating={rating} />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-2 pb-4">
          <p className="text-sm font-bold">${price}</p>
          <ChevronRightCircle />
        </div>
      </div>
    </div>
  );
};

export default Plant;
