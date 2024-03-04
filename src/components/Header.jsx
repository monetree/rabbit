import React, { useState } from 'react';
import Logo from '../assets/images/logo.png';

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className='fixed top-0 left-0 right-0 z-20 font-medium font-Inter'>
      <div className=' relative bg-white px-3 lg:px-4 top-navbar border-b-[1px] border-gray-300'>
        <div className=' mx-auto max-w-[1220px] py-2 px-5 '>
          <div className='grid grid-cols-12 md:py-1 lg:py-4'>
            <div className='col-span-12 lg:col-span-3 '>
              <div className='flex items-center justify-between'>
                <div className='logo-div'>
                  <a href='#'>
                    <img
                      src={Logo}
                      alt='Logo'
                      className='h-[45px] lg:h-[45px] lg:w-auto'
                    />
                  </a>
                </div>

                <div
                  onClick={() => setMenu(true)}
                  className='block menu-btn lg:hidden'
                >
                  <i className='bi bi-list text-[26px]'></i>
                </div>
              </div>
            </div>
            <div className='flex items-center col-span-9 '>
              <div className=' mb-5 lg:mb-0 transition-all duration-300  hidden lg:flex  fixed top-0 left-0 right-0 bottom-0 lg:relative h-[100vh] lg:h-auto w-full   bg-selfYellow lg:bg-white  justify-center items-center'>
                <div className='grid w-full grid-cols-9 '>
                  <div
                    onClick={() => setMenu(false)}
                    className='close-btn hidden ms-auto absolute top-[30px] right-[30px]'
                  >
                    <i className='bi bi-x-lg text-[20px] text-white'></i>
                  </div>
                  <div className='flex items-center justify-start col-span-9 lg:col-span-6 '>
                    <ul className='flex flex-col items-center justify-center text-start lg:flex-row lg:mt-2 '>
                      <li>
                        <div className='block mb-4 lg:hidden'>
                          <a href='#'>
                            <img
                              src={Logo}
                              alt=''
                              className='h-[65px] w-auto'
                            />
                          </a>
                        </div>
                      </li>
                      <li className='lg:ms-[20px]  xl:ms-[25px]  mb-3 lg:mb-0 w-fit  border-b-2 border-transparent  border-solid active-nav'>
                        <a
                          href='#how-it-works'
                          className='text-base font-medium text-white lg:hover:text-black lg:text-base xl:text-lg lg:text-gray3 '
                        >
                          How it works
                        </a>
                      </li>
                      <li className='lg:ms-[20px]  xl:ms-[25px]  mb-3 lg:mb-0 w-fit  border-b-2 border-transparent  border-solid'>
                        <a
                          href='#benefits'
                          className='text-base font-medium text-white lg:hover:text-black lg:text-base xl:text-lg lg:text-gray3 '
                        >
                          Benefits
                        </a>
                      </li>
                      <li className='lg:ms-[20px]  xl:ms-[25px]  mb-3 lg:mb-0 w-fit  border-b-2 border-transparent  border-solid'>
                        <a
                          href='#faqs'
                          className='text-base font-medium text-white lg:hover:text-black lg:text-base xl:text-lg lg:text-gray3 '
                        >
                          FAQs
                        </a>
                      </li>
                      <li
                        id='faq-item'
                        className='lg:ms-[20px]  xl:ms-[25px]  mb-3 lg:mb-0 w-fit  border-b-2 border-transparent  border-solid'
                      >
                        <a
                          href='#faqs'
                          className='text-base font-medium text-white lg:hover:text-black lg:text-base xl:text-lg lg:text-gray3 '
                        >
                          Eligible Products
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='flex flex-col items-center justify-end col-span-9 lg:col-span-3 lg:flex-row'>
                    <div className='lg:ms-[20px]  xl:ms-[25px]  mb-3 lg:mb-0 w-fit  lg:mt-2 border-b-2 border-transparent  border-solid'>
                      <a
                        href='#'
                        className='text-base font-medium text-white lg:hover:text-black lg:text-base xl:text-lg lg:text-gray3 '
                      >
                        Log in
                      </a>
                    </div>
                    <div className='lg:ms-[20px]  xl:ms-[25px]  mb-3 lg:mb-0 w-fit lg:mt-1  '>
                      <a
                        href='#'
                        className='sign-in text-[14px] lg:text-[14px] xl:text-base text-white font-medium lg:text-white border-2 hover:shadow-custom hover:border-2 border-black rounded-[30px]  px-4 py-2 border-solid bg-black lg:bg-black hover:bg-white lg:hover:text-black'
                      >
                        Start Saving
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`mb-5 lg:hidden  lg:mb-0 transition-all duration-300   fixed top-0 left-0 right-0 bottom-0 lg:relative h-[100vh] lg:h-auto w-full   bg-selfYellow lg:bg-white flex justify-center items-center ${
                menu ? 'scale-100' : 'scale-0'
              }`}
            >
              <div className='grid w-full grid-cols-9 '>
                <div
                  onClick={() => setMenu(false)}
                  className='lg:hidden block ms-auto absolute top-[30px] right-[30px]'
                >
                  <i className='bi bi-x-lg text-[20px] text-white'></i>
                </div>
                <div className='flex items-center justify-start col-span-9 lg:col-span-6 '>
                  <ul className='flex flex-col items-center justify-center text-start lg:flex-row lg:mt-2 '>
                    <li>
                      <div className='block mb-4 lg:hidden'>
                        <a href='#'>
                          <img src={Logo} alt='' className='h-[65px] w-auto' />
                        </a>
                      </div>
                    </li>
                    <li className='lg:ms-[20px]  xl:ms-[25px]  mb-3 lg:mb-0 w-fit  border-b-2 border-transparent  border-solid active-nav'>
                      <a
                        href='#how-it-works'
                        className='text-base font-medium text-white lg:hover:text-black lg:text-base xl:text-lg lg:text-gray3 '
                      >
                        How it works
                      </a>
                    </li>

                    <li className='lg:ms-[20px]  xl:ms-[25px]  mb-3 lg:mb-0 w-fit  border-b-2 border-transparent  border-solid'>
                      <a
                        href='#benefits'
                        className='text-base font-medium text-white lg:hover:text-black lg:text-base xl:text-lg lg:text-gray3 '
                      >
                        Benefits
                      </a>
                    </li>
                    <li
                      id='faq-item'
                      className='lg:ms-[20px]  xl:ms-[25px]  mb-3 lg:mb-0 w-fit  border-b-2 border-transparent  border-solid'
                    >
                      <a
                        href='#faqs'
                        className='text-base font-medium text-white lg:hover:text-black lg:text-base xl:text-lg lg:text-gray3 '
                      >
                        FAQs
                      </a>
                    </li>
                    <li
                      id='form-item'
                      className='lg:ms-[20px]  xl:ms-[25px]  mb-3 lg:mb-0 w-fit  border-b-2 border-transparent  border-solid'
                    >
                      <a
                        href='#form'
                        className='text-base font-medium text-white lg:hover:text-black lg:text-base xl:text-lg lg:text-gray3 '
                      >
                        Eligible Products
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='flex flex-col items-center justify-end col-span-9 lg:col-span-3 lg:flex-row'>
                  <div className='lg:ms-[20px]  xl:ms-[25px]  mb-3 lg:mb-0 w-fit  lg:mt-2 border-b-2 border-transparent  border-solid'>
                    <a
                      href='#'
                      className='text-base font-medium text-white lg:hover:text-black lg:text-base xl:text-lg lg:text-gray3 '
                    >
                      Log in
                    </a>
                  </div>
                  <div className='lg:ms-[20px]  xl:ms-[25px]  mb-3 lg:mb-0 w-fit lg:mt-1  '>
                    <a
                      href='https://nymfcu-dn.financial-net.com/web'
                      className='sign-in text-[14px] lg:text-[14px] xl:text-base text-white font-medium lg:text-white border-2 hover:shadow-custom hover:border-2 border-black rounded-[30px]  px-4 py-2 border-solid bg-black lg:bg-black hover:bg-white lg:hover:text-black'
                    >
                      Start Saving
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
