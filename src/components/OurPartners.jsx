import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
// Default theme
import "@splidejs/react-splide/css";

import One from "../assets/images/brands/1.svg";
import Two from "../assets/images/brands/2.svg";
import Three from "../assets/images/brands/3.svg";
import Four from "../assets/images/brands/4.svg";
import Five from "../assets/images/brands/5.svg";
import Six from "../assets/images/brands/6.svg";
import Seven from "../assets/images/brands/7.svg";
import Eight from "../assets/images/brands/8.svg";
import Nine from "../assets/images/brands/9.svg";
import Ten from "../assets/images/brands/10.svg";
import Eleven from "../assets/images/brands/11.svg";
import Twelve from "../assets/images/brands/18.svg";
import Thirteen from "../assets/images/brands/13.svg";
import Fourteen from "../assets/images/brands/14.svg";
import Fifteen from "../assets/images/brands/15.svg";
import Sixteen from "../assets/images/brands/16.svg";
import Seventeen from "../assets/images/brands/17.svg";

const OurPartners = () => {
  return (
    <section className="px-4 lg:px-4 about-section  bg-cover bg-bottom  pb-14 pt-12 bg-lightBeige">
      <div className="mx-auto">
        <div className="w-full ">
          <div className="w-full ">
            <p className="font-lato text-sm font-medium leading-5 tracking-normal text-center text-coffee uppercase">
              Our partner Brands
            </p>

            <h1 className="mt-4 text-3xl font-semibold tracking-normal text-center leading-13">
              Our members save an average of
              <span className="text-coffee"> $327 annually</span> <br />
              from our partner brands
            </h1>
            <div
              style={{
                maskImage:
                  "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
              }}
            >
              <Splide
                extensions={{ AutoScroll }}
                options={{
                  type: "loop",
                  drag: "free",
                  focus: "center",
                  autoWidth: true,
                  arrows: false,
                  autoScroll: {
                    speed: -1,
                  },
                }}
                className="pt-4 my-5 slider"
              >
                <SplideSlide>
                  <div className="slider-logo h-[55px] lg:h-20 bg-white  w-40 px-4 rounded-md flex justify-center items-center mx-2">
                    <img src={One} alt="" className="w-auto h-5" />
                  </div>
                </SplideSlide>
                {/* <SplideSlide>
                  <div className="slider-logo h-[55px] lg:h-20 bg-white  w-40 px-4 rounded-md flex justify-center items-center mx-2">
                    <img src={Two} alt="" className="w-auto h-5" />
                  </div>
                </SplideSlide> */}
                <SplideSlide>
                  <div className="slider-logo h-[55px] lg:h-20 bg-white  w-40 px-4 rounded-md flex justify-center items-center mx-2">
                    <img src={Three} alt="" className="w-auto h-5" />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="slider-logo h-[55px] lg:h-20 bg-white  w-40 px-4 rounded-md flex justify-center items-center mx-2">
                    <img src={Four} alt="" className="w-auto h-5" />
                  </div>
                </SplideSlide>

                <SplideSlide>
                  <div className="slider-logo h-[55px] lg:h-20 bg-white  w-40 px-4 rounded-md flex justify-center items-center mx-2">
                    <img src={Five} alt="" className="w-auto h-5" />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="slider-logo h-[55px] lg:h-20 bg-white  w-40 px-4 rounded-md flex justify-center items-center mx-2">
                    <img src={Six} alt="" className="w-auto h-5" />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="slider-logo h-[55px] lg:h-20 bg-white  w-40 px-4 rounded-md flex justify-center items-center mx-2">
                    <img src={Seven} alt="" className="w-auto h-5" />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="slider-logo h-[55px] lg:h-20 bg-white  w-40 px-4 rounded-md flex justify-center items-center mx-2">
                    <img src={Eight} alt="" className="w-auto h-5" />
                  </div>
                </SplideSlide>
              </Splide>
            </div>

            <div
              className=""
              style={{
                maskImage:
                  "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
              }}
            >
              <Splide
                extensions={{ AutoScroll }}
                options={{
                  type: "loop",
                  drag: "free",
                  focus: "center",
                  arrows: false,
                  autoWidth: true,
                  autoScroll: {
                    speed: 1,
                  },
                }}
                className="slider2 "
              >
                <SplideSlide>
                  <div className="slider-logo h-[55px] lg:h-20 bg-white  w-40 px-4 rounded-md flex justify-center items-center mx-2">
                    <img src={Nine} alt="" className="w-auto h-5" />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="slider-logo h-[55px] lg:h-20 bg-white  w-40 px-4 rounded-md flex justify-center items-center mx-2">
                    <img src={Ten} alt="" className="w-auto h-5" />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="slider-logo h-[55px] lg:h-20 bg-white  w-40 px-4 rounded-md flex justify-center items-center mx-2">
                    <img src={Eleven} alt="" className="w-auto h-5" />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="slider-logo h-[55px] lg:h-20 bg-white  w-40 px-4 rounded-md flex justify-center items-center mx-2">
                    <img src={Twelve} alt="" className="w-auto h-5" />
                  </div>
                </SplideSlide>

                <SplideSlide>
                  <div className="slider-logo h-[55px] lg:h-20 bg-white  w-40 px-4 rounded-md flex justify-center items-center mx-2">
                    <img src={Thirteen} alt="" className="w-auto h-5" />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="slider-logo h-[55px] lg:h-20 bg-white  w-40 px-4 rounded-md flex justify-center items-center mx-2">
                    <img src={Fourteen} alt="" className="w-auto h-5" />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="slider-logo h-[55px] lg:h-20 bg-white  w-40 px-4 rounded-md flex justify-center items-center mx-2">
                    <img src={Fifteen} alt="" className="w-auto h-5" />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="slider-logo h-[55px] lg:h-20 bg-white  w-40 px-4 rounded-md flex justify-center items-center mx-2">
                    <img src={Sixteen} alt="" className="w-auto h-5" />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="slider-logo h-[55px] lg:h-20 bg-white  w-40 px-4 rounded-md flex justify-center items-center mx-2">
                    <img src={Seventeen} alt="" className="w-auto h-5" />
                  </div>
                </SplideSlide>
              </Splide>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
