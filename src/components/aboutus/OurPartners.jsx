import ImgBg from '../../assets/images/aboutpartner.png';
import React from 'react';

const OurPartners = () => {
    return (
        <div className='px-4 lg:px-20 py-10'>
            <div className='text-center'>
                <div className='text-sm text-coffee' >
                    OUR PARTNERS
                </div>
                <div className='text-3xl w-4/6 mx-auto my-6 font-bold max-sm:text-2xl'>
                    Our members save an average of <span className='text-coffee'>$325 annually </span>
                     from our partner brands
                </div>
            </div>

            <div className='flex justify-between items-center my-10 max-md:block'>
                <div className='w-2/5 text-sm pb-4 text-dark leading-6  max-md:w-full'>
                    The $79 annual subscription was an absolute no-brainer for me! I spend  $300+ per month on my health practice. Many of those expenses qualify  for HSA dollars through Crates, saving me $100+ monthly. The $79 annual subscription was an absolute no-brainer for me! I spend  $300+ per month on my health practice. Many of those expenses qualify  for HSA dollars through Crates, saving me $100+ monthly. The $79 annual subscription was an absolute no-brainer for me! I spend  $300+ per month on my health practice. Many of those expenses qualify  for HSA dollars through Crates, saving me $100+ monthly.
                </div>
                <div className='w-3/5 pl-14 max-md:w-full max-md:pl-0'>
                    <img src={ImgBg} alt="" />
                </div>
            </div>
        </div>
    );
}

export default OurPartners;