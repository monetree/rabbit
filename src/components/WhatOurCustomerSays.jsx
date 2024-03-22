import React, { useEffect, useRef, useState } from "react";
import LeftSvg from "../assets/images/custome-left.svg";
import Group2 from "../assets/images/Mask Group.png";

import Img34 from "../assets/images/Ellipse 34.png";
import Img4 from "../assets/images/287b0c1ae41fec55df34734991cc310f.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const WhatOurCustomerSays = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  return (
    <section className="px-4 pt-12 bg-bottom bg-cover lg:px-4 about-section pb-14 bg-lightBeige">
      <div className="contaienr">
        <h1 className="mt-4 text-2xl font-semibold tracking-normal text-center text-coffee capitalize font-epilogue leading-13">
          What our members love
        </h1>
        <div className="relative w-full mt-5">
          <div className="">
            <Slider
              asNavFor={nav2}
              arrows={false}
              infinite={true}
              ref={(slider) => (sliderRef1 = slider)}
              className=""
            >
              <div className="flex items-start mx-auto text-center min-h-40">
                <div className="max-w-5xl mx-auto">
                  <img src={LeftSvg} alt="" />
                  <p className="mt-4 text-base font-medium leading-7 tracking-normal text-center text-selfGray font-epilogue">
                    The $79 annual subscription was an absolute no-brainer for
                    me! I spend $300+ per month on my health practice. Many of
                    those expenses qualify for HSA dollars through Crates,
                    saving me $100+ monthly.
                  </p>
                </div>
              </div>
              <div className="flex items-start mx-auto text-center min-h-40">
                <div className="max-w-5xl mx-auto">
                  <img src={LeftSvg} alt="" />
                  <p className="mt-4 text-base font-medium leading-7 tracking-normal text-center text-selfGray font-epilogue">
                    Explore a vast array of high-quality pharmaceuticals,
                    supplements and healthcare products. Explore a vast array of
                    high-quality pharmaceuticals, supplements and healthcare
                    products 1
                  </p>
                </div>
              </div>
              <div className="flex items-start mx-auto text-center min-h-40">
                <div className="max-w-5xl mx-auto">
                  <img src={LeftSvg} alt="" />
                  <p className="mt-4 text-base font-medium leading-7 tracking-normal text-center text-selfGray font-epilogue">
                    Explore a vast array of high-quality pharmaceuticals,
                    supplements and healthcare products. Explore a vast array of
                    high-quality pharmaceuticals, supplements and healthcare
                    products 1
                  </p>
                </div>
              </div>
            </Slider>

            <Slider
              asNavFor={nav1}
              ref={(slider) => (sliderRef2 = slider)}
              slidesToShow={2}
              swipeToSlide={true}
              focusOnSelect={true}
              arrows={false}
              variableWidth={true}
              infinite={true}
              centerMode={true}
              className="mx-auto max-w-[400px] mt-6 sm:mt-0  sm:max-w-[500px] "
            >
              <div className="cursor-pointer sm:px-5">
                <div className="flex flex-col items-center justify-center mx-3 text-center ">
                  <div className="p-1 rounded-full">
                    <img
                      src={Group2}
                      alt=" "
                      className="flex flex-shrink-0 w-16 h-16 rounded-full md:h-20 md:w-20 "
                    />
                  </div>
                  <div className="dot-data">
                    <h2 className="mt-2 text-sm font-medium text-black">
                      Viren B
                    </h2>
                    <p className="text-xs text-selfGray">Personal IT Expert</p>
                  </div>
                </div>
              </div>
              <div className="cursor-pointer sm:px-5">
                <div className="flex flex-col items-center justify-center mx-3 text-center ">
                  <div className="p-1 rounded-full">
                    <img
                      src={Img34}
                      alt=" "
                      className="flex flex-shrink-0 w-16 h-16 rounded-full md:h-20 md:w-20 "
                    />
                  </div>
                  <div className="dot-data">
                    <h2 className="mt-2 text-sm font-medium text-black">
                      Viren B
                    </h2>
                    <p className="text-xs text-selfGray">Personal IT Expert</p>
                  </div>
                </div>
              </div>
              <div className="cursor-pointer sm:px-5">
                <div className="flex flex-col items-center justify-center mx-3 text-center ">
                  <div className="p-1 rounded-full">
                    <img
                      src={Img4}
                      alt=" "
                      className="flex flex-shrink-0 w-16 h-16 rounded-full md:h-20 md:w-20 "
                    />
                  </div>
                  <div className="dot-data">
                    <h2 className="mt-2 text-sm font-medium text-black">
                      Viren B
                    </h2>
                    <p className="text-xs text-selfGray">Personal IT Expert</p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatOurCustomerSays;
