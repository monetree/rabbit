import React from "react";
import Bg from "../assets/images/Main Block.png";
import { Link } from "react-router-dom";
import { VITE_MARKETPLACE_URL } from "../utils/Constants";

const HeroSection = () => {
  return (
    <section
      className={`flex flex-col items-center justify-center px-4 lg:px-4 h-[calc(100vh_-_80px)] bg-gray-400 bg-center bg-cover `}
      style={{
        backgroundImage: `url('${Bg}')`,
      }}
    >
      <div className="container">
        <div className="flex">
          <div className="mx-auto lg:basis-9/12 md:basis-8/12 ">
            <h1 className="text-4xl font-bold leading-tight tracking-normal text-center text-white font-epilogue md:text-4xl lg:text-5xl">
              Your Favourite Wellness Products 30% Cheaper
            </h1>
            <p className="mt-4 text-base font-medium leading-7 tracking-normal text-center text-white font-epilogue">
              Explore a vast array of high-quality pharmaceuticals, supplements
              and healthcare products, Explore a vast array of high-quality
              pharmaceuticals, supplements and healthcare products,
            </p>
            <div
              class=" mt-6 mx-auto bg-beige  border-2 hover:shadow-custom  rounded-[30px] cursor-pointer border-transparent
        text-center border-solid   text-darkGreen   h-12 flex align-middle justify-center items-center w-56 hover:bg-darkGreen hover:text-white"
            >
              <Link
                to={`${VITE_MARKETPLACE_URL}/survey`}
                class="leading-5 text-base font-semibold"
              >
                Start Saving
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
