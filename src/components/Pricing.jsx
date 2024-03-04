import React from 'react';
import HeadingBg from '../assets/images/benefits-heading.svg';
import BenefitsIMG from '../assets/images/benefits-graphic.webp';

const Pricing = () => {
  return (
    <section id='benefits' className='py-16 lg:py-24'>
      <div className='container mx-auto'>
        <div className='text-center'>
          <span className='uppercase font-Inter bg-lightGray font-semibold text-lightGray2 px-3 py-0.5 text-xs  rounded-full inline-block'>
            Pricing
          </span>
        </div>

        <div className='mx-auto max-w-[1280px] px-8'>
          <div className='flex flex-wrap items-center justify-center mt-16 md:flex-nowrap gap-x-8'>
            <div className=''>
              <div className='bg-white rounded-[20px] p-7  shadow-box-cu max-w-[399px] '>
                <span className='mb-5 text-sm font-Inter text-gray4'>
                  Beginner Saver
                </span>
                <div className='flex mb-5'>
                  <span className='text-[54px] leading-snug text-gray2 font-bold font-Inter mt-2'>
                    $30
                  </span>
                  <span className='mt-auto mb-4 ml-1 text-sm font-semibold text-gray4 font-Inter'>
                    per product
                  </span>
                </div>
                <ul>
                  <li className='flex items-center mb-2'>
                    <i className='mr-2 bi bi-check-circle-fill text-gray2'></i>
                    <span className='text-sm font-semibold text-gray4 font-Inter'>
                      Save on one of your favorite wellness products
                    </span>
                  </li>
                  <li className='flex items-center mb-2'>
                    <i className='mr-2 bi bi-check-circle-fill text-gray2'></i>
                    <span className='text-sm font-semibold text-gray4 font-Inter'>
                      Access to one Letter of Medical Necessity
                    </span>
                  </li>
                  <li className='flex items-center mb-2'>
                    <i className='mr-2 bi bi-check-circle-fill text-gray2'></i>
                    <span className='text-sm font-semibold text-gray4 font-Inter'>
                      Average savings of $95 annually
                    </span>
                  </li>
                  <li className='flex items-center mb-2'>
                    <i className='mr-2 bi bi-check-circle-fill text-gray2'></i>
                    <span className='text-sm font-semibold text-gray4 font-Inter'>
                      Reimbursement support
                    </span>
                  </li>
                </ul>

                <button className='block px-4 py-2 mb-2 text-sm font-semibold rounded-lg bg-lightGray font-Inter text-gray6 max-h-max mt-7'>
                  Start Saving
                </button>
              </div>
            </div>
            <div className='pt-10 md:pt-0'>
              <div className='bg-white rounded-[20px] p-7 shadow-box-cu max-w-[399px] pr-2 border-gray6 border-[3px] '>
                <span className='mb-5 text-sm font-Inter text-gray4'>
                  Beginner Saver
                </span>
                <div className='flex mb-5'>
                  <span className='text-[54px] leading-snug text-gray2 font-bold font-Inter mt-2'>
                    $79
                  </span>
                  <span className='mt-auto mb-4 ml-1 text-sm font-semibold text-gray4 font-Inter'>
                    per product
                  </span>
                </div>
                <ul>
                  <li className='flex items-center mb-2'>
                    <i className='mr-2 bi bi-check-circle-fill text-gray2'></i>
                    <span className='text-sm font-semibold text-gray4 font-Inter'>
                      Save on many of your favorite wellness products
                    </span>
                  </li>
                  <li className='flex items-center mb-2'>
                    <i className='mr-2 bi bi-check-circle-fill text-gray2'></i>
                    <span className='text-sm font-semibold text-gray4 font-Inter'>
                      Access to unlimited Letters of Medical Necessity
                    </span>
                  </li>
                  <li className='flex items-center mb-2'>
                    <i className='mr-2 bi bi-check-circle-fill text-gray2'></i>
                    <span className='text-sm font-semibold text-gray4 font-Inter'>
                      12 months of access
                    </span>
                  </li>
                  <li className='flex items-center mb-2'>
                    <i className='mr-2 bi bi-check-circle-fill text-gray2'></i>
                    <span className='text-sm font-semibold text-gray4 font-Inter'>
                      Average savings of $345 annually
                    </span>
                  </li>

                  <li className='flex items-center mb-2'>
                    <i className='mr-2 bi bi-check-circle-fill text-gray2'></i>
                    <span className='text-sm font-semibold text-gray4 font-Inter'>
                      Reimbursement support
                    </span>
                  </li>

                  <li className='flex items-center mb-2'>
                    <i className='mr-2 bi bi-check-circle-fill text-gray2'></i>
                    <span className='text-sm font-semibold text-gray4 font-Inter'>
                      Exclusive beta access to new savings products
                    </span>
                  </li>
                </ul>

                <button className='block px-4 py-2 mt-8 mb-2 text-sm font-semibold rounded-lg text-lightGray font-Inter bg-gray6 max-h-max'>
                  Start Saving
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
