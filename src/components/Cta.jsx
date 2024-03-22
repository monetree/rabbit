import React from "react";
import ImgBg from "../assets/images/CTA.png";
import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <section
      class="px-4 xl:px-4  bg-cover bg-bottom  pt-12 pb-14 "
      style={{
        backgroundImage: `url('${ImgBg}')`,
      }}
    >
      <div class="container mx-auto">
        <div class="text-center">
          <h1 class="font-epilogue text-4xl lg:text-5xl font-semibold leading-13 tracking-normal text-center capitalize  text-white">
            Ready to save on your favorite wellness products?{" "}
          </h1>

          <p class="font-epilogue text-base font-medium leading-7 tracking-normal text-center text-beige mt-3">
            Take our 1 minute health survey
          </p>

          <div class="flex justify-center mt-10">
            <div
              class=" bg-beige  border-2 mt-auto hover:shadow-custom  rounded-[30px] cursor-pointer border-transparent
        text-center border-solid   text-darkGreen   h-12 flex align-middle justify-center items-center w-56 hover:bg-darkGreen hover:text-white"
            >
              <Link to="" class="leading-5 text-base font-semibold">
                Start Saving
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
