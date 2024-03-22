import React from 'react';
import ImgBg from '../../assets/images/CTA.png';

const LowerMainBlock = () => {
    return (

        <div className="h-80 relative">
            <img src={ImgBg} alt="" className='w-full h-full bg-cover object-cover absolute z-0' />
            <div className='w-full px-main h-full bg-[#00000041] absolute z-10 flex justify-center items-center max-lg:px-10 max-sm:px-4' >
                <div className='text-center mt-1'>
                    <div className="text-white text-[40px] font-bold max-xl:text-[35px] max-md:text-[25px]">
                        Ready to save on your favorite <br />
                        wellness products? 
                    </div>
                    <div className="text-beige text-sm font-medium">Take our 1 minute health survey</div>

                    <div className="m-auto w-1/3 p-3 bg-beige rounded-full mt-6 max-sm:w-1/2">
                        <div className="text-center text-teal-950 text-sm font-medium">Start Saving</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LowerMainBlock;