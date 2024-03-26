import React from "react";
import Bg from "../assets/images/Main Block.png";
import { Link } from "react-router-dom";
import { VITE_MARKETPLACE_URL } from "../utils/Constants";

const HeroSection = () => {
  return (
    <section
      className={`flex flex-col mt-20 items-center justify-center px-4 lg:px-4 h-[calc(100vh_-_80px)] bg-gray-400 bg-center bg-cover `}
      style={{
        backgroundImage: `url('${Bg}')`,
      }}
    >
      <div className="container">
        <div className="flex">
          <div className="mx-auto lg:basis-9/12 md:basis-8/12 ">
            <h1 className="text-4xl font-bold leading-10 space-y-2 tracking-normal text-center text-white md:text-4xl lg:text-5xl">
              <p> Your favorite wellness products.</p>
              <p>30% cheaper.</p>
            </h1>
            <p className="mt-6 text-base leading-6 tracking-normal text-center text-beige">
              We partner with the world’s leading wellness brands and make it
              quick and simple to use your HSA or FSA <br />
              dollars on the products that you love
            </p>
            <div
              class="mt-6 mx-auto bg-beige  border-2 hover:shadow-custom  rounded-[30px] cursor-pointer border-transparent
        text-center border-solid   text-darkGreen   h-12 flex align-middle justify-center items-center w-56 hover:bg-darkGreen hover:text-white"
            >
              <Link
                to={`${VITE_MARKETPLACE_URL}/survey`}
                href=""
                class="leading-5 text-base font-medium"
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
