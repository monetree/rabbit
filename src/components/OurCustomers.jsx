import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Row1Img1 from "../assets/images/slider/1.png";
import Row1Img2 from "../assets/images/slider/2.png";
import Row1Img3 from "../assets/images/slider/3.webp";
import Row1Img4 from "../assets/images/slider/4.png";
import Row1Img5 from "../assets/images/slider/5.png";

import Row2Img1 from "../assets/images/slider/row2/1.png";
import Row2Img2 from "../assets/images/slider/row2/2.svg";
import Row2Img3 from "../assets/images/slider/row2/3.png";
import Row2Img4 from "../assets/images/slider/row2/4.png";
import Row2Img5 from "../assets/images/slider/row2/5.png";

const OurCustomers = () => {
  var settings = {
    autoplay: true,
    autoplaySpeed: 100,
    speed: 4000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    dots: false, // Show dots navigation
    arrows: false,
    infinite: true,
  };
  var settings2 = {
    autoplay: true,
    autoplaySpeed: 100,
    speed: 4000,
    cssEase: "linear",
    slidesToShow: 1,
    //  slidesToScroll: 1,
    variableWidth: true,
    dots: false, // Show dots navigation
    arrows: false,
    infinite: true,
  };
  return (
    <section className="px-3 mt-10 mb-5 bg-bottom bg-cover lg:px-4 about-section">
      <div className="container mx-auto">
        <div className="w-full ">
          <div className="w-full px-5 bg-gray1 rounded-2xl py-7 lg:px-10 lg:py-16">
            <h3 className="text-lg lg:text-[20px] xl:text-[22px] font-bold text-center font-Inter">
              Our customers{" "}
              <span className=" text-selfBlue">
                save an average of $325 annually
              </span>{" "}
              from our partner brands
            </h3>

            <div className="grid grid-cols-12 mt-6 lg:mt-16">
              <div className="col-span-12 lg:col-span-2"></div>
              <div className="relative col-span-12 lg:col-span-8">
                <div
                  style={{
                    maskImage:
                      "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
                  }}
                  className=""
                  dir="rtl"
                >
                  <Slider {...settings}>
                    <div>
                      <img
                        src={Row1Img1}
                        alt=""
                        className="h-[40px] lg:h-[40px] w-auto px-4 object-contain"
                      />
                    </div>
                    <div>
                      <img
                        src={Row1Img2}
                        alt=""
                        className="h-[40px] lg:h-[40px] w-auto px-4 object-contain"
                      />
                    </div>
                    <div>
                      <img
                        src={Row1Img3}
                        alt=""
                        className="h-[40px] lg:h-[40px] w-auto px-4 object-contain"
                      />
                    </div>
                    <div>
                      <img
                        src={Row1Img4}
                        alt=""
                        className="h-[40px] lg:h-[40px] w-auto px-4 object-contain"
                      />
                    </div>
                    <div>
                      <img
                        src={Row1Img5}
                        alt=""
                        className="h-[40px] lg:h-[40px] w-auto px-4 object-contain"
                      />
                    </div>
                  </Slider>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-2"></div>
            </div>
            <div className="grid grid-cols-12 mt-16">
              <div className="col-span-12 lg:col-span-2"></div>
              <div
                style={{
                  maskImage:
                    "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
                }}
                className="col-span-12 lg:col-span-8 "
              >
                <Slider {...settings2}>
                  <div>
                    <img
                      src={Row2Img1}
                      alt=""
                      className="h-[40px] lg:h-[40px] w-auto px-4"
                    />
                  </div>
                  <div>
                    <img
                      src={Row2Img2}
                      alt=""
                      className="h-[40px] lg:h-[40px] w-auto px-4"
                    />
                  </div>
                  <div>
                    <img
                      src={Row2Img3}
                      alt=""
                      className="h-[40px] lg:h-[40px] w-auto px-4"
                    />
                  </div>
                  <div>
                    <img
                      src={Row2Img4}
                      alt=""
                      className="h-[40px] lg:h-[40px] w-auto px-4"
                    />
                  </div>

                  <div>
                    <img
                      src={Row2Img5}
                      alt=""
                      className="h-[40px] lg:h-[40px] w-auto px-4"
                    />
                  </div>
                </Slider>
                {/* <div className='slider '>

                </div> */}
              </div>
              <div className="col-span-12 lg:col-span-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCustomers;
