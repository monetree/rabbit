import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
// Default theme
import '@splidejs/react-splide/css';

import Img1 from '../assets/images/Vector.png';
const OurPartners = () => {
  return (
    <section className='px-4 lg:px-4 about-section  bg-cover bg-bottom  pb-14 pt-12 bg-lightBeige'>
      <div className='mx-auto'>
        <div className='w-full '>
          <div className='w-full '>
            <p className='font-lato text-base font-semibold leading-5 tracking-normal text-center text-coffee uppercase'>
              Trustworthy partners
            </p>

            <h1 className='mt-4 text-3xl font-semibold tracking-normal text-center capitalize font-epilogue lg:text-4xl leading-13'>
              Our customers save an average of{' '}
              <span className='text-coffee'>$325 annually</span> <br />
              From our partner brands
            </h1>
            <div
              style={{
                maskImage:
                  'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)',
              }}
            >
              <Splide
                extensions={{ AutoScroll }}
                options={{
                  type: 'loop',
                  drag: 'free',
                  focus: 'center',
                  autoWidth: true,
                  arrows: false,
                  autoScroll: {
                    speed: -1,
                  },
                }}
                className='pt-4 my-5 slider'
              >
                <SplideSlide>
                  <div className='slider-logo h-[55px] lg:h-20 bg-white  w-40 px-4 rounded-md flex justify-center items-center mx-2'>
                    <img src={Img1} alt='' className='w-auto h-5' />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className='slider-logo h-[55px] lg:h-20 bg-white  w-40 px-4 rounded-md flex justify-center items-center mx-2'>
                    <img src={Img1} alt='' className='w-auto h-5' />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className='slider-logo h-[55px] lg:h-20 bg-white  w-40 px-4 rounded-md flex justify-center items-center mx-2'>
                    <img src={Img1} alt='' className='w-auto h-5' />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className='slider-logo h-[55px] lg:h-20 bg-white  w-40 px-4 rounded-md flex justify-center items-center mx-2'>
                    <img src={Img1} alt='' className='w-auto h-5' />
                  </div>
                </SplideSlide>
              </Splide>
            </div>

            <div
              className=''
              style={{
                maskImage:
                  'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)',
              }}
            >
              <Splide
                extensions={{ AutoScroll }}
                options={{
                  type: 'loop',
                  drag: 'free',
                  focus: 'center',
                  arrows: false,
                  autoWidth: true,
                  autoScroll: {
                    speed: 1,
                  },
                }}
                className='slider2 '
              >
                <SplideSlide>
                  <div className='slider-logo h-[55px] lg:h-20 bg-white  w-40 px-4 rounded-md flex justify-center items-center mx-2'>
                    <img src={Img1} alt='' className='w-auto h-5' />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className='slider-logo h-[55px] lg:h-20 bg-white  w-40 px-4 rounded-md flex justify-center items-center mx-2'>
                    <img src={Img1} alt='' className='w-auto h-5' />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className='slider-logo h-[55px] lg:h-20 bg-white  w-40 px-4 rounded-md flex justify-center items-center mx-2'>
                    <img src={Img1} alt='' className='w-auto h-5' />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className='slider-logo h-[55px] lg:h-20 bg-white  w-40 px-4 rounded-md flex justify-center items-center mx-2'>
                    <img src={Img1} alt='' className='w-auto h-5' />
                  </div>
                </SplideSlide>
              </Splide>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
