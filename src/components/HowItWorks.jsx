import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Step1IMG from "../assets/images/step1.svg";
import Step2IMG from "../assets/images/step2.svg";
import Step3IMG from "../assets/images/step3.svg";
import Step4IMG from "../assets/images/step4.svg";

const SliderItem = ({ step, img, title, description }) => {
  return (
    <div className="h-[380px]">
      <div className="px-3 h-full">
        <div className="rounded-2xl bg-white p-7  h-full">
          <div className="flex justify-between items-start w-full">
            <div className="bg-darkGreen text-white text-sm font-medium flex justify-center items-center px-4 rounded-lg py-1">
              {step}
            </div>
            <img src={img} alt="" className="" />
          </div>

          <div className=" border-darkGreen border-b-[1px]  mb-8 w-full ">
            <h2 className="text-darkGreen font-medium text-2xl mt-3 mb-5 pb-0">
              {title}
            </h2>
          </div>
          <p className="font-normal text-sm text-selfGray ">{description}</p>
        </div>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  var settings = {
    dots: false,
    speed: 300,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 0,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };

  return (
    <section
      id="howItWorks"
      className="px-5 md:px-20  bg-cover bg-bottom  pb-14 pt-12 bg-darkGreen"
    >
      <div className=" max-w-[1400px] mx-auto">
        <div className="text-center md:w-[75%] mx-auto">
          <p className="font-lato text-sm leading-5 tracking-normal text-center text-beige uppercase ">
            How It Works
          </p>

          <h1 className="font-epilogue text-3xl font-semibold leading-13 tracking-normal text-center mt-4 text-white">
            Use your HSA or FSA dollars on wellness products
            <br /> you actually love, without hassle.
          </h1>
        </div>
        <Slider {...settings} className="mt-8 lg:mt-10 home-slider">
          <SliderItem
            step={"Step 2"}
            img={Step2IMG}
            title={"Issue a letter of medical necessity"}
            description={
              "A partner medical team reviews your details and issues a LMN in real-time making you eligible to use HSA or FSA dollars on your favorite products."
            }
          />
          <SliderItem
            step={"Step 3"}
            img={Step3IMG}
            title={"Purchase your favorite products"}
            description={
              "Use your personal card at checkout as you normally would, avoiding annoying HSA or FSA card declines."
            }
          />
          <SliderItem
            step={"Step 4"}
            img={Step4IMG}
            title={"Automate reimbursement"}
            description={
              "Simply upload your receipt and we partner with your HSA or FSA administrator to ensure you are reimbursed in a timely manner (4-21 days)."
            }
          />
          <SliderItem
            step={"Step 1"}
            img={Step1IMG}
            title={"Check your eligibility"}
            description={
              "Take a short online survey to assess your medical eligibility (e.g. patients who are preventing, managing, or reversing disease is eligible)."
            }
          />
        </Slider>
      </div>
    </section>
  );
};

export default HowItWorks;
