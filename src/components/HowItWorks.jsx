import React from 'react';
import HeadingBg from '../assets/images/heading-bg.svg';

const HowItWorks = () => {
  return (
    <section id='how-it-works' className='py-16 lg:py-24'>
      <div className='container px-5 mx-auto sm:px-6'>
        <div className='text-center'>
          <span className='uppercase font-Inter bg-lightGray font-semibold text-lightGray2 px-3 py-0.5 text-xs  rounded-full inline-block'>
            how it works
          </span>
          <h1 className='xl:text-[52px] lg:text-[44px] text-3xl max-w-[1080px] leading-tight relative mt-4 font-semibold'>
            Use your HSA dollars on wellness products you actually love, without
            hassle.
            <img
              src={HeadingBg}
              alt=''
              className='max-w-[320px] absolute top-1/2 left-[20%] z-[-1]'
            />
          </h1>
        </div>

        <div className='max-w-[1080px] px-5 mx-auto pt-20'>
          <div className='flex flex-wrap -mx-7'>
            <div className='lg:basis-1/4 md:basis-1/2 basis-full p-7'>
              <div className='flex flex-col items-center justify-center'>
                <div
                  className='rounded-[20px] overflow-hidden h-[205px]  aspect-square relative '
                  dangerouslySetInnerHTML={{
                    __html: `<div style='position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0;background-size:16px 16px;background-image:repeating-linear-gradient(45deg, rgba(180, 180, 180, 0.8) 0, rgba(180, 180, 180, 0.8) 1px, rgba(255, 255, 255, 0.2) 0, rgba(255, 255, 255, 0.2) 50%);border:1px solid #c4c4c4'></div>`,
                  }}
                ></div>

                <h2 className='text-gray2 font-bold text-2xl max-w-40 text-center mx-auto mt-7'>
                  Check your eligibility
                </h2>
                <p className='text-gray5 font-medium text-center mt-2.5 lg:text-lg text-base'>
                  Take a few minutes survey to assess your medical eligibility
                  (e.g. anyone who is preventing, managing, or reversing
                  disease)
                </p>
              </div>
            </div>

            <div className='lg:basis-1/4 md:basis-1/2 basis-full p-7'>
              <div className='flex flex-col items-center justify-center'>
                <div
                  className='rounded-[20px] overflow-hidden h-[205px]  aspect-square relative '
                  dangerouslySetInnerHTML={{
                    __html: `<div style='position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0;background-size:16px 16px;background-image:repeating-linear-gradient(45deg, rgba(180, 180, 180, 0.8) 0, rgba(180, 180, 180, 0.8) 1px, rgba(255, 255, 255, 0.2) 0, rgba(255, 255, 255, 0.2) 50%);border:1px solid #c4c4c4'></div>`,
                  }}
                ></div>

                <h2 className='text-gray2 font-bold text-2xl  text-center mx-auto mt-7'>
                  Issue a letter of medical necessity
                </h2>
                <p className='text-gray5 font-medium text-center mt-2.5 lg:text-lg text-base'>
                  Our medical team reviews your details and issues a LMN in
                  real-time making you eligible to use HSA dollars on the
                  product
                </p>
              </div>
            </div>

            <div className='lg:basis-1/4 md:basis-1/2 basis-full p-7'>
              <div className='flex flex-col items-center justify-center'>
                <div
                  className='rounded-[20px] overflow-hidden h-[205px]  aspect-square relative '
                  dangerouslySetInnerHTML={{
                    __html: `<div style='position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0;background-size:16px 16px;background-image:repeating-linear-gradient(45deg, rgba(180, 180, 180, 0.8) 0, rgba(180, 180, 180, 0.8) 1px, rgba(255, 255, 255, 0.2) 0, rgba(255, 255, 255, 0.2) 50%);border:1px solid #c4c4c4'></div>`,
                  }}
                ></div>

                <h2 className='text-gray2 font-bold text-2xl  text-center mx-auto mt-7'>
                  Purchase your favorite products
                </h2>
                <p className='text-gray5 font-medium text-center mt-2.5 lg:text-lg text-base'>
                  Use your personal card at checkout as you normally would,
                  avoiding annoying HSA card declines
                </p>
              </div>
            </div>

            <div className='lg:basis-1/4 md:basis-1/2 basis-full p-7'>
              <div className='flex flex-col items-center justify-center'>
                <div
                  className='rounded-[20px] overflow-hidden h-[205px]  aspect-square relative '
                  dangerouslySetInnerHTML={{
                    __html: `<div style='position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0;background-size:16px 16px;background-image:repeating-linear-gradient(45deg, rgba(180, 180, 180, 0.8) 0, rgba(180, 180, 180, 0.8) 1px, rgba(255, 255, 255, 0.2) 0, rgba(255, 255, 255, 0.2) 50%);border:1px solid #c4c4c4'></div>`,
                  }}
                ></div>

                <h2 className='text-gray2 font-bold text-2xl max-w-40 text-center mx-auto mt-7'>
                  Automate reimbursement
                </h2>
                <p className='text-gray5 font-medium text-center mt-2.5 lg:text-lg text-base'>
                  Send us your receipt and we partner with your HSA admin to
                  ensure you are reimbursed in a timely manner (4-21 days)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
