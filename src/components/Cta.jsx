import React from 'react';
import ImgBg from '../assets/images/CTA.png';

const Cta = () => {
  return (
    <section
      class='px-4 xl:px-4  bg-cover bg-bottom  pt-12 pb-14 '
      style={{
        backgroundImage: `url('${ImgBg}')`,
      }}
    >
      <div class='container mx-auto'>
        <div class='text-center'>
          <h1 class='font-epilogue text-4xl lg:text-5xl font-semibold leading-13 tracking-normal text-center capitalize  text-white'>
            Do You Want To Get Personal Analysis?
          </h1>

          <p class='font-epilogue text-base font-medium leading-7 tracking-normal text-center text-white mt-3'>
            Explore a vast array of high-quality pharmaceuticals, supplements
            and healthcare products
          </p>

          <div class='flex justify-center mt-10'>
            <div
              class=' bg-beige  border-2 mt-auto hover:shadow-custom  rounded-[30px] cursor-pointer border-transparent
        text-center border-solid   text-darkGreen   h-12 flex align-middle justify-center items-center w-56 hover:bg-darkGreen hover:text-white'
            >
              <a href='' class='leading-5 text-base font-semibold'>
                Start Saving
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
