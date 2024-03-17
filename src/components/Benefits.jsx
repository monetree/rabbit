import React from 'react';
import Lotus1 from '../assets/images/glassy-icon_lotus 1.png';
import VettedImg from '../assets/images/vetted.svg';
import CreditImg from '../assets/images/credit.svg';
import MedicalImg from '../assets/images/Medical Icons 1.png';

const Benefits = () => {
  return (
    <section
      id='benefits'
      className='px-4 pt-12 bg-bottom bg-cover xl:px-4 pb-14 bg-darkGreen'
    >
      <div className='container mx-auto'>
        <div className='text-center md:w-[70%] mx-auto'>
          <p className='text-base leading-5 tracking-normal text-center uppercase text-beige font-lato '>
            benefits
          </p>

          <h1 className='mt-4 text-3xl font-semibold tracking-normal text-center text-white capitalize font-epilogue lg:text-4xl leading-13'>
            More Health, More Convenience, Less Cost
          </h1>

          <p className='mt-4 text-base font-medium leading-7 tracking-normal text-center text-beige font-epilogue'>
            Explore a vast array of high-quality pharmaceuticals, supplements
            and healthcare products. Explore a vast array of high-quality
            pharmaceuticals, supplements and healthcare products
          </p>
        </div>

        <div className='grid grid-cols-12 gap-5 mt-8 lg:mt-10'>
          <div className='relative col-span-12 md:col-span-8 lg:col-span-9'>
            <div
              className='flex flex-col h-full pb-0 rounded-2xl p-7 lg:pr-0 lg:flex-row '
              style={{
                background:
                  'linear-gradient(108.18deg, #094A39 27.7%, #0B9C76 153.47%)',
              }}
            >
              <div className='lg:w-[40%]'>
                <h2 className='text-xl font-medium text-white'>
                  Quick & easy access
                </h2>
                <p className='mt-4 text-base font-normal text-white'>
                  We can issue you as many Letters of Medical Necessity as you
                  qualify for in real-time. This gives you quick and easy access
                  to the products you need and love.
                </p>
              </div>
              <div className='flex flex-col items-center justify-end'>
                <img
                  src={Lotus1}
                  alt=''
                  className='w-[90%] lg:w-[65%] xl:w-[65%]'
                />
              </div>
            </div>
          </div>
          <div className='relative col-span-12 md:col-span-4 lg:col-span-3'>
            <div className='flex flex-col items-start justify-center h-full bg-white rounded-2xl p-7'>
              <img src={CreditImg} alt='' className='' />
              <h2 className='pb-0 mt-6 mb-5 text-xl font-semibold text-black'>
                Extreme
                <br />
                convenience
              </h2>
              <p className='text-base font-normal text-gray-600'>
                Use your personal card to avoid the annoying HSA card declines.
              </p>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-12 gap-5 mt-8 '>
          <div className='relative order-2 col-span-12 md:col-span-4 lg:col-span-5 md:order-1 '>
            <div className='flex flex-col items-start justify-center h-full bg-white rounded-2xl p-7'>
              <img src={VettedImg} alt='' className='' />
              <h2 className='pb-0 mt-6 mb-5 text-xl font-semibold text-black'>
                Vetted wellness products
              </h2>
              <p className='text-base font-normal text-gray-600'>
                Our medical team is constantly evaluating new brands/products to
                give you access to the most trusted and effective products
              </p>
            </div>
          </div>
          <div className='relative order-1 col-span-12 md:col-span-8 lg:col-span-7 md:order-2'>
            <div
              className='flex flex-col h-full rounded-2xl p-7 lg:pr-0 lg:flex-row '
              style={{
                background:
                  'linear-gradient(108.18deg, #094A39 27.7%, #0B9C76 153.47%)',
              }}
            >
              <div className='lg:w-[50%]'>
                <h2 className='text-xl font-medium text-white'>
                  Simple reimbursement
                </h2>
                <p className='mt-4 text-base font-normal text-white'>
                  Our reimbursement process is as simple as uploading your
                  receipt.
                </p>
              </div>
              <div className='flex flex-col items-center justify-end'>
                <img
                  src={MedicalImg}
                  alt=''
                  className=' mt-5 lg:mt-0 w-[85%] md:w-[70%] lg:w-[65%] xl:w-[65%]'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
