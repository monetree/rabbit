import React from "react";
import ImgBg from "../../assets/images/aboutMain.jpg";

const MainBlock = () => {
  return (
    <div className="h-72 relative mt-[80px] max-lg:mt-[64px]">
      <img
        src={ImgBg}
        alt=""
        className="w-full h-full bg-cover object-cover absolute z-0"
      />
      <div className="w-full px-main h-full bg-[#000000a8] absolute z-10 flex justify-center items-center max-lg:px-10 max-sm:px-4">
        <div className="text-center mt-1">
          <div className="text-white text-[45px] font-bold max-xl:text-[35px] max-md:text-[25px]">
            About us
          </div>
          <div className="text-beige w-3/5 m-auto text-sm font-medium max-md:w-4/5">
            We partner with the world’s leading wellness brands and make it
            remarkably easy to use your HSA or FSA dollars on the products that
            make you the best version of yourself
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBlock;
