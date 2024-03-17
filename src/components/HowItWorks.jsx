import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Step1IMG from '../assets/images/step1.svg';
import Step2IMG from '../assets/images/step2.svg';
import Step3IMG from '../assets/images/step3.svg';
import Step4IMG from '../assets/images/step4.svg';

const HowItWorks = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 300,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
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
      id='howItWorks'
      class='px-5 md:px-20  bg-cover bg-bottom  pb-14 pt-12 bg-darkGreen'
    >
      <div class='container mx-auto'>
        <div class='text-center md:w-[75%] mx-auto'>
          <p class='font-lato text-base font-semibold leading-5 tracking-normal text-center text-white uppercase '>
            How It Works
          </p>

          <h1 class='font-epilogue text-3xl lg:text-4xl font-semibold leading-13 tracking-normal text-center capitalize mt-4 text-white'>
            Use your HSA dollars on wellness products you actually love, without
            hassle.
          </h1>

          {/* <p class='font-epilogue text-base font-medium leading-7 tracking-normal text-center text-white mt-4'>
            Explore a vast array of high-quality pharmaceuticals, supplements
            and healthcare products. Explore a vast array of high-quality
            pharmaceuticals, supplements and healthcare products
          </p> */}
        </div>
        <Slider {...settings} className='mt-8 lg:mt-10'>
          <div class='h-full'>
            <div class='px-3 h-full'>
              <div class='rounded-2xl bg-white p-7  h-full'>
                <div class='flex justify-between items-start w-full'>
                  <div class='bg-darkGreen text-white text-sm font-medium flex justify-center items-center px-4 rounded-lg py-1'>
                    Step 1
                  </div>
                  <img src={Step1IMG} alt='' class='' />
                </div>

                <div class=' border-darkGreen border-b-[1px]  mb-8 w-full md:min-h-[117px]'>
                  <h2 class='text-darkGreen font-semibold text-2xl mt-6 mb-5 pb-0'>
                    Check your
                    <br /> eligibility
                  </h2>
                </div>
                <p class='font-normal text-gray-600 text-base'>
                  Take a few minutes survey to assess your medical eligibility
                  (e.g. anyone who is preventing, managing, or reversing
                  disease).
                </p>
              </div>
            </div>
          </div>

          <div class='h-full'>
            <div class='px-3 h-full'>
              <div class='rounded-2xl bg-white p-7 h-full'>
                <div class='flex justify-between items-start w-full'>
                  <div class='bg-darkGreen text-white text-sm font-medium flex justify-center items-center px-4 rounded-lg py-1'>
                    Step 2
                  </div>
                  <img src={Step2IMG} alt='' class='' />
                </div>

                <div class=' border-darkGreen border-b-[1px]  mb-8 w-full md:min-h-[117px]'>
                  <h2 class='text-darkGreen font-semibold text-2xl mt-6 mb-5 pb-0'>
                    Issue a <br />
                    letter of medical necessity
                  </h2>
                </div>
                <p class='font-normal text-gray-600 text-base'>
                  Our medical team reviews your details and issues a LMN in
                  real-time making you eligible to use HSA dollars on the
                  product.
                </p>
              </div>
            </div>
          </div>

          <div class='h-full'>
            <div class='px-3 h-full'>
              <div class='rounded-2xl bg-white p-7  h-full'>
                <div class='flex justify-between items-start w-full'>
                  <div class='bg-darkGreen text-white text-sm font-medium flex justify-center items-center px-4 rounded-lg py-1'>
                    Step 3
                  </div>
                  <img src={Step3IMG} alt='' class='' />
                </div>

                <div class=' border-darkGreen border-b-[1px]  mb-8 w-full md:min-h-[117px]'>
                  <h2 class='text-darkGreen font-semibold text-2xl mt-6 mb-5 pb-0 '>
                    Purchase <br />
                    your favorite products
                  </h2>
                </div>
                <p class='font-normal text-gray-600 text-base'>
                  Use your personal card at checkout as you normally would,
                  avoiding annoying HSA card declines.{' '}
                </p>
              </div>
            </div>
          </div>

          <div class='h-full'>
            <div class='px-3 h-full'>
              <div class='rounded-2xl bg-white p-7  h-full'>
                <div class='flex justify-between items-start w-full'>
                  <div class='bg-darkGreen text-white text-sm font-medium flex justify-center items-center px-4 rounded-lg py-1'>
                    Step 4
                  </div>
                  <img src={Step4IMG} alt='' class='' />
                </div>

                <div class=' border-darkGreen border-b-[1px]  mb-8 w-full md:min-h-[117px] '>
                  <h2 class='text-darkGreen font-semibold text-2xl mt-6 mb-5 pb-0'>
                    Automate reimbursement
                  </h2>
                </div>
                <p class='font-normal text-gray-600 text-base'>
                  Send us your receipt and we partner with your HSA admin to
                  ensure you are reimbursed in a timely manner (4-21 days).
                </p>
              </div>
            </div>
          </div>
          <div class='h-full'>
            <div class='px-3 h-full'>
              <div class='rounded-2xl bg-white p-7  h-full'>
                <div class='flex justify-between items-start w-full'>
                  <div class='bg-darkGreen text-white text-sm font-medium flex justify-center items-center px-4 rounded-lg py-1'>
                    Step 5
                  </div>
                  <img src={Step4IMG} alt='' class='' />
                </div>

                <div class=' border-darkGreen border-b-[1px]  mb-8 w-full md:min-h-[117px] '>
                  <h2 class='text-darkGreen font-semibold text-2xl mt-6 mb-5 pb-0'>
                    Automate reimbursement
                  </h2>
                </div>
                <p class='font-normal text-gray-600 text-base'>
                  Send us your receipt and we partner with your HSA admin to
                  ensure you are reimbursed in a timely manner (4-21 days).
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default HowItWorks;
