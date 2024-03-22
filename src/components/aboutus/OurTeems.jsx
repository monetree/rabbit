import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import img1 from '../../assets/images/a-slider-1.png'
import img2 from '../../assets/images/a-slider-2.png'
import img3 from '../../assets/images/a-slider-3.png'
const SliderItem = ({img, possition, name}) => {
    return (
        <div className='w-[240px] h-[330px] rounded-xl rounded-t-3xl bg-white max-sm:w-11/12 max-sm:ml-[5%]'>
            <div 
                class='bg-cover bg-top uppercase text-xxs h-5/6 rounded-t-xl p-3'
                style={{
                    backgroundImage: `url('${img}')`,
                }}
            >
                <div className='py-1 px-2 bg-darkGreen text-beige w-2/5 text-center rounded-md'>
                    {possition}
                </div>
            </div>
            <div className='px-5'>
                <div className='text-xl text-darkGreen font-bold my-3 pb-1 border-b border-darkGreen'>
                {name}
                </div>
            </div>
        </div>
    );
}

const OurTeems = () => {
    var settings = {
        dots: false,
        speed: 300,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <section
            id='OurTeems'
            class='px-5 md:px-20  bg-cover bg-bottom pb-8 pt-12 bg-darkGreen'
        >
            <div class='max-w-[1400px] mx-auto'>
                <div class='text-center md:w-[75%] mx-auto'>
                    <p class='font-lato text-sm font-semibold leading-5 tracking-normal text-center text-beige uppercase '>
                        who are we
                    </p>

                    <h1 class='font-epilogue text-2xl lg:text-3xl font-semibold leading-13 tracking-normal text-center capitalize mt-4 text-white'>
                        Meet Our Team
                    </h1>
                </div>
                <Slider {...settings} className='mt-6 hsa-slider'>
                    <SliderItem img={img1} possition={'hsa manager'} name={'Henry wall'} />
                    <SliderItem img={img2} possition={'hsa manager'} name={'Henry wall'} />
                    <SliderItem img={img3} possition={'hsa manager'} name={'Henry wall'} />
                    <SliderItem img={img2} possition={'hsa manager'} name={'Henry wall'} />
                    <SliderItem img={img3} possition={'hsa manager'} name={'Henry wall'} />
                </Slider>
            </div>
        </section>
    );
};

export default OurTeems;
