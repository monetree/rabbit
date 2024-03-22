import React from 'react';
import human from '../../assets/images/human2.svg'
import article1 from '../../assets/images/article1.jfif'

const MainBlock = () => {
    return (
        <div className="h-80 relative mt-[80px] max-lg:mt-[64px]">
            <img src={article1} alt="" className='w-full h-full bg-cover object-cover absolute z-0' />
            <div className='w-full px-main h-full bg-[#00000059] absolute z-10 flex justify-center items-center max-lg:px-10 max-sm:px-4' >
                <div className='text-center mt-1 space-y-3'>
                    <div className='flex justify-center text-sm text-beige'>
                        <div>
                            <img src={human} className='h-4' alt="" />
                        </div>
                        <div className='pl-2'>
                            Stephanie Faris
                        </div>
                    </div>
                    <div className="text-white text-[40px] mx-auto w-3/5 font-bold max-xl:text-[35px] max-md:text-[25px]  max-md:w-4/5">
                    Our members save an average of $325 annually from our partner brands 
                    </div>
                    <div className="text-beige w-3/5 m-auto text-sm font-medium max-md:w-4/5">
                    We partner with the world’s leading wellness brands and make it remarkably easy to use your HSA or FSA dollars on the products that make you the best version of yourself
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainBlock;