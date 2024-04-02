import React, { useEffect, useRef, useState } from "react";
import LeftSvg from "../assets/images/custome-left.svg";
import Group2 from "../assets/images/Mask Group.png";

import Img34 from "../assets/images/Ellipse 34.png";
import Img4 from "../assets/images/287b0c1ae41fec55df34734991cc310f.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReviewMsg = ({ text }) => {
  return (
    <div className="flex items-start mx-auto text-center min-h-40">
      <div className="mx-auto flex w-3/6 items-start max-sm:w-full">
        <img src={LeftSvg} alt="" />
        <p className="mt-4 px-2 sm:px-5 text-base font-medium leading-7 tracking-normal text-center text-gray-600 font-epilogue">
          {text}
        </p>
        <img src={LeftSvg} alt="" className="rotate-180" />
      </div>
    </div>
  );
};

const CustomerProfile = ({ img, name, profession }) => {
  return (
    <div className="cursor-pointer sm:px-5">
      <div className="flex flex-col items-center justify-center mx-3 text-center ">
        <div className="p-1 rounded-full">
          <img
            src={img}
            alt=" "
            className="flex flex-shrink-0 w-10 h-10 rounded-full md:h-16 md:w-16 "
          />
        </div>
        <div className="dot-data">
          <h2 className="mt-2 text-sm font-medium text-black">{name}</h2>
          <p className="text-xs text-gray-600">{profession}</p>
        </div>
      </div>
    </div>
  );
};

const Reviews = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  return (
    <section className="px-4 py-10 pb-12 bg-bottom bg-cover lg:px-4 about-section  bg-lightBeige">
      <div className="contaienr">
        <h1 className="mt-4 text-2xl font-semibold tracking-normal text-center text-coffee capitalize font-epilogue lg:text-3xl leading-13">
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
              <ReviewMsg
                text={
                  "The $89 annual subscription was an absolute no-brainer for me! I spend $300+ per month on my health practice. Many of those expenses qualify for HSA dollars through Crates, saving me $100+ monthly. "
                }
              />
              <ReviewMsg
                text={
                  "I am so much healthier now! Many of the cool products that I was interested in trying but thought were too expensive are now  much more affordable thanks to Crates Health"
                }
              />
              <ReviewMsg
                text={
                  "Not only did I save hundreds of dollars but I also discovered new brands and products that I turned out to love. "
                }
              />
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
              className="mx-auto max-w-[400px] mt-6 sm:mt-0  sm:max-w-[450px] "
            >
              <CustomerProfile
                img={Group2}
                name={"Viren B"}
                profession={"Personal finance Expert"}
              />
              <CustomerProfile
                img={Img34}
                name={"Victoria C"}
                profession={"Health newbie"}
              />
              <CustomerProfile
                img={Img4}
                name={"Elan M"}
                profession={"Health enthusiast"}
              />
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
