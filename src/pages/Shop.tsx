import phone from "../assets/phone.png";
import payment from "../assets/payment.png";
import shipping from "../assets/shipping.png";
import Plant from "../components/Plant";
import plant1 from "../assets/plant1.png";
import plant2 from "../assets/plant2.png";
import plant3 from "../assets/plant3.png";

const Shop = () => (
  <div id="shop" className="lg:mt-20 ">
    <div className="part-one  p-2 md:p-8 py-20 grid grid-cols-1 md:grid-cols-3 gap-5">
      <div className="contact flex gap-10 md:gap-5 justify-center">
        <img className="w-[90px] h-[90px]" src={phone} alt="phone picture" />
        <div className="grid gap-2  content-center">
          <p className="text-2xl font-bold">24/7 Contact</p>
          <p className="text-sm text-[#828282] ">ALG based contact</p>
        </div>
      </div>
      <div className="payment flex gap-10 md:gap-5 justify-center">
        <img
          src={payment}
          alt="payment card picture"
          className="w-[90px] h-[90px]"
        />
        <div className="grid gap-2  content-center">
          <p className="text-2xl font-bold">Safe Payment</p>
          <p className="text-sm text-[#828282]">256-bit encrypted</p>
        </div>
      </div>
      <div className="shipping flex gap-10 md:gap-5 justify-center">
        <img
          src={shipping}
          alt="shipping picture"
          className="w-[90px] h-[90px]"
        />
        <div className="grid gap-2 content-center">
          <p className="text-2xl font-bold">Free Shipping</p>
          <p className="text-sm text-[#828282]">Free standard delivery</p>
        </div>
      </div>
    </div>

    <div className="part-two  px-10 grid place-content-center || lg:pt-20 lg:grid-cols-4">
      <div className="left-col grid content-center w-full  p-10 ">
        <h2 className="font-bold text-[2rem] ">
          Best Selling{" "}
          <span className="hidden md:inline">
            <br />
          </span>{" "}
          Plants
        </h2>
        <p className="text-base cursor-pointer text-[#828282]">
          see full collection &gt;
        </p>
      </div>

      <div className="right-col pt-10 grid  place-content-center gap-10 || lg:col-span-3 lg:grid-cols-3">
        <Plant link={plant1} name="Alocasia" price={44.99} rating={4} />
        <Plant link={plant2} name="Snake" price={64.99} rating={3} />
        <Plant link={plant3} name="Birkin" price={79.99} rating={5} />
      </div>
    </div>
  </div>
);

export default Shop;
