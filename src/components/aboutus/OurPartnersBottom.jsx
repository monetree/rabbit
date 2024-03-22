import React from 'react';
import ImgBg from '../../assets/images/aboutBPartners.png';

const OurPartnersBottom = () => {
    return (
        <div className='px-4 lg:px-20 py-10'>
            <div className='text-sm text-coffee'>
                Our partners
            </div>
            <div className='flex justify-between max-sm:block'>
                <div className='text-3xl w-3/6 my-6 font-bold text-dark max-sm:text-2xl max-sm:w-full'>
                    Our members save an average <br /> of <span className='text-coffee'>$325 annually</span> from our <br /> partner brands
                </div>
                <div className='text-sm w-3/6 my-7 ml-4 text-dark max-sm:w-full max-sm:ml-0'>
                    The $79 annual subscription was an absolute no-brainer for me! I spend  $300+ per month on my health practice. Many of those expenses qualify  for HSA dollars through Crates, saving me $100+ monthly. The $79 annual subscription was an absolute no-brainer for me! I spend  $300+ per month on my health practice. Many of those expenses qualify for HSA dollars through Crates, saving me $100+ monthly.
                </div>
            </div>
            <div>
                <img src={ImgBg} alt="image" />
            </div>
        </div>
    );
}

export default OurPartnersBottom;