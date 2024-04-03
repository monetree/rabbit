import React from "react";
import { VITE_MARKETPLACE_URL } from "../utils/Constants";
import { Link } from "react-router-dom";

import PriceGreenTick from "../assets/images/price-tick-green.svg";
import PriceCoralTick from "../assets/images/price-tick-coral.svg";

const Pricing = () => {
  return (
    <section className="px-4 pt-12 bg-bottom bg-cover xl:px-52 about-section pb-14 bg-lightBeige">
      <div className="container mx-auto">
        <div className="text-center">
          <p className="text-sm font-medium leading-5 tracking-normal text-center uppercase font-lato text-coffee ">
            pricing
          </p>

          <h1 className="mt-4 text-3xl font-semibold tracking-normal text-center font-epilogue leading-13">
            Choose the savings plan that is perfect for you{" "}
          </h1>

          <p className="mt-4 text-sm font-medium leading-7 tracking-normal text-center text-selfGray font-epilogue">
            Of course, we accept HSA payments!
          </p>
        </div>

        <div className="mx-auto ">
          <div className="flex flex-col content-center gap-5 mt-8 lg:flex-row">
            <div className="relative basis-3/3 lg:basis-1/3 md:basis-2/3">
              <div className="h-full bg-white rounded-3xl px-7 pt-20 pb-28">
                <div className="flex items-center justify-between w-full mb-7">
                  <h1 className="text-3xl font-semibold text-darkGreen">
                    Beginner
                    <br />
                    Saver
                  </h1>
                  <div className="text-center">
                    <span className="text-4xl font-medium lg:text-5xl text-darkGreen ">
                      $35
                    </span>
                    <div>
                      <span className="text-sm text-selfGray ">Annually</span>
                    </div>
                  </div>
                </div>
                <ul>
                  <li className="flex items-start mb-2">
                    <img src={PriceGreenTick} className="w-4 mr-2" />
                    <span className="text-sm font-semibold md:text-sm text-selfGray">
                      Average savings = $179 annually
                    </span>
                  </li>

                  <li className="flex items-start mb-2">
                    <img src={PriceGreenTick} className="w-4 mr-2" />
                    <span className="text-sm font-medium md:text-sm text-selfGray">
                      Save on one wellness product
                    </span>
                  </li>

                  <li className="flex items-start mb-2">
                    <img src={PriceGreenTick} className="w-4 mr-2" />
                    <span className="text-sm font-medium md:text-sm text-selfGray">
                      Access to one LMN
                    </span>
                  </li>

                  <li className="flex items-start mb-2">
                    <img src={PriceGreenTick} className="w-4 mr-2" />
                    <span className="text-sm font-medium md:text-sm text-selfGray">
                      HSA/FSA & IRS compliance dashboard
                    </span>
                  </li>
                </ul>
                <div
                  className="absolute bottom-5 lg:bottom-7 left-7 right-7   border-2 mt-auto hover:shadow-custom  border-darkGreen rounded-[30px] cursor-pointer
                 text-center border-solid  hover:bg-darkGreen hover:text-white  text-darkGreen   h-12 flex align-middle justify-center items-center"
                >
                  <Link
                    to={`${VITE_MARKETPLACE_URL}/survey`}
                    className="leading-5 text-base font-medium"
                  >
                    Start Saving
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative basis-3/3 lg:basis-1/3 md:basis-2/3 overflow-hidden">
              <div
                className="h-full bg-darkGreen rounded-3xl px-7 pt-20 pb-28"
                style={{ boxShadow: "0px 4px 20px 0px #CB896659" }}
              >
                <div className="uppercase text-xs text-white p-2 pt-3 font-semibold bg-coffee absolute text-center w-[300px] rotate-[30deg] top-[15px] right-[-95px]">
                  most popular
                </div>
                <div className="flex items-center justify-between w-full mb-7">
                  <h1 className="text-3xl font-semibold text-white">
                    Ultimate <br />
                    Saver
                  </h1>
                  <div className="text-center">
                    <span className="text-4xl font-medium text-white lg:text-5xl ">
                      $99
                    </span>
                    <div>
                      <span className="text-sm text-white ">annually</span>
                    </div>
                  </div>
                </div>
                <ul>
                  <li className="flex items-start mb-2">
                    <img src={PriceCoralTick} className="w-4 mr-2" />
                    <span className="text-sm font-semibold text-white md:text-sm">
                      Average savings = $397 annually
                    </span>
                  </li>

                  <li className="flex items-start mb-2">
                    <img src={PriceCoralTick} className="w-4 mr-2" />
                    <span className="text-sm font-medium text-white md:text-sm">
                      Save on many wellness product
                    </span>
                  </li>

                  <li className="flex items-start mb-2">
                    <img src={PriceCoralTick} className="w-4 mr-2" />
                    <span className="text-sm font-medium text-white md:text-sm">
                      Access to all eligible LMNs
                    </span>
                  </li>

                  <li className="flex items-start mb-2">
                    <img src={PriceCoralTick} className="w-4 mr-2" />
                    <span className="text-sm font-medium text-white md:text-sm">
                      HSA/FSA & IRS compliance dashboard
                    </span>
                  </li>

                  <li className="flex items-start mb-2">
                    <img src={PriceCoralTick} className="w-4 mr-2" />
                    <span className="text-sm font-medium text-white md:text-sm">
                      Early access to new advanced HSA savings products
                    </span>
                  </li>

                  <li className="flex items-start mb-2">
                    <img src={PriceCoralTick} className="w-4 mr-2" />
                    <span className="text-sm font-medium text-white md:text-sm">
                      Customized LMNs (e.g. your local gym) upon request
                    </span>
                  </li>
                </ul>
                <div
                  className="absolute bottom-5 lg:bottom-7 left-7 right-7 bg-coffee  border-2 mt-auto hover:shadow-custom  border-coffee rounded-[30px] cursor-pointer
              text-center border-solid   text-white   h-12 flex align-middle justify-center items-center"
                >
                  <Link
                    to={`${VITE_MARKETPLACE_URL}/survey`}
                    className="leading-5 text-base"
                  >
                    Start Saving
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative basis-3/3 lg:basis-1/3 md:basis-2/3">
              <div className="h-full bg-white rounded-3xl px-7 pt-20 pb-28">
                <div className="flex items-center justify-between w-full mb-7">
                  <h1 className="text-3xl font-semibold text-white">
                    Pro <br />
                    Saver
                  </h1>
                  <div className="text-center">
                    <span className="text-4xl font-medium lg:text-5xl text-darkGreen ">
                      $89
                    </span>
                    <div>
                      <span className="text-sm text-selfGray ">annually</span>
                    </div>
                  </div>
                </div>
                <ul>
                  <li className="flex items-start mb-2">
                    <img src={PriceGreenTick} className="w-4 mr-2" />
                    <span className="text-sm font-semibold md:text-sm text-selfGray">
                      Average savings = $293 annually
                    </span>
                  </li>

                  <li className="flex items-start mb-2">
                    <img src={PriceGreenTick} className="w-4 mr-2" />
                    <span className="text-sm font-medium md:text-sm text-selfGray">
                      Save on three wellness product
                    </span>
                  </li>

                  <li className="flex items-start mb-2">
                    <img src={PriceGreenTick} className="w-4 mr-2" />
                    <span className="text-sm font-medium md:text-sm text-selfGray">
                      Access to three LMNs
                    </span>
                  </li>

                  <li className="flex items-start mb-2">
                    <img src={PriceGreenTick} className="w-4 mr-2" />
                    <span className="text-sm font-medium md:text-sm text-selfGray">
                      HSA/FSA & IRS compliance dashboard
                    </span>
                  </li>
                  <li className="flex items-start mb-2">
                    <img src={PriceGreenTick} className="w-4 mr-2" />
                    <span className="text-sm font-medium md:text-sm text-selfGray">
                      Access to new advanced HSA savings products
                    </span>
                  </li>
                </ul>

                <div
                  className="absolute bottom-5 lg:bottom-7 left-7 right-7   border-2 mt-auto hover:shadow-custom  border-darkGreen rounded-[30px] cursor-pointer
                 text-center border-solid  hover:bg-darkGreen hover:text-white  text-darkGreen   h-12 flex align-middle justify-center items-center"
                >
                  <Link
                    to={`${VITE_MARKETPLACE_URL}/survey`}
                    className="leading-5 text-base font-medium"
                  >
                    Start Saving
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
