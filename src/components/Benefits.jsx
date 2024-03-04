import React from 'react';
import HeadingBg from '../assets/images/benefits-heading.svg';
import BenefitsIMG from '../assets/images/benefits-graphic.webp';

const Benefits = () => {
  return (
    <section id='benefits' className='py-16 lg:py-24'>
      <div className='container mx-auto'>
        <div className='text-center'>
          <span className='uppercase font-Inter bg-lightGray font-semibold text-lightGray2 px-3 py-0.5 text-xs  rounded-full inline-block'>
            BENEFITS
          </span>
          <h1 className='xl:text-[52px] lg:text-[44px] text-3xl max-w-[1080px] mx-auto leading-tight relative mt-4 font-semibold z-10'>
            More health, more <br /> convenience, less cost
            <img
              src={HeadingBg}
              alt=''
              className='max-w-[247px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-[-1] -mt-7'
            />
          </h1>
        </div>

        <div className='mx-auto max-w-[1280px] px-8'>
          <div className='flex flex-wrap mt-16'>
            <div className='basis-full md:basis-1/2'>
              <ul>
                <li className='flex mb-10'>
                  <span className='flex items-center justify-center h-10 rounded-full min-w-10 bg-selfBlue '>
                    <i className='bi bi-award-fill text-white text-xl'></i>
                  </span>
                  <div className='md:max-w-[400px] pl-4'>
                    <h3 className='text-[20px] font-bold text-darkBlue font-Inter mb-2'>
                      Vetted wellness products
                    </h3>
                    <p className='text-base font-Inter text-gray3 leading-snug'>
                      Our medical team is constantly evaluating new
                      brands/products to give you access to the most trusted and
                      effective products
                    </p>
                  </div>
                </li>

                <li className='flex mb-10'>
                  <span className='flex items-center justify-center h-10 rounded-full min-w-10 bg-selfBlue '>
                    <i className='bi bi-award-fill text-white text-xl'></i>
                  </span>
                  <div className='md:max-w-[400px] pl-4'>
                    <h3 className='text-[20px] font-bold text-darkBlue font-Inter mb-2'>
                      Quick & easy access
                    </h3>
                    <p className='text-base font-Inter text-gray3 leading-snug'>
                      We can issue you as many Letters of Medical Necessity as
                      you qualify for in real-time. This gives you quick and
                      easy access to the products you need and love
                    </p>
                  </div>
                </li>

                <li className='flex mb-10'>
                  <span className='flex items-center justify-center h-10 rounded-full min-w-10 bg-selfBlue '>
                    <i className='bi bi-award-fill text-white text-xl'></i>
                  </span>
                  <div className='md:max-w-[400px] pl-4'>
                    <h3 className='text-[20px] font-bold text-darkBlue font-Inter mb-2'>
                      Extreme convenience
                    </h3>
                    <p className='text-base font-Inter text-gray3 leading-snug'>
                      Use your personal card to avoid the annoying HSA card
                      declines
                    </p>
                  </div>
                </li>

                <li className='flex mb-10'>
                  <span className='flex items-center justify-center h-10 rounded-full min-w-10 bg-selfBlue '>
                    <i className='bi bi-award-fill text-white text-xl'></i>
                  </span>
                  <div className='md:max-w-[400px] pl-4'>
                    <h3 className='text-[20px] font-bold text-darkBlue font-Inter mb-2'>
                      Simple reimbursement
                    </h3>
                    <p className='text-base font-Inter text-gray3 leading-snug'>
                      Our reimbursement process is as simple as uploading your
                      receipt
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className='basis-full md:basis-1/2'>
              <img src={BenefitsIMG} className='rounded-3xl' alt='' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
