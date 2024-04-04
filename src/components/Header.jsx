import React, { useState } from "react";
import { Link } from "react-router-dom";
import { VITE_ENV, VITE_MARKETPLACE_URL } from "../utils/Constants";
import Logo from "../assets/Logo.svg";
import Crates from "../assets/Crates.svg";
import { useLocation } from "react-router-dom";

const Header = ({ setModal }) => {
  const location = useLocation();
  const path = location.pathname;

  const [menu, setMenu] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-40  ">
      <div
        div
        className=" relative bg-white px-3 lg:px-4 top-navbar border-b  border-selfGray/30 pt-1"
      >
        <div className="container mx-auto my-auto ">
          <div className="grid grid-cols-12 h-16 lg:h-20">
            <div className="col-span-12 lg:col-span-3 ">
              <div className="flex justify-between items-center h-full mt-1">
                <div className="flex justify-between items-center w-7/12 max-md:w-full">
                  <Link to="/">
                    <div className="flex">
                      <img src={Logo} alt="" />
                      <img src={Crates} alt="" className="ml-2" />
                    </div>
                  </Link>
                </div>

                <div
                  onClick={() => setMenu(true)}
                  className="menu-btn block lg:hidden"
                >
                  <i className="bi bi-list text-[26px]"></i>
                </div>
              </div>
            </div>
            <div className="col-span-9 flex items-center ">
              <div
                className={`
              manu-div mb-5 lg:mb-0 transition-all duration-300  ${
                menu ? "scale-100" : "scale-0"
              }  lg:scale-[1]  fixed top-0 left-0 right-0 bottom-0 lg:relative h-[100vh] lg:h-auto w-full   bg-darkGreen lg:bg-white flex justify-center items-center
              `}
              >
                <div className="grid grid-cols-9 w-full ">
                  <div
                    onClick={() => setMenu(false)}
                    className="close-btn block lg:hidden ms-auto absolute top-[30px] right-[30px]"
                  >
                    <i className="bi bi-x-lg text-[20px] text-white"></i>
                  </div>
                  <div
                    className={`col-span-9 lg:col-span-6 flex items-center justify-center ${
                      path.includes("/about-us") ? "invisible" : ""
                    } `}
                  >
                    <ul className="flex items-center justify-center  text-start flex-col lg:flex-row lg:mt-2  ">
                      <li>
                        <div className="block lg:hidden mb-4">
                          <a href="#">
                            <img
                              src={Logo}
                              alt=""
                              className="h-[27px] w-auto"
                            />
                          </a>
                        </div>
                      </li>
                      <li className="lg:ms-[20px]  xl:ms-[25px]  mb-3 lg:mb-0 w-fit  border-b-2 border-transparent hover:border-coffee border-solid active-nav">
                        <a
                          href="#"
                          className="lg:hover:text-coffee text-base font-medium leading-normal tracking-normal text-center text-white lg:text-darkGreen "
                        >
                          Home
                        </a>
                      </li>
                      <li className="lg:ms-[20px]  xl:ms-[25px]  mb-3 lg:mb-0 w-fit  border-b-2 border-transparent hover:border-coffee border-solid">
                        <a
                          href="#howItWorks"
                          className="lg:hover:text-coffee text-base font-medium leading-normal tracking-normal text-center text-white lg:text-darkGreen "
                        >
                          How It Works
                        </a>
                      </li>
                      <li className="lg:ms-[20px]  xl:ms-[25px]  mb-3 lg:mb-0 w-fit  border-b-2 border-transparent hover:border-coffee border-solid">
                        <a
                          href="#benefits"
                          className="lg:hover:text-coffee text-base font-medium leading-normal tracking-normal text-center text-white lg:text-darkGreen "
                        >
                          Benefits
                        </a>
                      </li>
                      <li
                        id="faq-item"
                        className="lg:ms-[20px]  xl:ms-[25px]  mb-3 lg:mb-0 w-fit  border-b-2 border-transparent hover:border-coffee border-solid"
                      >
                        <a
                          href="#faqs"
                          className="lg:hover:text-coffee text-base font-medium leading-normal tracking-normal text-center text-white lg:text-darkGreen "
                        >
                          FAQs
                        </a>
                      </li>
                      <li
                        id="form-item"
                        className="lg:ms-[20px]  xl:ms-[25px]  mb-3 lg:mb-0 w-fit  border-b-2 border-transparent hover:border-coffee border-solid"
                      >
                        <a
                          href="#eligibleProducts"
                          className="lg:hover:text-coffee text-base font-medium leading-normal tracking-normal text-center text-white lg:text-darkGreen "
                        >
                          Eligible Products
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className=" col-span-9 lg:col-span-3 flex flex-col lg:flex-row items-center justify-end ">
                    {VITE_ENV === "prod" ? (
                      ""
                    ) : (
                      <div className="mb-3 lg:mb-0 w-fit mr-4">
                        <Link
                          to={`${VITE_MARKETPLACE_URL}/login`}
                          className="font-medium  border-2
                       hover:shadow-custom  lg:border-darkGreen rounded-[30px] cursor-pointer
                        text-center border-solid bg-transparent hover:bg-darkGreen lg:hover:text-white text-white lg:text-darkGreen w-32 h-10 flex align-middle justify-center items-center"
                        >
                          <a className="leading-5 text-sm font-medium">
                            Log In
                          </a>
                        </Link>
                      </div>
                    )}

                    {VITE_ENV === "prod" ? (
                      <Link
                        onClick={() => setModal(true)}
                        className=" text-darkGreen font-medium lg:text-white border-2 mb-4 lg:mb-0
                    hover:shadow-custom hover:border-2 border-darkGreen rounded-[30px] cursor-pointer
                     text-center border-solid bg-white lg:bg-darkGreen hover:bg-white lg:hover:text-darkGreen w-32 h-10 flex align-middle justify-center items-center"
                      >
                        <a className="leading-5 text-sm font-medium">
                          Join waitlist
                        </a>
                      </Link>
                    ) : (
                      <Link
                        to={`${VITE_MARKETPLACE_URL}/survey`}
                        className=" text-darkGreen font-medium lg:text-white border-2 mb-4 lg:mb-0
                     hover:shadow-custom hover:border-2 border-darkGreen rounded-[30px] cursor-pointer
                      text-center border-solid bg-white lg:bg-darkGreen hover:bg-white lg:hover:text-darkGreen w-32 h-10 flex align-middle justify-center items-center"
                      >
                        <a className="leading-5 text-sm font-medium">
                          Start Saving
                        </a>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
