import React from 'react';
import Logo from '../../assets/images/Logo 1.png';
import IconEmail from '../../assets/images/email.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-darkGreen pt-11 px-16 max-lg:px-4 max-sm:px-4">
            <div className='flex align-top justify-between pb-8 max-md:block'>
                <div className='flex text-beige text-xl'>
                    <img src={Logo} className='h-7' alt="" />
                </div>

                <div className='flex max-md:block'>
                    <div className="text-beige">
                        <div className="text-lg max-md:pt-5 font-semibold leading-9 max-md:leading-6">Home</div>
                        <div className="text-sm">
                            <div className='leading-9 max-md:leading-6'>How it works</div>
                            <div className='leading-9 max-md:leading-6'>Benefits</div>
                            <div className='leading-9 max-md:leading-6'>FAQs</div>
                            <div className='leading-9 max-md:leading-6'>Eligible Products</div>
                        </div>
                    </div>

                    <div className="text-beige mx-24 max-md:mx-0">
                        <div className="text-lg max-md:pt-5 font-semibold">About us</div>
                        <div className="text-sm">
                            <div className='leading-9 cursor-pointer max-md:leading-6'>
                                <Link to={'/blog'}>Blog</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-beige">
                    <div className="text-lg max-md:pt-5 font-semibold">Contacts</div>
                    <div className="text-sm">
                        <div className='leading-9 max-md:leading-6 flex items-center'>
                            <img className='h-4' src={IconEmail} alt="" />
                            <div className='ml-2'>info@crateshealth.com</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-white border-opacity-50"></div>
            <div className="justify-center items-center flex p-5 pt-3">
                <div className="text-beige text-xxs">
                    © 2024 Actualise Co. All rights reserved.
                </div>
            </div>
        </div>
    );
}

export default Footer;
