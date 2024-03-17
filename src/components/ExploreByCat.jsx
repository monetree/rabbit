import React from 'react';
import FitnessImg from '../assets/images/Frame 437.png';
import CloudImg from '../assets/images/Frame 437 (3).png';
import NutritionImg from '../assets/images/Frame 437 (2).png';
import HealthAndTechImg from '../assets/images/Frame 437 (1).png';
const ExploreByCat = () => {
  return (
    <section class='px-4 xl:px-4  bg-cover bg-bottom  pb-14 pt-12 bg-darkGreen'>
      <div class='container mx-auto'>
        <div class='text-center'>
          <p class='font-lato text-base font-semibold leading-5 tracking-normal text-center text-white uppercase '>
            marketPlace
          </p>

          <h1 class='font-epilogue text-3xl lg:text-4xl font-semibold leading-13 tracking-normal text-center capitalize mt-4 text-white'>
            Explore By Category
          </h1>

          <p class='font-epilogue text-base font-medium leading-7 tracking-normal text-center text-white mt-4'>
            We accept HSA payments, so don’t waste your time - join our
            platform!
          </p>
        </div>

        <div class='mx-auto '>
          <div class='grid grid-cols-4 gap-5 mt-8  flex-col lg:flex-row content-center justify-center'>
            <div class='col-span-4  md:col-span-2 lg:col-span-1  relative'>
              <div class='h-full'>
                <div class='carousel__slide'>
                  <figure>
                    <div>
                      <img src={FitnessImg} alt='' class='rounded-2xl' />
                    </div>
                  </figure>
                </div>
                <p class='text text-lg font-medium text-white mt-3'>Fitness</p>
                <a href='' class=' text-base flex  items-center text-coffee'>
                  Explore
                  <svg
                    class='ml-3'
                    width='8'
                    height='8'
                    viewBox='0 0 8 8'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M0.228489 6.82865C-0.031858 7.089 -0.0318674 7.5111 0.228489 7.77146C0.488846 8.03181 0.910951 8.03181 1.1713 7.77146L6.6329 2.30986L6.63289 6.35724C6.63291 6.72542 6.93138 7.02389 7.29956 7.02391C7.66774 7.02392 7.96623 6.72542 7.96622 6.35725L7.96622 0.70039C7.96622 0.332223 7.66772 0.0337296 7.29956 0.0337297L1.6427 0.0337306C1.27454 0.0337309 0.976044 0.332224 0.976043 0.700391C0.976043 1.06856 1.27454 1.36705 1.6427 1.36705L5.69009 1.36705L0.228489 6.82865Z'
                      fill='#CB8966'
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div class='col-span-4  md:col-span-2 lg:col-span-1  relative'>
              <div class='h-full'>
                <div class='carousel__slide'>
                  <figure>
                    <div>
                      <img src={HealthAndTechImg} alt='' class='rounded-2xl' />
                    </div>
                  </figure>
                </div>
                <p class='text text-lg font-medium text-white mt-3'>
                  Health Tech & wearables
                </p>
                <a href='' class=' text-base flex  items-center text-coffee'>
                  Explore
                  <svg
                    class='ml-3'
                    width='8'
                    height='8'
                    viewBox='0 0 8 8'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M0.228489 6.82865C-0.031858 7.089 -0.0318674 7.5111 0.228489 7.77146C0.488846 8.03181 0.910951 8.03181 1.1713 7.77146L6.6329 2.30986L6.63289 6.35724C6.63291 6.72542 6.93138 7.02389 7.29956 7.02391C7.66774 7.02392 7.96623 6.72542 7.96622 6.35725L7.96622 0.70039C7.96622 0.332223 7.66772 0.0337296 7.29956 0.0337297L1.6427 0.0337306C1.27454 0.0337309 0.976044 0.332224 0.976043 0.700391C0.976043 1.06856 1.27454 1.36705 1.6427 1.36705L5.69009 1.36705L0.228489 6.82865Z'
                      fill='#CB8966'
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div class='col-span-4  md:col-span-2 lg:col-span-1  relative'>
              <div class='h-full'>
                <div class='carousel__slide'>
                  <figure>
                    <div>
                      <img src={NutritionImg} alt='' class='rounded-2xl' />
                    </div>
                  </figure>
                </div>
                <p class='text text-lg font-medium text-white mt-3'>
                  Nutrition
                </p>
                <a href='' class=' text-base flex  items-center text-coffee'>
                  Explore
                  <svg
                    class='ml-3'
                    width='8'
                    height='8'
                    viewBox='0 0 8 8'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M0.228489 6.82865C-0.031858 7.089 -0.0318674 7.5111 0.228489 7.77146C0.488846 8.03181 0.910951 8.03181 1.1713 7.77146L6.6329 2.30986L6.63289 6.35724C6.63291 6.72542 6.93138 7.02389 7.29956 7.02391C7.66774 7.02392 7.96623 6.72542 7.96622 6.35725L7.96622 0.70039C7.96622 0.332223 7.66772 0.0337296 7.29956 0.0337297L1.6427 0.0337306C1.27454 0.0337309 0.976044 0.332224 0.976043 0.700391C0.976043 1.06856 1.27454 1.36705 1.6427 1.36705L5.69009 1.36705L0.228489 6.82865Z'
                      fill='#CB8966'
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div class='col-span-4  md:col-span-2 lg:col-span-1  relative'>
              <div class='h-full'>
                <div class='carousel__slide'>
                  <figure>
                    <div>
                      <img src={CloudImg} alt='' class='rounded-2xl' />
                    </div>
                  </figure>
                </div>
                <p class='text text-lg font-medium text-white mt-3'>
                  Saunas & cold plunges
                </p>
                <a href='' class=' text-base flex  items-center text-coffee'>
                  Explore
                  <svg
                    class='ml-3'
                    width='8'
                    height='8'
                    viewBox='0 0 8 8'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M0.228489 6.82865C-0.031858 7.089 -0.0318674 7.5111 0.228489 7.77146C0.488846 8.03181 0.910951 8.03181 1.1713 7.77146L6.6329 2.30986L6.63289 6.35724C6.63291 6.72542 6.93138 7.02389 7.29956 7.02391C7.66774 7.02392 7.96623 6.72542 7.96622 6.35725L7.96622 0.70039C7.96622 0.332223 7.66772 0.0337296 7.29956 0.0337297L1.6427 0.0337306C1.27454 0.0337309 0.976044 0.332224 0.976043 0.700391C0.976043 1.06856 1.27454 1.36705 1.6427 1.36705L5.69009 1.36705L0.228489 6.82865Z'
                      fill='#CB8966'
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreByCat;
