import React from "react";
import ImgL2 from "../assets/images/l2.png";
import ImgL3 from "../assets/images/l3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const OurCustomers = () => {
  var settings = {
    autoplay: true,
    autoplaySpeed: 100,
    speed: 3000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    dots: false, // Show dots navigation
    arrows: false,
  };
  var settings2 = {
    autoplay: true,
    autoplaySpeed: 100,
    speed: 3000,
    cssEase: "linear",
    slidesToShow: 1,
    //  slidesToScroll: 1,
    variableWidth: true,
    dots: false, // Show dots navigation
    arrows: false,
    rtl: true,
    // ltr: true
  };
  return (
    <section className="px-3 mb-5 mt-10 bg-bottom bg-cover lg:px-4 about-section">
      <div className="container mx-auto">
        <div className="w-full ">
          <div className="bg-gray1 w-full rounded-2xl px-5 py-7 lg:px-10 lg:py-10">
            <h3 className="text-lg lg:text-[20px] xl:text-[22px] font-bold text-center font-Inter">
              Our customers{" "}
              <span className=" text-selfBlue">
                save an average of $325 annually
              </span>{" "}
              from our partner brands
            </h3>
            <div className="grid grid-cols-12 mt-7">
              <div className="col-span-12 lg:col-span-2"></div>
              <div
                style={{
                  maskImage:
                    "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
                }}
                className="col-span-12 lg:col-span-8 "
              >
                <Slider {...settings}>
                  <div>
                    <img
                      src={ImgL2}
                      alt=""
                      className="h-[55px] lg:h-[70px] w-auto px-4"
                    />
                  </div>
                  <div>
                    <img
                      src={ImgL2}
                      alt=""
                      className="h-[55px] lg:h-[70px] w-auto px-4"
                    />
                  </div>
                  <div>
                    <img
                      src={ImgL2}
                      alt=""
                      className="h-[55px] lg:h-[70px] w-auto px-4"
                    />
                  </div>
                  <div>
                    <img
                      src={ImgL2}
                      alt=""
                      className="h-[55px] lg:h-[70px] w-auto px-4"
                    />
                  </div>
                </Slider>
                {/* <div className='slider '>

                </div> */}
              </div>
              <div className="col-span-12 lg:col-span-2"></div>
            </div>

            <div className="grid grid-cols-12 mt-5">
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
                  <Slider {...settings2}>
                    <div>
                      <img
                        src={ImgL3}
                        alt=""
                        className="h-[60px] lg:h-[75px] w-auto px-4"
                      />
                    </div>
                    <div>
                      <img
                        src={ImgL3}
                        alt=""
                        className="h-[60px] lg:h-[75px] w-auto px-4"
                      />
                    </div>
                    <div>
                      <img
                        src={ImgL3}
                        alt=""
                        className="h-[60px] lg:h-[75px] w-auto px-4"
                      />
                    </div>
                    <div>
                      <img
                        src={ImgL3}
                        alt=""
                        className="h-[60px] lg:h-[75px] w-auto px-4"
                      />
                    </div>
                  </Slider>
                </div>
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
