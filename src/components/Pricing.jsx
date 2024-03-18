import React from "react";
import { Link } from "react-router-dom";
import { VITE_MARKETPLACE_URL } from "../utils/Constants";

const Pricing = () => {
  return (
    <section
      id="eligibleProducts"
      className="px-4 pt-12 bg-bottom bg-cover xl:px-36 about-section pb-14 bg-lightBeige"
    >
      <div className="container mx-auto">
        <div className="text-center">
          <p className="text-base font-semibold leading-5 tracking-normal text-center uppercase font-lato text-coffee ">
            pricing
          </p>

          <h1 className="mt-4 text-3xl font-semibold tracking-normal text-center capitalize font-epilogue lg:text-4xl leading-13">
            Choose You Tariff And Start Right Now
          </h1>

          <p className="mt-4 text-base font-medium leading-7 tracking-normal text-center text-gray-600 font-epilogue">
            We accept HSA payments, so don’t waste your time - join our
            platform!
          </p>
        </div>

        <div className="mx-auto ">
          <div className="flex flex-col content-center gap-5 mt-8 lg:flex-row">
            <div className="relative basis-3/3 lg:basis-1/3 md:basis-2/3">
              <div className="h-full bg-white rounded-3xl px-7 pt-7 lg:pt-9 pb-28">
                <div className="flex items-center justify-between w-full mb-7">
                  <h1 className="text-2xl font-semibold text-darkGreen lg:text-3xl">
                    Beginner
                    <br />
                    Saver
                  </h1>
                  <div className="text-center">
                    <span className="text-4xl font-semibold lg:text-5xl text-darkGreen ">
                      $30
                    </span>
                    <div>
                      <span className="text-sm text-gray-600 ">
                        Per Product
                      </span>
                    </div>
                  </div>
                </div>
                <ul>
                  <li className="flex items-start mb-2">
                    <i className="mr-2 bi bi-check-circle-fill text-darkGreen "></i>
                    <span className="text-sm font-medium md:text-base text-selfGray">
                      Save on one wellness product
                    </span>
                  </li>

                  <li className="flex items-start mb-2">
                    <i className="mr-2 bi bi-check-circle-fill text-darkGreen "></i>
                    <span className="text-sm font-medium md:text-base text-selfGray">
                      Access to one LMN
                    </span>
                  </li>

                  <li className="flex items-start mb-2">
                    <i className="mr-2 bi bi-check-circle-fill text-darkGreen "></i>
                    <span className="text-sm font-medium md:text-base text-selfGray">
                      Average savings of $180 annually
                    </span>
                  </li>

                  <li className="flex items-start mb-2">
                    <i className="mr-2 bi bi-check-circle-fill text-darkGreen "></i>
                    <span className="text-sm font-medium md:text-base text-selfGray">
                      Reimbursement support
                    </span>
                  </li>
                </ul>
                <div
                  className="absolute bottom-5 lg:bottom-7 left-7 right-7   border-2 mt-auto hover:shadow-custom  border-darkGreen rounded-[30px] cursor-pointer
                 text-center border-solid  hover:bg-darkGreen hover:text-white  text-darkGreen   h-12 flex align-middle justify-center items-center"
                >
                  <Link
                    to={`${VITE_MARKETPLACE_URL}/survey`}
                    className="text-base font-semibold leading-5"
                  >
                    Start Saving
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative basis-3/3 lg:basis-1/3 md:basis-2/3">
              <div
                className="h-full bg-coffee rounded-3xl px-7 pt-7 lg:pt-9 pb-28"
                style={{ boxShadow: "0px 4px 20px 0px #CB896659" }}
              >
                <div className="flex items-center justify-between w-full mb-7">
                  <h1 className="text-2xl font-semibold text-white lg:text-3xl">
                    Ultimate <br />
                    Saver
                  </h1>
                  <div className="text-center">
                    <span className="text-4xl font-semibold text-white lg:text-5xl ">
                      $99
                    </span>
                    <div>
                      <span className="text-sm text-white ">annually</span>
                    </div>
                  </div>
                </div>
                <ul>
                  <li className="flex items-start mb-2">
                    <i className="mr-2 bi bi-check-circle-fill text-darkGreen "></i>
                    <span className="text-sm font-medium text-white md:text-base">
                      Save on one wellness product
                    </span>
                  </li>

                  <li className="flex items-start mb-2">
                    <i className="mr-2 bi bi-check-circle-fill text-darkGreen "></i>
                    <span className="text-sm font-medium text-white md:text-base">
                      Access to all eligible LMNs
                    </span>
                  </li>

                  <li className="flex items-start mb-2">
                    <i className="mr-2 bi bi-check-circle-fill text-darkGreen "></i>
                    <span className="text-sm font-medium text-white md:text-base">
                      12 months of access
                    </span>
                  </li>

                  <li className="flex items-start mb-2">
                    <i className="mr-2 bi bi-check-circle-fill text-darkGreen "></i>
                    <span className="text-sm font-medium text-white md:text-base">
                      Average savings of $395 annually
                    </span>
                  </li>

                  <li className="flex items-start mb-2">
                    <i className="mr-2 bi bi-check-circle-fill text-darkGreen "></i>
                    <span className="text-sm font-medium text-white md:text-base">
                      Reimbursement support
                    </span>
                  </li>

                  <li className="flex items-start mb-2">
                    <i className="mr-2 bi bi-check-circle-fill text-darkGreen "></i>
                    <span className="text-sm font-medium text-white md:text-base">
                      Early access to new savings products
                    </span>
                  </li>

                  <li className="flex items-start mb-2">
                    <i className="mr-2 bi bi-check-circle-fill text-darkGreen "></i>
                    <span className="text-sm font-medium text-white md:text-base">
                      Exclusive partner discounts
                    </span>
                  </li>
                </ul>
                <div
                  className="absolute bottom-5 lg:bottom-7 left-7 right-7 bg-darkGreen/80  border-2 mt-auto hover:shadow-custom  border-darkGreen rounded-[30px] cursor-pointer
              text-center border-solid   text-white   h-12 flex align-middle justify-center items-center"
                >
                  <Link
                    to={`${VITE_MARKETPLACE_URL}/survey`}
                    className="text-base font-medium leading-5"
                  >
                    Start Saving
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative basis-3/3 lg:basis-1/3 md:basis-2/3">
              <div className="h-full bg-white rounded-3xl px-7 pt-7 lg:pt-9 pb-28">
                <div className="flex items-center justify-between w-full mb-7">
                  <h1 className="text-2xl font-semibold text-darkGreen lg:text-3xl">
                    Pro <br />
                    Saver
                  </h1>
                  <div className="text-center">
                    <span className="text-4xl font-semibold lg:text-5xl text-darkGreen ">
                      $79
                    </span>
                    <div>
                      <span className="text-sm text-gray-600 ">annually</span>
                    </div>
                  </div>
                </div>
                <ul>
                  <li className="flex items-start mb-2">
                    <i className="mr-2 bi bi-check-circle-fill text-darkGreen "></i>
                    <span className="text-sm font-medium md:text-base text-selfGray">
                      Save on one wellness product
                    </span>
                  </li>

                  <li className="flex items-start mb-2">
                    <i className="mr-2 bi bi-check-circle-fill text-darkGreen "></i>
                    <span className="text-sm font-medium md:text-base text-selfGray">
                      Access to three LMNs
                    </span>
                  </li>

                  <li className="flex items-start mb-2">
                    <i className="mr-2 bi bi-check-circle-fill text-darkGreen "></i>
                    <span className="text-sm font-medium md:text-base text-selfGray">
                      12 months of access
                    </span>
                  </li>

                  <li className="flex items-start mb-2">
                    <i className="mr-2 bi bi-check-circle-fill text-darkGreen "></i>
                    <span className="text-sm font-medium md:text-base text-selfGray">
                      Reimbursement support
                    </span>
                  </li>

                  <li className="flex items-start mb-2">
                    <i className="mr-2 bi bi-check-circle-fill text-darkGreen "></i>
                    <span className="text-sm font-medium md:text-base text-selfGray">
                      Average savings of $265 annually
                    </span>
                  </li>
                  <li className="flex items-start mb-2">
                    <i className="mr-2 bi bi-check-circle-fill text-darkGreen "></i>
                    <span className="text-sm font-medium md:text-base text-selfGray">
                      Reimbursement support
                    </span>
                  </li>
                  <li className="flex items-start mb-2">
                    <i className="mr-2 bi bi-check-circle-fill text-darkGreen "></i>
                    <span className="text-sm font-medium md:text-base text-selfGray">
                      Access to new savings products
                    </span>
                  </li>
                </ul>

                <div
                  className="absolute bottom-5 lg:bottom-7 left-7 right-7   border-2 mt-auto hover:shadow-custom  border-darkGreen rounded-[30px] cursor-pointer
                 text-center border-solid  hover:bg-darkGreen hover:text-white  text-darkGreen   h-12 flex align-middle justify-center items-center"
                >
                  <Link
                    to={`${VITE_MARKETPLACE_URL}/survey`}
                    className="text-base font-semibold leading-5"
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
