import React from 'react';
import Card from '../blog/Card';
import blog2 from '../../assets/images/blog2.png'
import blog3 from '../../assets/images/blog3.png'

const RecommendedArticles = () => {
    return (
        <div className='px-4 w-4/5 mb-14 mt-0 lg:px-16 max-lg:w-full'>
            <div className='my-4 font-bold text-xl text-darkGreen'>
                Recommended Articles
            </div>
            <div className='flex space-x-3 max-md:block max-md:space-x-0 max-md:space-y-4'>
                <div className='space-y-4  w-1/3 max-md:w-full'>
                    <Card author={'Stephanie Faris'} name={'Top Sale Products In 2023'} time={'December 20, 2023'} img={blog2} />
                    <Card author={'Stephanie Faris'} name={'Top Sale Products In 2023'} time={'December 20, 2023'} img={blog3} />
                </div>
                <div className='space-y-4  w-1/3 max-md:w-full'>
                    <Card author={'Stephanie Faris'} name={'Top Sale Products In 2023'} time={'December 20, 2023'} img={blog2} />
                    <Card author={'Stephanie Faris'} name={'Top Sale Products In 2023'} time={'December 20, 2023'} img={blog3} />
                </div>
                <div className='space-y-4  w-1/3 max-md:w-full'>
                    <Card author={'Stephanie Faris'} name={'Top Sale Products In 2023'} time={'December 20, 2023'} img={blog2} />
                    <Card author={'Stephanie Faris'} name={'Top Sale Products In 2023'} time={'December 20, 2023'} img={blog3} />
                </div>
            </div>
        </div>
    );
}

export default RecommendedArticles;