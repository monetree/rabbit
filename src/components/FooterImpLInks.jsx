import React from 'react';

const FooterImpLInks = () => {
  return (
    <section className='py-12 xl:py-16'>
      <div className='max-w-[1000px] mx-auto px-6 sm:px-10'>
        <div className='flex flex-col flex-wrap justify-center sm:flex-row sm:justify-end '>
          <ul className='pr-20'>
            <li className='mb-4 text-lg font-bold font-Inter'>Crates Health</li>

            <li className='mb-2'>
              <a
                className='text-gray3 hover:text-black transition-colors font-Inter font-semibold'
                href='#'
              >
                How it works
              </a>
            </li>
            <li className='mb-2'>
              <a
                className='text-gray3 hover:text-black transition-colors font-Inter font-semibold'
                href='#'
              >
                Benefits
              </a>
            </li>
            <li className='mb-2'>
              <a
                className='text-gray3 hover:text-black transition-colors font-Inter font-semibold'
                href='#'
              >
                FAQs
              </a>
            </li>
            <li className='mb-2'>
              <a
                className='text-gray3 hover:text-black transition-colors font-Inter font-semibold'
                href='#'
              >
                Pricing
              </a>
            </li>
            <li className='mb-2'>
              <a
                className='text-gray3 hover:text-black transition-colors font-Inter font-semibold'
                href='#'
              >
                Eligible Products
              </a>
            </li>
            <li className='mb-2'>
              <a
                className='text-gray3 hover:text-black transition-colors font-Inter font-semibold'
                href='#'
              >
                Log-in
              </a>
            </li>
          </ul>

          <ul className='mt-10 sm:pl-20 sm:mt-0'>
            <li className='mb-4 text-lg font-bold font-Inter'>Help</li>

            <li className='mb-2'>
              <a
                className='text-gray3 hover:text-black transition-colors font-Inter font-semibold'
                href='#'
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FooterImpLInks;
