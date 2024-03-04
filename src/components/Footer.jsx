import React from 'react';

const Footer = () => {
  return (
    <footer className='px-5'>
      <div className='container flex-wrap sm:flex-nowrap  flex justify-center sm:justify-between pt-8 pb-8 mx-auto border-t-lightGray3 border-t border-dashed'>
        <p className='text-lightGray4 font-medium'>© 2024 – Crates Health</p>
        <ul className='flex mt-6 gap-x-5 sm:mt-0'>
          <li>
            <a
              className='text-gray3 hover:text-black transition-colors '
              href='#'
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              className='text-gray3 hover:text-black transition-colors '
              href='#'
            >
              Cookies
            </a>
          </li>
          <li>
            <a
              className='text-gray3 hover:text-black transition-colors '
              href='#'
            >
              Terms & Conditions
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
