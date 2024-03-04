import React from "react";
import Img1 from "../assets/images/hero.webp";
const Hero = () => {
  return (
    <section className="px-4 lg:px-4 about-section py-[40px] lg:py-[60px] ">
      <div className="container mx-auto sm:px-5">
        <div className="grid grid-cols-2 gap-5 xl:gap-20">
          <div className="flex items-center order-2 col-span-2 lg:col-span-1 lg:order-1 ">
            <div>
              <div className="hidden lg:block">
                <h2 className="text-gray-900 font-bold text-[31px] lg:text-[50px] xl:text-[55px] leading-[41px] lg:leading-[60px] xl:leading-[65px] mt-0">
                  Your favorite wellness products. 30% cheaper.
                </h2>
              </div>
              <div className="mt-12 font-normal">
                <p className="text-base  text-gray3 font-Inter ">
                  We simplify using your pre-tax HSA/FSA dollars on previously
                  ineligible wellness products by
                </p>
                <ul className="mt-4 font-Inter">
                  <li className="flex mb-3 text-base  text-gray3">
                    <div>
                      <i className="text-2xl text-selfBlue bi bi-check-circle-fill me-3"></i>{" "}
                    </div>
                    <div className="mt-1">
                      Assessing your medical eligibility in minutes
                    </div>
                  </li>
                  <li className="flex mb-3 text-base  text-gray3">
                    <div>
                      <i className="text-2xl text-selfBlue bi bi-check-circle-fill me-3"></i>{" "}
                    </div>
                    <div className="mt-1">
                      Issuing a Letter of Medical Necessity in real-time
                    </div>
                  </li>
                  <li className="flex mb-3 text-base  text-gray3">
                    <div>
                      <i className="text-2xl text-selfBlue bi bi-check-circle-fill me-3"></i>{" "}
                    </div>
                    <div className="mt-1">
                      Automating reimbursement with your HSA administrator
                    </div>
                  </li>
                </ul>
                <div className="flex justify-center mt-5 mb-2 lg:mt-11 md:justify-start lg:mb-0">
                  <a
                    href="https://nymfcu-dn.financial-net.com/web"
                    className="sign-in text-[14px] lg:text-[14px] xl:text-base text-white font-medium lg:text-white border-2 hover:shadow-custom hover:border-2 border-black rounded-[30px]  px-4 py-2 border-solid bg-black lg:bg-black hover:bg-white hover:text-black"
                  >
                    Start Saving
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 col-span-2 lg:col-span-1 lg:order-2">
            <div className="block py-5 mb-5 lg:hidden lg:mb-0">
              <h2 className="text-gray-900 font-bold  max-w-[700px] leading-tight text-[40px] md:text-[50px] xl:text-[55px] lg:leading-[60px] xl:leading-[65px] mt-0">
                Your Favorite Wellness Products. 30% Cheaper.
              </h2>
            </div>
            <img
              src={Img1}
              alt=""
              className="lg:block hidden rounded-[32px] w-[70%] lg:w-full mx-auto"
            />
          </div>
        </div>

        <img
          src={Img1}
          alt=""
          className="lg:hidden block rounded-[32px] my-10  lg:w-full mx-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
