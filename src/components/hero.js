import React from 'react'
import HeroImg from '../HeaderImg.png'
import Custombutton from './button'

function Hero() {
  return (
    <div className='w-full h-screen flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center sm:order-last 2xl:w-[50rem]  xl:w-[41rem] lg:w-[35rem] h-auto '>
            <img src={HeroImg} alt=""  className='w-full  '/>
        </div>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8 '>
        <p className='py-3 text-4xl md:text-5xl text-stone-800'><span className='font-bold text-6xl '>ICT</span> কি? কেন? কিভাবে?</p>
        <h1 className='text-4xl font-sen py-8 text-stone-600'>Learn ICT with <span className='font-bold hover:text-[#68b984] '>Najmul H. Noyon</span></h1>
        <Custombutton type='submit' px5>
            Get Started
        </Custombutton>
        </div>
       
        </div>
    </div>
  )
} 

export default Hero