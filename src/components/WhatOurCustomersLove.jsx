import React from "react";
import OneImg from "../assets/images/customers/1.png";
import TwoImg from "../assets/images/customers/2.png";
import ThreeImg from "../assets/images/customers/3.png";

const WhatOurCustomersLove = () => {
  return (
    <section id="how-it-works" className="py-16 lg:py-24">
      <div className="container mx-auto">
        <div className="text-center">
          <span className="uppercase font-Inter bg-lightGray font-semibold text-lightGray2 px-3 py-0.5 text-xs  rounded-full inline-block">
            What our customers love
          </span>
        </div>

        <div className="mx-auto max-w-[1060px] font-normal px-4 sm:px-6">
          <div className="flex flex-wrap mt-16 ">
            <div className="lg:basis-1/3 sm:basis-1/2 basis-full  px-2.5 mb-6 lg:mb-0">
              <div className="bg-white rounded-[20px] p-7 shadow-box-cu min-h-[340px]">
                <div className="flex">
                  <div className="rounded-full overflow-hidden h-[50px]  aspect-square relative">
                    <img src={OneImg} />
                  </div>
                  <div className="pl-4">
                    <span className="font-semibold font-Inter text-darkBlue2 text-[20px] leading-none">
                      Viren B
                    </span>
                    <p className="font-Inter text-gray4">
                      Personal finance expert
                    </p>
                  </div>
                </div>
                <p className="mt-6 font-Inter text-base text-gray4">
                  The $79 annual subscription was an absolute no-brainer for me!
                  I spend $300+ per month on my health practice. Many of those
                  expenses qualify for HSA dollars through Crates, saving me
                  $100+ monthly.
                </p>
              </div>
            </div>
            <div className="lg:basis-1/3 sm:basis-1/2 basis-full  px-2.5 mb-6 lg:mb-0">
              <div className="bg-white rounded-[20px] p-7 shadow-box-cu min-h-[340px]">
                <div className="flex">
                  <div className="rounded-full overflow-hidden h-[50px]  aspect-square relative">
                    <img src={TwoImg} />
                  </div>
                  <div className="pl-4">
                    <span className="font-semibold font-Inter text-darkBlue2 text-[20px] leading-none">
                      Victoria C
                    </span>
                    <p className="font-Inter text-gray4">Health newbie</p>
                  </div>
                </div>
                <p className="mt-6 font-Inter text-base text-gray4">
                  I am so much healthier now! Many of the cool products that I
                  was interested in trying but thought were too expensive are
                  now much more affordable thanks to Crates Health
                </p>
              </div>
            </div>
            <div className="lg:basis-1/3 sm:basis-1/2 basis-full  px-2.5 mb-6 lg:mb-0">
              <div className="bg-white rounded-[20px] p-7 shadow-box-cu min-h-[340px]">
                <div className="flex">
                  <div className="rounded-full overflow-hidden h-[50px]  aspect-square relative">
                    <img src={ThreeImg} />
                  </div>
                  <div className="pl-4">
                    <span className="font-semibold font-Inter text-darkBlue2 text-[20px] leading-none">
                      Elan M
                    </span>
                    <p className="font-Inter text-gray4">Health enthusiast</p>
                  </div>
                </div>
                <p className="mt-6 font-Inter text-base text-gray4">
                  Not only did I save hundreds of dollars but I also discovered
                  new brands and products that I turned out to love.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatOurCustomersLove;
