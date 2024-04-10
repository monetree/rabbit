import React from "react";
import IconEmail from "../assets/images/email.svg";
import { Link } from "react-router-dom";
import LogoWhite from "../assets/logo-white.svg";
import CratesWhite from "../assets/crates-white.png";
import { VITE_ENV } from "../utils/Constants";

const Footer = () => {
  return (
    <footer className="px-4 xl:px-4  bg-cover bg-bottom  pt-10 pb-6 bg-darkGreen">
      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-3">
            <div className="text-bgGrey text-xl">
              <p className="text-center">
                <img src={LogoWhite} alt="" className="w-16 ml-12" />
              </p>

              <div>
                <img src={CratesWhite} className="w-40 mt-4" />
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-9 ">
            <div className="grid grid-cols-12 ">
              <div className="col-span-12 md:col-span-4 lg:col-span-3 mx-auto md:text-start  text-center mb-5 md:mb-0 ">
                <h3 className="text-beige text-lg font-semibold mb-4 cursor-pointer">
                  <a
                    onClick={() => {
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth", // For a smooth scroll
                      });
                    }}
                  >
                    Home
                  </a>
                </h3>
                <div className="mb-3">
                  <a
                    href="#howItWorks"
                    className=" text-beige hover:text-coffee text-sm"
                  >
                    How it works
                  </a>
                </div>
                <div className="mb-3">
                  <a
                    href="#benefits"
                    className=" text-beige hover:text-coffee text-sm"
                  >
                    Benefits
                  </a>
                </div>
                <div className="mb-3">
                  <a
                    href="#faqs"
                    className=" text-beige hover:text-coffee text-sm"
                  >
                    FAQs
                  </a>
                </div>
                <div className="mb-3">
                  <a
                    href="#eligibleProducts"
                    className=" text-beige hover:text-coffee text-sm"
                  >
                    Eligible Products
                  </a>
                </div>
              </div>
              <div className="col-span-12 md:col-span-4 lg:col-span-3 mx-auto md:text-start  text-center mb-5 md:mb-0">
                <h3 className="text-beige text-lg font-semibold mb-4">
                  <Link to={VITE_ENV === "prod" ? "/" : `about-us`}>
                    About Us
                  </Link>
                </h3>
                <div className="mb-3">
                  <Link
                    to={VITE_ENV === "prod" ? "/" : `/blog`}
                    className=" text-beige hover:text-coffee text-sm"
                  >
                    Blog
                  </Link>
                </div>
              </div>
              <div className="col-span-12 md:col-span-4 lg:col-span-6 mx-auto md:text-start  text-center mb-5 md:mb-0">
                <div className="mx-auto md:ml-auto  w-fit">
                  <h3 className="text-beige text-lg font-semibold mb-4">
                    Contact
                  </h3>

                  <div className="mb-2 flex items-start justify-center md:justify-start">
                    <img src={IconEmail} alt="" className="mr-3" />{" "}
                    <a
                      href="mailto:info@ourservice.com"
                      className=" text-beige hover:text-coffee text-sm"
                    >
                      info@crateshealth.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-5 h-[0.5px] bg-white" />
        <p className="text-xs text-beige text-center mt-6 font-normal">
          © 2024 Crates Health. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
