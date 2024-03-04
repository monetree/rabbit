import React from 'react';
import BannerIMG from '../assets/images/footer-banner-img.webp';

const FooterBanner = () => {
  return (
    <section id='footer-banner'>
      <div className='container px-5 mx-auto sm:px-10'>
        <div className='flex flex-wrap items-center w-full py-12 pl-12 bg-black rounded-3xl'>
          <div className='lg:basis-1/2 '>
            <div className=''>
              <h1 className=' text-[52px] leading-[1.1] text-white  '>
                Use the power of your HSA on products you actually love
              </h1>
              <button className='flex px-6 py-3 mt-12 text-sm font-semibold text-black transition-all duration-300 bg-white rounded-full max-w-max font-Inter group hover:pl-4'>
                Start Saving
                <i className='bi bi-arrow-right  transform w-0 group-hover:w-auto scale-0 group-hover:scale-100 transition-all group-hover:ml-3 '></i>
              </button>
            </div>
          </div>
          <div className='mt-10 text-center lg:basis-1/2 lg:mt-0 basis-full'>
            <img
              src={BannerIMG}
              className='lg:h-[510px] h-[300px] md:hidden lg:block block object-fit lg:-my-10 transform mx-auto  lg:translate-x-0 translate-x-[-30px] '
              alt=''
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterBanner;
