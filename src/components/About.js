import React from 'react'
import Slide from './carousel'
import AboutPng from './about.png'
const About = () => {
  return (
    <div className='bg-[#fff] w-full py-8'>
        <h1 className='text-center text-5xl font-bold py-4'>জনপ্রিয় কোর্সসমূহ</h1>
        <Slide/>
        <div style={ { backgroundImage: `url(${AboutPng})` } } className='h-[71px] sm:h-[100px] md:h-[118px] mt-[-10px] xl:h-[300px] lg:h-[260px] md:w-auto bg-cover md:mt-[-100px]'>
            
            </div>
    </div>
  )
}

export default About
