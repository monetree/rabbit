import React, { useState } from 'react';
import Logo from '../../assets/images/Logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div class='fixed top-0 left-0 right-0 z-40'>
      <div
        div
        class=' relative bg-white px-3 lg:px-4 top-navbar border-b  border-selfGray/30'
      >
        <div class='container mx-auto my-auto '>
          <div class='grid grid-cols-12 h-16 lg:h-20'>
            <div class='col-span-12 lg:col-span-3 '>
              <div class='flex justify-between items-center h-full mt-1'>
                <div class='logo-div'>
                  <a>
                  <Link to={'/'}><img src={Logo} alt='' class='h-6' /></Link>
                  </a>
                </div>

                <div
                  onClick={() => setMenu(true)}
                  class='menu-btn block lg:hidden'
                >
                  <i class='bi bi-list text-[26px]'></i>
                </div>
              </div>
            </div>
            <div class='col-span-9 flex items-center '>
              <div
                class={`
              manu-div mb-5 lg:mb-0 transition-all duration-300  ${
                menu ? 'scale-100' : 'scale-0'
              }  lg:scale-[1]  fixed top-0 left-0 right-0 bottom-0 lg:relative h-[100vh] lg:h-auto w-full   bg-darkGreen lg:bg-white flex justify-center items-center
              `}
              >
                <div class='grid grid-cols-9 w-full '>
                  <div
                    onClick={() => setMenu(false)}
                    class='close-btn block lg:hidden ms-auto absolute top-[30px] right-[30px]'
                  >
                    <i class='bi bi-x-lg text-[20px] text-white'></i>
                  </div>
                  <div class='col-span-9 lg:col-span-6 flex items-center justify-center '>
                    <ul class='flex items-center justify-center  text-start flex-col lg:flex-row lg:mt-2  '>
                      <li>
                        <div class='block lg:hidden mb-4'>
                          <a>
                            <Link to={'/'}><img src={Logo} alt='' class='h-[27px] w-auto' /></Link>
                          </a>
                        </div>
                      </li>
                      <li class='lg:ms-[20px]  xl:ms-[25px]  mb-3 lg:mb-0 w-fit  border-b-2 border-transparent hover:border-coffee border-solid'>
                        <a
                          class='cursor-pointer lg:hover:text-coffee text-base font-medium leading-normal tracking-normal text-center text-white lg:text-darkGreen '
                        >
                        <Link to={'/'}>Home</Link>
                        </a>
                      </li>
                      <li class='lg:ms-[20px]  xl:ms-[25px]  mb-3 lg:mb-0 w-fit  border-b-2 border-transparent hover:border-coffee border-solid'>
                        <a
                          class='cursor-pointer lg:hover:text-coffee text-base font-medium leading-normal tracking-normal text-center text-white lg:text-darkGreen '
                        >
                          How It Works
                        </a>
                      </li>
                      <li class='lg:ms-[20px]  xl:ms-[25px]  mb-3 lg:mb-0 w-fit  border-b-2 border-transparent hover:border-coffee border-solid'>
                        <a
                          class='cursor-pointer lg:hover:text-coffee text-base font-medium leading-normal tracking-normal text-center text-white lg:text-darkGreen '
                        >
                          Benefits
                        </a>
                      </li>
                      <li
                        id='faq-item'
                        class='lg:ms-[20px]  xl:ms-[25px]  mb-3 lg:mb-0 w-fit  border-b-2 border-transparent hover:border-coffee border-solid'
                      >
                        <a
                          class='cursor-pointer lg:hover:text-coffee text-base font-medium leading-normal tracking-normal text-center text-white lg:text-darkGreen '
                        >
                          FAQs
                        </a>
                      </li>
                      <li
                        id='form-item'
                        class='lg:ms-[20px]  xl:ms-[25px]  mb-3 lg:mb-0 w-fit  border-b-2 border-transparent hover:border-coffee border-solid'
                      >
                        <a
                          class='cursor-pointer lg:hover:text-coffee text-base font-medium leading-normal tracking-normal text-center text-white lg:text-darkGreen '
                        >
                          Eligible Products
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class=' col-span-9 lg:col-span-3 flex flex-col lg:flex-row items-center justify-end '>
                    <div
                      class='text-darkGreen rounded-full border-2 border-darkGreen mr-3 text-center py-[5px] w-[130px] hover:bg-darkGreen hover:text-white max-lg:bg-darkGreen max-lg:text-white max-lg:border-white max-lg:mr-0'
                    >
                      <a href='#' class='leading-5 text-sm font-medium'>
                        Log In
                      </a>
                    </div>
                    <div
                      class=' text-darkGreen font-medium lg:text-white border-2 mb-4 lg:mb-0
                     hover:shadow-custom hover:border-2 border-darkGreen rounded-[30px] cursor-pointer
                      text-center border-solid bg-white lg:bg-darkGreen hover:bg-white lg:hover:text-darkGreen w-32 h-10 flex align-middle justify-center items-center'
                    >
                      <a href='#' class='leading-5 text-sm font-medium'>
                        Start saving
                      </a>
                    </div>
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
